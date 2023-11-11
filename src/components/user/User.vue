<script setup lang="ts">
import { ref } from 'vue'
import CreateUserForm from "./CreateUserForm.vue";

const viewCreateForm = ref(false)

// function createUserhandler(event) {
//     console.log(event,'handler')
//     viewCreateForm.value = true
// }
</script>


<template>
    users here
    <b-button @click="viewCreateForm = true"> create</b-button>
    <CreateUserForm v-model:viewForm="viewCreateForm" />
</template>