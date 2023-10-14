---
title: Wiki.js 3.0 Feature Preview - Passkeys
description: Passkeys are coming to Wiki.js v3. Learn more…
date: 2023-10-13
tags:
  - v3
---

Passkeys are coming to Wiki.js 3.0.

They are a replacement for passwords. It's a more secure, faster and easier way to authenticate.

From your account page, you can add multiple passkeys so that you can quickly login regardless of which device you're on. Use any supported FIDO-compliant device, like **Windows Hello**, **Apple Touch ID**, **Yubikeys**, etc.

![Block Index Example](/img/blog-2023-v3-passkeys.png){.rounded-md.mx-auto}

Note that passkeys are not yet supported on all OS / browsers (see [compatibility matrix](https://caniuse.com/passkeys)). At the time of writing, unless you're using Linux and/or Firefox, passkeys should already work for you.

Passkeys are **optional**. You can still login with a password or a 3rd party provider if you prefer. 2FA is also still available when using a password (and can be enforced by the admin).

Try it today with a [developer build](https://github.com/requarks/wiki/tree/vega) or later this year during the beta.