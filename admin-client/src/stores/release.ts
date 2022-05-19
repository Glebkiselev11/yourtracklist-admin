import { defineStore } from "pinia";
import api from "@/common/api";
import { useNotificationStore } from "./notification";

type Release = {
    name: string;
    author: string;
    cover: string;
}
const MAX_COVER_SIZE = { bytes: 1000000, mb: "1MB" };

export const useReleaseStore = defineStore({
    id: "release",
    state(): Release {
        return {
            name: "",
            author: "",
            cover: "",
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
        addCover(file: File) {
            const notification = useNotificationStore();
            if (file.size > MAX_COVER_SIZE.bytes) {
                notification.triggerError(
                    `Image size is too large, use file less than ${MAX_COVER_SIZE.mb}`,
                );
            } else {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = e => {
                    const image = e.target?.result;
                    if (typeof image === "string") {
                        this.cover = image;
                    } else {
                        notification.triggerError(
                            "Can't read image file, try upload another format",
                        );
                    }
                };
            }
        },
        removeCover() {
            this.cover = "";
        },
    },
});
