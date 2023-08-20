::: danger UNRELEASED version
This site is for the unreleased, alpha 3.x version of Wiki.js. For the current and stable release of Wiki.js 2.x, read the documentation on https://docs.requarks.io instead.
:::

# Config Reference

A `config.yml` file *(in YAML format)* located in the installation folder is required to run Wiki.js. The reference tables below list all possible parameters.

::: tip New in 3.0
Note that some configuration settings that were in the config.yml file in previous versions of Wiki.js (such as SSL Certificates) are now managed through the Administration Area.
:::

## Database

| Key                                | Description                                                          | Required | Default     |
|------------------------------------|----------------------------------------------------------------------|:--------:|-------------|
| `db.host`                          | Database hostname / IP address                                       |    ✅    |             |
| `db.user`                          | Database user                                                        |    ✅    |             |
| `db.pass`                          | Database password                                                    |    ✅    |             |
| `db.port`                          | Database port                                                        |          | `5432`      |
| `db.schemas.wiki`                  | Database schema for Wiki.js.                                         |          | `wiki`      |
| `db.schemas.scheduler`             | Database schema for the scheduler.                                   |          | `scheduler` |
| `db.ssl`                           | Use database SSL connection.                                         |          | `false`     |
| `db.sslOptions.auto`               | Use the default database SSL options.                                |          | `true`      |
| `db.sslOptions.rejectUnauthorized` | Whether to reject self-generated SSL certificates.                   |          | `true`      |
| `db.sslOptions.ca`                 | Path to the CA certificate(s).                                       |          |             |
| `db.sslOptions.cert`               | Path to the certificate.                                             |          |             |
| `db.sslOptions.key`                | Path to the private key (PEM).                                       |          |             |
| `db.sslOptions.pfx`                | Path to the PFX or PKCS12 encoded private key and certificate chain. |          |             |
| `db.sslOptions.passphrase`         | Passphrase for the private key or the PFX file.                      |          | `false`     |
| `db.pool.min` | Minimum resource pool size | | |
| `db.pool.max` | Maximum resource pool size | | |

## HTTP Server

| Key                                | Description                                                          | Required | Default     |
|------------------------------------|----------------------------------------------------------------------|:--------:|-------------|
| `port`                             | Port to listen to (HTTP Server)                                      |    ✅    |             |
| `ssl.enabled`                      | Enable the HTTPS server | | `false` |
| `ssl.port`                         | Port to listen to (HTTPS Server) | | `3443` |
| `bindIP` | Host the HTTP/S Server should listen to. Note that it applies to all sites. | | `0.0.0.0` |

## Logging

| Key                                | Description                                                          | Required | Default     |
|------------------------------------|----------------------------------------------------------------------|:--------:|-------------|
| `logLevel` | Logging verbosity level (`error`, `warn`, `info`, `verbose`, `debug`) | | `info` |
| `logFormat` | Format of the log output (`default`, `json`) | | `default` |

## Misc

| Key                                | Description                                                          | Required | Default     |
|------------------------------------|----------------------------------------------------------------------|:--------:|-------------|
| `offline` | Whether to run Wiki.js in a no-internet mode. | | `false` |
| `dataPath` | Path to a writable folder used for caching and temporary uploads. | | `./data` |