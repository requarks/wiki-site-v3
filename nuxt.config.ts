// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {
    documentDriven: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-svgo',
    '@nuxtjs/fontaine'
  ]
})
