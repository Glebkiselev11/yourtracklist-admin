<template>
	<v-app-bar elevation="2">
		<template #prepend>
			<v-app-bar-title class="title font-weight-bold">
				Yourtracklist
			</v-app-bar-title>

			<div class="ml-4">
				<img
					src="@/assets/logo.png"
					alt="logo"
				>
			</div>
		</template>
		<template #append>
			<v-btn
				color="black"
				variant="contained-text"
				@click="create"
			>
				Load release
			</v-btn>
		</template>
	</v-app-bar>
</template>
<script lang="ts">
import { mapActions } from "pinia";
import { useReleaseStore } from "@/stores/release";
export default {
	methods: {
		...mapActions(useReleaseStore, ["create"]),
	},
};
</script>

<style scope lang="scss">
.title {
	font-size: 28px !important;
}
</style>
