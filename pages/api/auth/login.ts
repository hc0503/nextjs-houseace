import { NextApiResponse } from "next";
import nc from "next-connect";
import { User } from ".prisma/client";
import bcrypt from "bcrypt";
import Validator from "validatorjs";

import prisma from "@/lib/prisma";
import { sessionMiddleware } from "@/lib/iron-session";

export default nc()
	.use(sessionMiddleware)
	.post(async (req: any, res: NextApiResponse) => {
		const {
			email,
			password = "",
			provider_type = "EMAIL",
		} = req.body;
		if (provider_type === "EMAIL") {
			const validator = new Validator(req.body, {
				email: ["required", "email"],
				password: ["required"],
			});
			if (validator.fails()) {
				return res.status(412).send(validator.errors);
			}
		}
		const user: User = await prisma.user.findFirst({
			where: {
				email: email,
			},
		});
		if (user) {
			const doesPasswordMatch: boolean = bcrypt.compareSync(
				password,
				user.password
			);
			if (doesPasswordMatch) {
				req.session.set("user", { user });
				await req.session.save();

				return res
					.status(200)
					.send({ msg: ["The login is successed."] });
			} else {
				return res.status(401).send({
					errors: {
						email: ["The credential is incorrect."],
					},
				});
			}
		}
		return res.status(401).send({
			errors: {
				email: ["The account isn't existed."],
			},
		});
	});
