import { Role } from ".prisma/client";
import axios from "@/lib/axios";

export const fetchRoleList = async (): Promise<Role> => {
	const res = await axios.get("/api/roles");
	return res.data.data;
};
