<script setup lang="ts">
import type {Pagination} from "~/types/generalResponse";
import type {Role} from "~/types/role";
import type {Responsibility} from "~/types/responsibility";

definePageMeta({
    name: 'employee-role',
    layout: 'form'
})
const route = useRoute()
const {$api} = useNuxtApp()
const employeeStore = useEmployeeStore()

const roleId = computed(() => employeeStore.employeePayload.role_id)

const {data: roles, status} = await useAsyncData<ApiResponse<Pagination<Role[]>>>('role', async () => {
    return $api('/role',{
        params: {
            with_responsibility: true
        }
    });
}, {
    lazy: true,
    server: false
});

const { data: responsibilities, execute } = await usePreFetch<ApiResponse<Pagination<Responsibility[]>>>('/responsibility',{
    params: {
        limit: 100,
        role_id: roleId
    },
    immediate:false,
    watch: false
})

watch(() => employeeStore.employeePayload.role_id, (value) => {
    if (value) {
        employeeStore.employeeRole = roles.value?.result.data.find(role => role.id === roleId.value)?.name || ''
        execute();
    }
});
</script>

<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">
            Give a Role
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Complete the information to make it more <br>
            easier when introduce to team
        </p>
        <form class="w-full card">
            <div class="flex flex-col items-center mb-[14px]">
                <img src="/assets/images/user-f-1.png" width="70" alt="">
                <div class="mt-6 mb-1 text-lg font-semibold">
                    {{ employeeStore.employeePayload.name }}
                </div>
                <p class="text-base text-grey">
                    {{ employeeStore.employeePayload.email }}
                </p>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Select Role</label>

                <p v-if="status == 'pending'">Fetching Role...</p>
                <select v-else
                        v-model="employeeStore.employeePayload.role_id"
                        name="companies"
                        id=""
                        class="appearance-none input-field form-icon-chevron_down"
                >
                    <option :key="role.id" :value="role.id" v-for="role in roles?.result.data">
                        {{ role.name }}
                    </option>
                </select>
            </div>
            <!-- Responsibilities -->
            <section>
                <label for="" class="text-grey">
                    Responsibilities
                </label>
                <div class="flex flex-col gap-4 mt-[10px]">
                    <div :key="responsibility.id" v-for="responsibility in responsibilities?.result.data" class="flex items-start md:items-center gap-[6px]">
                        <img src="/assets/svgs/ic-check-circle.svg" alt="">
                        <span class="text-sm text-dark">
                           {{ responsibility.name }}
                        </span>
                    </div>
                </div>
            </section>
            <NuxtLink :to="{ name: 'employee-team'}" class="w-full btn btn-primary mt-[14px]">
                Continue
            </NuxtLink>
        </form>
    </section>
</template>

<style scoped>

</style>