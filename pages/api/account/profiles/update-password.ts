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
		const { current_password, password } = req.body;
		const validator = new Validator(req.body, {
			current_password: ["required"],
			password: ["required", "min:8", "confirmed"],
			password_confirmation: ["required"],
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
		const doesPasswordMatch: boolean = bcrypt.compareSync(
			current_password,
			user.password
		);
		if (!doesPasswordMatch) {
			return res.status(403).json({
				errors: {
					current_password: ["The current password is incorrect."],
				},
			});
		}
		try {
			user = await prisma.user.update({
				where: {
					id: Number(sessionUser.id),
				},
				data: {
					password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
				},
			});
			return res.json({
				msg: "The password is updated successfully.",
				data: user,
			});
		} catch (error) {
			return res.status(403).json({
				errors: {
					current_password: ["The database connection is wrong."],
				},
			});
		}
	});
