// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  algolia: {
    apiKey: '6b8d774b8274e2f0ece9ea09b411c900',
    applicationId: '3HYAPWEOVH',
    globalIndex: 'wiki',
    docSearch: {
      apiKey: '6b8d774b8274e2f0ece9ea09b411c900',
      applicationId: '3HYAPWEOVH',
      indexName: 'wiki',
      placeholder: 'Search'
    },
    crawler: process.env.ALGOLIA_CRAWLER_API_KEY ? {
      apiKey: process.env.ALGOLIA_CRAWLER_API_KEY,
      indexName: 'wiki',
      meta: ['title', 'description'],
      include: route => {
        return route.startsWith('/docs/') && !route.endsWith('.json') && !route.endsWith('.html')
      }
    } : false
  },
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
    '@nuxtjs/algolia',
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
