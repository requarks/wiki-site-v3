<template>
  <div class="overflow-hidden dark:bg-gray-900 bg-gradient-to-tr from-white via-sky-100 to-sky-50 dark:from-slate-900 dark:via-sky-950 dark:to-sky-800 py-16 sm:py-24 border-t border-solid border-sky-300 dark:border-sky-700">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-sky-500 dark:text-sky-300">Storage</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-sky-800 dark:text-white sm:text-4xl">Sync your content</p>
            <p class="mt-6 text-lg leading-8 text-sky-600 dark:text-sky-200">Easily sync or backup your content to various storage solutions like GitHub, AWS S3 and more.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-sky-900 dark:text-sky-100 lg:max-w-none">

              <div class="relative pl-9">
                <dt class="inline font-semibold text-sky-600 dark:text-sky-300">
                  <Icon name="uil:arrows-h" class="absolute left-1 top-1 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Sync
                </dt>
                {{ ' ' }}
                <dd class="inline">content bi-directionaly to GitHub <em>(or any git-compatible service)</em>. Commits and pull requests will be reflected on Wiki.js automatically.</dd>
              </div>

              <div class="relative pl-9">
                <dt class="inline font-semibold text-sky-600 dark:text-sky-300">
                  <Icon name="uil:hdd" class="absolute left-1 top-1 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Backup
                </dt>
                {{ ' ' }}
                <dd class="inline">your wiki to blob storage solutions like AWS S3, DigitalOcean Spaces and Azure Blob Storage, or to local disk / network shares.</dd>
              </div>

              <div class="relative pl-9">
                <dt class="inline font-semibold text-sky-600 dark:text-sky-300">
                  <Icon name="uil:box" class="absolute left-1 top-1 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Publish
                </dt>
                {{ ' ' }}
                <dd class="inline">your wiki as a static website and serve it on a CDN service like GitHub Pages, Netfliy and Cloudflare Pages.</dd>
                <div>
                  <FeatureBadge>Coming in 3.1</FeatureBadge>
                </div>
              </div>

            </dl>
          </div>
        </div>
        <div class="flex items-start justify-end lg:order-first">
          <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </div>
</template>