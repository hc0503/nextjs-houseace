module.exports = {
	env: {
		APP_NAME: process.env.APP_NAME ?? "Next App",
		API_URL: process.env.API_URL ?? "http://localhost:3000/api",

		DB_URL: process.env.DB_URL ?? "mysql://root:@localhost:3306/houseace_db",

		EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST ?? "localhost",
		EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT ?? 110,
		EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER ?? "root",
		EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD ?? "root",
		EMAIL_FROM: process.env.EMAIL_FROM ?? "root@localhost.com",

		SECRET: process.env.SECRET ?? "RAMDOM_STRING",

		GITHUB_ID: process.env.GITHUB_ID ?? "",
		GITHUB_SECRET: process.env.GITHUB_SECRET ?? ""
	},
	reactStrictMode: false,
}