<script setup lang="ts">
import type {CreateTeam} from "~/types/team";

definePageMeta({
    name: 'team-create',
    layout: 'form'
})

const {
    data,
} = useAuth()

const email = computed(() => data.value?.email || '')
const router = useRouter()
const route = useRoute()
const { $api } = useNuxtApp()

const name = ref('memberbaru@gmail.com');
const companyId = route.params.id

async function handleCreateTeam() {
    await $api<ApiResponse<CreateTeam>>('/team', {
        method: 'POST',
        body: {
            company_id: companyId,
            name: name.value
        }
    })
    await router.push({
        name: 'teams',
    })
}
</script>

<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">
            Build New Team
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Team that can bring your company <br>
            growing bigger and bigger
        </p>
        <form class="w-full card">
            <div class="mb-[2px] mx-auto">
                <img src="/assets/svgs/ric-box.svg" alt="">
            </div>
            <div class="form-group">
                <label for="email" class="text-grey">Email Address</label>
                <input type="email" id="email" class="input-field disabled:bg-grey disabled:outline-none"
                       v-model="email" disabled>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Team Name</label>
                <input type="text" class="input-field" v-model="name">
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Status</label>
                <select name="" id="" class="appearance-none input-field form-icon-chevron_down">
                    <option value="" selected>Active</option>
                    <option value="">Inactive</option>
                </select>
            </div>
            <a @click.prevent="handleCreateTeam" class="w-full btn btn-primary mt-[14px]">
                Continue
            </a>
        </form>
    </section>
</template>

<style scoped>

</style>