<template>
	<v-text-field
		v-model="newArtist"
		variant="underlined"
		label="Artists"
		density="comfortable"
		hide-details="auto"
		@change="addNewArtist"
	>
		<template #prependInner>
			<v-chip
				v-for="artist of artists"
				:key="artist"
				class="mr-1 my-1"
				size="small"
				@click.prevent="removeArtist(artist)"
			>
				{{ artist }}
			</v-chip>	
		</template>
	</v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useReleaseStore } from "@/stores/release";

export default defineComponent({
	setup() {
		const {  artists } = storeToRefs(useReleaseStore());
		return { artists };
	},
	data() {
		return {
			newArtist: "",
		};
	},
	methods: {
		addNewArtist(e: Event) {
			const { value } = e.target as HTMLInputElement;
			
			if (!this.artists.includes(value)) {
				this.artists.push(value);
			}

			this.newArtist = "";
		},
		removeArtist(artist: string) {
			this.artists = this.artists.filter(a => a !== artist);
		}, 
	},	
});

</script>
