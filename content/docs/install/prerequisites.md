# Prerequisites

Wiki.js runs on virtually any system where Node.js is supported.
This means it runs on **Linux**, **macOS**, **Windows** as well as container solutions like **Docker** and **Kubernetes**.

## Host Requirements

### Minimum Specs
- 1 CPU core
- 512MB of RAM
- 1GB of Disk Space

### Recommended Specs
- 2 CPU cores or more
- At least 1GB of RAM
- 10GB of Disk Space *(depends on file uploads)*

While the process itself usually sits at around 70MB of RAM, some events *(such as page rendering, indexing, etc.)* result in short bursts in RAM usage.

### Internet Access
Wiki.js will automatically check for new versions, fetch language updates, etc. from time to time. You can [read more](/docs/) about what data is downloaded.

It's however possible to run Wiki.js in offline mode and [sideload files](/docs/) if necessary.

## Hostname

Wiki.js **requires** a dedicated sub-domain / domain *(e.g. `wiki.example.com`)*.

::warning
You **CANNOT** map Wiki.js to a subfolder *(e.g. `/wiki`)* on an existing domain. [Read why](/docs/install/subfolder).
::

## Database

A [PostgreSQL](https://www.postgresql.org/download/) database is required. The following versions are supported:

- PostgreSQL **16 or later** for best performance.
- PostgreSQL **12-15** in compatibility mode.

::tip{title='Latest'}
It's recommended you use the latest version of PostgreSQL when possible.
::

You're expected to have installed a PostgreSQL database instance already *(either locally, on another server or using a cloud service)*. Wiki.js requires an empty database and preferably a unique user / pass to connect to the database.

::warning{title='Permissions'}
The database user must have the right to create schemas in the database.
::

### Required Extensions

The following PostgreSQL extensions must be available. Note that these **are already included with standard PostgreSQL installations** and are only listed in case you're using a custom build of PostgreSQL.

- ltree
- pgcrypto
- pg_trgm

## Node.js

The [Node.js](https://nodejs.org/) runtime is required. The following versions are supported:

- Node.js **18.0 or later**

::warning{title='Unsupported Versions'}
Wiki.js will **NOT** run on older versions such as 16.x, 14.x or any version below **18.x**!
<br><br>
Odd-numbered versions (e.g. `19.x`) are not officially supported and not recommended.
::

::tip{title='Using Docker?'}
**Skip this requirement!** You don't need to install Node.js on your machine! It's included in the Docker image already.
::

## Web Server

Wiki.js **doesn't need** any web server *(such as nginx or Apache)*. However, you might need to put a reverse proxy in front of Wiki.js if you require advanced network / DNS configuration.

## Supported Browsers

The following browsers are supported:

- Google Chrome (including Android version)
- Microsoft Edge
- Mozilla Firefox
- Apple Safari (including iOS version)

Note that **only the latest stable version** of these browsers are supported. All these browsers update automatically in the background.

::warning
Internet Explorer 11 *(and earlier)* is **NOT SUPPORTED** and will not be. If you absolutely require IE 11 support, consider using Wiki.js 2.x instead.
::
