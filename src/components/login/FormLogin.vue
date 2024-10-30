<script setup>
import { ref } from 'vue';
import InputText from '../formularios/InputText.vue';
import InputPassword from '../formularios/InputPassword.vue';
import Button from '../formularios/Button.vue';
import ErrorMessage from '../formularios/ErrorMessage.vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = (event) => {
    event.preventDefault();
    if (username.value === '' || password.value === '') {
        errorMessage.value = 'Por favor, ingrese un correo electrónico y una contraseña';
    }else{
        console.log('Login');
    }   
}
</script>

<template>
    <form @submit="handleLogin">
        <slot>
            <InputText placeholder="Correo electrónico" v-model="username" />
            <InputPassword placeholder="Contraseña" v-model="password" />
            <Button text="Iniciar sesión" type="principal" />

            <ErrorMessage 
                v-if="errorMessage!=''" 
                :errorMessage="errorMessage"
                @update:errorMessage="errorMessage = $event" 
            />
            {{ errorMessage }}
            
        </slot>
    </form>
</template>

<style scoped>

</style>
