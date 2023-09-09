import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper', 'nuxt-icon', '@pinia/nuxt'],
  swiper: {
    modules: ['autoplay', 'effect-creative', 'navigation']
  },
  components: [{ path: '~/ui' }, '~/components'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_variables.scss" as *; @use "@/assets/_mixins.scss" as *;'
        }
      }
    }
  }
})
