<template>
  <div class="bg-slate-800 bg-gradient-to-tr from-blue-950 to-blue-900 py-16 sm:py-24 border-y border-solid border-t-blue-600 border-b-blue-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-blue-200 sm:text-4xl">
          Dev Blog
          <Icon name="uil:flask" class="h-10 w-10 flex-none text-blue-300" aria-hidden="true" />
        </h2>
        <p class="mt-2 text-lg leading-8 text-blue-400">Stay up-to-date with the latest developments and what's coming next.</p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post._id" class="flex bg-blue-800/20 py-8 px-8 rounded-xl border border-solid border-blue-800 shadow-lg max-w-xl flex-col items-start">
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post._date" class="text-blue-300">{{ post.dateHuman }}</time>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-300">
              <NuxtLink :to="post._path">
                <span class="absolute inset-0" />
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-blue-200">{{ post.description }}</p>
          </div>
        </article>
      </div>
      <div class="mt-8 flex justify-end gap-x-8 gap-y-6 rounded-xl p-8 ring-1 ring-blue-500/50 sm:gap-y-10 sm:p-4 lg:col-span-2 lg:flex-row lg:items-center">
        <NuxtLink to="/blog" class="rounded-lg px-3.5 py-2 text-sm font-semibold leading-6 text-blue-300 ring-1 ring-inset ring-blue-500 hover:ring-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">View All Articles <span aria-hidden="true">&rarr;</span></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DateTime } from 'luxon'

const { data } = await useAsyncData(`content`, () => {
  return queryContent('blog')
    .where({ _draft: false, _empty: false, _path: { $ne: '/blog' } })
    .only(['_id', 'title', 'description', 'date', '_path', 'tags'])
    .sort({ date: -1 })
    .limit(3)
    .find()
})

const posts = data.value.map(p => ({
  ...p,
  dateHuman: DateTime.fromISO(p.date).toFormat('LLLL d, yyyy')
}))
</script>