<script setup>
import { useRouter } from "vue-router";
import Card from "../components/Card.vue";
import BackButton from "../components/BackButton.vue";
import SubmitButton from "../components/SubmitButton.vue";
import TextField from "../components/TextField.vue";
import Footer from "../components/Footer.vue"

const router = useRouter();
const handleClick = () => {
  
  if (localStorage.getItem("bio").length > 0) {
    router.push("/question-three");
  }else{
    alert('Wajib memilih satu pilihan');
  }
};

</script>
<template>
  <div>
    <Card
      title="Survey"
      number-page="2"
      prog="70"
      sub-title="Give us comments, messages and suggestions about your assessment of our company"
    >
      <p>Give Us Feedback</p>
      <div>
      
      <TextField />
      </div>
      <hr class="py-2 mt-4">
      <div class="card-actions justify-between">
      <BackButton />
      <SubmitButton :on-click="handleClick" />
      </div>
    </Card>
    <Footer />
  </div>
</template>
