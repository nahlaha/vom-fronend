<script setup lang="ts">
import { ref, watch } from 'vue';
import { type IUserForm } from "../../core";
import UserForm from "./UserForm.vue";

interface Props {
    viewForm: boolean
}

const props = defineProps<Props>()
const _viewModal = ref(false)

watch(props, () => {
    _viewModal.value = props.viewForm;
})

function create(form: IUserForm) {
    //call api request
    let formData = new FormData()
    formData.append('image', form.image, form.image.name)
    formData.set('first_name', form.first_name)
    formData.set('last_name', form.last_name)
    formData.set('email', form.email)
    formData.set('description', form.description)
    formData.set('phone_number', form.phone_number)

    fetch('http://localhost:8000/api/v1/users/', {
        method: 'POST',
        mode: "cors",
        headers: {
            "accept": "application/json, text/plain, */*",
            // "Content-Type": "application/json"
            // "Content-Type": "multipart/form-data"
        },
        body: formData
    }).then((data) => {
        _viewModal.value = false
    })

}
</script>


<template>
    <div>
        <UserForm :isCreate="true" @submit:form="create" v-model:viewForm="_viewModal" />
    </div>
</template>

<style scoped>
.error {
    border-color: red;
}

.input-errors {
    color: red;
}
</style>