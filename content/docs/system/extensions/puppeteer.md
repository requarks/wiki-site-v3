# Puppeteer

Puppeteer is a headless chromium browser for server-side rendering. It is required for generating PDF versions of pages and render certain content elements on the server (e.g. Mermaid diagrams).

## Automated Installation *(recommended)*

1. From the **Administration Area**, click on **Extensions** in the sidebar.
2. Next to the **Puppeteer** entry, click the **Install** button.
3. Wait for the installation to complete.
4. Sharp will now be marked as **Installed**. You're done!

## Manual Installation *(advanced)*

::: warning
This installation method is intended to be used only if you're having issues with the automated installation method above!
:::

1. From a command line terminal, navigate the wiki installation folder.
2. Navigate to `node_modules/puppeteer-core`:
  	```bash
    	cd node_modules/puppeteer-core
    ```
3. Run the install script:
	```bash
    	node install.js
  	```
4. From the **Administration Area**, click on **Extensions** in the sidebar.
5. Click on the **Rescan** button to detect newly installed extensions.
6. The **Puppeteer** entry should now be marked as installed.