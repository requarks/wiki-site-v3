<template>
  <nav class="text-base lg:text-sm">
    <ul role="list" className="space-y-9">
      <li v-for="section of props.navigation" :key="section._path">
        <h2 className="font-display font-medium text-slate-100 text-white">
          {{section.title}}
        </h2>
        <ul v-if="section.children" role="list" className="mt-2 space-y-2 border-l-2 border-solid border-gray-800 lg:mt-4 lg:space-y-4 lg:border-gray-700">
          <li v-for="link of section.children" :key="link._path" className="relative">
            <NuxtLink :href="link._path" class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full">
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