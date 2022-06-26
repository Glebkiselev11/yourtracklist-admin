<template>
	<div class="d-flex">
		{{ artists }} - {{ audioTrack.title }}
	</div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { AudioTrack } from "@/common/models/audio-track.model";


export default defineComponent({
	props: {
		audioTrack: {
			type: Object as PropType<AudioTrack>,
			default: null,
		},
	},
	computed: {
		artists(): string {
			return this.audioTrack.artists.join(", ");
		},
	},
});

</script>