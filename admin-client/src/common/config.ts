export class Config {
    list: Array<string>;

    constructor(list: Array<string>) {
        this.list = list;
    }

    contain(type: string): boolean {
        return this.list.includes(type);
    }

    get(): string {
        return this.list.join(",");
    }
}

export const AcceptableCoverFormats = new Config(["image/jpeg", "image/png"]);
export const AcceptableAudioTracksFormats = new Config(["audio/mpeg"]);
