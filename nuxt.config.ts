export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'BrandPlanet – Branding, Designing & Printing Agency in Rwanda',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'BrandPlanet is a futuristic experience for branding, designing, and printing. Dive into our creative agency at brandplanet.rw and explore with purpose.' },

        { property: 'og:title', content: 'BrandPlanet – 3D Branding, Designing & Printing Studio in Rwanda' },
        { property: 'og:description', content: 'BrandPlanet lets you explore our branding, design, and print services on a 3D planet with interactive navigation. A modern digital journey for Rwandan brands.' },
        { property: 'og:image', content: 'https://brandplanet.rw/og-preview.jpg' },
        { property: 'og:url', content: 'https://brandplanet.rw/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_RW' },
        { property: 'og:site_name', content: 'BrandPlanet' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'BrandPlanet – 3D Branding & Design' },
        { name: 'twitter:description', content: 'Explore a 3D interactive world of branding, designing, and printing in Rwanda.' },
        { name: 'twitter:image', content: 'https://brandplanet.rw/og-preview.jpg' },
        { name: 'twitter:site', content: '@BrandPlanetRW' },
        { name: 'twitter:creator', content: '@BrandPlanetRW' },

        { name: 'keywords', content: 'Branding, 3D design, Rwanda, Print services, BrandPlanet, brandplanet.rw, Creative Studio' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://brandplanet.rw/' }
      ]
    }
  },

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    '@nuxt/fonts'
  ]
})