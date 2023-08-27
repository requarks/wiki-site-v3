---
title: The Road to the Wiki.js 3.0 Beta
description: In order to get Wiki.js 3.0 in a state that can be used and tested by the community as soon as possible, here is the roadmap for the coming months…
date: 2022-05-01
tags:
  - v3
---

In order to get Wiki.js 3.0 in a state that can be used and tested by the community as soon as possible, here is the roadmap for the coming months:

- An export utility ~~will be released shortly~~ is now available for current 2.x installations *(see details below)*.
- The GraphQL backend is being reworked to bring all queries and mutations at the root level, which is in line with current best practices. For example, the query `users.user` in 2.x becomes `userById` in 3.0. This will also address many caching issues currently present in 2.x.
- Only the new Administration UX will initially be available in the beta. The public-facing UX *(such as page view and editing)* will instead be gradually added over time during the beta. Trying to get all new UX components ready all at once simply proved too large of a scope. By focusing on the administration section, a viable beta can be released sooner with all the new major backend features *(e.g. multiple sites, native GitHub integration, webhooks, etc.).*
- The existing page viewing and editing UX will be adapted to use the new backend API but will otherwise stay essentially the same as 2.x.
- A new branch named `vega` as been created in the `requarks/wiki` GitHub repository. This branch is gradually being updated to include the backend and administration UI changes mentionned above. This also makes porting to 3.x the new commits (fixes / enhancements) made to the 2.x branch easier.
- This new branch is not yet in a *usable* state. **An update will be posted on this site once it's ready.**
- You won't be able to upgrade from a 2.x installation **yet**. This will come later in the beta.

## New Requirements

Wiki.js 3.x will require the following dependencies:

- **Node.js 18.x** or later
- **PostgreSQL 11** or later

*PostgreSQL 9.6 and 10.x will technically still work but are no longer supported by the PostgreSQL Global Development Group (or will be soon) and therefore not recommended.*

## Export Utility

A tool to export all content from your current Wiki.js 2.x installation ~~will be published shortly~~ is now available since update **2.5.282**. This utility *(found under the Administration Area > Utilities)* will generate a tarball of pages, assets, comments, users, etc. in file form.

You'll be able to import this tarball into a new 3.x installation in the future.

Note that if you're currently using a PostgreSQL database as the backend for your Wiki.js 2.x installation, you **do not need** to go through this export/import process. Your database will automatically be migrated to the 3.x schema.

This tool is mainly for users currently on MySQL/MariaDB, MSSQL and SQLite installations. It's also a great solution for people that wish to backup their wiki in a tarball format.