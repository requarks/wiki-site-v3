<template>
  <header class="sticky top-0 z-50">
    <div class="text-center gap-x-6 bg-rose-600 px-6 py-2.5 text-sm leading-6 text-white sm:px-3.5">
      <strong class="font-semibold">WARNING</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg> This site is for the unreleased, still under development 3.0 version of Wiki.js. Go to the <a href="#"><strong>current 2.5 version</strong></a> instead.
    </div>
    <HeadlessDisclosure as="nav" class="bg-gray-800/25 backdrop-blur" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex basis-40">
            <div class="flex flex-shrink-0 items-center">
              <NuxtLink to="/">
                <figure>
                  <span class="sr-only">Wiki.js</span>
                  <SvgoLogo class="w-40 h-auto" :fontControlled="false" filled />
                </figure>
              </NuxtLink>
            </div>
          </div>
          <div class="hidden md:flex md:items-center md:space-x-4">
            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.href === currentBaseLink ? 'bg-gray-900 text-sky-300' : 'text-gray-200 hover:bg-gray-700/70 hover:text-white', 'rounded-md px-3 py-2 font-medium']" :aria-current="item.href === currentBaseLink ? 'page' : undefined">{{ item.name }}</NuxtLink>
          </div>
          <div class="flex items-center justify-end basis-40">
            <a class="hidden md:block mr-4" href="https://github.com/requarks/wiki" target="_blank" aria-label="GitHub">
              <Icon name="simple-icons:github" color="white" size="1.5em" />
            </a>
            <NuxtLink to="/docs/install" class="hidden md:block relative inline-flex items-center gap-x-1.5 rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
              Get Started
            </NuxtLink>
            <div class="flex items-center md:hidden">
              <!-- Mobile menu button -->
              <HeadlessDisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Icon v-if="!open" name="uil:bars" class="block h-6 w-6" aria-hidden="true" />
                <Icon v-else name="uil:times" class="block h-6 w-6" aria-hidden="true" />
              </HeadlessDisclosureButton>
            </div>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
        >
        <HeadlessDisclosurePanel class="md:hidden">
          <div class="bg-gray-900/80 border-y border-gray-700 space-y-1 px-2 py-2 sm:py-3 sm:px-3">
            <HeadlessDisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.href === currentBaseLink ? 'bg-sky-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.href === currentBaseLink ? 'page' : undefined">{{ item.name }}</HeadlessDisclosureButton>
          </div>
        </HeadlessDisclosurePanel>
      </transition>
    </HeadlessDisclosure>
  </header>
</template>

<script setup>
const navigation = [
  { name: 'Docs', href: '/docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Support', href: '/support' },
  { name: 'About', href: '/about' },
]

const route = useRoute()
const currentBaseLink = computed(() => route.path.indexOf('/', 1) > 0 ? `/` + route.path.split('/')[1] : route.path)
</script>

<style lang="scss" scoped>

// nav {
//   > a {
//     color: #FFF;
//     text-decoration: none;
//     font-weight: 500;
//     padding: 6px 12px;
//     border-radius: 5px;
//     transition: all .4s ease;

//     &:hover {
//       background-color: rgba(255,255,255,.2);
//     }

//     &.icon {
//       padding: 4px 6px;
//     }
//   }

//   .separator {
//     width: 1px;
//     height: 32px;
//     border-left: 1px solid rgba(255,255,255,.25);
//   }
// }
</style>