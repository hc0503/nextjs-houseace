import { User } from ".prisma/client";
import { withIronSession } from "next-iron-session";
import bcrypt from "bcrypt";
import Validator from "validatorjs";

import prisma from "@/lib/prisma";

export default withIronSession(
	async (req, res) => {
		if (req.method === "POST") {
			const { email, password } = req.body;
			const validator = new Validator(req.body, {
				email: "required|email",
				password: "required",
			});
			if (validator.fails()) {
				return res.status(412).send(validator.errors);
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
		} else {
			return res.status(404).send();
		}
	},
	{
		cookieName: process.env.SECRET_COOKIE_NAME,
		cookieOptions: {
			secure: process.env.NODE_ENV === "production" ? true : false,
		},
		password: process.env.SECRET_COOKIE_PASSWORD,
	}
);
