import { defineStore } from "pinia";
import api from "@/common/api";
import { useNotificationsStore } from "@/stores/notifications";
import { CoverFileConfig, AudioTrackFileConfig } from "@/common/fileConfig";
import type { Base64Audio, Base64Image } from "@/common/types";

type Release = {
	name: string;
	author: string;
	cover: Base64Image | null;
	date: string; 
	tracks: Array<Base64Audio>;    
}

export const useReleaseStore = defineStore({
	id: "release",
	state(): Release {
		return {
			name: "",
			author: "",
			cover: null,
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
			if (!CoverFileConfig.isAcceptableFileSize(file.size)) {
				$n.triggerError(
					// eslint-disable-next-line max-len
					`Image size is too large, use file less than ${CoverFileConfig.maxMb}`,
				);
			} else {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = e => {
					const image = e.target?.result;
					if (typeof image === "string") {
						this.cover = image as Base64Image;
					} else {
						$n.triggerError(
							"Can't read image file, try upload another format",
						);
					}
				};
			}
		},
		addAudioTrack(file: File) {
			const $n = useNotificationsStore();
			if (!AudioTrackFileConfig.isAcceptableFileSize(file.size)) {
				$n.triggerError(
					// eslint-disable-next-line max-len
					`Audio file size is too large, use file less than ${AudioTrackFileConfig.maxMb}`,
				);
			} else {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = e => {
					const audioTrack = e.target?.result;
					if (typeof audioTrack === "string") {
						this.tracks.push(audioTrack as Base64Audio);
					} else {
						$n.triggerError(
							"Can't read audio file, try upload another format",
						);
					}
				};
			}
		},
		removeCover() {
			this.cover = null;
		},
	},
});
