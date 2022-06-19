import { defineStore } from "pinia";
import api from "@/common/api";
import mediaTags from "@/common/mediatags";
import { useNotificationsStore } from "@/stores/notifications";
import { CoverFileConfig, AudioTrackFileConfig } from "@/common/fileConfig";
import type { Base64Audio, Base64Image } from "@/common/types";
import { AudioTrack } from "@/common/models/audio-track.model";
import { reactive } from "vue";


type Release = {
	name: string;
	artists: Array<string>;
	cover: Base64Image | null;
	date: string; 
	audioTracks: Array<AudioTrack>;    
}

export const useReleaseStore = defineStore({
	id: "release",
	state(): Release {
		return {
			name: "",
			artists: [],
			cover: null,
			date: "",
			audioTracks: reactive([]),
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
				artists: this.artists,
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
		async addAudioTrack(file: File) {
			const $n = useNotificationsStore();
			if (!AudioTrackFileConfig.isAcceptableFileSize(file.size)) {
				$n.triggerError(
					// eslint-disable-next-line max-len
					`Audio file size is too large, use file less than ${AudioTrackFileConfig.maxMb}`,
				);
			} else {
				const promiseTags = mediaTags.getAudioTagsFromAudio(file);
				
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = async e => {
					const audioTrack = e.target?.result as Base64Audio;
					
					if (typeof audioTrack === "string") {
						promiseTags
							.then(tags => {
								this.audioTracks.push(
									new AudioTrack(audioTrack, tags),
								);
							})
							.catch(() => {
								$n.triggerError("Can't read media tags of audio file");
								this.audioTracks.push(new AudioTrack(audioTrack));
							});
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
