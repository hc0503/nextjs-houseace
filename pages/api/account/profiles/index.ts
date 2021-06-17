import { NextApiResponse } from "next";
import nc from "next-connect";
import { User } from ".prisma/client";
import Validator from "validatorjs";

import prisma from "@/lib/prisma";
import { sessionMiddleware } from "@/lib/iron-session";

export default nc()
	.use(sessionMiddleware)
	// Update profile data
	.post(async (req: any, res: NextApiResponse) => {
		const sessionUser: User = req.session.get("user");
		const { name, phone, address } = req.body;
		const validator = new Validator(req.body, {
			name: ["required"],
			phone: ["required"],
			address: ["required"],
		});
		if (validator.fails()) {
			return res.status(412).send(validator.errors);
		}
		try {
			const user: User = await prisma.user.update({
				where: {
					id: Number(sessionUser.id),
				},
				data: {
					name: name,
					phone: phone,
					address: address,
				},
			});

			req.session.set("user", user);
			return res.json({
				msg: "The profile data is updated successfully.",
				data: user,
			});
		} catch (error) {
			return res.status(422).send({
				errors: {
					email: error,
				},
			});
		}
	})
	// Get profile data
	.get(async (req: any, res: NextApiResponse) => {
		const sessionUser: User = req.session.get("user");
		try {
			const user: User = await prisma.user.findUnique({
				where: {
					id: Number(sessionUser.id),
				},
			});
			return res.json({
				msg: "The profile data is got successfully.",
				data: user,
			});
		} catch (error) {
			return res.status(422).send({
				errors: {
					email: error,
				},
			});
		}
	});
