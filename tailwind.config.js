module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or "media" or "class"
	theme: {
		extend: {
			colors: {
				red: {
					140: "#FFF8F8",
					150: "#EEEEEE",
					160: "#FAF9FC",
					lesslight: "#FFE8E8",
					light: "#F87171",
					DEFAULT: "#F96868",
					dark: "#EF4444",
					moredark: "#DC2626",
				},
				gray: {
					310: "#B8B8B8",
					lesslight: "#E5E7EB",
					light: "#959595",
					DEFAULT: "#616161",
					dark: "#161616",
					moredark: "#4B5563",
				},
				custom: {
					profile: "#D5D2C8",
				},
			},
			maxWidth: {
				message: "919px",
			},
			backgroundImage: {
				"hero-pattern": "url('/images/landing/banner.png')",
				"contract-profile": "url('/images/contract_profile/bg.png')",
			},
			fontFamily: {
				montserrat: "MontserratRegular",
				"montserrat-bold": "MontserratBold",
				"montserrat-semibold": "MontserratSemiBold",
				"montserrat-medium": "MontserratMedium",
				"montserrat-italic": "MontserratItalic",
			},
			fontSize: {
				"2xs": ".375rem",
				"2sm": ".6875rem",
			},
			container: {
				padding: "1rem",
			},
			transitionProperty: {
				width: "width, all",
			},
			height: {
				122: "488px",
				100: "400px",
			},
			width: {
				100: "400px",
			},
			minWidth: {
				100: "400px",
			},
		},
	},
	variants: {
		extend: {
			display: ["group-hover"],
			width: ["hover"],
		},
	},
	plugins: [
		// This makes outline in elements like input which type is password.
		// require("@tailwindcss/forms")
	],
};
