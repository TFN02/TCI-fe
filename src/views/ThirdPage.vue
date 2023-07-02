<template>
  <div>
    <v-main class="custom-background">
      <v-card class="ma-16 pa-5 rounded-lg">
        <v-card-title class="grid">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-sheet class="ma-2 pa-2"> Survey </v-sheet>
            </v-col>
            <v-col cols="12" sm="6">
              <v-sheet class="ma-2 pa-2 text-primary"> Question 3/3</v-sheet>
              <v-progress-linear
                max="3"
                color="primary"
                model-value="3"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-title>Do you want to follow our company ?</v-card-title>
        <div class="d-flex flex-column align-center justify-center my-3">
          <v-img max-width="300" src="/img/customer review.svg"></v-img>
          <div>
            <v-btn
              class="mx-3"
              variant="outlined"
              color="blue"
              @click="submitForm"
              >Maybe Later</v-btn
            >
            <a href="https://teknologicakrainternasional.com/contact-us">
              <v-btn class="text-white" color="#1B55A3" @click="handleFollow"
                >Follow Now</v-btn
              >
            </a>
          </div>
        </div>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn
            class="text-blue py-2 px-3"
            variant="outlined"
            rounded="md"
            size="medium"
            @click="handleBack"
          >
            Back
          </v-btn>
          <v-btn
            class="text-white py-3 px-4"
            variant="elevated"
            color="#1B55A3"
            rounded="md"
            size="medium"
            @click="submitForm"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "ThirdPage",
  components: {
    Footer,
  },
  methods: {
    handleBack() {
      this.$router.push("/secondPage");
    },
    submitForm() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.custom-background {
  background-color: #f9fbff;
}
</style>
