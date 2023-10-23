# API

Wiki.js exposes a [GraphQL](https://graphql.org/) API from which you can access and modify all the resources of your wiki. If you are new to GraphQL, the site [How to GraphQL](https://www.howtographql.com/) is a great learning resource.

::tip{title='GraphQL Endpoint'}
The GraphQL endpoint is located at path `/_graphql` on your wiki.js site.
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

## Errors Reference

Mutations always return an `operation` object reponse. This object contains both a `succeeded` boolean flag and a `message` string. In most cases, the message will be one of the keys listed below. This allows for easy translation when shown to the user on the client side.

### General

| Key | Description |
|-----|-------------|
| `ERR_FORBIDDEN` | Request is authenticated but doesn't have the necessary permissions. |
| `ERR_INVALID_INPUT` | The provided input is invalid. |
| `ERR_INVALID_PATH` | An invalid path was provided. |
| `ERR_INVALID_SITE` | An invalid site ID was provided. |
| `ERR_INVALID_USER` | An invalid user ID was provided. |
| `ERR_NOT_AUTHENTICATED` | Request was made as a guest or is missing an authorization token. |

### Authentication

| Key | Description |
|-----|-------------|
| `ERR_DUPLICATE_ACCOUNT_EMAIL` | An account already exists with the same email. |
| `ERR_EMAIL_ADDRESS_NOT_ALLOWED` | The provided email address is invalid. |
| `ERR_EXPIRED_TOKEN` | The provided token is valid but has expired. |
| `ERR_EXPIRED_VALIDATION_TOKEN` | The provided validation token is valid but has expired. |
| `ERR_INACTIVE_USER` | User is inactive / disabled. |
| `ERR_INCORRECT_CURRENT_PASSWORD` | Current password mismatch. |
| `ERR_INVALID_STRATEGY` | The provided strategy ID is invalid. |
| `ERR_INVALID_TOKEN` | The provided token is invalid. |
| `ERR_INVALID_VALIDATION_TOKEN` | The provided validation token is invalid. |
| `ERR_LOGIN_FAILED` | Generic login failure. *For security reasons, the actual error is not returned via the API or shown to the client. Look at the server logs for the actual reason.* |
| `ERR_LOGIN_RESTRICTED` | User is not allowed to login with this strategy. |
| `ERR_MISSING_TOKEN` | Current token was not provided for a token refresh. |
| `ERR_PASSKEY_NOT_SETUP` | Attempted to finalize / deactivate a passkey on an account with no prior passkey setup. |
| `ERR_PASSWORD_TOO_SHORT` | The provided password is too short. |
| `ERR_PK_ALREADY_REGISTERED` | A passkey with this authenticator has already registered. |
| `ERR_PK_HOSTNAME_MISSING` | Cannot setup / authenticate a passkey on a site with a wildcard `*` hostname. You need to set a valid hostname for the site in the Administration Area. |
| `ERR_PK_NAME_MISSING_OR_INVALID` | Passkey name is missing or is invalid. |
| `ERR_PK_USER_CANCELLED` | Passkey registration aborted by the user. |
| `ERR_PK_VERIFICATION_FAILED` | Passkey verification failed while attempting to register a new passkey. |
| `ERR_REGISTRATION_DISABLED` | User registration is disabled. |
| `ERR_TFA_ALREADY_ACTIVE` | Attempted to setup TFA on an account with already active TFA. |
| `ERR_TFA_INCORRECT_TOKEN` | The provided TFA token is invalid. |
| `ERR_TFA_INVALID_REQUEST` | The provided TFA token format is wrong or no continuation token provided. |
| `ERR_TFA_NOT_ACTIVE` | Attempted to deactivate TFA on an account with no active TFA. |
| `ERR_USER_NOT_VERIFIED` | User has not verified his account. |

### Files / Folders

| Key | Description |
|-----|-------------|
| `ERR_FOLDER_DUPLICATE` | A folder already exists at this path. |
| `ERR_FOLDER_PARENT_INVALID` | The provided parent folder is invalid. |
| `ERR_FOLDER_TITLE_INVALID`| The provided folder title is invalid. |
| `ERR_INVALID_FOLDER` | The provided folder ID doesn't exist. |

### Pages

| Key | Description |
|-----|-------------|
| `ERR_PAGE_ALIAS_MISSING` | No alias was provided when requesting a page from an alias. |
| `ERR_PAGE_ALIAS_NOT_FOUND` | The alias does not exist for this site. |
| `ERR_PAGE_ALIAS_TOO_LONG` | The page alias is too long. |
| `ERR_PAGE_DUPLICATE_ALIAS` | This alias already exists. |
| `ERR_PAGE_DUPLICATE_PATH` | A page at this path already exists. |
| `ERR_PAGE_INVALID_ALIAS` | The provided alias is invalid (e.g. invalid characters). |
| `ERR_PAGE_INVALID_TOC_DEPTH` | The provided Table of Contents min/max depth is invalid. |
| `ERR_PAGE_MISSING_SCHEDULED_DATES` | The publish state was set to Scheduled but no start / end date specified. |
| `ERR_PAGE_NOT_FOUND` | The requested page doesn't exist. |
| `ERR_PAGE_RELATION_ICON_INVALID` | A page icon identified is invalid. |
| `ERR_PAGE_RELATION_LABEL_MISSING` | A page relation label is missing. |
| `ERR_PAGE_RELATION_LABEL_TOOLONG` | A page relation label is too long. |
| `ERR_PAGE_RELATION_TARGET_INVALID` | A page relation target is invalid or too long. |
| `ERR_PAGE_TITLE_MISSING` | A page title is missing. |
| `ERR_PAGE_UPDATE_FORBIDDEN` | You are not authorized to update this page. |
