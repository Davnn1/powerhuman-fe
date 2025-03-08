<script setup lang="ts">
const company = ref({
    name: "",
});

const router = useRouter()
const { $api } = useNuxtApp()

async function handleCreateCompany() {
     const res = await $api('/company', {
        method: 'POST',
        body: {
           name : company.value.name,
        }
    })
    await router.push({
        name: 'companies-id',
        params: {id: res?.result.id}
    })
}
</script>

<template>
    <section class="py-[50px] flex flex-col items-center justify-center px-4">
        <img src="/assets/svgs/logo-type.svg" alt="">
        <div class="text-[32px] font-semibold text-dark mt-[70px]">
            Create Company
        </div>
        <form class="w-full card" @submit.prevent="handleCreateCompany">
            <div class="form-group">
                <label for="" class="text-grey">Name</label>
                <input type="text" v-model="company.name" class="input-field">
            </div>
            <button type="submit" class="w-full btn btn-primary mt-[14px]">
                Save
            </button>
            <div class="text-center">or</div>
            <NuxtLink class="w-full btn btn-primary" to="/">
                Back
            </NuxtLink>
        </form>
    </section>
</template>

<style scoped>

</style>