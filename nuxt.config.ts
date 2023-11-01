import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  app:{
    head:{
      meta:[
        {charset:"utf-8"},
        {name:"viewport", content:"width=device-width, initial-scale=1.0"},
        {name:"description",content:"It's a Ecommerce webite."},
        {name:"author", content:"ecommerce-tema"},

      ],
    }
  },
  devtools: { enabled: true }
})
