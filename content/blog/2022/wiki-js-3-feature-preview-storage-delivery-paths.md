---
title: Wiki.js 3.0 Feature Preview - Storage Delivery Paths
description: View a graph of how your pages and assets are delivered to users from multiple storage origins…
date: 2022-02-06
tags:
  - v3
---

<video autoplay muted loop style="width: 100%;">
  <source src="/vid/blog-2022-wikijs-admin-storage-delpaths.mp4" type="video/mp4">
</video>

As outlined in the [Wiki.js 3.0 Feature Preview - Storage](/blog/2021/wiki-js-3-feature-preview-storage)  post, you'll be able to store and serve assets from different storage targets based on their type and size.

In order the visualize how that content is delivered to the user, Wiki.js 3.0 introduces a new view called "Delivery Paths".

- Blue fast animated lines represent user requests going from the browser, to either a storage origin directly (if **Direct Access** is supported and enabled) or streamed via Wiki.js from the origin (if **File Streaming** is supported and enabled).
- Teal slow animated lines represent content being pushed to the storage target when it's uploaded.
- Red static dashed lines represent an asset type without an origin. This means that your storage configuration is incorrect and that you need to enable at least 1 storage target for that asset type.

---

In a future release (after 3.0), this node graph view could be added to the page editor so that you can build your own node graphs and display them inside your pages!