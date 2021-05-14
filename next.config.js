module.exports = {
	env: {
		APP_NAME: process.env.APP_NAME ?? "Next App",
		API_URL: process.env.API_URL ?? "http://localhost:3000/api/v1",
		DB_HOST: process.env.DB_HOST ?? "localhost",
		DB_NAME: process.env.DB_NAME ?? "next_db",
		DB_USER: process.env.DB_USER ?? "root",
		DB_PASSWORD: process.env.DB_PASSWORD ?? "root"
	},
}