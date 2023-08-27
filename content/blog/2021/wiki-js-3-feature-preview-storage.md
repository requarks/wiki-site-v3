---
title: Wiki.js 3.0 Feature Preview - Storage
description: Some major improvements to storage are coming in Wiki.js 3.0…
date: 2021-12-12
tags:
  - v3
---

There are some major improvements coming to storage in Wiki.js 3.0.

First off, is the ability to have multiple storage targets per site. Wiki Site "A" could sync with a GitHub repository while Wiki Site "B" could use AWS S3 + a network-hosted Git repository.

It's also now possible to define which type of content should be synchronized / backed up to the storage target. For example, you might want to sync your pages with GitHub while keeping all assets into an AWS S3 bucket. Since some users need to upload large files (such as videos or binaries), you also can set a filesize threshold for files to be considered as "Large Files", giving you even more precise control over the location of these files.

External targets such as AWS S3 can now be used to serve large files to users, instead of relying on the database. While pages will always be saved in the database, it is now optional for assets. Not all targets can be used for this purpose, but compatible modules like AWS S3 or Azure Blob Storage will be updated to provide signature-based access links to files when requested by the user. This ensures that only authorized users, based on Wiki.js access rules, can access your remote files.

Finally, a new **GitHub** storage module will be provided in addition to the existing generic Git module. This new module will provides tight integration with GitHub and instant synchronization of any changes *(in both direction)* with your repository. Wiki.js will communicate directly with the GitHub GraphQL API to push changes and use GitHub webhooks capabitilies to be notified of any change made remotely. This removes the need to maintain a local git repository which must then be synchorized on regular schedule, which is how the current git module works.

![Admin Area - Storage](/img/blog-2021-wikijs-admin-storage.png)