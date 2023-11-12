<script setup lang="ts">
import { ref, watch } from 'vue';
import { type IUserForm } from "../../core";
import UserForm from "./UserForm.vue";
import { createUser } from '@/services/apiService';

interface Props {
    viewForm: boolean
}

const props = defineProps<Props>()
const _viewModal = ref(false)

watch(props, () => {
    _viewModal.value = props.viewForm;
})

async function create(form: IUserForm) {
    //call api request
    try {
        let formData = new FormData()
        formData.append('image', form.image, form.image.name)
        formData.set('first_name', form.first_name)
        formData.set('last_name', form.last_name)
        formData.set('email', form.email)
        form.description && formData.set('description', form.description)
        form.phone_numbe && formData.set('phone_number', form.phone_number)
        await createUser(formData)
        _viewModal.value = false

    } catch (error) {
        console.log(error)
    }

}
</script>


<template>
    <div>
        <UserForm :isCreate="true" @submit:form="create" v-model:viewForm="_viewModal" />
    </div>
</template>

<style scoped></style>