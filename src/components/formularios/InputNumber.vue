<script setup>
defineProps({
    placeholder: {
        type: String,
        default: 'Enter your number'
    },
    modelValue: {
        type: Number,
        default: '',
        required: true
    },
    min: {
        type: Number,
        default: ''
    },
    max: {
        type: Number,
        default: ''
    }
})

defineEmits(['update:modelValue'])

</script>

<template>
    <input
        type="number"
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
