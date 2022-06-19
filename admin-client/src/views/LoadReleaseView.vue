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
				<app-artists-input class="mb-4" />
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
import AppArtistsInput from "@/components/AppArtistsInput.vue";
import AppDateInput from "@/components/AppDateInput.vue";
import  { defineComponent } from "vue";
import AppAudioTracksList from "../components/AppAudioTracksList.vue";


export default defineComponent({
	components: { AppImageUploader, AppDateInput, AppAudioTracksList, AppArtistsInput },
	setup() {
		const { name, artists, date } = storeToRefs(useReleaseStore());
		return { name, artists, date };
	},
});
</script>
