<script setup>
import Card from "../components/Card.vue";
import inputEmot from "../components/inputEmot.vue";
import BackButton from "../components/BackButton.vue";
import SubmitButton from "../components/SubmitButton.vue";
import Footer from "../components/Footer.vue"
</script>

<template>
  <div>
    <Card
      title="Survey"
      number-page="1"
      prog="30"
      sub-title="How do you rate our company?"
    >
      <div class="md:grid md:grid-cols-2 md:gap-x-3">
        <div class="flex flex-col gap-y-7">
          <inputEmot name-box="Spectacular">
            <img src="emoji/spectacular.png" alt="spectacular" />
          </inputEmot>
          <inputEmot name-box="Awesome">
            <img src="emoji/awesome.png" alt="awesome" />
          </inputEmot>
          <inputEmot name-box="Bad">
            <img src="emoji/bad.png" alt="bad" />
          </inputEmot>
        </div>
        <div class="flex flex-col gap-y-7">
          <inputEmot name-box="Perfect">
            <img src="emoji/perfect.png" alt="perfect" />
          </inputEmot>
          <inputEmot name-box="Good">
            <img src="emoji/good.png" alt="good" />
          </inputEmot>
          <inputEmot name-box="Verry Bad">
            <img src="emoji/verryBad.png" alt="very bad" />
          </inputEmot>
        </div>
      </div>
      <div class="card-actions justify-between">
      <BackButton :show="true" />
      <SubmitButton />
      </div>
    </Card>
    <Footer />
  </div>
</template>
