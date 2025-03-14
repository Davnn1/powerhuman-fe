<script setup lang="ts">
import type {CreateRole} from "~/types/role";
import type {CreateResponsibility} from "~/types/responsibility";

definePageMeta({
    name: 'role-create',
    layout: 'form'
});

const { $api } = useNuxtApp();
const router = useRouter();
const route = useRoute()

const roleName = ref('');
const responsibilities = ref<string[]>(['']);
const isSubmitting = ref(false);

const addResponsibility = () => {
    responsibilities.value.push('');
};

const removeResponsibility = (index: number) => {
    if (responsibilities.value.length > 1) {
        responsibilities.value.splice(index, 1);
    }
};

const saveRole = async () => {
    if (!roleName.value.trim()) {
        alert('Role Name is required');
        return;
    }

    isSubmitting.value = true;
    try {
        const roleResponse = await $api<ApiResponse<CreateRole>>('/role', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: { name: roleName.value, company_id: route.params.id }
        });

        const roleId = roleResponse?.result?.id;
        if (roleId) {
            for (const responsibility of responsibilities.value) {
                if (responsibility.trim()) {
                    await $api<ApiResponse<CreateResponsibility>>('/responsibility', {
                        method: 'POST',
                        headers: { 'Accept': 'application/json' },
                        body: { name: responsibility, role_id: roleId }
                    });
                }
            }
        }

        alert('Role and responsibilities saved successfully!');
        await router.push({name: 'roles'});
    } catch (error) {
        console.error('Error saving role:', error);
        alert('Failed to save role. Please try again.');
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">
            New Role
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Manage your employees to achieve <br>
            a bigger goals for your company
        </p>
        <form class="w-full card" @submit.prevent="saveRole">
            <div class="form-group">
                <label for="roleName" class="text-grey">Role Name</label>
                <input id="roleName" type="text" class="input-field" v-model="roleName" required>
            </div>
            <div class="form-group">
                <label class="text-grey">Responsibility</label>
                <ul class="flex flex-col gap-4">
                    <li v-for="(index) in responsibilities" :key="index" class="inline-flex items-center w-full gap-5">
                        <input type="text" class="w-full input-field" v-model="responsibilities[index]">
                        <button type="button" @click="addResponsibility" v-if="index === responsibilities.length - 1">
                            <img src="/assets/svgs/ric-plus.svg" alt="Add">
                        </button>
                        <button type="button" @click="removeResponsibility(index)" v-if="responsibilities.length > 1">
                            <img src="/assets/svgs/ric-close-red.svg" alt="Remove">
                        </button>
                    </li>
                </ul>
            </div>
            <button type="submit" class="w-full btn btn-primary mt-[14px]" :disabled="isSubmitting">
                {{ isSubmitting ? 'Saving...' : 'Save Role' }}
            </button>
        </form>
    </section>
</template>

<style scoped>
</style>
