# Users, Groups & Permissions

While a good wiki is one where anyone can contribute new content, it's always a good idea to restrict certain sections and specific actions to a list of selected users.

Wiki.js has a powerful permission system with fine grained control over what your users can see and do.

## Concepts

The permission system of Wiki.js is based on 4 concepts: **Users**, **Groups**, **Rules** and **Permissions**.

A **user** can be part of **one or more** groups.

A **group** defines what the user can see and can do. This is achieved using [**Rules**](#rules) and [**Permissions**](#permissions). 

[**Rules**](#rules) apply to content (e.g. read / write a page, upload assets, write comments, etc.) while [**Permissions**](#permissions) are for administrative tasks (e.g. create users, change site settings, etc.)

## Group Properties

TODO

## Rules

A rule consists of a set of actions a user can perform on a specific set of pages. Rules can restrict access to certain paths, on specific sites and locales.

TODO

## Permissions

A permission allows a user to perform a specific set of actions related to the administration of the wiki. Contrary to **Rules** which govern content, **Permissions** are strictly for management rights.

| Permission      | Description                                                     | Notes                                                          |
|-----------------|-----------------------------------------------------------------|----------------------------------------------------------------|
| `write:users`   | Can create or authorize new users, but not modify existing ones | Cannot assign to **Administrators** group.                     |
| `manage:users`  | Can edit existing users.                                        | Cannot modify users from **Administrators** group.             |
| `write:groups`  | Can create and edit new groups and assign **Rules**.            | Cannot set **Permissions**.                                    |
| `manage:groups` | Same as `write:groups` but can set **Permissions**.             | Cannot set the `manage:system` permission.                     |
| `manage:theme`  | Can modify theme settings.                                      |                                                                |
| `manage:system` | Can manage and access everything.                               |                                                                |
| `manage:api`    | Can generate and revoke API keys.                               | Cannot generate keys with the **Administrators** group rights. |

## Users

Users are managed via the **Administration Area**, under the **Users** section.

### Create New User

TODO

### Edit User

TODO

### Delete User

TODO
