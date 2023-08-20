<template>
  <header class="sticky top-0 z-50 bg-gray-800/25 backdrop-blur-10">
    <div class="text-center gap-x-6 bg-rose-600 px-6 py-2.5 text-sm leading-6 text-white sm:px-3.5">
      <strong class="font-semibold">WARNING</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg> This site is for the unreleased, still under development 3.0 version of Wiki.js. Go to the <a href="#"><strong>current 2.5 version</strong></a> instead.
    </div>
    <div class="mx-auto h-18 max-w-7xl flex justify-between items-center">
      <a class="header-logo px-3" href="/">
        <figure>
          <span class="sr-only">Wiki.js</span>
          <SvgoLogo class="w-auto h-10" :fontControlled="false" filled />
        </figure>
      </a>
      <nav class="lt-md:hidden md:flex items-center p-3">
        <a href="/docs">Docs</a>
        <a href="/blog">Blog</a>
        <a href="/about">Sponsor</a>
        <a href="/support">Support</a>
        <div class="separator mx-4"></div>
        <HeadlessPopover class="relative">
          <HeadlessPopoverButton class="changelog">
            <span>3.0.0-alpha.275</span>
            <Icon name="uil:angle-down" color="white" size="1.25em" aria-hidden="true" />
          </HeadlessPopoverButton>
          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <HeadlessPopoverPanel class="absolute -right-3 mt-3 w-screen max-w-max">
              <div class="bg-zinc-700 shadow-lg rounded w-screen max-w-md overflow-hidden">
                <div class="p-4">
                  Beep Boop
                </div>
                <div class="bg-zinc-600 p-3">
                  <a href="#">View Changelog</a>
                </div>
              </div>
            </HeadlessPopoverPanel>
          </transition>
        </HeadlessPopover>
        <div class="separator mx-4"></div>
        <a class="icon" href="https://twitter.com/requarks" target="_blank" aria-label="Twitter"><Icon name="uil:twitter" color="white" size="1.25em" /></a>
        <a class="icon" href="https://discord.gg/rcxt9QS2jd" target="_blank" aria-label="Discord"><Icon name="simple-icons:discord" color="white" size="1.25em" /></a>
        <a class="icon" href="https://wiki.requarks.io/slack" target="_blank" aria-label="Slack"><Icon name="uil:slack" color="white" size="1.25em" /></a>
        <a class="icon" href="https://twitter.com/requarks" target="_blank" aria-label="Twitter"><Icon name="uil:telegram" color="white" size="1.25em" /></a>
        <a class="icon" href="https://github.com/requarks/wiki" target="_blank" aria-label="GitHub"><Icon name="uil:github" color="white" size="1.25em" /></a>
      </nav>
      <div class="md:hidden px-3">
        <Icon class="cursor-pointer" name="uil:bars" color="white" size="1.75em" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

// .header-toggle {
//   @media (min-width: 768px) {
//     display: none;
//   }
// }

nav {
  > a {
    color: #FFF;
    text-decoration: none;
    font-weight: 550;
    padding: 6px 12px;
    border-radius: 5px;
    transition: all .4s ease;

    &:hover {
      background-color: rgba(255,255,255,.2);
    }

    &.icon {
      padding: 4px 6px;
    }
  }

  :deep(.changelog) {
    font-size: .8em;
    font-weight: 500;
  }

  .separator {
    width: 1px;
    height: 32px;
    border-left: 1px solid rgba(255,255,255,.25);
  }
}
</style>