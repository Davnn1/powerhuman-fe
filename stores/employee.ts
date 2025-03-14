export const useEmployeeStore = defineStore('employee', () => {
    const employeePayload = ref<CreateEmployeePayload>({
        name: '',
        email: '',
        gender: undefined,
        age: 0,
        phone: '',
        photo: null,
        team_id: 0,
        role_id: 0,
    });
    const employeeRole = ref()
    const router = useRouter();
    const {$api} = useNuxtApp();

    async function handleCreateEmployee() {
        try {
            await $api<ApiResponse<CreateEmployeeResponse>>('/employee', {
                method: 'POST',
                body: {
                    name: employeePayload.value?.name,
                    email: employeePayload.value?.email,
                    gender: employeePayload.value?.gender,
                    age: employeePayload.value?.age,
                    phone: employeePayload.value?.phone,
                    photo: employeePayload.value?.photo,
                    team_id: employeePayload.value?.team_id,
                    role_id: employeePayload.value?.role_id,
                }
            });
            await router.push({name: 'employees'});
        } catch (error) {
            console.error('Failed to create employee:', error);
        }
    }

    return {employeePayload, employeeRole, handleCreateEmployee};
});