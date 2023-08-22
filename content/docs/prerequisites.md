# Prerequisites

## Server Requirements

Wiki.js runs on virtually any system where Node.js is supported.
This means it runs on **Linux**, **macOS**, **Windows** as well as container solutions such as **Docker / Kubernetes** and **Heroku**.

### CPU
Wiki.js runs perfectly fine on a single CPU core. However, **2 cores or more are recommended** to fully make use of the background workers.

### RAM
Linux systems should have **at least 1GB of RAM** to run Wiki.js. Windows and macOS systems usually require a bit more RAM.

While the process itself usually sits at around 70MB of RAM, some events *(such as page rendering, indexing, etc.)* result in short bursts in RAM usage.

### Storage
Storage requirements are based on the content you will enter. Wikis that consists almost exclusively of text are not likely to exceed a few megabytes. However, as soon as you upload images, videos or other files, you should plan your storage requirements accordingly.

::: tip
At least 1 GB of storage dedicated to Wiki.js is recommended from the start.
:::

### Internet Access
Wiki.js will automatically check for new versions, fetch language updates, etc. from time to time. You can [read more](/docs/) about what data is downloaded.

An alternate method of [sideloading files](/docs/) is also available if your environment is cut from the internet.

## Domain

Wiki.js **requires** a dedicated sub-domain / domain *(e.g. `wiki.example.com`)*.

::: warning
You cannot map Wiki.js to a subfolder.
:::

## Database

A [PostgreSQL](https://www.postgresql.org/download/) database is required. The following versions are supported:

- PostgreSQL **11 or later**

::: tip
It's recommended you use the latest version of PostgreSQL when possible.
:::

You're expected to have installed a PostgreSQL database instance already *(either locally, on another server or using a cloud service)*. Wiki.js requires an empty database and preferably a unique user / pass to connect to the database.

::: warning Permissions
The database user must have the right to create schemas in the database.
:::

### Required Extensions

The following PostgreSQL extensions must be available. Note that these **are already included with standard PostgreSQL installations** and are only listed in case you're using a custom build of PostgreSQL.

- ltree
- pgcrypto
- pg_trgm

## Node.js

The [Node.js](https://nodejs.org/) runtime is required. The following versions are supported:

- Node.js **18.0 or later**

::: warning Unsupported Versions
Wiki.js will **NOT** run on older versions such as 16.x, 14.x or any version below **18.x**!

Future LTS versions (e.g. `20.x`) will be supported once they reach active LTS status.
Odd-numbered versions (e.g. `19.x`) are not officially supported and not recommended.
:::

::: tip Using Docker? :whale:
**Skip this requirement!** You don't need to install Node.js on your machine! It's included in the Docker image already.
:::

## Web Server

Wiki.js doesn't need any actual web server (such as nginx or Apache). However, you might need to put a reverse proxy in front of Wiki.js if you require advanced network / DNS configuration.

## Supported Browsers

The following browsers are supported:

- Google Chrome (including Android version)
- Mozilla Firefox
- Microsoft Edge
- Apple Safari (including iOS version)

Note that **only the latest stable version** of these browsers are supported. All these browsers update automatically in the background.

::: warning
Internet Explorer 11 *(and earlier)* is **NOT SUPPORTED** and will not be. If you absolutely require IE 11 support, consider using Wiki.js 2.x instead.
:::
