export default defineNuxtPlugin((nuxtApp) => {
    const {
        token,
    } = useAuth()
    const config = useRuntimeConfig()

    const api = $fetch.create({
        baseURL: config.public.baseURL,
        onRequest({ request, options, error }) {
            if (token.value) {
                options.headers.set('Authorization', `${token.value}`)
            }
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                await nuxtApp.runWithContext(() => navigateTo('/login'))
            }
        }
    })

    // Expose to useNuxtApp().$api
    return {
        provide: {
            api
        }
    }
})
