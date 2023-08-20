<template>
  <footer class="bg-gray-900 bg-gradient-to-b from-gray-950 to-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-16 lg:px-8 lg:pt-24">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <SvgoLogo class="w-auto h-20" :fontControlled="false" filled />
          <div class="text-sm leading-6 text-gray-300">
            <p>Stable Release: <strong class="text-emerald-300">2.5.300</strong></p>
            <p>Alpha Release: <strong class="text-indigo-400">3.0.0-alpha.277</strong></p>
          </div>
          <div class="flex space-x-6">
            <a class="icon" href="https://twitter.com/requarks" target="_blank" aria-label="Twitter"><Icon name="uil:twitter" color="gray" size="1.25em" /></a>
            <a class="icon" href="https://discord.gg/rcxt9QS2jd" target="_blank" aria-label="Discord"><Icon name="simple-icons:discord" color="gray" size="1.25em" /></a>
            <a class="icon" href="https://wiki.requarks.io/slack" target="_blank" aria-label="Slack"><Icon name="uil:slack" color="gray" size="1.25em" /></a>
            <a class="icon" href="https://twitter.com/requarks" target="_blank" aria-label="Twitter"><Icon name="uil:telegram" color="gray" size="1.25em" /></a>
            <a class="icon" href="https://github.com/requarks/wiki" target="_blank" aria-label="GitHub"><Icon name="uil:github" color="gray" size="1.25em" /></a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Docs</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.docs" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Contribute</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.contribute" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">About</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.about" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-18">
        <p class="text-xs leading-5 text-gray-400">&copy; 2016-{{ currentYear }} Nicolas Giard & Wiki.js Contributors. Released under the AGPLv3 License.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = (new Date()).getFullYear()

const navigation = {
  docs: [
    { name: 'Getting Started', href: '#' },
    { name: 'User Guide', href: '#' },
    { name: 'Administration', href: '#' },
    { name: 'Developers', href: '#' }
  ],
  contribute: [
    { name: 'Donate on GitHub Sponsors', href: '#' },
    { name: 'Donate on Patreon', href: '#' },
    { name: 'Donate on OpenCollective', href: '#' },
    { name: 'Help with Translations', href: '#' }
  ],
  support: [
    { name: 'Ask a Question', href: '#' },
    { name: 'Report a Bug', href: '#' },
    { name: 'Suggest a Feature', href: '#' }
  ],
  about: [
    { name: 'Blog', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'GitHub Project', href: '#' }
  ]
}
</script>