<script setup>
import { ref } from "vue";

defineProps({
  nameBox: String,
});

const checked = ref(false);

const handleClick = () => {
  checked.value = !checked.value;
};
</script>

<template>
  <div
    class="bg-white border mas p-5 rounded rounded-lg flex flex-row justify-between items-center"
    :style="{ 
    'background-color': checked ? '#1B55A3' : 'white',
    'color': checked ? 'white' : 'black',
    'filter': checked ? 'drop-shadow(4px 7px 30px #1B55A3)' : 'none',
    'border': checked ? 'none' : '0.5px solid rgba(192,192,197)'}"
    @click="handleClick"
  >
    <slot></slot>
    <p class="grid content-start">{{ nameBox }}</p>
    <input type="checkbox" class="checkbox"  :checked="checked" />
  </div>
</template>

<style>
.mas{
  filter: drop-shadow(4px 7px 30px #1B55A3);
}
</style>
