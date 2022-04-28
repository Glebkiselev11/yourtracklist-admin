<template>
  <v-app>
    <v-app-bar>
      <template v-slot:append>
        <v-btn color="black" plain variant="contained-text">Load release</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
