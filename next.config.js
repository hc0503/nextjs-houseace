module.exports = {
	env: {
		APP_NAME: process.env.APP_NAME ?? "Houseace",
		BASE_URL: process.env.BASE_URL ?? "http://localhost:3000",
		API_URL: process.env.API_URL ?? "http://localhost:8080/api/v1",

		SECRET_COOKIE_NAME: process.env.SECRET_COOKIE_NAME ?? "HOMEACE_COOKIE",
		SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD ?? "cWqEyj=LPP?MCQtByts$rPS-nKL^N2s263An%WYd",
		GOOGLE_ID: process.env.GOOGLE_ID,
		GOOGLE_SECRET: process.env.GOOGLE_SECRET,
		FACEBOOK_ID: process.env.FACEBOOK_ID,
		FACEBOOK_SECRET: process.env.FACEBOOK_SECRET
	},
}