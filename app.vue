<template>
  <HeaderNav />
  <div>
    <NuxtPage />
  </div>
  <FooterNav />
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://rsms.me/'
    },
    {
      rel: 'stylesheet',
      href: 'https://rsms.me/inter/inter.css'
    }
  ]
})
</script>

<style lang="scss">
:root { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  :root { font-family: 'Inter var', sans-serif; }
}

body { 
  background-color: #FFF;
  color: #111827;
}

.dark body {
  background-color: #111827;
  color: #FFF;
}

.docs-styled-block {
  & + & {
    margin-top: 16px;
  }
}
</style>
