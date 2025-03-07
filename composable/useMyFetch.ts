export const useMyFetch: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()
    const {
        token,
    } = useAuth()
    return useFetch(request, {
        baseURL: config.public.baseURL, onRequest({options}) {
            options.headers.set('Authorization', `${token.value}`)
        }, ...opts
    })
}