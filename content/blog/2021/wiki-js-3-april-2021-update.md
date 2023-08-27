---
title: Wiki.js 3.0 - April 2021 Update
description: Wiki.js 3.0 is still under active development and it's time for a quick update on what's new / changed in this upcoming release.
date: 2021-04-25
tags:
  - v3
---

Wiki.js 3.0 is still under active development and it's time for a quick update on what's new / changed in this upcoming release.

## Editors

You can now select which editor is available to your users. For example, you could disable the Markdown editor altogether if you want everyone to use the Visual Editor.

![Admin Area - Editors](/img/blog-2021-wikijs-v3-admin-editors.png)

## Group Permissions

The permission system has been simplified in 3.0.

You no longer need to enable global permission in addition to page rules. Any permission that is related to content is now defined under the Rules section and that's it. It's also now possible to name your rules for easier organization. 

Management permissions (manage users, etc.) are now located under the Permissions section.

![Admin Area - Group Rules](/img/blog-2021-wikijs-v3-admin-grouprules.png)

## Security

A new CORS option has been added to the security section. You can now define whether to restrict requests to the GraphQL to same-origin only *(default)*, reflect the origin *(not secure!)*, limit to an hostnames whitelist or use a regex pattern to match hostnames.

An option to disallow the upcoming Google FLoC tracking feature has also been added and will be enabled by default.

All the login page settings have been moved to a dedicated login section, specific to each site.

![Admin Area - Security](/img/blog-2021-wikijs-v3-admin-security.png)