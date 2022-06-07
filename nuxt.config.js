export default {
  // Source files on src folder
  srcDir: 'src/',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // router: {
  //   base: '/combiendeverres/',
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Combien de Verres?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Styled resources
  styleResources: {
    scss: ['~~/node_modules/sass-rem/_rem.scss', '~/assets/scss/*.scss'],
    hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Combien de Verres',
      author: 'Gustavo Silent',
    },
    manifest: {
      lang: 'en',
      name: 'Combien de Verres',
      short_name: 'CDV',
      description: 'Combien de verres ta bu ce soirée?',
      theme_color: '#eb5252',
      background_color: '#3F3844',
      display: 'fullscreen',
      Scope: '/',
      orientation: 'portrait',
    },
    icons: {
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
