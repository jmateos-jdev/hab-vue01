<script setup>
/*
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        sumar() {
            this.count++;
        }
    },
    mounted() {
        console.log(`Componente montado: ${this.count}`);
    }
}
*/

import { ref, onMounted, onUnmounted, onUpdated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onActivated, onDeactivated, onErrorCaptured } from 'vue';
const count = ref(0);

const sumar = () => {
    count.value++;
}

onMounted(() => {
    console.log(`Componente montado: ${count.value}`);
})

onUnmounted(() => {
    console.log(`Componente desmontado: ${count.value}`);
})
onUpdated(() => {
    console.log(`Componente actualizado: ${count.value}`);
})
onBeforeMount(() => {
    console.log(`Componente antes de montar: ${count.value}`);
    count.value = 10;
})
onBeforeUnmount(() => {
    console.log(`Componente antes de desmontar: ${count.value}`);
})
onBeforeUpdate(() => {
    console.log(`Componente antes de actualizar: ${count.value}`);
})
onActivated(() => {
    console.log(`Componente activado: ${count.value}`);
})
onDeactivated(() => {
    console.log(`Componente desactivado: ${count.value}`);
})
onErrorCaptured((error) => {
    console.log(`Error capturado: ${error}`);
})


</script>

<template>
    <button @click="sumar">Sumar: {{ count }}</button>
    <button @click="count--">Restar: {{ count }}</button>
</template>

<style scoped>
button {
    background-color: rgb(68, 0, 213);
    color: rgb(230, 230, 230);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1.2rem;
    margin: 10px;
    display: block;
}

button:hover {
    background-color: rgb(100, 0, 255);
    color: white;
}
</style>
