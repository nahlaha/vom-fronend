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
    <b-container class="p-4">
        <div class="d-grid gap-3">
            <div class="d-flex justify-content-start">
                <b-button variant="success" @click="viewCreateForm = true"> Create User</b-button>
            </div>
            <div class="ms-2">
                <b-row class="d-flex justify-content-start mb-2 header py-3 rounded">
                    <b-col>First Name</b-col>
                    <b-col>Last Name</b-col>
                    <b-col>Email</b-col>
                    <b-col>Phone Number</b-col>
                    <b-col>description</b-col>
                    <b-col>Actions</b-col>
                </b-row>
                <div class="pt-4" v-for="(user, i) in users" :key="user.id">
                    <UserItem v-model:user="users[i]" />
                </div>
            </div>
            <div class="overflow-auto">
                <b-pagination v-model="currentPage" :total-rows="total" :per-page="perPage"></b-pagination>
            </div>
        </div>
    </b-container>
    <CreateUser v-model:viewForm="viewCreateForm" />
</template>

<style scoped>
.header {
    background-color: hsla(155, 94%, 27%, 0.233) !important;
}
</style>