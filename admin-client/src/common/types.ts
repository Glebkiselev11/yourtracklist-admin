import type { AudioTrackFileConfig, CoverFileConfig } from "./fileConfig";

type Base64<fileType extends string> = `data:${fileType};base64${string}`;

type AudioFileTypes = typeof AudioTrackFileConfig.types[number];
export type Base64Audio = Base64<AudioFileTypes>;

type ImageFileTypes = typeof CoverFileConfig.types[number];
export type Base64Image = Base64<ImageFileTypes>;