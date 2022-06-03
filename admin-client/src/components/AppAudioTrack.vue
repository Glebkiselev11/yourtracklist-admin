<template>
	{{ audioTrack }}
</template>
<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Base64Audio } from "@/common/types";


export default defineComponent({
	props: {
		encodedTrack: {
			type: String as PropType<Base64Audio>,
			default: null,
		},
	},
	data() {
		return {
			audioTrack: null as HTMLAudioElement | null,
		};
	},
	created() {
		this.audioTrack = new Audio(this.encodedTrack);
	},
});

</script>