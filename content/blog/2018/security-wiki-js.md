---
title: The Security of Wiki.js 2.0
description: Security is probably the biggest challenge of any system. It has to be secure, convenient for users yet easy to use for other developers.  Let’s take a look at the security architecture of Wiki.js 2.0…
date: 2018-10-12
tags:
  - security
  - v2
---

Security is probably the biggest challenge of any system. It has to be secure, convenient for users yet easy to use for other developers. Let's take a look at the security architecture of Wiki.js 2.0.

## Issues in 1.x

In Wiki.js 1.x, a standard session cookie is used to authentify users. On every request, the session cookie is checked against MongoDB. The matching user is fetched along with the page access rules. The user also has one of 3 possible roles: admin, user and guest.

This system introduces a number of problems. The fact that one or more database queries must be made on every request slows down the response time. The 3 roles system also severily limits how resources are protected. It's either all or nothing. Additionally, because page rules are applied per user, it's very time consuming to assign specific permissions to multiple people. Finally, because sessions are cookie based, it limits how other systems (such as APIs) can interact with the application.

## Introducing JWT

A new solution had to be selected for 2.0 to avoid all these issues. This solution is JWT (JSON Web Token), a great open standard made by Auth0.

Unlike most solutions which provide a random token to the user, which is then used as a reference key against a database of active sessions, JWT includes all necessary info inside the token itself. In fact, the token can be read by anyone in possession of this very token. When the user sends the JWT along the request, the system simply decodes it and uses the info found inside directly. No database to query or other time consuming process to execute.

So can't someone just alter the token with the user info he wants and hack the system? **No, that's the beauty of JWT**

While the content is readable by anybody, it is also signed with a secret key. This means that if the content changes, even by a single byte, the signature will no longer match and the token will be rejected by the system.

You can learn more about JWT [here](https://jwt.io/introduction/).

## Token Contents

Since all necessary info is stored in the token, there's no need to query the database to fetch the user data on every request. However, that doesn't mean the token contains everything about the user. In fact, it shouldn't! For example, the user password is not part of the token. Since the token is signed by the system, we know whether it's valid or not. We don't need to check the user login ever again.

The token contains only the bare minimum data about the user, so that the majority of requests can be executed without having to query the database every single time. This includes data like the user ID, email, name, timezone, locale and permissions. Yes, permissions are stored in the token. So the system can validate whether the user can query a specific resource by looking at the token he provided. It can be a bit puzzling the first time, but remember, the token is signed. We know the information is the token can be trusted 100% because of this signature.

## Permissions

In order to address the limited role-based system of 1.x, the new 2.0 will use a permission-based system. Combined with GraphQL, this allows us to restrict access to resources in a very granular way. For the exact same resource, we can restrict access of specific properties to a specific permission. Let's query the list of authentication strategies for example:

```
query {
  authentication {
    strategies {
      title
      icon
      color
    }
  }
}
```
In the above query, we request the *title*, *icon* and *color* fields. These fields are public and don't require any special permission. The query will be executed without any issues, even with no token.

However, let's add an additional field `config`:

```
query {
  authentication {
    strategies {
      title
      icon
      color
      config {
        key
        value
      }
    }
  }
}
```
Sending this query with no token or with a standard user token would fail, because the `config` field requires a specific permission to be present in the token. The permission required is specified as part of the GraphQL schema:
```
config: [KeyValuePair] @auth(requires: ["manage:system"])
```
The query will only succeed if the token contains the permission `manage:system`. As you can see, this allows for granular restrictions, even within the same query. It all depends on specific fields and their required permissions. You'll be able to generate API keys that have access to only a subset of resources very easily.

## Handling expiration and revocation

This brings us to expiration and revocation issues. If a token is always good if the signature is valid, how do we revoke a user access? What if a token used by an API has been compromised and must be revoked? The token signature is valid so it could technically still be used, right? **Not exactly.**

All tokens contain an expiration date. By default, Wiki.js issues tokens valid for 30 minutes. Again, we can trust the expiration date specified in the token if the signature matches. That being said, we don't want the user to re-login every 30 minutes. Therefore, if the token is **expired but still has a valid signature**, the system will query the database and generate a new token, valid for another 30 mins. It's at this moment that access can be revoked. If the user has been blocked, a new token will not be issued and the user will be logged out. So even though his token is still valid, because of the short expiration check, it will not be renewed.

In summary, a user can use a token within 30 minutes without any check. However, once the 30 minutes have passed, the token will need to be renewed to keep using the system. A token can be renewed within 14 days. This means you can use Wiki.js on Monday, return back on Friday and still be logged in. Your old token will have been used to generate a brand new token, valid for 30 minutes and renewable for 14 days.

## APIs and non-cookie requests

While the user JWT is stored in a cookie, the system doesn't mandate all requests to use the cookies header to send the token, as it was the case with Wiki.js 1.x. The token can now be sent directly in the *Authentication* header, which is the standard way to authenticate requests from APIs.

Also, because the expiration of the token is decided by the system and is part of the token itself, we can issue tokens with much longer expiration date for use in APIs. This means you'll be able to issue tokens valid for a year in order to interact with your Wiki.js installation APIs by your other systems. Because we need to be able to revoke these tokens as well, each API key will have its own signature key. We can therefore immediately revoke a key by removing its corresponding signature key. The token will no longer be valid because of this change, preventing the API from making further requests.

## Conclusion

By switching to JWT, we improve system speed considerably while also making it more secure.