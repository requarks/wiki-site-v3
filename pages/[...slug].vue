<template>
  <main class="grid min-h-full place-items-center bg-gray-950 px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-2xl font-semibold text-rose-500">404</p>
      <SvgoDisappearing class="mx-auto w-auto h-30" :fontControlled="false" filled />
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
      <p class="mt-6 text-base leading-7 text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/" class="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">Go back home</a>
        <a href="https://github.com/requarks/wiki" class="text-sm font-semibold text-rose-200">GitHub repository <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </main>
</template>
