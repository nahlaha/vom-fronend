<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'


const props = defineProps<{
    viewForm: boolean
}>()
const _viewModal = ref(false)
const form = ref({ email: '', firstName: '', lastName: '', password: '', phoneNumber: '', description: '' })
const emit = defineEmits(['update:viewForm'])

watch(props, () => {
    _viewModal.value = props.viewForm;
})
function reset(event) {
    event.preventDefault()
    form.value.firstName = '';
    form.value.lastName = '';
    form.value.email = '';
    form.value.password = '';
    form.value.description = '';
}



const alpha = helpers.regex(/^[a-zA-Z]*$/)

const validations = {

    email: {
        required, email
    },
    firstName: {
        required, alpha: helpers.withMessage('dd', alpha)
    },
    lastName: {

    }, description: {

    }, password: { required }

}
const v$ = useVuelidate(validations, form.value)


function submit(event) {
    event.preventDefault()
    console.log('v$', v$.value)
    if (v$.value.$invalid) {
        v$.value.$touch()
    } else {
        //call api request
        console.log(form.value)
        fetch('http://localhost:8000/api/v1/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'content/type'
            },
            body: form.value
        }).then((data) => {
            console.log(data)
        })
    }
}
</script>


<template>
    {{ viewForm }}

    <b-modal v-model="_viewModal" @hidden="$emit('update:viewForm', _viewModal)">
        <div>

            <b-form @submit="submit" @reset="reset">
                <b-form-group id="input-group-1" label="First Name:" label-for="input-1">
                    <b-form-input :class="{ error: v$.firstName.$errors.length }" id="input-1" v-model="v$.firstName.$model"
                        placeholder="Enter first name"></b-form-input>
                    <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </b-form-group>

                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                    <b-form-input :class="{ error: v$.lastName.$errors.length }" id="input-2" v-model="v$.lastName.$model"
                        placeholder="Enter last name"></b-form-input>
                    <div class="input-errors" v-for="error of v$.lastName.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </b-form-group>

                <b-form-group id="input-group-3" label="Email address:" label-for="input-3">
                    <b-form-input :class="{ error: v$.email.$errors.length }" id="input-3" v-model="v$.email.$model"
                        placeholder="Enter email"></b-form-input>
                    <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </b-form-group>

                <b-form-group id="input-group-4" label="Password:" label-for="input-4">
                    <b-form-input :class="{ error: v$.password.$errors.length }" id="input-4" v-model="v$.password.$model"
                        placeholder="Enter password"></b-form-input>
                    <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </b-form-group>

                <b-form-group id="input-group-5" label="description:" label-for="input-5">
                    <b-form-textarea :class="{ error: v$.description.$errors.length }" id="input-5"
                        v-model="v$.description.$model" placeholder="Enter description" rows="3"
                        max-rows="6"></b-form-textarea>
                    <div class="input-errors" v-for="error of v$.description.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>

        </div>


    </b-modal>
</template>

<style scoped>
.error {
    border-color: red;
}

.input-errors {
    color: red;
}
</style>