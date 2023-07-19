<script setup>
import { useRoute, useRouter } from "vue-router";

defineProps({
  show:Boolean,
});

// Dapatkan objek route dan router
const route = useRoute();
const router = useRouter();

// Method untuk menentukan tujuan halaman berikutnya
const handleClick = () => {
  if (route.path === "/question-one") {
    router.push("/question-two");
  } else if (route.path === "/question-two") {
    router.push("/question-three");
  } else if (route.path === "/question-three") {
    router.push("/question-one");
  }
};
</script>

<template>
  <button @click="handleClick" :disabled="show" class="styleSubmit text-sm px-7 my-3">
    Submit
  </button>
</template>

<style>
.styleSubmit {
  background-color: #1b55a3;
  color: white;
}
</style>
