<script setup lang="ts">
import { ref, watch } from 'vue';
import { DeleteUserConfirmMessage } from "../../utilis/confirmationMessages";
import { deleteUser as deleteUserApi } from '@/services/apiService';

interface Props {
    userId: number
    viewModal: boolean
}
const _viewModal = ref(false)
const emit = defineEmits(['update:viewModal'])
const props = defineProps<Props>()

watch(props, () => {
    _viewModal.value = props.viewModal;
})

async function deleteUser() {
    try {
        await deleteUserApi(props.userId)
        _viewModal.value = false
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <b-modal v-model="_viewModal" @ok="deleteUser" @hidden="emit('update:viewModal', false)">
        <p>{{ DeleteUserConfirmMessage(userId) }}</p>
    </b-modal>
</template>