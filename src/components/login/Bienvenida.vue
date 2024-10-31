<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const fullNameUpper = computed(() => userStore.fullNameUpper);

</script>

<template>
    <p>Bienvenido {{fullNameUpper}}</p>
</template>

<style scoped>

</style>
