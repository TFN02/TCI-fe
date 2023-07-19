<script setup>
import Card from "../components/Card.vue";
import BackButton from "../components/BackButton.vue";
import SubmitButton from "../components/SubmitButton.vue";
import Footer from "../components/Footer.vue"
</script>
<template>
  <div>
    <Card
      title="Survey"
      number-page="3"
      prog="100"
      sub-title="Do you wont to follow our Company?"
    >
      <div class="flex flex-col justify-center items-center">
        <img src="iconRate.svg" width="273" alt="" />
        <div class="flex flex-row gap-x-3">
          <button class="btn btn-sm maybe">Maybe Later</button>
          <button class="btn btn-sm follow">Follow Now</button>
        </div>
      </div>
      <hr class="py-3 mt-6">
      <div class="card-actions justify-between">
        <BackButton />
        <SubmitButton />
      </div>
    </Card>
    <Footer />
  </div>
</template>

<style>
    .maybe{
        background-color: #F6F9FF;
        border-color: #1B55A3;
        color: #1B55A3;
    }

    .follow{
        background-color: #1B55A3;
        color: white;
    }
</style>
