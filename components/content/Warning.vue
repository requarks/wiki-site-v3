<template>
  <div :class="['docs-styled-block not-prose rounded-md bg-orange-50 dark:bg-amber-500/25 border border-orange-400 dark:border-amber-600 p-4', $colorMode.value]">
    <div class="flex">
      <div class="flex-shrink-0">
        <Icon name="uil:exclamation-triangle" class="h-5 w-5 text-orange-500 dark:text-amber-500" aria-hidden="true"></Icon>
      </div>
      <div class="ml-3">
        <span class="text-sm font-bold text-orange-700 dark:text-amber-500">{{ title || 'WARNING' }}</span>
        <div class="mt-2 text-sm text-orange-700 dark:text-amber-100">
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
  color: #fbbf24;
}
.docs-styled-block.light :deep(a) {
  color: #ea580c;
}
</style>