<script setup>
defineProps({
    placeholder: {
        type: String,
        default: 'Enter your date'
    },
    modelValue: {
        type: String,
        default: ''
    },
    min: {
        type: String,
        default: ''
    },
    max: {
        type: String,
        default: ''
    }
})

defineEmits(['update:modelValue'])
</script>
<template>
    <input
        type="date"
        :placeholder="placeholder"
        :value="modelValue"
        :min="min"
        :max="max"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<style scoped>
input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 10px;
}
</style>
