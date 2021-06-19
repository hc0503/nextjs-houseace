import axios from "@/lib/axios";

export const getRoles = async (): Promise<any> => {
	const res = await axios.get(`${process.env.API_URL}/roles`);
	return res.data.data;
};
