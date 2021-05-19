import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import prisma from "@/lib/prisma";
import Adapters from "next-auth/adapters";
import { getToken } from "next-auth/jwt";

interface ICredentials {
	email: string;
	password: string;
}
let userAccount = null;
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
					console.log(credentials.password);
					const user = await prisma.user.findFirst({
						where: {
							email: credentials.email,
							password: credentials.password,
						},
					});

					if (user !== null) {
						userAccount = user;
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
		jwt: async (token, user, account, profile, isNewUser) => {
			if (typeof user !== typeof undefined) {
				token.user = user;
			}
			return Promise.resolve(token);
		},
		session: async (session, token) => {
			if (userAccount !== null) {
				session.user = userAccount;
			} else if (
				typeof token.user !== typeof undefined &&
				(typeof session.user === typeof undefined ||
					(typeof session.user !== typeof undefined &&
						typeof session.user.userId === typeof undefined))
			) {
				session.user = token.user;
			} else if (typeof token !== typeof undefined) {
				session.token = token;
			}

			return Promise.resolve(session);
		},
		redirect: async (url, baseUrl) => {
			return url;
		},
	},
	// pages: {
	// 	error: "/auth/login",
	// },
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
