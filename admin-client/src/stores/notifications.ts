import { defineStore } from "pinia";

type Notification = {
	text: string;
	type: "error" | "info" | "success"
}

export const useNotificationsStore = defineStore({
	id: "notifications",
	state() {
		return {
			notifications: [] as Array<Notification>,
		};
	},
	actions: {
		triggerError(text: string) {
			this.notifications.push({ text, type: "error" });

			setTimeout(() => {
				this.notifications.shift();
			}, 5000);
		},
	},

});