import tailwindTypography from '@tailwindcss/typography'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-svgo',
    '@nuxtjs/fontaine'
  ],

  devtools: {
    enabled: true
  },

  tailwindcss: {      
    config: {
      plugins: [
          tailwindTypography({ className: 'prose' })
      ]
    }
  }
})
