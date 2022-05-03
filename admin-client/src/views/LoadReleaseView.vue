<template>
    <div class="ma-8 pa-8 bg-white elevation-2">
        <v-text-field
            v-model="name"
            variant="underlined"
            label="Release name"
        />
        <v-text-field
            v-model="author"
            variant="underlined"
            label="Author"
        />
    </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useReleaseStore } from "@/stores/release";
export default {
    setup() {
        const { name, author } = storeToRefs(useReleaseStore());
        return { name, author };
    },
};
</script>
