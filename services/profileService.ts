import axios from "../lib/axios";

export const getFetchProfileData = async (): Promise<any> => {
	try {
		const res = await axios.get("/api/v1/private/profiles/me");
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postUpdateProfilePhoto = async (
	data: FormData
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/profiles/me/update-photo",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postUpdateProfileData = async (
	data: IProfile
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/profiles/me/update",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
