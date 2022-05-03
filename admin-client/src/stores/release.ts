import { defineStore } from "pinia";

interface Release {
    name: string;
    author: string;
}
export const useReleaseStore = defineStore({
    id: "release",
    state(): Release {
        return {
            name: "",
            author: "",
        };
    },
});
