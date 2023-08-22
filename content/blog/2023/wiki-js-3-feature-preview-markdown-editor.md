---
title: Wiki.js 3.0 Feature Preview - Markdown Editor
description: The Markdown editor has been rewritten using Monaco, the same core as Visual Studio Code…
date: 2023-04-29
tags:
  - v3
---

![Markdown Editor](/img/blog-2023-markdown-editor.png){.rounded-md.mx-auto}

The **Markdown** editor has been completely rewritten in 3.0. It is now based on the amazing **Monaco** editor, which is the editor core used in **Visual Studio Code** and **GitHub Codespaces**.

This brings both significant performance improvements as well as many new features. You'll be right at home if you're used to VS Code with features like the mini-map, better auto-complete, better syntax highlighting, multi-cursors, etc.

The formatting shortcuts can now toggle between off and on states. For example, pressing CTRL-B multiple times will toggle between bold and normal text. You also no longer need to select something for most functions; the word under the cursor will automatically be selected.

The command palette is also present with hundreds of useful functions and tools:

![Command Palette](/img/blog-2023-markdown-command.png){.rounded-md.mx-auto}

The preview panel scroll / cursor sync has been greatly improved and can now be disabled. The editor will be configurable per user with settings like font size, color theme, wordwrap, cursor blinking, etc.

The AsciiDoc editor will also be using Monaco and function in an almost identical way.

---

*Finally, because someone will ask the question, yes, a beta is still slated for later this year.*