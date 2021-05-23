import { User } from ".prisma/client";
import { withIronSession } from "next-iron-session";
import bcrypt from "bcrypt";
import Validator from "validatorjs";

import prisma from "@/lib/prisma";

export default withIronSession(
	async (req, res) => {
		if (req.method === "POST") {
			const {
				first_name,
				last_name,
				email,
				password,
				password_confirmation,
			} = req.body;
			const validator = new Validator(req.body, {
				first_name: "required",
				last_name: "required",
				email: "required|email",
				password: "required|min:6|confirmed",
				password_confirmation: "required",
			});
			if (validator.fails()) {
				return res.status(412).send(validator.errors);
			}
			try {
				const user: User = await prisma.user.create({
					data: {
						firstName: first_name,
						lastName: last_name,
						email: email,
						password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
					},
				});
				req.session.set("user", { user });
				await req.session.save();
				return res
					.status(201)
					.json({ msg: "The account is created successfully." });
			} catch (error) {
				return res.status(422).send({
					errors: {
						email: ["The email already is existed."],
					},
				});
			}
		} else {
			return res.status(404).json();
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
