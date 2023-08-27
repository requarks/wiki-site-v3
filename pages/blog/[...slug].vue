<template>
  <div class="bg-gradient-to-tr from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 border-b border-solid border-slate-800">
    <div class="mx-auto max-w-5xl pt-8">
      <div class="flex justify-between text-sm">
        <div class="text-sm text-emerald-400">{{ humanDate }}</div>
        <NuxtLink to="/blog" class="text-sky-400 flex items-center">
          <Icon name="tabler:arrow-up-left" class="mr-2" />
          View All Blog Posts
        </NuxtLink>
      </div>
      <main class="prose dark:prose-invert prose-sky pt-2 pb-8 text-gray-900 dark:text-white max-w-full">
        <ContentDoc v-slot="{ doc }">
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </main>
      <div class="pt-6 pb-16 mx-auto border-t-2 border-gray-200 dark:border-gray-600">
        <div class="text-2xl mb-4 font-medium text-gray-600 dark:text-gray-300">Comments</div>
        <div class="bg-zinc-800 text-white rounded-md p-2">
          <div id="remark42" ref="remark42Ref"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DateTime } from 'luxon'

const { page } = useContent()
const humanDate = computed(() => DateTime.fromISO(page.value.date).toFormat('LLLL d, yyyy'))

// REMARK42 Initialization

const remark42Ref = ref(null)
const remark42Instance = ref(null)

function initRemark42() {
  if (window.REMARK42) {
    if (remark42Instance.value) {
      remark42Instance.value.destroy()
    }

    remark42Instance.value = window.REMARK42.createInstance({
      node: remark42Ref.value,
      site_id: 'wiki',
      no_footer: true,
      theme: 'dark',
      show_rss_subscription: false
    })
  }
}

onMounted(() => {
  if (process.client) {
    if (window.REMARK42) {
      initRemark42()
    } else {
      window.addEventListener('REMARK42::ready', () => {
        initRemark42()
      })
    }
  }
})
</script>