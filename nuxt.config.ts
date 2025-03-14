// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  spaLoadingTemplate: false,
  css: ['~/assets/css/main.css'],

  imports: {
    dirs: ['types/*.ts', 'stores/*.ts', 'types/**/*.ts'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@sidebase/nuxt-auth', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['stores/**'],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_API_URL || '/api'
    }
  },

  auth: {
    baseURL: process.env.NUXT_API_URL,
    globalAppMiddleware: true,
    sessionRefresh: {
      enableOnWindowFocus: false,
    },
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
        getSession: { path: '/user', method: 'get' },
      },
      session: {
        dataResponsePointer: '/result',
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
      },
      pages: {
        login: '/login',
      }
    }
  },

  devtools: {
    timeline: {
      enabled: true
    }
  }
})