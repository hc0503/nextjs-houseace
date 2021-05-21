import { User } from ".prisma/client";
import { withIronSession } from "next-iron-session";

import prisma from "@/lib/prisma";

const VALID_EMAIL = "admin@admin.com";
const VALID_PASSWORD = "password";

export default withIronSession(
	async (req, res) => {
		if (req.method === "POST") {
			const { email, password } = req.body;
			const user: User = await prisma.user.findFirst({
				where: {
					email: email,
					password: password,
				},
			});
			if (email === VALID_EMAIL && password === VALID_PASSWORD) {
				req.session.set("user", { email });
				await req.session.save();

				res.status(200).json({ msg: "The login is successed." });
			}
			res.status(401).json({ msg: "The credentials are incorrect." });
		} else {
			res.status(404).send();
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
