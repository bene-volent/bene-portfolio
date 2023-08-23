// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias:{
    "@": resolve(__dirname,"/")
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css:[
    "~/assets/sass/main.scss",
  ],
  modules: ["nuxt-icon","@nuxt/image",'@nuxt/content'],

})
