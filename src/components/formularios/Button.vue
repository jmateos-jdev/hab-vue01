<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'principal',
    validator(value) {
        return ['principal', 'secundario', 'error'].includes(value);
    }
  }
})

defineEmits(['click'])

</script>

<template>
    <button type="submit" @click="$emit('click')" :class="`btn-${type}`">{{ text }}</button>
</template>

<style scoped>
button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    transition: background-color 0.3s ease;
    color: white;
    cursor: pointer;
    margin: 10px;
}

.btn-secundario {
    background-color: rgb(6, 131, 91);
}   

.btn-error {
    background-color: rgb(131, 6, 6);
}

.btn-secundario:hover {
    background-color: rgb(3, 83, 58);
}

.btn-error:hover {
    background-color: rgb(83, 3, 3);
}

.btn-principal {
    background-color: rgb(91, 6, 131);
}
.btn-principal:hover {
    background-color: rgb(131, 6, 131);
}
</style>