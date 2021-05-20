import { NextApiHandler } from "next";
import NextAuth, { DefaultSession } from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import nodemailer from "nodemailer";

import prisma from "@/lib/prisma";
import { User } from ".prisma/client";

let userData: User = null;
const options = {
	providers: [
		Providers.Email({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: Number(process.env.EMAIL_SERVER_PORT),
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
		Providers.Credentials({
			id: "credentials",
			name: "Credentials",
			authorize: async (credentials: ICredentials): Promise<any> => {
				try {
					const user: User = await prisma.user.findFirst({
						where: {
							email: credentials.email,
							password: credentials.password,
						},
					});

					if (user !== null) {
						userData = user;
						return user;
					} else {
						return null;
					}
				} catch (e) {
					const errorMessage = e.response.data.massage;
					throw new Error(errorMessage);
				}
			},
		}),
	],
	adapter: Adapters.Prisma.Adapter({ prisma }),
	callbacks: {
		session: async (session: DefaultSession) => {
			if (userData) session.user = userData;
			return Promise.resolve(session);
		},
		redirect: async (
			url: string,
			baseUrl: string
		): Promise<string> => {
			return url.startsWith(baseUrl)
				? Promise.resolve(url)
				: Promise.resolve(baseUrl);
		},
	},
	session: {
		jwt: true,
		maxAge: 30 * 24 * 60 * 60,
	},
	redirect: false,
	cookie: {
		secure:
			process.env.NODE_ENV && process.env.NODE_ENV === "production",
	},

	secret: process.env.SECRET,
};

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, options);
export default authHandler;
