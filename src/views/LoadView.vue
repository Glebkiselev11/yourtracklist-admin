<template>
  <div class="d-flex justify-center align-center">
    <v-btn @click="increment()" v-text="'increase counter'" />
    <div>{{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
const { counter } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();
</script>
