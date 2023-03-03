/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-color": "#FAF7F0",
				"primary-color": "#98A8F8",
				"secondary-color": "#BCCEF8",
				"info-color": "#8194DF",
			},
			minHeight: {
				"navbar-height": "25vh",
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#98A8F8",

					secondary: "#BCCEF8",

					accent: "#6ebf22",

					neutral: "#1D1825",

					"base-100": "#FAF7F0",

					info: "#8194DF",

					success: "#CDFCF6",

					warning: "#fde047",

					error: "#be123c",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
