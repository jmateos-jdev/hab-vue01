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
    <p>{{ errorMessage }}</p>
</template>

<style scoped> 
p {
    color: red;
}
</style>
