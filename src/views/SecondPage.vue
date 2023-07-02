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
              <v-sheet class="ma-2 pa-2 text-primary"> Question 2/3</v-sheet>
              <v-progress-linear
                max="3"
                color="primary"
                model-value="2"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-title
          >Give us comments, messages and suggestions about your assessment of
          our company</v-card-title
        >
        <v-card-text>Give us feedback</v-card-text>
        <v-col cols="12">
          <v-textarea
            label="Three rows"
            auto-grow
            variant="outlined"
            rows="5"
            row-height="25"
            shaped
            v-model="feedback"
            :maxlength="499"
          ></v-textarea>
        </v-col>
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
  name: "SecondPage",
  data() {
    return {
      feedback: "",
    };
  },
  components: {
    Footer,
  },
  methods: {
    handleBack() {
      this.$router.push("/");
    },
    submitForm() {
      this.$router.push("/thirdPage");
    },
  },
};
</script>
<style>
.custom-background {
  background-color: #f9fbff;
}
</style>
