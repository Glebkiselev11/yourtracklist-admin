import type { Base64Audio } from "../types";
import type { Tags } from "../mediatags";

export class AudioTrack {
	public file: Base64Audio;
	public artists = [] as Array<string>;
	public title = "-";
	public order = 0;

	constructor(file: Base64Audio, tags?: Tags) {
		this.file = file;

		if (tags) {
			this.artists = [...tags.artist.split(", ")];
			this.title = tags.title;
			this.order = Number(tags.track);
		}
	}
}
