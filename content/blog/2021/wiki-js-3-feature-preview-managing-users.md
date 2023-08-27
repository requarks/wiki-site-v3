---
title: Wiki.js 3.0 Feature Preview - Managing Users
description: Learn about the much improved users management in 3.0…
date: 2021-11-07
tags:
  - v3
---

User management has been greatly improved in the upcoming Wiki.js 3.0. Let's go over the changes...

<iframe class="overflow-hidden rounded" width="100%" height="500" src="https://www.youtube.com/embed/3oqo4oGLE3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Overview

The layout has been completely reworked to enable faster and easier editing of all relevant user fields. The user preferences can now be edited in addition to the usual user metadata.

A new **Notes** textarea has been added to the view. This field is private to administrators and not shown to the user.

### Activity

You'll have the option to log user actions (e.g. logins, comments, pages, etc.) and view them as a timeline, per user. Useful for organizations / classrooms that need to keep track of user participation.

** Planned for a future version (e.g. v3.1)*

### Authentication

User accounts are now merged into a single one when it comes to multiple authentication providers. Whether you login via Google or locally via a password, it's now the same account.

While the previous model of separating accounts for each provider, user feedback made it clear that it created more confusion than benefits. As long as the email address is the same, you will now be logged into the same account.

For installations migrating to 3.0, you'll have the option to "merge" accounts having the same email.

### Metadata

A new **Metadata** tab has been added with a full JSON editor. Extra properties can be added to any user via this tab.

While they won't have any use at first, the plan is to allow integrations to query these fields and possibly use them inside pages as well.

### Operations

You will now be able to re-send the welcome email to the user at any time. The email will contain links to all the wiki sites the user has access to. Because passwords are stored in a non-recoverable form, the email will however not contain the user password.

The verify/unverify and ban/unban actions have also been relocated to this tab.