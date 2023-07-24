<script setup>
import { ref, onMounted } from 'vue';

const bio = ref('');

const saveToLocalStorage = () => {
    localStorage.setItem('bio', bio.value);
};

onMounted(() => {
    const savedBio = localStorage.getItem('bio');
    if (savedBio) {
        bio.value = savedBio;
    }
});
</script>

<template>
    <textarea
        placeholder="Type Here"
        class="textarea text textarea-bordered textarea-lg w-full max-w-3xl"
        v-model="bio"
        @input="saveToLocalStorage"
    ></textarea>
</template>

<style>
.text {
    min-height: 200px;
}
</style>
