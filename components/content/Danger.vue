<template>
  <div :class="['docs-styled-block not-prose rounded-md bg-red-50 dark:bg-rose-500/25 border border-red-400 dark:border-rose-600 p-4', $colorMode.value]">
    <div class="flex">
      <div class="flex-shrink-0">
        <Icon name="uil:exclamation-triangle" class="h-5 w-5 text-red-500 dark:text-rose-500" aria-hidden="true"></Icon>
      </div>
      <div class="ml-3">
        <span class="text-sm font-bold text-red-700 dark:text-rose-500">{{ title || 'DANGER' }}</span>
        <div class="mt-2 text-sm text-red-700 dark:text-rose-100">
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
.docs-styled-block.dark :deep(a) {
  color: #fda4af;
}
.docs-styled-block.light :deep(a) {
  color: #dc2626;
}
</style>