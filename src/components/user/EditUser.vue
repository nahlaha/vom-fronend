<script setup lang="ts">
import { ref, watch } from 'vue';
import { type IUserForm } from "../../core";
import UserForm from "./UserForm.vue";

interface Props {
    viewForm: boolean
    user: IUserForm
}

const props = defineProps<Props>()
const _viewModal = ref(false)
const form = ref<IUserForm>({})

watch(props, () => {
    _viewModal.value = props.viewForm;
    console.log('edit form props', props)
    form.value = props.user;
})

function update(updatedForm:IUserForm) {
    //console.log('v$', v$.value)
    //call api request
    let formData = new FormData()
    if (updatedForm.image) {
        formData.append('image', updatedForm.image, updatedForm.image.name)
    }
    formData.set('first_name', updatedForm.first_name)
    formData.set('last_name', updatedForm.last_name)
    formData.set('email', updatedForm.email)
    formData.set('description', updatedForm.description)
    formData.set('phone_number', updatedForm.phone_number)

    fetch(`http://localhost:8000/api/v1/users/${form.value.id}`, {
        method: 'put',
        mode: "cors",
        headers: {
            "accept": "application/json, text/plain, */*",
            // "Content-Type": "application/json"
            // "Content-Type": "multipart/form-data"
        },
        body: formData
    }).then((data) => {
        console.log(data)
        // _viewModal.value = false
    })
}
</script>


<template>
    <div>
        <UserForm :form="form" :isCreate="false" @submit:form="update" v-model:viewForm="_viewModal" />
    </div>
</template>

<style scoped></style>