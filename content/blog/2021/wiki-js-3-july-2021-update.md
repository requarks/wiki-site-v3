---
title: Wiki.js 3.0 - July 2021 Update
description: See what’s new for v3 in this July update post…
date: 2021-07-25
tags:
  - v3
---

*Note: There was no June update as I was in the process of moving. Rest assured that 3.0 development is still going strong.*

## Webhooks

The ability to call external APIs or services on specific events is coming to Wiki.js! Useful for integrations with your other products.

![Admin Area - Webhooks](/img/blog-2021-wikijs-webhooks.png)

## Extensions

Extensions are extra dependencies that Wiki.js can tap into to offer extra functionality. Because they are OS / architecture dependent, they cannot be bundled with Wiki.js directly.

From the Extensions section of the Administration Area, you can see the installation state of any extensions and trigger an automated installation when possible (e.g. Sharp, Puppeteer). Others will however require a manual installation as they vary greatly from platform to platform (e.g. Pandoc, Git).

![Admin Area - Extensions](/img/blog-2021-wikijs-extensions.png)