import { User } from ".prisma/client";
import { withIronSession } from "next-iron-session";
import bcrypt from "bcrypt";

import prisma from "@/lib/prisma";

export default withIronSession(
	async (req, res) => {
		if (req.method === "POST") {
			const { email, password } = req.body;
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

					res.status(200).json({ msg: "The login is successed." });
					return Promise.resolve();
				} else {
					res
						.status(401)
						.json({ msg: "The credential is incorrect." });
					return Promise.resolve();
				}
			}
			res.status(401).json({ msg: "The account isn't existed." });
			return Promise.resolve();
		} else {
			res.status(401).json({ msg: "The account isn't existed." });
			return Promise.resolve();
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
