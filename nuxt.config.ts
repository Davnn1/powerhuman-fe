// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  spaLoadingTemplate: true,
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@sidebase/nuxt-auth'],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_API_URL || '/api'
    }
  },
  auth: {
    baseURL: process.env.NUXT_API_URL,
    globalAppMiddleware: true,
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
        getSession: { path: '/user', method: 'get' },
      },
      session: {
        dataResponsePointer: '/result/user',
        dataType: {
          id: 'string | number',
          name: 'string',
          email: 'string',
          email_verified_at: 'string | null',
          current_team_id: 'number | null',
          profile_photo_path: 'string | null',
          created_at: 'string',
          updated_at: 'string',
          two_factor_confirmed_at: 'string | null',
          profile_photo_url: 'string',
        }
      },
      token: {
        signInResponseTokenPointer: '/result/access_token',
        type: 'Bearer',
        cookieName: 'auth.token',
        headerName: 'Authorization',
        maxAgeInSeconds: 1800,
        sameSiteAttribute: 'lax',
        cookieDomain: '',
        secureCookieAttribute: false,
        httpOnlyCookieAttribute: false,
      },
      pages: {
        login: '/login',
      }
    }
  }})