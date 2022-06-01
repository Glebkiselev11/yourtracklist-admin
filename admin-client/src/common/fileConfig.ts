export class FileConfig {
    constructor(
        private types: Array<string>,
        private maxBytes: number,
    ) {}

    get maxMb(): string {
        return `${this.maxBytes / 1000000}MB`;
    }

    getAcceptList(): string {
        return this.types.join(",");
    }

    isAcceptableFileType(type: string): boolean {
        return this.types.includes(type);
    }

    isAcceptableFileSize(bytes: number): boolean {
        return bytes <= this.maxBytes;
    }
}

export const CoverFileConfig = new FileConfig(
    ["image/jpeg", "image/png"],
    1000000,
);

export const AudioTrackFileConfig = new FileConfig(
    ["audio/mpeg"],
    5000000,
);
