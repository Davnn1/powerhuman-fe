import type { UseFetchOptions } from 'nuxt/app'
//
// export const usePreFetch: typeof useFetch = (request, opts?) => {
//     const { $api } = useNuxtApp()
//     const config = useRuntimeConfig()
//     const {
//         token,
//     } = useAuth()
//     return useFetch(request, {
//         baseURL: config.public.baseURL, onRequest({options}) {
//             options.headers.set('Authorization', `${token.value}`)
//         }, ...opts
//     })
// }

export function usePreFetch<T>(
    url: string | (() => string),
    options?: UseFetchOptions<T>,
) {
    return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$api as typeof $fetch
    })
}