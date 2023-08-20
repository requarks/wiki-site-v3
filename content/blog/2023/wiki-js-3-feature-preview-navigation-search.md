---
title: Wiki.js 3.0 Feature Preview - Navigation & Search
description: See what’s new in search and navigation in v3…
date: 2023-07-24
tags:
  - v3
---
# Wiki.js 3.0 Feature Preview - Navigation & Search

The navigation and search capabilities have been greatly improved in v3. Let's have a look at what's new.

## Navigation

The sidebar navigation experience has been completely overhauled to allow for some of the most requested features.

You can now have different sidebar menus **per path** and inherit / override menus from parent paths:

![Navigation Mode](/img/blog-2023-nav-mode.png){.max-w-xl.rounded-md.mx-auto}

The menu items can now be edited directly from the page by anyone having the "*Manage Navigation*" permission on the current path *(rather than needing access to the Administration Area as in v2)*.

![Edit Menu Items](/img/blog-2023-edit-menu.png){.rounded-md.mx-auto}

Add, edit and re-arrange headers, links and separators using the "Edit Menu Items" overlay.

Links can now be **nested** to create expanding menus.

![Nested Menus](/img/blog-2023-nav-nested.gif){.rounded-md.mx-auto}

Choosing the "**Hide Current + Descendants**" or "**Hide Current Only**" option shrinks the sidebar to a compact state. Again, this state can be overriden per path if desired.

*(You can also hide the sidebar completely from the Theme section of the Administration Area. However, note that this is a site-wide setting and that you will not be able to use the locale selector, browse or bookmarks.)*

![Compact Sidebar](/img/blog-2023-nav-compact.png){.rounded-md.mx-auto}

## Search

The search experience has been improved with a new results page, better filtering / faceting and UI.

A new help panel is shown when clicking the searchbox with the various operators that can be used. It's also now possible to include tags directly in your search query by using the **#tag** format.

![Search Panel](/img/blog-2023-header-search.png){.rounded-md.mx-auto}

Press *Enter* and you're immediately presented with the new search results page. The URL to that page can be shared with other users.

Matches inside page contents are now highlighted.

You can further refine your search with the various filters in the sidebar:

![Search Results Page](/img/blog-2023-results-page.png){.rounded-md.mx-auto}

For CJK users, it's now possible to define custom PostgreSQL dictionaries for each locale. While PostgreSQL doesn't include dictionaries for these languages by default, it's possible to install them (e.g. the pgroonga extension) and tell Wiki.js to use them.
