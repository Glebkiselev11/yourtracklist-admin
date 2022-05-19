import { defineStore } from "pinia";

export const useDraggingFilesStore = defineStore({
    id: "emphasizeDropPlaces",
    state() {
        return {
            dragging: false,
        };
    },
    actions: {
        enable() {
            this.dragging = true;
        },
        disable() {
            this.dragging = false;
        },
    },
});