<script setup>
import { ref, readonly } from 'vue';
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  subTitle: String,
  prog: String,
  numberPage: String,
});


</script>

<template>
  <div class="flex justify-center py-16 md:px-5">
    <div
      class="card flex flex-col bg-white shadow shadow-xl w-full max-w-3xl gap-y-3"
    >
      <div class="md:flex md:justify-between">
        <p class="text-xl font-bold">{{ title }}</p>
        <div>
          <div class="md:flex justify-between px-1">
            <p class="ques font-bold">Question</p>
            <p>{{ numberPage }} / 3</p>
          </div>
          <progress
            class="progress progress-primary w-56"
            :value="prog"
            max="100"
          ></progress>
        </div>
      </div>
      <div class="flex flex-row gap-x-3">
        <hr width="100" />
        <hr width="100" />
        <hr width="60" class="w-full" />
      </div>
      <p class="text-xl font-bold">{{ subTitle }}</p>
      <div>
       <slot> </slot>
      </div>

    </div>
  </div>
</template>

<style>
  .ques{
    color: #1B55A3;
  }
</style>
