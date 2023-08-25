<template>
  <div class="docs relative mx-auto py-8 flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
    <DocsSidebar :navigation="navigation" />
    <div class="min-w-0 max-w-2xl flex-auto px-4 lg:max-w-none py-8 lg:pl-8 lg:pr-0 xl:px-16">
      <main class="docs-content prose dark:prose-invert mx-auto max-w-5xl text-gray-800 dark:text-white" ref="docs-content">
        <ContentDoc />
      </main>
    </div>
    <div v-if="toc && toc.links && toc.links.length > 0" class="hidden xl:sticky xl:top-[6rem] xl:-mr-6 xl:block xl:h-[calc(100vh-20rem)] xl:flex-none xl:overflow-y-auto xl:py-10 xl:pr-6 max-w-10 overflow-x-hidden">
      <div class="font-semibold text-sm text-white">Page Contents</div>
      <ol role="list" class="mt-4 space-y-3 text-sm">
        <li v-for="item of toc.links" :key="item.id">
          <a :href="`#${item.id}`" :class="[item.id === state.currentlyActiveToc ? 'font-medium text-emerald-600 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-200' : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300']">{{ item.text }}</a>
          <ol role="list" class="mt-2 space-y-3 pl-5 text-xs text-slate-500 dark:text-slate-400">
            <li v-for="sub of item.children" :key="sub.id">
              <a :href="`#${sub.id}`" :class="[sub.id === state.currentlyActiveToc ? 'font-semibold text-emerald-600 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-200' : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300']">{{ sub.text }}</a>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { find } from 'lodash-es'

// Left Navigation

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

// Page Contents

const docsContent = ref(null)
const { toc } = useContent()
const state = reactive({
  currentlyActiveToc: null,
  observer: null,
  observerOptions: {
    root: docsContent.value,
    threshold: 0
  }
})

onMounted(() => {
  state.observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const id = entry.target.getAttribute("id")
      if (entry.isIntersecting) {
        state.currentlyActiveToc = id
        break
      }
    }
  }, state.observerOptions)

  document
    .querySelectorAll('.docs-content h2[id], .docs-content h3[id]')
    .forEach(section => {
      state.observer.observe(section)
    })
})

onBeforeUnmount(() => {
  state.observer.disconnect()
})

</script>

<style lang="scss">
.docs {
  max-width: 90rem;
}

.docs-content {
  a {
    color: #38bdf8;

    &:hover {
      color: #0284c7;
    }
  }
  h2, h3 {
    > a {
      color: #FFF;
      text-decoration: none;

      &:hover {
        color: #f0f9ff;
      }
    }
  }
  kbd {
    color: #ddd6fe;
    background-color: rgba(#ddd6fe, .1);
    border: 1px solid rgba(#ddd6fe, .25);
    border-radius: 4px;
    padding: 1px 5px;
  }
  .docs-styled-block a {
    font-weight: 600;
  }
  img {
    border-radius: 0.375rem;
  }
  strong {
    color: #fb7185;
    font-weight: 500;
  }
  .docs-styled-block strong {
    color: inherit;
    font-weight: 700;
  }
}
</style>