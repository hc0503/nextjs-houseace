import axios from "../lib/axios";

export const getRoles = async (): Promise<any> => {
	try {
		const res = await axios.get(
			`${process.env.API_URL}/api/v1/roles`
		);
		return Promise.resolve(res.data.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
