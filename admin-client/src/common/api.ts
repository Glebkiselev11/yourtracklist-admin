/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
axios.defaults.baseURL = "http://localhost:7070";

export default {
	get(url: string) {
		return axios.get(url); 
	},
	post(url: string, payload: any) {
		return axios.post(url, payload);
	},
};