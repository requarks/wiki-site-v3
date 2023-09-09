---
title: Wiki.js 3.0 Feature Preview - Blocks
description: Native support for Web Components is been added in Wiki.js 3.0…
date: 2023-09-08
tags:
  - v3
---

Native support for [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) is been added in Wiki.js 3.0.

They are called **blocks** and can be inserted into any page to provide dynamic content and interactivity. Anything from interactive charts, visualizations, forms, dynamic data, etc. can be done via blocks.

## Usage

In Markdown, you can use the popular Markdown Components syntax to insert blocks. For example, the `block-index` block queries a set of pages and render them as a list of links:

```markdown
This is a dynamic list:

::block-index
::
```

will produce:

![Block Index Example](/img/blog-2023-v3-blockindex.png){.rounded-md.mx-auto}

Blocks can have parameters too. In the previous example, you could set the base path to `folder-a` with tags `foo,bar` and a limit of `5` links:

```markdown
::block-index{path="folder-a" tags="foo,bar" limit="5"}
::
```

Some blocks can also accept content:

```markdown
::block-example
Some inline content with **formatting**
::
```

Because blocks are dynamic, their content is not baked into the page at render time. Instead, they are rendered in real-time when the user loads the page. In the above example, the list will always reflect the latest changes and new pages will automatically show up in the list.

Note that while this article focus on Markdown, blocks will also be supported in other editors.

## Custom Blocks

While Wiki.js will ship with a few built-in blocks, it will be possible to develop, share and install custom blocks.

The toolset is using the [Lit](https://lit.dev/) library. You can however use any library / framework that is compatible with Web Components (Vue, React, Svelte, etc.) should you choose to.

The administration area allows you to enable / disable specific blocks per site and add new custom blocks you (or someone else) designed.

There's no limit to the number of blocks you can import and they are only loaded when used on the page.

![Blocks Admin Page](/img/blog-2023-v3-blocksadmin.png){.rounded-md.mx-auto}