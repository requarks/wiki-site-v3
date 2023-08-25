<template>
  <div :class="['docs-styled-block not-prose rounded-md bg-blue-50 dark:bg-sky-500/25 border border-blue-400 dark:border-sky-600 p-4', $colorMode.value]">
    <div class="flex">
      <div class="flex-shrink-0">
        <Icon name="uil:check-circle" class="h-5 w-5 text-blue-500 dark:text-sky-500" aria-hidden="true"></Icon>
      </div>
      <div class="ml-3">
        <span class="text-sm font-bold text-blue-700 dark:text-sky-500">{{ title || 'INFO' }}</span>
        <div class="mt-2 text-sm text-blue-700 dark:text-sky-100">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style lang="scss" scoped>
.docs-styled-block.dark {
  :deep(a) {
    color: #38bdf8;
  }
}
.docs-styled-block.light {
  :deep(a) {
    color: #3b82f6;
  }
}
</style>