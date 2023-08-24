<template>
  <div class="isolate overflow-hidden bg-gray-100 dark:bg-gray-950">
    <div class="mx-auto max-w-7xl px-6 pb-96 pt-16 text-center sm:pt-24 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Get Started</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-5xl">Deploy anywhere, <br class="hidden sm:inline lg:hidden" />on any platform</p>
      </div>
      <div class="relative mt-6">
        <p class="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-white/60">Running on the blazing fast Node.js engine with a powerful PostgreSQL backend, Wiki.js can be deployed on virtually any platform.</p>
        <svg viewBox="0 0 1208 1024" class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
          <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512" />
          <defs>
            <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="flow-root dark:bg-gray-950 bg-gradient-to-tr from-slate-50 via-slate-200 to-slate-100 dark:from-gray-950 dark:to-gray-900 pb-16 sm:pb-24 border-t border-solid border-gray-300 dark:border-gray-700">
      <div class="-mt-80">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            <div class="flex flex-col justify-between rounded-3xl bg-slate-800 bg-gradient-to-tr from-gray-900 to-gray-800 p-8 shadow-xl ring-1 ring-slate-950/10 sm:p-10">
              <div>
                <h3 class="text-base font-semibold leading-7 text-white">Self-hosted</h3>
                <p class="mt-6 text-base leading-7 text-slate-300">Deploy on any of the following supported platforms:</p>
                <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-slate-200">
                  <li class="flex gap-x-3">
                    <Icon name="uil:docker" class="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    Docker
                  </li>
                  <li class="flex gap-x-3">
                    <Icon name="simple-icons:kubernetes" class="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    Kubernetes / Helm
                  </li>
                  <li class="flex gap-x-3">
                    <Icon name="uil:linux" class="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    Linux
                  </li>
                  <li class="flex gap-x-3">
                    <Icon name="uil:apple" class="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    macOS
                  </li>
                  <li class="flex gap-x-3">
                    <Icon name="uil:windows" class="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    Windows
                  </li>
                </ul>
              </div>
              <NuxtLink to="/docs/install" class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</NuxtLink>
            </div>
            <div class="flex flex-col justify-between rounded-3xl bg-slate-800 bg-gradient-to-tl from-gray-900 to-gray-800 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
              <div>
                <h3 class="text-base font-semibold leading-7 text-white">Prebuilt Cloud Images</h3>
                <p class="mt-6 text-base leading-7 text-slate-300">Quick and simple 1-click deployment on major cloud providers:</p>
                <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-slate-200">
                  <li class="flex gap-x-3">
                    <Icon name="simple-icons:digitalocean" class="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    DigitalOcean
                  </li>
                  <li><em class="text-slate-400">More coming soon...</em></li>
                </ul>
              </div>
              <NuxtLink to="/docs/install/platform/digitalocean" class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Deploy</NuxtLink>
            </div>
            <div class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-indigo-500/50 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
              <div class="lg:min-w-0 lg:flex-1">
                <h3 class="text-lg font-semibold leading-8 tracking-tight text-indigo-500 dark:text-indigo-300">Legacy Versions</h3>
                <p class="mt-1 text-base leading-7 text-indigo-700 dark:text-indigo-100">Looking for an earlier version of Wiki.js?</p>
              </div>
              <a href="https://js.wiki" class="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-300 ring-1 ring-inset ring-indigo-500 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View Wiki.js v2 <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>