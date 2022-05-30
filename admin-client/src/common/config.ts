export class Config {
    types: Array<string>;
    maxBytes: number;

    constructor(types: Array<string>, maxBytes: number) {
        this.maxBytes = maxBytes;
        this.types = types;
    }

    get maxMb(): string {
        return `${this.maxBytes / 1000000}MB`;
    }

    isAcceptableFileType(type: string): boolean {
        return this.types.includes(type);
    }

    getAcceptList(): string {
        return this.types.join(",");
    }

    isAcceptableFileSize(bytes: number): boolean {
        return bytes <= this.maxBytes;
    }
}

export const CoverConfig = new Config(
    ["image/jpeg", "image/png"],
    1000000,
);

export const AudioTrackConfig = new Config(
    ["audio/mpeg"],
    5000000,
);
