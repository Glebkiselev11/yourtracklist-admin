import {defineStore} from "pinia";

export const useNotificationStore = defineStore({
    id: "notification",
    state() {
        return {
            show: false,
            text: "",
            isError: false,
        };
    },
    actions: {
        _resetState() {
            this.show = false;
            setTimeout(() => {

                this.text = "";
                this.isError = false;
            }, 100);
        },
        triggerError(text: string) {
            this.text = text;
            this.isError = true;
            this.show = true;

            setTimeout(() => {
                this._resetState();
            }, 5000);
        },
    },

});