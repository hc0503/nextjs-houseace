import { NextApiResponse } from "next";
import nc from "next-connect";
import { User } from ".prisma/client";
import Validator from "validatorjs";
import bcrypt from "bcrypt";

import prisma from "@/lib/prisma";
import { sessionMiddleware } from "@/lib/iron-session";

export default nc()
	.use(sessionMiddleware)
	.post(async (req: any, res: NextApiResponse) => {
		const { role } = req.body;
		const validator = new Validator(req.body, {
			role: ["required"],
		});
		if (validator.fails()) {
			return res.status(412).send(validator.errors);
		}
		const sessionUser: User = req.session.get("user");
		let user: User = await prisma.user.findUnique({
			where: {
				id: Number(sessionUser.id),
			},
		});
		try {
			user = await prisma.user.update({
				where: {
					id: Number(sessionUser.id),
				},
				data: {
					roleId: Number(role),
				},
			});
			return res.json({
				msg: "The role is updated successfully.",
				data: user,
			});
		} catch (error) {
			return res.status(403).json({
				errors: {
					role: ["The database connection is wrong."],
				},
			});
		}
	});
