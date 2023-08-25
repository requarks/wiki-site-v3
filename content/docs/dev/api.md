# API

Wiki.js exposes a [GraphQL](https://graphql.org/) API from which you can access and modify all the resources of your wiki. If you are new to GraphQL, the site [How to GraphQL](https://www.howtographql.com/) is a great learning resource.

::tip{title='GraphQL Endpoint'}
The GraphQL endpoint is located at path `/graphql` on your wiki.js site.
::

You can also access this endpoint from your browser to load the **GraphQL Playground** tool which lets you build and test queries, as well as explore all the possible resources you can access. The docs for all available queries and mutations are accessible on the right side of the screen.

There're various [client libraries](https://github.com/chentsulin/awesome-graphql#libraries) available for most programming languages to easily make GraphQL queries. Desktop API clients like **Postman**, **Insomnia** and **Firecamp** all support GraphQL queries.

## Authentication

Access to resources requires a **valid API token**, which can be generated from the **Administration Area** (under **API Access**).

The token must be passed in the `Authorization` header, as a `Bearer` token, of any request made to the GraphQL endpoint, e.g.:
```yaml
Authorization: Bearer eyJhbGc...aXczt18H6437W
```

Different **permission scopes** are required based on the resource you wish to query / mutate. Ensure the API token you created contains these permission scopes.

## Examples

The following examples expect a valid bearer token to be provided in the `Authorization` header, as explained in the [Authentication](#authentication) section above.

For GraphQL Playground, you would use the following format in the **HTTP Headers** panel:
```json
{ "Authorization": "Bearer eyJhbGc...aXczt18H6437W" }
```

::info
Note that for simplicity, the examples below have hardcoded values. In a real-world application, it is best practice to use [variables](https://graphql.org/learn/queries/#variables) instead.
::

### Fetch all pages

Query to fetch a list of all pages, ordered by title, returning only the `id`, `path` and `title` properties.

```graphql
{
  pages (orderBy: TITLE) {
    id
    path
    title
  }
}
```

### Fetch a specific page

Query to fetch a single page, with ID `dc0d23e6-3309-42a7-9742-6317e9a4ba7f`, returning only the `path`, `title`, `createdAt` and `updatedAt` properties.

```graphql
{
  pageById (id: "dc0d23e6-3309-42a7-9742-6317e9a4ba7f") {
    path
    title
    createdAt
    updatedAt
  }
}
```


### Fetch all groups

Query to fetch all user groups, returning only the `id` and `name` properties.

```graphql
{
  groups {
    id
    name
  }
}
```

### Search users

Query to list all users matching `john` in their name or email address, returning only the `id`, `name` and `email` properties.

```graphql
{
  users (query: "john") {
    id
    name
    email
  }
}
```

### Create New User

Mutation to create a new local user, assign it to group ID `dc0d23e6-3309-42a7-9742-6317e9a4ba7f` and return the generated user `id`. The property `succeeded` will be `true` in the response if the operation succeeded. Otherwise, the `message` property will contain the error message that prevented the user creation.

```graphql
mutation {
  createUser (
    email: "john.doe@example.com"
    name: "John Doe"
    passwordRaw: "Password123"
    providerKey: "local"
    groups: [
      "dc0d23e6-3309-42a7-9742-6317e9a4ba7f"
    ]
    mustChangePassword: true
    sendWelcomeEmail: false
  ) {
    operation {
      succeeded
      message
    }
    user {
      id
    }
  }
}
```
