<script setup lang="ts">
import { ref, watch } from 'vue';
import useVuelidate from '@vuelidate/core'
import { email, helpers } from '@vuelidate/validators'
import { type IUserForm } from "../../core";

interface Props {
    form?: IUserForm | null
    isCreate: boolean,
    viewForm: boolean
}
const _viewModal = ref(false)

const props = withDefaults(defineProps<Props>(), {
    form: null
})
const emit = defineEmits(['submit:form','update:viewForm'])

watch(props, () => {
    _viewModal.value = props.viewForm;
    if (props.form) {
        v$.value.email.$model = props.form?.email;
        v$.value.first_name.$model = props.form?.first_name;
        v$.value.last_name.$model = props.form?.last_name
        v$.value.phone_number.$model = props.form?.phone_number;
        v$.value.description.$model = props.form?.description;
        v$.value.image.$model = props.form?.image;
    }

})
function requiredIf() {
    return props.isCreate;
}
const alpha = helpers.regex(/^[a-zA-Z]*$/)
const validationRules = {

    email: {
        email, requiredIf
    },
    first_name: {
        requiredIf, alpha: helpers.withMessage('dd', alpha)
    },
    last_name: {

    }, description: {

    },
    phone_number: {
    },
    image: {

    }

}
const form = ref<IUserForm>({})

const v$ = useVuelidate(validationRules, form.value)

function reset() {
    emit('update:viewForm', _viewModal)
    v$.value.$reset()
}
function submit(event) {
    event.preventDefault()
    if (v$.value.$invalid) {
        v$.value.$touch()
    } else {
        //call parent function
        emit('submit:form', form.value)
    }
}
</script>


<template>
    <b-modal v-model="_viewModal" @hidden="reset" @ok="submit">
        <b-form @submit="submit">
            <b-form-group id="input-group-1" label="First Name:" label-for="input-1">
                <b-form-input :class="{ error: v$?.first_name.$errors.length }" id="input-1" v-model="v$.first_name.$model"
                    placeholder="Enter first name"></b-form-input>
                <div class="input-errors" v-for="error of v$.first_name.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </b-form-group>

            <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                <b-form-input :class="{ error: v$.last_name.$errors.length }" id="input-2" v-model="v$.last_name.$model"
                    placeholder="Enter last name"></b-form-input>
                <div class="input-errors" v-for="error of v$.last_name.$errors" :key="error.$uid">
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

            <b-form-group id="input-group-5" label="Phone Number:" label-for="input-5">
                <b-form-input :class="{ error: v$.phone_number.$errors.length }" id="input-5"
                    v-model="v$.phone_number.$model" placeholder="Enter phone number"></b-form-input>
                <div class="input-errors" v-for="error of v$.phone_number.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </b-form-group>

            <b-form-group id="input-group-6" label="description:" label-for="input-6">
                <b-form-textarea :class="{ error: v$.description.$errors.length }" id="input-6"
                    v-model="v$.description.$model" placeholder="Enter description" rows="3" max-rows="6"></b-form-textarea>
                <div class="input-errors" v-for="error of v$.description.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </b-form-group>

            <b-form-group id="input-group-7" label="avatar:" label-for="input-7">
                <input type="file" :value="v$.image.$model" @change="(e) => v$.image.$model = e.target.files[0]"
                    class="mt-3" />
                <div class="input-errors" v-for="error of v$.image.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </b-form-group>

        </b-form>
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