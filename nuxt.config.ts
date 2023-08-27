// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias:{
    "@": resolve(__dirname,"/")
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css:[
    "~/assets/sass/global.scss",
  ],
  modules: ["nuxt-icon","@nuxt/image",'@nuxt/content'],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  }

})
