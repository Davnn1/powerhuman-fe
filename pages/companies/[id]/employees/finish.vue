<script setup lang="ts">
definePageMeta({
    name: 'employee-finish',
    layout: 'form'
})
const employeeStore = useEmployeeStore()
const photoUrl = employeeStore.employeePayload.photo ? URL.createObjectURL(employeeStore.employeePayload.photo) : undefined

function createEmployee() {
    employeeStore.handleCreateEmployee();
}
</script>

<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">
            Finalizing Profile
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Complete the information to make it more <br>
            easier when introduce to team
        </p>
        <form class="w-full card">
            <div class="flex flex-col items-center mb-[14px]">
                <img :src="photoUrl" width="70" alt="">
                <div class="mt-6 mb-1 text-lg font-semibold">
                    {{ employeeStore.employeePayload.name }}
                </div>
                <p class="text-base text-grey">
                    {{ employeeStore.employeePayload.email }}
                </p>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Phone Number</label>
                <input v-model="employeeStore.employeePayload.phone" type="text" class="input-field">
            </div>
            <button @click.prevent="createEmployee" class="w-full btn btn-primary mt-[14px]">
                Create Employee
            </button>
        </form>
    </section>
</template>

<style scoped>

</style>