// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: [
    'aos/dist/aos.css',
    '@/assets/styles.css', 
  ],

  modules: [
    '@nuxt/content',
  ],
})
