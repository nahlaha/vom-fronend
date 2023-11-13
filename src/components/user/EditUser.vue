<script setup lang="ts">
import { ref, watch } from 'vue';
import { type IUserForm } from "../../core";
import UserForm from "./UserForm.vue";
import { updateUser } from '@/services/apiService';

interface Props {
    viewForm: boolean
    user: IUserForm
}

const props = defineProps<Props>()
const _viewModal = ref(false)
const form = ref<IUserForm>({})
const emit = defineEmits(['updateHandler'])

watch(props, () => {
    _viewModal.value = props.viewForm;
    form.value = props.user;
})

async function update(updatedForm: IUserForm) {
    //call api request
    try {
        let formData = new FormData()
        updatedForm.image && formData.append('image', updatedForm.image, updatedForm.image.name)
        updatedForm.first_name && formData.set('first_name', updatedForm.first_name)
        updatedForm.last_name && formData.set('last_name', updatedForm.last_name)
        updatedForm.email && formData.set('email', updatedForm.email)
        updatedForm.description && formData.set('description', updatedForm.description)
        updatedForm.phone_number && formData.set('phone_number', updatedForm.phone_number)
        await updateUser(form.value.id ?? 0, formData)
        _viewModal.value = false
        emit('updateHandler');

    } catch (error) {
        console.log(error)
    }
}
</script>


<template>
    <div>
        <UserForm :form="form" :isCreate="true" @submit:form="update" v-model:viewForm="_viewModal" />
    </div>
</template>

<style scoped></style>