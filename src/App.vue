<script setup>
import { ref } from 'vue';
import CustomButton from './components/CustomButton.vue';
import InputText from './components/InputText.vue';
import InputDate from './components/InputDate.vue';

const handleClick = () => {
    console.log('Click');
}
const today = new Date().toISOString().split('T')[0];
const todayPlus60 = new Date(new Date().setDate(new Date().getDate() + 90)).toISOString().split('T')[0];
const inputDate = ref(today);
const inputText = ref("");

</script>

<template>
    <InputDate placeholder="Probamos Placeholder" v-model="inputDate" :min="today" :max="todayPlus60"/>
    {{ inputDate }}
    <InputText placeholder="Probamos Placeholder" type="text" v-model="inputText"/>
    {{ inputText }}
    <CustomButton text="Click me" @click="handleClick" type="principal" />
</template>

<style scoped>  
h1 {
    color: red;
}
</style>
