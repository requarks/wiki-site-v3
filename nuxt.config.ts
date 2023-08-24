// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: '',
    fallback: 'dark'
  },
  content: {
    documentDriven: {
      page: true,
      injectPage: true
    }
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-svgo',
    '@nuxtjs/fontaine'
  ],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  tailwindcss: {
    viewer: false
  }
})
