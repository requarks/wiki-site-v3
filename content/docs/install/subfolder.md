---
navigation: false
---

## Why can't I run Wiki.js from a subfolder?

**tl;dr**: Because it's a massive pain.

**Long answer**: It introduces many problems:

- **Path parsing**: Assuming an installation at `/wiki`. If a user enters a link to `/foobar`, does it mean `/foobar` or  `/wiki/foobar`? When creating a page, do you enter the subfolder in the path or not? What if the user does? Should it strips the subfolder? What if the user does want to put the page in a folder `wiki` under `/wiki`? When adding an image to a page, should it rewrite the path with the prefix? Having assets in a subolder at the root is a very common case. One user would expect one behavior while another would expect the opposite. This becomes extremely confusing for both the developer and the end users.

- **Export/import**: When exporting the page to a Git repository, should all the links be rewritten without the prefix? How about importing? Should it assume all links need to be prefixed? What if I want to link to another folder at the domain root?

- **Cookie collision/size**: By hosting multiple sites on the same hostname, you're sharing the cookies for that domain. If another site decides to change / delete the cookie used by Wiki.js, you'll run into issues. The cookie header is also limited in length (4096 characters). Wiki.js relies on a JWT for sessions and takes a rather large portion of this limited size. By having multiple sites, the risk to reach this limit increases significantly.

- **Support**: This is by far the biggest pain point. v1 had support for subfolder installations. The vast majority of support tickets were about reverse-proxy not setup correctly. Good docs alone cannot prevent this as there a million different reverse-proxy solutions and you'd be surprised how many users can't be bothered with reading docs in the first place. This puts a massive strain on developer support.

For these reasons, there's no plan to support subfolder installations for the foreseeable future. Use a subdomain. If you absolutely can't, then sorry, use something else.