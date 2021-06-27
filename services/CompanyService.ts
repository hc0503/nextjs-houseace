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
