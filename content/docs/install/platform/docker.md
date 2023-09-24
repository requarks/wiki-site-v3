# Docker

::danger{title='ALPHA RELEASE'}
During the alpha release period, docker images are tagged as `3.0.0-alpha` and `3.0.0-alpha.X` where `X` is the build number and are only available on the `ghcr.io` registry.
::

## Using the Docker Image

A Wiki.js docker image is available on the following registries:

- **Github Packages**: `ghcr.io/requarks/wiki`
- **Docker Hub**: `requarks/wiki`

### Tags

Images are tagged to `major`, `major.minor` and `major.minor.patch` versions.

It's recommended to use the major version, unless you have a specific requirement to pin your deployment to specific version.

```sh
# recommended
ghcr.io/requarks/wiki:3

# using a specific version:
ghcr.io/requarks/wiki:3.0
ghcr.io/requarks/wiki:3.0.1
```

::warning{title='Warning'}
While the `latest` tag is available, it's **NOT RECOMMENDED** to use it as it can break your deployment if the next major version has breaking changes.
::

All images are always built these architectures:

- `linux/amd64` *(Intel / AMD cpus)*
- `linux/arm64` *(Apple silicon, recent Raspberry Pi, etc.)*

### Environment Variables

✅ = Required  
✴️ = Recommended

| Env | Description | Required | Default |
|---|---|:-:|---|
| `ADMIN_EMAIL` | Email address to use to create the root administrator account. *Has no effect if the root administrator account is already created.* | ✴️ | `admin@example.com` |
| `ADMIN_PASS` | Initial password to use to create the root administrator account. *Has no effect if the root administrator account is already created.* | ✴️ | `12345678` |
| `CONFIG_FILE` | Path to the config file | | `./config.yml` |
| `DATABASE_URL` | Database Connection String *(overrides all DB_ prefixed env vars if set)* | | |
| `DB_HOST` | Database Hostname / IP Address | ✅ | |
| `DB_NAME` | Database Name | ✅ | |
| `DB_PASS` | Database Password | ✅ | |
| `DB_PASS_FILE` | Path to the mapped file containing the database password. *(overrides DB_PASS if set)* | | |
| `DB_PORT` | Database Port | | `5432` |
| `DB_SCHEMA` | Database Schema | | `wiki` |
| `DB_SSL` | Whether to use SSL to connect to the database<br>Accepted values: `0, 1, true, false` | | `false` |
| `DB_SSL_CA` | Database CA certificate content, as a single line string (without spaces or new lines), without the prefix and suffix lines. | | |
| `DB_USER` | Database Username | ✅ | |
| `HTTPS_ENABLE` | Whether to enable the HTTPS server<br>Accepted values: `0, 1, true, false` | | `false`
| `HTTPS_LE_DOMAIN` | Let's Encrypt - Initial domain to provision. | | |
| `HTTPS_LE_EMAIL` | Let's Encrypt - Email address to use when provisioning certificates. | | |
| `HTTPS_PORT` | HTTPS Port to listen on | | `3443` |
| `HTTPS_PROVIDER` | Provider to use to provision the SSL certificate. | | `letsencrypt` |
| `LOG_FORMAT` | Logging format<br>Accepted values: `default, json` | | `default` |
| `LOG_LEVEL` | Severity level for logging<br>Accepted values: `debug, info, warn, error` | | `info` |
| `PORT` | HTTP Port to listen on | | `3000` |

### Example

Assuming you have a PostgreSQL container named `db` on the same network:

```sh
docker run -d -p 8080:3000 --name wiki --restart unless-stopped -e "ADMIN_EMAIL=user@example.com" -e "ADMIN_PASS=SuperSecret123" -e "DB_HOST=db" -e "DB_USER=wikijs" -e "DB_PASS=wikijsrocks" -e "DB_NAME=wiki" ghcr.io/requarks/wiki:3
```

### User Mode

By default, the Wiki.js docker image runs as the user `wiki`. Some deployments require the container to run as root. Simply add the `-u root` parameter when creating the container to do so.

This is however not a secure way to run containers. Make sure you understand the security implications before doing so.

## Using Docker Compose

Here's a full example of a Docker Compose file for Wiki.js, using PostgreSQL, listening on port 80:

```yaml
version: "3"
services:

  db:
    image: postgres:16
    environment:
      POSTGRES_DB: wiki
      POSTGRES_PASSWORD: wikijsrocks
      POSTGRES_USER: wikijs
    logging:
      driver: "none"
    restart: unless-stopped
    volumes:
      - db-data:/var/lib/postgresql/data

  wiki:
    image: ghcr.io/requarks/wiki:3
    depends_on:
      - db
    environment:
      ADMIN_EMAIL: user@example.com
      ADMIN_PASS: SuperSecret123
      DB_HOST: db
      DB_USER: wikijs
      DB_PASS: wikijsrocks
      DB_NAME: wiki
    restart: unless-stopped
    ports:
      - "80:3000"

volumes:
  db-data:
```

`DB_HOST` should match the service name (in this case, `db`). If `container_name` is specified for the service, its value should be used instead.

See the [reference above](#environment-variables) for all available environment variables.