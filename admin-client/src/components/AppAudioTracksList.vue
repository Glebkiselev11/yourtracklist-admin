<template>
	<app-audio-track
		v-for="(audioTrack, i) in audioTracks"
		:key="i"
		:audio-track="audioTrack"
	/>

	<app-audio-tracks-uploader />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs  } from "pinia";
import { useReleaseStore } from "@/stores/release";
import AppAudioTracksUploader from "./AppAudioTracksUploader.vue";
import AppAudioTrack from "./AppAudioTrack.vue";

export default defineComponent({
	components: {
		AppAudioTracksUploader,
		AppAudioTrack,
	},
	setup() {
		const { audioTracks } = storeToRefs(useReleaseStore());
		return { audioTracks };
	},
});
</script>