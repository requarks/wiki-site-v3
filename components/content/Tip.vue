<template>
  <div :class="['docs-styled-block not-prose rounded-md bg-green-50 dark:bg-emerald-500/25 border border-green-400 dark:border-emerald-600 p-4', $colorMode.value]">
    <div class="flex">
      <div class="flex-shrink-0">
        <Icon name="uil:check-circle" class="h-5 w-5 text-green-500 dark:text-emerald-500" aria-hidden="true"></Icon>
      </div>
      <div class="ml-3">
        <span class="text-sm font-bold text-green-700 dark:text-emerald-500">{{ title || 'TIP' }}</span>
        <div class="mt-2 text-sm text-green-700 dark:text-emerald-100">
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
    color: #34d399;
  }
}
.docs-styled-block.light {
  :deep(a) {
    color: #16a34a;
  }
}
</style>