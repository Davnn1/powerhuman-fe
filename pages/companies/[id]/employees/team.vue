<script setup lang="ts">
definePageMeta({
    name: 'employee-team',
    layout: 'form'
})
const route = useRoute()
const {$api} = useNuxtApp()
const employeeStore = useEmployeeStore()
const {data: teams} = await useAsyncData<ApiResponse<Pagination<Team[]>>>('team', async () => {
    return $api('/team', {
        params: {
            company_id: route.params.id
        }
    });
}, {
    lazy: true,
    server: false
});

const employeeTeam= ( teamId: number) => {
    employeeStore.employeePayload.team_id = teamId
}
</script>

<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">
            Add to Team
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Add your new people to grow the <br>
            company reaching their goals
        </p>
        <div class="w-full card !max-w-[560px] sm:!flex-row items-center justify-between">
            <div class="flex flex-row items-center gap-4">
                <img src="/assets/images/user-f-1.png" width="70" alt="">
                <div>
                    <div class="text-lg font-semibold">
                        {{ employeeStore.employeePayload.name }}
                    </div>
                    <p class="text-base text-grey">
                        {{ employeeStore.employeePayload.email }}
                    </p>
                </div>
            </div>
            <p class="text-right text-grey">
                {{ employeeStore.employeeRole }}
            </p>
        </div>

        <!-- Your Teams -->
        <section class="pt-[50px]">
            <!-- Section Header -->
            <div class="mb-[30px]">
                <div class="flex items-center justify-between gap-6">
                    <div>
                        <div class="text-xl font-medium text-dark">
                            Your Teams
                        </div>
                        <p class="text-grey">Improve your growth</p>
                    </div>
                </div>
            </div>

            <form>
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3 mb-[50px]">
                    <div :key="team.id" v-for="team in teams?.result.data" class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                        <input @click="employeeTeam(team.id)" type="radio" name="productGrowth" id="productGrowth"
                               class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none">
                        <img :src="team.icon" alt="">
                        <div class="mt-6 mb-1 font-semibold text-center text-dark">
                            {{ team.name }}
                        </div>
                        <p class="text-center text-grey">
                            {{ team.employees_count }} People
                        </p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <NuxtLink :to="{ name: 'employee-finish'}" id="continueBtn" class="btn btn-primary">
                        Continue
                    </NuxtLink>
                </div>
            </form>
        </section>
    </section>
</template>

<style scoped>

</style>