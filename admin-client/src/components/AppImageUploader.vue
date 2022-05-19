<template>
    <button
        v-if="cover === ''"
        class="upload-image rounded bg-grey-lighten-4 d-flex justify-center align-center"
        @click="selectFile"
    >
        <v-icon icon="mdi-image-plus" />

        <input
            ref="fileInput"
            type="file"
            accept="image/jpeg,image/png"
            class="d-none"
            @change="extractFilesFromFileInput"
        >
    </button>
    <div
        v-else
        class="preview-image"
    >
        <v-img
            :src="cover"
            class="rounded"
            cover
        />
        <div class="preview-image-buttons">
            <v-btn
                icon="mdi-delete"
                class="mr-4"
                @click="removeCover"
            />
            <v-btn
                icon="mdi-reload"
                @click="replace"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useReleaseStore } from "@/stores/release";

export default defineComponent({
    computed: {
        ...mapState(useReleaseStore, ["cover"]),
    },
    methods: {
        ...mapActions(useReleaseStore, ["addCover", "removeCover"]),
        selectFile() {
            const fileInput = this.$refs.fileInput as HTMLInputElement;
            fileInput.click();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        extractFilesFromFileInput(e: any) {
            const files = e.target?.files;
            if (files) {
                this.extractFile(files);
            }
        },
        extractFile(files: FileList): void {
            const file = files[0];
            if (file) {
                this.addCover(file);
            } 
        },
        replace() {
            this.removeCover();
            this.$nextTick(() => this.selectFile());
        },
    },
});
</script>

<style lang="scss" scoped>
$size: 220px;

.upload-image {
    min-width: $size;
    height: $size;
}

.preview-image {
    position: relative;
    min-width: $size;
    height: $size;

    &-buttons {
        visibility: hidden;

        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: $size;
        height: $size;
    }
}

.preview-image:hover .preview-image-buttons {
    visibility: visible;
}

</style>
