<script setup>
import { ref } from 'vue';
import InputText from '../formularios/InputText.vue';
import InputPassword from '../formularios/InputPassword.vue';
import Button from '../formularios/Button.vue';
import ErrorMessage from '../formularios/ErrorMessage.vue';

const user = ref({
    name: '',
    lastname: '',
    token: ''
})
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = async (event) => {
    event.preventDefault();
    if (username.value === '' || password.value === '') {
        errorMessage.value = 'Por favor, ingrese un correo electrónico y una contraseña';
    }else{
        //Fetch API POST login
        const response = await fetch('http://apiohpanel.jdev.com.ar/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username.value,
                password: password.value
            })
        })
        const data = await response.json();
        if(data.statusCode !== 200){
            errorMessage.value = data.message;
        }else{
            user.value = data.data;
            console.log(data);
        }
    }   
}
</script>

<template>
    <form @submit="handleLogin">
        <slot>
            <InputText placeholder="Correo electrónico" v-model="username" required />
            <InputPassword placeholder="Contraseña" v-model="password" required />
            <Button text="Iniciar sesión" type="principal" />

            <ErrorMessage 
                v-if="errorMessage!=''" 
                :errorMessage="errorMessage"
                @update:errorMessage="errorMessage = $event" 
            />
            <p v-if="user.name !== ''">Bienvenido {{user.name}} {{user.lastname}}</p>
            
        </slot>
    </form>
</template>

<style scoped>
:root, body, #app {
    min-height: 100vh;
}

form {
    display: flex;
    flex-direction: column;
    max-width: 270px;
    margin: auto;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

input {
    width: 250px;
}

button {
    width: 272px;
}
</style>
