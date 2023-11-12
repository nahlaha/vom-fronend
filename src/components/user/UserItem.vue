<script setup lang="ts">
import { ref, watch } from "vue";
import type { IUser } from "../../core";
import EditUser from "./EditUser.vue";

interface Props {
    user: IUser
}

const props = defineProps<Props>();
const editedUser = ref<IUser>()
const viewEditForm = ref(false)
// watch(props.user, () => {
//     if (props.user) {
//         editedUser.value = props.user;
//     }
// })
</script>


<template>
    <b-row class="justify-content-md-center">
        <b-col>{{ user.first_name }}</b-col>
        <b-col>{{ user.last_name }}</b-col>
        <b-col>{{ user.email }}</b-col>
        <b-col>{{ user.phone_number }}</b-col>
        <b-col>{{ user.description }}</b-col>
        <b-col>
            <b-button @click="viewEditForm = true">edit</b-button>
            <b-button>delete</b-button>
        </b-col>
    </b-row>
    <EditUser :user="props.user" :viewForm="viewEditForm" />
</template>