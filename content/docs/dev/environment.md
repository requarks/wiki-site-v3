# Development Environment

Wiki.js is fully modular, which allows any developer to write their own module.

We provide VS Code devcontainer configuration to quickly provision a batteries-included development environment.

## Prerequisites

* Docker + Docker Compose (via [Docker Desktop](https://www.docker.com/products/docker-desktop/))
* Linux / macOS / Windows 10-11 Pro
* [Visual Studio Code](https://code.visualstudio.com/)

::tip{title='Using Windows?'}
It's highly recommended to use [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install) which provides a native Linux distribution running directly on the hypervisor, alonside Windows. Make sure to enable Docker Desktop integration for your WSL2 Linux distribution (under Docker Desktop settings, in the **Resources** > **WSL Integration** tab).
::

## First-time Setup
1. Clone the project from [GitHub](https://github.com/Requarks/wiki).
2. Open the project folder in **Visual Studio Code**
3. From the **Extensions** tab, install the **Remote Development** extension by Microsoft (*ms-vscode-remote.vscode-remote-extensionpack*)
4. Click the **green button** located in the bottom-left corner of VS Code: *(or open the command palette)*

	![ui-dev-vscode-remotebtn.png](/img/docs-dev-vscode-remotebtn.png)

5. Select **Dev Containers - Reopen in Container**
6. VS Code will now reload and start initializing the containers. Wait for it to complete. This **may take a while the very first time** as npm dependencies must be installed.

	![ui-dev-vscode-init.png](/img/docs-dev-vscode-init.png)

7. A **Terminal** should automatically be launched in a split pane view:

8. From **left** terminal, type the following command to start the backend server in development mode:
    ```bash
      npm run dev
    ```
8. From **right** terminal, type the following command to start the frontend development server (Quasar):
    ```bash
      npm run dev
    ```
9. Wait for the initialization to complete on both side.
9. Browse to `http://localhost:3001` *(replace localhost with the hostname of your machine if applicable)*.
10. Login using `admin@example.com` /  `12345678` credentials.

## Stopping the project

Click on **File > Close Remote Connection** to stop the containers and close the Visual Studio Code instance.

## Removing the containers

When you're done and no longer need the development environment, open the **Remote Explorer** tab and remove all containers starting with the name `wiki`.

## Building production assets

Once you're ready to deploy your changes, you need to build the client assets into a production optimized bundle. From the `ux` directory, run the command:

```bash
npm run build
```

## Notes

### Dev Server

Any changes made to client files will automatically trigger a build and the site will be updated live automatically. If the changes cannot be replaced inline, the page will reload automatically.

Any changes made to the server files will automatically trigger a server restart. You can also force a restart by typing `rs` in the terminal followed by **Enter**.

To stop the development server, use **CTRL-C** until the process exits.

### Build Production Images

Production docker images can be built using the following command:
```bash
docker build -t requarks/wiki -f dev/build/Dockerfile .
```

### Official Builds

Because the main branch contains pre-release code, it is not recommended to build directly from the source code for a production deployment. Doing so will result in a red warning banner being displayed during setup and in the header on all pages. **You should instead follow the [installation instructions](/docs/install).**

A reproducable build workflow is however available [here](https://github.com/requarks/wiki/blob/main/.github/workflows/build.yml) should you want to build it yourself **from a production release tag**.
