<script setup lang="ts">
const {
    status,
    data,
    lastRefreshedAt,
    token,
} = useAuth()

onMounted(() => {
    console.log(status)
    console.log(data.value?.id)
    console.log(lastRefreshedAt)
    console.log(token)
})
</script>

<template>
    <section class="py-[200px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
        <div class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Companies</label>

                <p v-if="true">Fetching companies...</p>
                <!--                <select v-else-->
                <!--                        v-model=""-->
                <!--                        name="companies"-->
                <!--                        id=""-->
                <!--                        class="appearance-none input-field form-icon-chevron_down"-->
                <!--                >-->
                <!--                    <option :value="company.id" v-for="company in companies.data.result.data">-->
                <!--                        {{ company.name }}-->
                <!--                    </option>-->
                <!--                </select>-->
            </div>
            <button @click="" type="button" class="w-full btn btn-primary mt-[14px]">
                Continue
            </button>
            <div class="text-center">or</div>
            <NuxtLink class="w-full border btn btn-white">
                Create New Company
            </NuxtLink>
        </div>
    </section>
</template>

<style scoped>

</style>