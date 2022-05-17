<template>
    <div
        :class="{ 'emphasize': emphasizeDropPlaces, 'at-drop-place': active }"
        @dragenter.prevent="setActive"
        @dragover.prevent="setActive"
        @dragleave.prevent="setInactive"
        @drop.prevent="onDrop"
    >
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useEmphasizeDropPlaces } from "@/stores/emphasizeDropPlaces";
import { mapState, mapActions } from "pinia";

export default defineComponent({
    emits: {
        "files-dropped": (file: FileList) => file,
    },
    data() {
        return {
            active: false,
        };
    },
    computed: {
        ...mapState(useEmphasizeDropPlaces, ["emphasizeDropPlaces"]),
    },
    methods: {
        ...mapActions(useEmphasizeDropPlaces, { 
            disableEmphasizingDropPlaces: "disable", 
        }),
        setActive() {
            this.active = true;
        },
        setInactive() {
            this.active = false;
        },
        onDrop(e: DragEvent) {
            this.setInactive();
            this.disableEmphasizingDropPlaces();

            const files = e.dataTransfer?.files;
            if (files) {
                this.$emit("files-dropped", files);
            }
        },
    },
});
</script>

<style lang="scss" scoped>

.emphasize {
    border: 4px dotted black;
}
.at-drop-place {
    border: 4px dotted purple;
}
</style>