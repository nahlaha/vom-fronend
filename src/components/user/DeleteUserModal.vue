<script setup lang="ts">
import { ref, watch } from 'vue';

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

function deleteUser() {
    fetch(`http://localhost:8000/api/v1/users/${props.userId}`, {
        method: 'delete',
        mode: "cors",
        headers: {
            "accept": "application/json, text/plain, */*",
            // "Content-Type": "application/json"
            // "Content-Type": "multipart/form-data"
        },
    }).then((data) => {
        _viewModal.value = false
    })
}

</script>

<template>
    <b-modal v-model="_viewModal" @ok="deleteUser">
        <p>are u sure , u want to delet this user</p>
    </b-modal>
</template>