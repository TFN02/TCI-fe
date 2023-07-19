<script setup>
import { useRoute, useRouter } from 'vue-router';
defineProps({
  show: Boolean,
});
// console.log("show",show);
const route = useRoute();
const router = useRouter();

// Method untuk menentukan tujuan halaman berikutnya
const handleClick = () => {
  if (route.path === '/question-two') {
    router.push('/question-one');
  } else if (route.path === '/question-three') {
    router.push('/question-two');
  }
};
</script>

<template>
    <button @click="handleClick" :disabled="show" class="styleBack text-sm px-10 my-3">Back</button>
</template>

<style>
    .styleBack {
        background-color: #F6F9FF;
        border-color: #1B55A3;
        color: #1B55A3;
    }
</style>