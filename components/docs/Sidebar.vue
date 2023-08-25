<template>
  <nav class="text-base lg:text-sm bg-gray-50 dark:bg-gray-950/50 p-6 rounded-lg flex-none basis-[17rem]">
    <ul role="list" className="space-y-9">
      <li v-for="section of props.navigation" :key="section._path">
        <h2 className="font-display font-semibold text-slate-700 dark:text-white">
          {{ section.title }}
        </h2>
        <ul v-if="section.children" role="list" className="mt-2 space-y-2 border-l-2 border-solid border-gray-800 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:lg:border-gray-700">
          <li v-for="link of section.children" :key="link._path" className="relative">
            <NuxtLink :href="link._path" class="block text-slate-500 dark:text-slate-300 w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  navigation: {
    type: Array,
    default: () => ([]),
    required: true
  }
})
</script>