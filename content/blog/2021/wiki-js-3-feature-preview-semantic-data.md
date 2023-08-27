---
title: Wiki.js 3.0 Feature Preview - Semantic Data
description: Learn about the semantic data capabilities of v3…
date: 2021-09-08
tags:
  - v3
---

One of the major goal for v3 is to provide semantic data capabilities to your pages.

As you write new pages, the content is usually static. While it can be searched using standard text search techniques, it's still limited to whether a term is present or not in the content. What if you want to set various attributes to a collection of pages and be able to query these attributes? This is where semantic data comes into play.

A concrete example would be the infobox you see on most Wikipedia pages. They consist of a predefined layout and list of fields, which can be used on multiple pages. These will be referred as **Data Templates** in the upcoming v3 and can be defined using an easy to use visual editor:

![Manage Data Templates Screen](/img/blog-2021-wikijs-data-template-diag.png)

Once these data templates are defined, they can be used in any page.

Using the above example, by selecting the "Tools" template, you'll be able to fill in the various attributes. These attributes can then be displayed on the page as part of an infobox or as dynamic attributes placed inside your content.

These attributes will also become handy when searching. You could for example search for all tools with the attribute "Operating System" having a value of "Linux".

Another planned use is to reference specific attributes from other pages. You could have a page detailing a specific tool and display the latest version number of that tool on another page. Instead of duplicating the value across 2 pages, you'll be able to reference that version number from the source page. Change it once and it's updated everywhere.

You'll be able to define these attributes using a visual form UI or using YAML.

This capability should unlock quite a lot of possibilities in how you organize your knowledge base and make it easier to find what you're looking for.