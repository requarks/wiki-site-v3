<template>
  <div class="bg-white dark:bg-gray-900 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Latest Blog Posts</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">Stay up-to-date with the latest developments and what's coming next.</p>
      </div>
      <div v-for="year of years" :key="year[0]" class="bg-gray-50 dark:bg-gray-800 px-6 py-6 mt-4 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        <h3 class="mb-6 font-semibold text-emerald-500 dark:text-emerald-400 text-2xl border-b border-emerald-600">{{ year[0] }}</h3>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in year[1]" :key="post._id" class="flex max-w-xl flex-col items-start">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.date" class="text-sky-700 dark:text-blue-300">{{ post.dateHuman }}</time>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 group-hover:text-sky-500">
                <NuxtLink :to="post._path">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ post.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DateTime } from 'luxon'
import { groupBy, toPairs } from 'lodash-es'

const { data } = await useAsyncData(`content`, () => {
  return queryContent('blog')
    .where({ _draft: false, _empty: false, _path: { $ne: '/blog' } })
    .only(['_id', 'title', 'description', 'date', '_path', 'tags'])
    .sort({ date: -1 })
    .find()
})

const years = toPairs(groupBy(data.value.map(p => {
  const postDate = DateTime.fromISO(p.date)
  return {
    ...p,
    dateYear: postDate.toFormat('yyyy'),
    dateHuman: postDate.toFormat('LLLL d, yyyy')
  }
}), 'dateYear')).reverse()
</script>