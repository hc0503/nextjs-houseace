import axios from "../lib/axios";

export const postUpdateCompanyLogo = async (
	data: FormData
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/companies/me/update-logo",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postUpdateCompanyHero = async (
	data: FormData
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/companies/me/update-hero",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postUpdateCompanyData = async (
	data: ICompanyData
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/companies/me/update-data",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postUpdateCompanyServices = async (
	data: IServices
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/companies/me/update-services",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postAddCompanyImage = async (
	data: FormData
): Promise<any> => {
	try {
		const res = await axios.post(
			"/api/v1/private/companies/me/image",
			data
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const postDeleteCompanyImage = async (
	id: string
): Promise<any> => {
	try {
		const res = await axios.post(
			`/api/v1/private/companies/me/image/${id}`
		);
		return Promise.resolve(res.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
