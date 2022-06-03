<template>
	<app-audio-track
		v-for="(encodedTrack, i) in tracks"
		:key="i"
		:encoded-track="encodedTrack"
	/>

	<app-audio-tracks-uploader />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import AppAudioTracksUploader from "./AppAudioTracksUploader.vue";
import { useReleaseStore } from "@/stores/release";
import AppAudioTrack from "./AppAudioTrack.vue";

export default defineComponent({
	components: {
		AppAudioTracksUploader,
		AppAudioTrack,
	},
	setup() {
		const { tracks } = storeToRefs(useReleaseStore());
		return { tracks };
	},
});
</script>