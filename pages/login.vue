<script setup lang="ts">
const {
    status,
    data,
    lastRefreshedAt,
    token,
    getSession,
    signUp,
    signIn,
    signOut,
} = useAuth()
definePageMeta({
    auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/' }
})
const { email, password } = reactive({
    email: 'davin@gmail.com',
    password: 'password',
})

const login = async (e: MouseEvent) => {
    try {
        e.preventDefault()
        let res = await signIn(
            {
                email,
                password,
            }, { callbackUrl: '/' }
        )
        console.log("res", res);
    } catch (error) {
        console.log("error", error);
    }
}
</script>

<template>
    <section class="py-[50px] flex flex-col items-center justify-center px-4">
        <img src="/assets/svgs/logo-type.svg" alt="">
        <div class="text-[32px] font-semibold text-dark mt-[70px]">
            Sign In
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Manage your employees to achieve <br> a bigger goals for your company
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Email Address</label>
                <input v-model=email :type="email" class="input-field">
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Password</label>
                <input v-model="password" type="password" class="input-field">
            </div>
            <button @click="login" class="w-full btn btn-primary mt-[14px]">
                Login
            </button>
            <NuxtLink class="w-full btn btn-primary" to="/register">
                Sign Up
            </NuxtLink>
        </form>
    </section>
</template>

<style scoped>

</style>