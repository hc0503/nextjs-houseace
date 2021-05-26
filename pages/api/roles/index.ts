import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import prisma from "@/lib/prisma";
import { sessionMiddleware } from "@/lib/iron-session";

interface IRole {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
}
interface IResponseData {
	success: boolean;
	data: IRole[];
}
const getRoles = nc()
	.use(sessionMiddleware)
	.get(
		async (
			_: NextApiRequest,
			res: NextApiResponse<IResponseData>
		): Promise<void> => {
			const roles = await prisma.role.findMany();
			return res.json({ success: true, data: roles });
		}
	);

export default getRoles;
