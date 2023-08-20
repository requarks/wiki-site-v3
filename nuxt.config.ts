// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-svgo',
    '@nuxtjs/fontaine'
  ],

  devtools: {
    enabled: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  }
})
