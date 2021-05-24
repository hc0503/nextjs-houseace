import { SessionOptions, ironSession } from "next-iron-session";

export const sessionOptions: SessionOptions = {
	cookieName: process.env.SECRET_COOKIE_NAME,
	cookieOptions: {
		secure: process.env.NODE_ENV === "production" ? true : false,
	},
	password: process.env.SECRET_COOKIE_PASSWORD,
};

export const sessionMiddleware = ironSession(sessionOptions);
