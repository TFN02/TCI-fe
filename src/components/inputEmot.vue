<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['nameBox']);
const isChecked = ref(false);

const handleChange = () => {
  if (isChecked.value) {
    localStorage.setItem("selectedEmot", props.nameBox);
  } else {
    localStorage.removeItem("selectedEmot");
  }
};

onMounted(() => {
  const selectedEmot = localStorage.getItem("selectedEmot");
  isChecked.value = selectedEmot === props.nameBox;
});

</script>

<template>
  <div
    class="bg-white border mas p-5 rounded rounded-lg flex flex-row justify-between items-center"
    :style="{ 
    'background-color': isChecked ? '#1B55A3' : 'white',
    'color': isChecked ? 'white' : 'black',
    'filter': isChecked ? 'drop-shadow(4px 7px 30px #1B55A3)' : 'none',
    'border': isChecked ? 'none' : '0.5px solid rgba(192,192,197)'}"
  >
    <slot></slot>
    <p :for="nameBox" class="grid content-start">{{ nameBox }}</p>
    <label ></label>
    <input 
    type="checkbox"
      :name="nameBox"
      :id="nameBox"
      v-model="isChecked"
      @change="handleChange"
     />
  </div>
</template>

<style>
.mas{
  filter: drop-shadow(4px 7px 30px #1B55A3);
}
</style>
