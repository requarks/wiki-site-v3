---
title: Wiki.js 3.0 Feature Preview - GitHub Setup
description: See how easy it is to setup the GitHub integration in Wiki.js 3.0…
date: 2022-01-28
tags:
  - v3
---

<iframe class="overflow-hidden rounded" width="100%" height="500" src="https://www.youtube.com/embed/mWodnB1yuyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The GitHub storage integration in Wiki.js 3.0 features a fully automated setup. Here's how it works:

1. Choose whether you want to use a GitHub repsotiroy under an **organization** or **personal** account.
2. Enter the **public URL** of your wiki. This is how GitHub will know where to send events about new changes.
3. An app manifest is automatically generated with all the proper values; simply click **Create GitHub App**.
4. Choose which **GitHub repository** should be used for sync from the list.
5. Go back to Wiki.js admin storage page and click **Finish Setup** to complete the installation.

No complex configuration with keys or git URIs to enter!

Should you want to remove the integration, simply click **Uninstall**. All settings will be reset and the app installation will even be removed for you on GitHub. You'll just need to manually delete the generated GitHub app itself as that can't be automated.