import siteConfig from './siteConfig.js'

export default {
  mode: 'spa',
  // mode: 'universal',
  target: 'static',
  modern: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Welcome',
    titleTemplate: `%s - ${siteConfig.site.name}`,
    // htmlAttrs: {
    //   'data-theme': 'dark'
    // },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: siteConfig.site.description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#448AFF' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: 'plugins/vue-closable.js', mode: 'client' },
    { src: 'plugins/vue-animejs.js', mode: 'client' },
    { src: 'plugins/vue-unicons.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      'nuxt-social-meta',
      {
        url: siteConfig.site.url,
        title: siteConfig.site.name,
        description: siteConfig.site.description,
        // img: 'Link to image in static folder',
        locale: siteConfig.site.locale,
        twitter: '@themebiotic',
        twitter_card: 'summary_large_image',
        themeColor: '#FFFFFF'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-responsive-loader'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  },
  // Doc: https://bootstrap-vue.js.org
  bootstrapVue: {
    icons: false, // Install the IconsPlugin
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    usePretranspiled: true,
    components: [
      'BAlert',
      'BBadge',
      'BContainer',
      'BRow',
      'BCol',
      'BForm',
      'BFormRow',
      'BFormGroup',
      'BFormInput',
      'BFormInvalidFeedback',
      'BFormValidFeedback',
      'bFormTextarea',
      'BButton',
      'BPagination',
      // 'BPaginationNav',
      'BNav',
      'BNavItem',
      'BNavText'
    ]
  },
  pwa: {
    manifest: {
      name: siteConfig.site.name,
      lang: siteConfig.site.lang
    },
    workbox: {
      /* issue : github.com/nuxt-community/pwa-module/issues/176 */
      // cachingExtensions: '@/plugins/workbox.js'
    }
  },
  styleResources: {
    scss: ['~/assets/scss/_variables.scss'],
    sass: ['~/assets/scss/_variables.scss']
  },
  webfontloader: {
    google: {
      families: [
        'Montserrat:300,400,500,700,900',
        'Playfair+Display:400,700&display=swap'
      ]
    }
  },
  responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    // min: 320, // minimum image width generated
    // max: 1024, // maximum image width generated
    // steps: 5, // five sizes per image will be generated
    sizes: [320, 640, 1024, 2048],
    quality: 85,
    placeholder: true,
    adapter: require('responsive-loader/sharp'),
    // format: 'webp'
    format: 'jpeg'
  },
  generate: {
    routes() {
      // dynamic routes
      return [
        '404',
        '/blog/blog-post',
        '/collections/animals',
        '/collections/landscape',
        '/collections/architecture',
        '/collections/arts_culture',
        '/collections/people'
      ].map((item) => {
        return item
      })
    }
  },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    runtimeChunk: 'single',
    splitChunks: {
      name: true,
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    },
    terser: {
      extractComments: {
        filename: 'LICENSES'
      },
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
