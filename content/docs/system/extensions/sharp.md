Sharp is an image processing library to transform and optimize images. It is required to generate thumbnails of uploaded images and perform various transformations.

## Automated Installation *(recommended)*

1. From the **Administration Area**, click on **Extensions** in the sidebar.
2. Next to the **Sharp** entry, click the **Install** button.
3. Wait for the installation to complete.
4. Sharp will now be marked as **Installed**. You're done!

## Manual Installation *(advanced)*

::: warning
This installation method is intended to be used only if you're having issues with the automated installation method above!
:::

1. From a command line terminal, navigate the wiki installation folder.
2. Navigate to `node_modules/sharp`:
  	```bash
    	cd node_modules/sharp
    ```
3. Run the install script:
	```bash
    	node install/libvips && node install/dll-copy
  	```
4. Create an empty file named `wiki_installed.txt`:
  	```bash
  		touch wiki_installed.txt
  	```
5. From the **Administration Area**, click on **Extensions** in the sidebar.
6. Click on the **Rescan** button to detect newly installed extensions.
7. The **Sharp** entry should now be marked as installed.