import colors from 'vuetify/es5/util/colors'
import en from 'vuetify/src/locale/en'
import es from 'vuetify/src/locale/es'
const appName = 'Dev-Pills'
const description = 'Personal blog to archive development tutorials, snippets, etc'
let isDev = process.env.NODE_ENV !== 'production'

const nuxtConfigs = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + appName,
    title: appName || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#02796D' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
  loading: '@/components/loading.vue',
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/transitions.scss',
    '@/assets/css/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "@/plugins/NoAutoComplete.js"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-i18n',
    'nuxt-webfontloader',
    '@nuxtjs/pwa'
  ],

  webfontloader: {
    google: {
      families: [
        'Merriweather:100,300,400,500,700,900',
        'IBM Plex Sans:100,300,400,500,700,900',
      ]
    }
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {

  },

  router: {
    middleware: ["syncVuetifyLocale"]
  },

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    vueI18nLoader: true,
    strategy: 'prefix',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  pwa: {
    manifest: {
      name: 'Dev-Pills',
      short_name: 'Dev-Pills',
      theme_color: '#02796D',
      shortcuts : [
        {
          name: "Home",
          url: "/",
          description: "Home page",
          icons: [{ "src": "/shortcut-imgs/apps.png", "sizes": "96x96" }]
        },
        {
          name: "Snippets",
          url: "/snippets",
          description: "Small pieces of code/info",
          icons: [{ "src": "/shortcut-imgs/code-json.png", "sizes": "96x96" }]
        },
        {
          name: "Toolbox",
          url: "/toolbox",
          description: "Various small tools for productivity",
          icons: [{ "src": "/shortcut-imgs/iframe-variable-outline.png", "sizes": "96x96" }]
        },
        {
          name: "About",
          url: "/about",
          description: "Information about the techs used to build this project",
          icons: [{ "src": "/shortcut-imgs/information-outline.png", "sizes": "96x96" }]
        }
      ]
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'IBM Plex Sans'
      },
      icons: 'mdi'
    },
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.teal.base,
          'toolbar-color': '#D0EBE4',
          'bg-color': '#FEFCF9',
          secondary: colors.pink.base,
          accent: colors.indigo.base,
          error: colors.red.base,
          warning: colors.amber.base,
          info: colors.lightBlue.base,
          success: colors.lightGreen.base
        },
        dark: {
          primary: colors.teal.lighten1,
          'toolbar-color': '#002922',
          'bg-color': '#0D0D13',
          secondary: colors.pink.base,
          accent: colors.indigo.lighten2,
          error: colors.red.base,
          warning: colors.amber.base,
          info: colors.lightBlue.base,
          success: colors.lightGreen.base
        }
      },
    },
    lang: {
      locales: { en , es },
      current: 'en',
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    analyze: false,
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  generate: {
    fallback: true
  }
}

if(isDev){
  nuxtConfigs.server = {
    port: 3003, // default: 3000
    host: '0.0.0.0', // default: localhost
  }
}

export default nuxtConfigs;
