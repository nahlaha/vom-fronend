<script setup lang="ts">
import { ref } from "vue";
import type { IUser } from "../../core";
import EditUser from "./EditUser.vue";
import DeleteUserModal from "./DeleteUserModal.vue";

interface Props {
    user: IUser
}

const props = defineProps<Props>();
const viewEditForm = ref(false)
const viewDeleteModal = ref(false)

</script>


<template>
    <b-row class="d-flex justify-content-start border-bottom">
        <b-col>{{ user.first_name }}</b-col>
        <b-col>{{ user.last_name }}</b-col>
        <b-col>{{ user.email }}</b-col>
        <b-col>{{ user.phone_number }}</b-col>
        <b-col>{{ user.description }}</b-col>
        <b-col class="d-flex mb-2">
            <b-button variant="primary" size="sm" class="me-1" @click="viewEditForm = true">edit</b-button>
            <b-button variant="danger" size="sm" @click="viewDeleteModal = true">delete</b-button>
        </b-col>
    </b-row>
    <EditUser :user="props.user" :viewForm="viewEditForm" />
    <DeleteUserModal :viewModal="viewDeleteModal" :userId="user.id" />
</template>