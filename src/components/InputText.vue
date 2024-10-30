<script setup>
defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: 'Enter your text'
    },
    modelValue: {
        type: [String, Number],
        default: '',
        required: true
    }
})

defineEmits(['update:modelValue'])

</script>

<template>
    <input :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style scoped>
input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 10px;
}
</style>
