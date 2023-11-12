<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CreateUser from "./CreateUser.vue";
import type { IUser } from "../../core";
import Loader from "../shared/Loader.vue";
import UserItem from "./UserItem.vue";

const viewCreateForm = ref(false)
const isLoading = ref(false)
let users = ref<IUser[]>([])
// function createUserhandler(event) {
//     console.log(event,'handler')
//     viewCreateForm.value = true
// }

onMounted(async () => {
    console.log(`the component is now mounted.`)
    isLoading.value = true;
    const x = await fetch('http://localhost:8000/api/v1/users/', {
        method: "get",
        mode: "cors",
        headers: {
            "accept": "application/json, text/plain, */*",
            // "Content-Type": "application/json"
            // "Content-Type": "multipart/form-data"
        },
    })
    const data = await x.json();
    console.log('data', data)
    //.then((data) => {
    //     console.log(data)
    //     _viewModal.value = false
    // })
    isLoading.value = false;
    users.value = data.data.data

})

</script>


<template>
    <Loader v-if="isLoading" />
    <b-container>
        <b-row>
            <b-button @click="viewCreateForm = true"> create</b-button>
        </b-row>
        <b-row>
            <b-col>First Name</b-col>
            <b-col>Last Name</b-col>
            <b-col>Email</b-col>
            <b-col>Phone Number</b-col>
            <b-col>description</b-col>
            <b-col>Actions</b-col>
        </b-row>
        <div v-for="(user, i) in users" :key="user.id">
            <UserItem v-model:user="users[i]" />
        </div>
    </b-container>
    <CreateUser v-model:viewForm="viewCreateForm" />

</template>