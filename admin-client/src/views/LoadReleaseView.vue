<template>
    <div class="ma-8">
        <div class="mb-6 pa-8 bg-white elevation-2 d-flex">
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
                    class="mb-3"
                />
                <app-date-input v-model="date" />
            </div>
        </div>
        <app-audio-tracks-list />
    </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useReleaseStore } from "@/stores/release";

import AppImageUploader from "@/components/AppImageUploader.vue";
import AppDateInput from "@/components/AppDateInput.vue";
import  { defineComponent } from "vue";
import AppAudioTracksList from "../components/AppAudioTracksList.vue";


export default defineComponent({
    components: { AppImageUploader, AppDateInput, AppAudioTracksList },
    setup() {
        const { name, author, date } = storeToRefs(useReleaseStore());
        return { name, author, date };
    },
});
</script>
