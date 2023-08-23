<template>
  <div class="relative mx-auto py-16 flex w-full max-w-7xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
    <DocsSidebar :navigation="navigation" />
    <div class="min-w-0 max-w-2xl flex-auto px-4 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <main class="prose prose-invert prose-sky mx-auto max-w-5xl text-white">
        <ContentDoc />
      </main>
    </div>
  </div>
</template>

<script setup>
import { find } from 'lodash-es'

const sections = [
  { key: 'install', title: 'Getting Started' },
  { key: 'guide', title: 'User Guide' },
  { key: 'editor', title: 'Editing'},
  { key: 'admin', title: 'Administration' },
  { key: 'system', title: 'System' },
  { key: 'dev', title: 'Developers' }
]

const { data: navigation } = await useAsyncData('navigation', async () => {
  const result = []
  const docsRoot = (await fetchContentNavigation('docs'))[0].children
  for (const section of sections) {
    result.push({
      ...find(docsRoot, item => item._path === `/docs/${section.key}`),
      title: section.title
    })
  }
  return result
})

</script>