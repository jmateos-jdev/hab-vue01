<script setup>
import { ref, onBeforeMount } from 'vue';
import InputText from '../formularios/InputText.vue';
import InputPassword from '../formularios/InputPassword.vue';
import Button from '../formularios/Button.vue';
import ErrorMessage from '../formularios/ErrorMessage.vue';
import Bienvenida from './Bienvenida.vue';
import { useUserStore } from '../../stores/user';
import { loginService } from '../../services/user/login.service';
import { checkTokenService } from '../../services/user/checkToken.service';
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const router = useRouter()


const errorMessage = ref('');
const email = ref('');
const password = ref('');

const navigateTo = (page) => {
    router.push(page)
}

const handleLogin = async (event) => {
    event.preventDefault();
    if (email.value === '' || password.value === '') {
        errorMessage.value = 'Por favor, ingrese un correo electrónico y una contraseña';
    } else {
        //Fetch API POST login
        const data = await loginService(email.value, password.value);
        if (data.statusCode !== 200) {
            errorMessage.value = data.message;
        } else {
            userStore.setName(data.data.name);
            userStore.setLastname(data.data.lastname);
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('token_time', Date.now());
            navigateTo('/dashboard')
        }
    }
}

//Revisar token y su vencimiento y redireccionar al momento de cargar la pagina
onBeforeMount(async () => {
    const token = localStorage.getItem('token');
    const tokenTime = localStorage.getItem('token_time');
    if (tokenTime) {
        console.log("TOKEN TIME", tokenTime);
        const currentTime = Date.now();
        const tokenAge = currentTime - tokenTime;
        console.log("TOKEN AGE", tokenAge);
        if (tokenAge > (1000 * 60 * 1)) { //esperar 1 minuto
            localStorage.clear();
        } else {
            if (token) {
                const data = await checkTokenService(token);
                if (data.statusCode !== 200) {
                    localStorage.clear();
                } else {
                    userStore.setName(data.data.name);
                    userStore.setLastname(data.data.lastname);
                    localStorage.setItem('token', data.data.token);
                    localStorage.setItem('token_time', Date.now());
                    navigateTo('/dashboard')
                }
            } else {
                localStorage.clear();
            }
        }
    } else {
        localStorage.clear();
    }
})

</script>

<template>
    <form @submit="handleLogin">
        <slot>
            <InputText placeholder="Correo electrónico" v-model="email" required />
            <InputPassword placeholder="Contraseña" v-model="password" required />
            <Button text="Iniciar sesión" type="principal" />
            <ErrorMessage v-if="errorMessage != ''" :errorMessage="errorMessage"
                @update:errorMessage="errorMessage = $event" />
        </slot>
    </form>
    <Bienvenida />
</template>

<style scoped>
:root,
body,
#app {
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
