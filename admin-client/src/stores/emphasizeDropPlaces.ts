import { defineStore } from "pinia";

export const useEmphasizeDropPlaces = defineStore({
    id: "emphasizeDropPlaces",
    state() {
        return {
            emphasizeDropPlaces: false,
        };
    },
    actions: {
        enable() {
            this.emphasizeDropPlaces = true;
        },
        disable() {
            this.emphasizeDropPlaces = false;
        },
    },
});