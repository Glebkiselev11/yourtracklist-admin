import jsmediatags from "jsmediatags/dist/jsmediatags.min.js";

type ReadResult = {
	tags: Tags,
}

export type Tags = {
	album: string, // Album name
	artist: string,
	track: string, // Track number
	title: string,
}

export default  {
	getAudioTagsFromAudio(track: File): Promise<Tags> {	
		return new Promise((resolve, reject) => {
			jsmediatags.read(track, {
				onSuccess({ tags }: ReadResult) {
					resolve(tags);
				},

				onError(error: Error) {
					reject(error); 
				},
			});	
		});
	},
};
