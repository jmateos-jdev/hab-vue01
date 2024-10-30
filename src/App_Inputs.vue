<script setup>
import { ref } from 'vue';
import CustomButton from './components/formularios/Button.vue';
import InputText from './components/formularios/InputText.vue';
import InputDate from './components/formularios/InputDate.vue';
import InputNumber from './components/formularios/InputNumber.vue';

const handleClick = () => {
    console.log('Click');
}
const today = new Date().toISOString().split('T')[0];
const todayPlus60 = new Date(new Date().setDate(new Date().getDate() + 90)).toISOString().split('T')[0];
const inputDate = ref(today);
const inputText = ref("");
const inputNumber = ref(0);

</script>

<template>
    <InputNumber placeholder="Probamos Placeholder" v-model="inputNumber" :min="0" :max="100"/>
    {{ inputNumber }}
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
