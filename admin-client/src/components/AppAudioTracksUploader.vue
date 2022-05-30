<template>
    <div class="w-100 d-flex justify-center">
        <v-btn
            prepend-icon="mdi-plus"
            variant="outlined"
            @click="selectFiles"
        >
            add track
        </v-btn>

        <!-- Hidden file input -->
        <input
            ref="audioFileInput"
            type="file"
            class="d-none"
            :accept="AudioTrackFileConfig.getAcceptList()"
            multiple
            @change="extractFilesFromFileInput"
        >
    </div>
</template>

<script lang="ts">
import { useReleaseStore } from "@/stores/release";
import { mapActions } from "pinia";
import { defineComponent } from "vue";
import { AudioTrackFileConfig } from "@/common/fileConfig";

export default defineComponent({
    setup() {
        return { AudioTrackFileConfig };
    },
    methods: {
        ...mapActions(useReleaseStore, ["addAudioTrack"]),
        selectFiles() {
            const fileInput = this.$refs.audioFileInput as HTMLInputElement;            
            fileInput.click();
        }, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        extractFilesFromFileInput(e: any) {
            const files = e.target?.files as FileList;
            if (files) {
                Array.from(files).forEach(file => this.addAudioTrack(file));
            }
        },
    },
});
</script>
