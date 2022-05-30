<template>
    <div
        v-if="dragging"
        class="drop-overlay d-flex justify-center align-center"
        @mouseout="disableDragging"
        @mouseup="disableDragging"
        @drop.prevent="handleDroppedFiles"
        @dragover.prevent
    >
        <div
            class="d-flex flex-column align-center"
        >
            <v-icon
                color="white"
                size="170px"
                icon="mdi-plus-box-multiple"
            />
            <h3 class="text-white">
                Drop cover or audio files for adding them for release
            </h3>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useDraggingFilesStore } from "@/stores/draggingFiles";
import { useReleaseStore } from "@/stores/release";
import { useNotificationsStore } from "@/stores/notifications";
import { CoverConfig  } from "@/common/config"; 

export default defineComponent({
    setup() {
        return { CoverConfig };
    },
    computed: {
        ...mapState(useDraggingFilesStore, ["dragging"]),
    },
    methods: {
        ...mapActions(useDraggingFilesStore, { 
            disableDragging: "disable", 
        }),
        ...mapActions(useReleaseStore, ["addCover"]),
        ...mapActions(useNotificationsStore, ["triggerError"]),
        handleDroppedFiles(e: DragEvent) {
            this.disableDragging();

            const files = e.dataTransfer?.files;
            if (files) {
                Array.from(files).forEach(file => {
                    if (this.CoverConfig.isAcceptableFileType(file.type)) {
                        this.addCover(file);
                    } else {
                        this.triggerError("Unexpected file type"); 
                    }
                });
            }
        },
    }, 
});
</script>

<style lang="scss" scoped>
.drop-overlay {
    position: absolute;
    z-index: 1005;
    background: rgba(128, 128, 128, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}

</style>