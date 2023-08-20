<template>
  <div class="overflow-hidden bg-gray-900 bg-gradient-to-tr from-indigo-950 to-gray-950 py-24 sm:py-32 shadow-inner border-b border-solid border-indigo-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">Infinitely Scalable</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Multi-sites <FeatureBadge class="ml-2 -translate-y-1.75">New in 3.0</FeatureBadge></p>
            <p class="mt-6 text-lg leading-8 text-gray-300">Create as many wiki <em>(sites)</em> as you need in the same installation, each with their own content, theme and configuration.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">

              <div class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <Icon name="uil:browser" class="absolute left-1 top-1 h-5 w-5 text-indigo-400" aria-hidden="true" />
                  Dedicated Hostnames
                </dt>
                {{ ' ' }}
                <dd class="inline">for each wiki. Set a domain or sub-domain to each of your sites, or use a wildcard catch-all site.</dd>
              </div>

              <div class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <Icon name="uil:users-alt" class="absolute left-1 top-1 h-5 w-5 text-indigo-400" aria-hidden="true" />
                  Shared users
                </dt>
                {{ ' ' }}
                <dd class="inline">across all your wikis. User accounts are global to your Wiki.js installation. Set different authentication methods and permissions for each site.</dd>
              </div>

              <div class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <Icon name="uil:brush-alt" class="absolute left-1 top-1 h-5 w-5 text-indigo-400" aria-hidden="true" />
                  Customize
                </dt>
                {{ ' ' }}
                <dd class="inline">each wiki with dedicated theme, editors, locales, login and storage configurations.</dd>
              </div>

            </dl>
          </div>
        </div>
        <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
      </div>
    </div>
  </div>
</template>