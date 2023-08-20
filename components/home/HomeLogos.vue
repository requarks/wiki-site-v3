<template>
  <div class="bg-gray-900 py-16 sm:py-24 border-b border-solid border-gray-700">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-white">Sponsors & Backers</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">This open source project is made possible thanks to our generous sponsors and backers.</p>
          <div class="mt-8 flex items-center gap-x-6">
            <a href="#" class="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Donate</a>
            <a href="#" class="text-sm font-semibold text-white">View List <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2">
          <div class="bg-white/5 hover:bg-white/10 p-8 sm:p-10">
            <a href="https://www.browserstack.com/" target="_blank"><SvgoBrowserstack class="max-h-12 w-full object-container" :fontControlled="false" filled /></a>
          </div>
          <div class="bg-white/5 hover:bg-white/10 p-6 sm:p-10">
            <a href="https://canny.io/" target="_blank"><SvgoCanny class="max-h-12 w-full object-container" :fontControlled="false" filled /></a>
          </div>
          <div class="bg-white/5 hover:bg-white/10 p-6 sm:p-10">
            <a href="https://icons8.com/" target="_blank"><SvgoIcons8 class="max-h-12 w-full object-container" :fontControlled="false" filled /></a>
          </div>
          <div class="bg-white/5 hover:bg-white/10 p-6 sm:p-10">
            <a href="https://localazy.com/" target="_blank"><SvgoLocalazy class="max-h-12 w-full object-container translate-y-1" :fontControlled="false" filled /></a>
          </div>
          <div class="bg-white/5 hover:bg-white/10 p-6 sm:p-10">
            <a href="https://www.macstadium.com/" target="_blank"><SvgoMacstadium class="max-h-12 w-full object-container" :fontControlled="false" filled /></a>
          </div>
          <div class="bg-white/5 hover:bg-white/10 p-6 sm:p-10">
            <a href="https://www.netlify.com/" target="_blank"><SvgoNetlify class="max-h-12 w-full object-container" :fontControlled="false" filled /></a>
          </div>
          <div class="bg-white/5 hover:bg-white/10 p-6 sm:p-10">
            <a href="https://ngrok.com/" target="_blank"><SvgoNgrok class="max-h-12 w-full object-container" :fontControlled="false" filled /></a>
          </div>
          <div class="bg-white/5 hover:bg-white/10 p-6 sm:p-10">
            <a href="https://www.porkbun.com/" target="_blank"><SvgoPorkbun class="max-h-12 w-full object-container" :fontControlled="false" filled /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>