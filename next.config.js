module.exports = {
	env: {
		APP_NAME: process.env.APP_NAME ?? "Houseace",
		BASE_URL: process.env.BASE_URL ?? "http://localhost:3000",

		SECRET_COOKIE_NAME: process.env.SECRET_COOKIE_NAME ?? "HOMEACE_COOKIE",
		SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD ?? "cWqEyj=LPP?MCQtByts$rPS-nKL^N2s263An%WYd"
	},
}