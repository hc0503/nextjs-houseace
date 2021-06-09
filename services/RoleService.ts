import axios from "@/lib/axios";

export const fetchRoleList = async (): Promise<IRole> => {
	const res = await axios.get("/api/roles");
	return res.data.data;
};
