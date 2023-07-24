<script setup>
import { defineProps } from 'vue';

const { show, onClick } = defineProps(['show', 'onClick']);

</script>

<template>
  <button @click="onClick" :disabled="show" class="styleSubmit text-sm px-7 my-3">
    Submit
  </button>
</template>

<style>
.styleSubmit {
  background-color: #1b55a3;
  color: white;
}
</style>
