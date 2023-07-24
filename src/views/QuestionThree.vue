<script setup>
import { useRoute, useRouter } from "vue-router";
import Card from "../components/Card.vue";
import BackButton from "../components/BackButton.vue";
import SubmitButton from "../components/SubmitButton.vue";
import Footer from "../components/Footer.vue"

const route = useRoute();
const router = useRouter();

const handleClick = () => {
  if (route.path === "/question-three") {
    localStorage.removeItem("selectedEmot");
    localStorage.removeItem("bio");
    router.push("/question-one");
  }
};

const handleFollow = () => {
  window.location.href = "https://teknologicakrainternasional.com/contact-us";
}


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
          <button class="btn btn-sm maybe" @click="handleClick">Maybe Later</button>
          <button class="btn btn-sm follow" @click="handleFollow">Follow Now</button>
        </div>
      </div>
      <hr class="py-3 mt-6">
      <div class="card-actions justify-between">
        <BackButton />
        <SubmitButton :on-click="handleClick" />
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
