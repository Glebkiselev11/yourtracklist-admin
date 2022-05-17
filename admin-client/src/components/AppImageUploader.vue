<template>
    <app-drop-zone
        v-if="imageBlob === ''"
        class="upload-image"
        @files-dropped="extractFile"
    >
        <button
            class="button rounded bg-grey-lighten-4 d-flex justify-center align-center"
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
    </app-drop-zone>
    <div
        v-else
        class="preview-image"
    >
        <v-img
            :src="imageBlob"
            class="rounded"
            cover
        />
        <div class="preview-image-buttons">
            <v-btn
                icon="mdi-delete"
                class="mr-4"
                @click="remove"
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
import { mapActions } from "pinia";
import { useNotificationStore } from "@/stores/notification";
import AppDropZone from "@/components/AppDropZone.vue";

export default defineComponent({
    components: {
        AppDropZone,
    },
    data() {
        return {
            imageBlob: "" as string,
            maxFileSize: { bytes: 1000000, mb: "1MB" },
        };
    },
    methods: {
        ...mapActions(useNotificationStore, ["triggerError"]),
        selectFile() {
            const fileInput = this.$refs.fileInput as HTMLInputElement;
            fileInput.click();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        extractFilesFromFileInput(e: any) {
            const files = e.target?.files;
            if (files) {
                this.extractFile(files);
            } else {
                this.triggerError("File was not provided");
            }
        },
        extractFile(files: FileList): void {
            const file = files[0];
            if (!file) {
                this.triggerError("Unexpected error");
            } else if (file.size > this.maxFileSize.bytes) {
                this.triggerError(
                    `Image size is too large, use file less than ${this.maxFileSize.mb}`,
                );
            } else {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = e => {
                    const image = e.target?.result;
                    if (typeof image === "string") {
                        this.imageBlob = image;
                    } else {
                        this.triggerError(
                            "Can't read image file, try upload another format",
                        );
                    }
                };
            }
        },
        remove() {
            this.imageBlob = "";
        },
        replace() {
            this.remove();
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
    .button {
        width: 100%;
        height: 100%;
    }
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
