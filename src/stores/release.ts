import { defineStore } from "pinia";

interface Release {
  name: String;
  author: String;
}
export const useReleaseStore = defineStore({
  id: "release",
  state(): Release {
    return {
      name: "",
      author: "",
    };
  },
});
