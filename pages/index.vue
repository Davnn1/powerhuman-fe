<script setup lang="ts">
const selectedCompany = ref()
const { data:companies, status } = await usePreFetch<ApiResponse<Company>>('/company',{
    params: {
        limit: 100
    },
    lazy: true,
})
const router = useRouter()

const openCompany = () => {
    router.push({
        name: 'companies-id',
        params: { id: selectedCompany.value }
    })
}
</script>

<template>
    <section class="py-[200px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
        <div class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Companies</label>

                <p v-if="status == 'pending'">Fetching companies...</p>
                <select v-else
                        v-model="selectedCompany"
                        name="companies"
                        id=""
                        class="appearance-none input-field form-icon-chevron_down"
                >
                    <option :value="company.id" v-for="company in companies.result.data">
                        {{ company.name }}
                    </option>
                </select>
            </div>
            <button @click="openCompany" type="button" class="w-full btn btn-primary mt-[14px]">
                Continue
            </button>
            <div class="text-center">or</div>
            <NuxtLink to="/companies/create" class="w-full border btn btn-white">
                Create New Company
            </NuxtLink>
        </div>
    </section>
</template>

<style scoped>

</style>