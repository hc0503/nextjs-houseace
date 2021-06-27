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
	data: IProfileData
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/profiles/me/update-data",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postUpdateProfilePassword = async (
	data: IPassword
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/profiles/me/update-password",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postUpdateProfileType = async (
	data: IProfileType
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/profiles/me/update-type",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
