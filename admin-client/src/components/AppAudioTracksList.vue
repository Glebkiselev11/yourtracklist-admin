<template>
    <app-audio-tracks-uploader />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppAudioTracksUploader from "./AppAudioTracksUploader.vue";

export default defineComponent({
    components: {
        AppAudioTracksUploader,
    },
});
</script>