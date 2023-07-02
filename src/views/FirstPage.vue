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
              <v-sheet class="ma-2 pa-2 text-primary"> Question 1/3</v-sheet>
              <v-progress-linear
                max="3"
                color="primary"
                model-value="1"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text> How do you rate our company? </v-card-text>
        <div class="checkbox-container">
          <v-card
            v-for="(option, index) in options"
            :key="index"
            :class="{ 'selected-card': option.checked }"
          >
            <v-card-text>
              <div class="checkbox-content d-flex justify-space-between">
                <div>
                  <span class="emoji">{{ option.emoji }}</span>
                  <span class="label">{{ option.title }}</span>
                </div>
                <div>
                  <v-checkbox
                    v-model="option.checked"
                    v-if="!option.checked"
                    :value="option.title"
                    :disabled="hasSelection && option.checked"
                    dense
                    hide-details
                    @change="handleChange(option)"
                  ></v-checkbox>
                </div>
              </div>
            </v-card-text>
          </v-card>
          <div v-if="!hasSelection" class="validation-error">
            Anda harus memilih salah satu opsi
          </div>
        </div>

        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn
            class="text-blue py-2 px-3"
            variant="outlined"
            disabled="true"
            rounded="md"
            size="medium"
          >
            Back
          </v-btn>
          <v-btn
            class="text-white py-3 px-4"
            variant="elevated"
            color="#1B55A3"
            rounded="md"
            size="x-medium"
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
  name: "FirstPage",
  data() {
    return {
      options: [
        { id: 1, title: "Spectacular", emoji: "😱", checked: false },
        { id: 3, title: "Perfect", emoji: "😍", checked: false },
        { id: 2, title: "Awesome", emoji: "😊", checked: false },
        { id: 4, title: "Good", emoji: "🙂", checked: false },
        { id: 5, title: "Bad", emoji: "😌", checked: false },
        { id: 6, title: "Very Bad", emoji: "😡", checked: false },
      ],
    };
  },
  computed: {
    hasSelection() {
      return this.options.some((option) => option.checked);
    },
  },
  components: {
    Footer,
  },
  methods: {
    handleChange(selectedOption) {
      this.options.forEach((option) => {
        option.checked = false;
      });
      selectedOption.checked = true;
    },
    submitForm() {
      this.$router.push("/secondPage");
    },
  },
};
</script>

<style>
.custom-background {
  background-color: #f9fbff; /* Ganti dengan kode warna yang Anda inginkan */
}

.checkbox-container {
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); /* Membagi kontainer menjadi 2 kolom dengan lebar yang sama */
  grid-gap: 10px; /* Jarak antara kartu */
}

.selected-card {
  background-color: #1b55a3 !important;
  color: white;
}

.validation-error {
  color: red;
  margin-top: 8px;
}

.checkbox-content {
  display: flex;
  align-items: center;
}

.emoji {
  margin-right: 8px;
}
</style>
