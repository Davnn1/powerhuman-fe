<script setup lang="ts">
definePageMeta({
    auth: {unauthenticatedOnly: true, navigateAuthenticatedTo: '/'}
})

const {
    signUp,
} = useAuth()

const router = useRouter()

const {name, email, password} = reactive({
    name: 'Davin',
    email: 'davin1@gmail.com',
    password: 'password',
})

const register = async () => {
    await signUp({
        email,
        password,
        name,
    }, undefined, {preventLoginFlow: true})
    await router.push('/login')
}
</script>

<template>
    <section class="py-[50px] flex flex-col items-center justify-center px-4">
        <img src="/assets/svgs/logo-type.svg" alt="">
        <div class="text-[32px] font-semibold text-dark mt-[70px]">
            Sign Up
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Manage your employees to achieve <br> a bigger goals for your company
        </p>
        <form class="w-full card" @submit.prevent="register">
            <div class="form-group">
                <label for="" class="text-grey">Name</label>
                <input type="text" v-model="name" class="input-field">
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Email Address</label>
                <input type="email" v-model="email" class="input-field">
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Password</label>
                <input type="password" v-model="password" class="input-field">
            </div>
            <button type="submit" class="w-full btn btn-primary mt-[14px]">
                Register
            </button>
            <NuxtLink to="/login" class="w-full btn btn-primary">
                Sign In
            </NuxtLink>
        </form>
    </section>
</template>

<style scoped>

</style>