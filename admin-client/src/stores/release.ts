import { defineStore } from "pinia";
import api from "@/common/api";

type Release = {
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
    actions: {
        async getInfo() {
            const result = await api.get("/");
            console.log(result);
        },
        async create() {
            const result = await api.post("/create", {
                name: this.name,
                author: this.author,
            });
            console.log(result);
        },
    },
});
