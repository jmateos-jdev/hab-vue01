<script setup>
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const navigateTo = (page) => {
    router.push(page)
}

const logout = () => {
    localStorage.clear();
    userStore.setName('')
    userStore.setLastname('')
    navigateTo('/login')
}

</script>
<template>
    <h1 data-testid="dashboard-title">Dashboard</h1>
    <button data-testid="logout-button" @click="logout">Logout</button>
</template>