import { defineStore } from "pinia";
import api from "@/common/api";
import { useNotificationsStore } from "@/stores/notifications";

type Release = {
    name: string;
    author: string;
    cover: string;
    date: string; 
    tracks: Array<string>;    
}
const MAX_COVER_SIZE = { bytes: 1000000, mb: "1MB" };

export const useReleaseStore = defineStore({
    id: "release",
    state(): Release {
        return {
            name: "",
            author: "",
            cover: "",
            date: "",
            tracks: [],
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
                cover: this.cover,
                date: this.date,
            });
            console.log(result);
        },
        addCover(file: File) {
            const $n = useNotificationsStore();
            if (file.size > MAX_COVER_SIZE.bytes) {
                $n.triggerError(
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
                        $n.triggerError(
                            "Can't read image file, try upload another format",
                        );
                    }
                };
            }
        },
        addAudioTrack(file: File) {
            console.log(file);
        },
        removeCover() {
            this.cover = "";
        },
    },
});
