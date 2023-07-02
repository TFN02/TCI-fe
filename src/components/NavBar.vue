<template>
  <v-app-bar app color="#1B55A3" class="d-flex justify-center px-16 text-white">
    <div>
      <v-toolbar-title class="mx-auto">
        <img src="logo.png" alt="LOGO" height="30px" />
      </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>
    <div class="w-50">
      <v-card class="mx-auto" color="#1B55A3" max-width="400">
        <v-card-text>
          <v-text-field
            density="compact"
            variant="solo"
            label="Search ..."
            prepend-inner-icon="mdi-magnify"
            color="#1B55A3"
            single-line
            hide-details
          ></v-text-field>
        </v-card-text>
      </v-card>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-app-bar-nav-icon />
    </div>
  </v-app-bar>
</template>
