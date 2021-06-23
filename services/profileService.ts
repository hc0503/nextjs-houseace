import axios from "../lib/axios";

export const getProfileData = async (): Promise<any> => {
	try {
		const res = await axios.get("/api/v1/private/profiles/me");
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postUpdatePhoto = async (
	data: FormData
): Promise<any> => {
	try {
		const res = await axios.post(
			`/api/v1/private/profiles/update-photo`,
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
