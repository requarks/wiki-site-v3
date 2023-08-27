---
title: Wiki.js 3.0 - May 2021 Update
description: See what's new for v3 in this may update post…
date: 2021-05-22
tags:
  - v3
---

Here's some new features and improvements coming in the future 3.0 release.

## Login Experience

As 3.0 brings multi-site support, the login experience had to be enhanced to allow for different providers per site.

While authentication providers are still defined globally, you can select which providers are shown on each site and in what order.

In addition to bypassing the login screen, it's now also possible to bypass any unauthorized screen and redirect the user directly to login screen instead.

A path can also be defined to automatically redirect the user to a special page when the user logins for the first time. Useful for an onboarding welcome page with instructions. While this is defined per site, it can also be overriden per group as well.

![Admin Area - Login](/img/blog-2021-wikijs-v3-admin-login.png)

## Profile

The profile page has been completely redesigned along with some new sections:

- Manage notifications *(more details in a future post)*
- View activity (such as logins, page edits, etc.)

![User Profile Screen](/img/blog-2021-wikijs-v3-profile.png)

## Live Collaboration

While still actively experimenting with this functionality, both the Visual Editor and the Markdown editor will support live collaboration. This means multiple users will be able to edit the same page at the same time, seeing changes as they happen.

Another capability is the ability to temporarily go offline, keep editing and those changes will automatically be synced when back online.

## About pre-release testing

I often get questions such as "Where can I download and test v3?". While it may look finished and working based on some of the screenshots, it is not. The UI is often done very early, long before the backend is actually ready.

Rest assured that you'll be able to try v3 as soon as it's in a functionning state and the best way to learn about it is to follow [@requarks on Twitter](https://twitter.com/requarks) or check this blog.

Please also refrain from asking about ETAs as the honest answer is simply: I don't know. As explained in the [docs](https://docs.requarks.io/releases/about), this is mostly a single developer project and it's not my main job. New commits are made multiple times a week to the project but it's simply not possible to plan ETAs for betas / final releases.