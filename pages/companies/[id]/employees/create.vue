<script setup lang="ts">
definePageMeta({
    name: 'employee-create',
    layout: 'form'
})
const employeeStore = useEmployeeStore()
</script>

<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">
            Empower Your Team
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Add your new people to grow the <br>
            company reaching their goals
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Complete Name</label>
                <input v-model="employeeStore.employeePayload.name" type="text" class="input-field">
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Email Address</label>
                <input v-model="employeeStore.employeePayload.email" type="email" class="input-field">
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Gender</label>
                <select v-model="employeeStore.employeePayload.gender" name="" id="" class="appearance-none input-field form-icon-chevron_down">
                    <option value="MALE" selected>Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Age</label>
                <input v-model="employeeStore.employeePayload.age" type="number" class="input-field">
            </div>
            <NuxtLink :to="{ name: 'employee-role'}" class="w-full btn btn-primary mt-[14px]">
                Continue
            </NuxtLink>
        </form>
    </section>
</template>

<style scoped>

</style>