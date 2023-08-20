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
@use "~/assets/scss/main.scss";
</style>
