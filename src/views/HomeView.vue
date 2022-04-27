<template>
  <main>
    <button @click="increment()" v-text="'increase counter'" />
    <div>{{ counter }}</div>    
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import {storeToRefs} from "pinia"
const { counter } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();
</script>

<style scoped lang="scss">
main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
