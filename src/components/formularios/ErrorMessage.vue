<script setup>
import { onMounted } from 'vue'

const props = defineProps({
    errorMessage: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:errorMessage'])

onMounted(() => {
    setTimeout(() => {
       emit('update:errorMessage', '')
    }, 3000)
})
</script>

<template>
    <p id="error-message">{{ errorMessage }}</p>
</template>

<style scoped> 
p {
    color: red;
    margin: 10px;    
}
</style>
