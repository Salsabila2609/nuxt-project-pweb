// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@pinia/nuxt'],

  pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'],
    ],
  },

  ssr: false,

  css: [
    'aos/dist/aos.css',
    '@/assets/styles.css', 
  ],
})
