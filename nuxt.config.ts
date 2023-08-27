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
    },
    highlight: {
      theme: 'github-dark',
      preload: ['json', 'js', 'css', 'graphql', 'html', 'shell', 'md', 'yaml']
    }
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-svgo',
    '@nuxtjs/tailwindcss',
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
