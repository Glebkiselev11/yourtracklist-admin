<template>
  <div class="ma-8 pa-8 bg-white elevation-2">
    <v-text-field
      v-model="releaseName"
      variant="underlined"
      label="Release name"
    />
    <v-text-field v-model="author" variant="underlined" label="Author" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      releaseName: "" as String,
      author: "" as String,
    };
  },
};
</script>

<style scoped lang="scss"></style>
