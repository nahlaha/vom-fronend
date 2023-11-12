<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CreateUser from "./CreateUser.vue";
import type { IUser } from "../../core";
import Loader from "../shared/Loader.vue";
import UserItem from "./UserItem.vue";
import { getAllUsers } from '@/services/apiService';

const viewCreateForm = ref(false)
const isLoading = ref(false)
const users = ref<IUser[]>([])

const currentPage = ref<number>(1)
const total = ref<number>()
const perPage = ref<number>()
const getUsers = async () => {
    try {
        isLoading.value = true;
        const res = await getAllUsers();
        users.value = res.data.data;
        currentPage.value = res.data.current_page;
        total.value = res.data.total;
        perPage.value = res.data.per_page
    } catch (error) {
        console.log(error)
    }
    isLoading.value = false;

}
onMounted(async () => {
    getUsers();
})

</script>


<template>
    <Loader v-if="isLoading" />
    <b-container>
        <div>
            <b-button @click="viewCreateForm = true"> create</b-button>
        </div>
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
        <div class="overflow-auto">
            <b-pagination v-model="currentPage" :total-rows="total" :per-page="perPage"></b-pagination>
        </div>
    </b-container>
    <CreateUser v-model:viewForm="viewCreateForm" />
</template>