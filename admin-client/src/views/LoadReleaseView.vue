<template>
    <div class="ma-8 pa-8 bg-white elevation-2 d-flex">
        <app-image-uploader /> 
        <div class="ml-8 w-100">
            <v-text-field
                v-model="name"
                variant="underlined"
                label="Release name"
                density="comfortable"
                hide-details="auto"
                class="mb-2"
            />
            <v-text-field
                v-model="author"
                variant="underlined"
                label="Author"
                density="comfortable"
                hide-details="auto"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useReleaseStore } from "@/stores/release";

import AppImageUploader from "@/components/AppImageUploader.vue";
import  { defineComponent } from "vue";


export default defineComponent({
    components: { AppImageUploader },
    setup() {
        const { name, author } = storeToRefs(useReleaseStore());
        return { name, author };
    },
});
</script>
