export const AcceptableCoverFormats = {
    list: ["image/jpeg", "image/png"],

    contain(type: string): boolean {
        return this.list.includes(type);
    },

    get(): string {
        return this.list.join(",");
    },
};
