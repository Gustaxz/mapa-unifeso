/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				'confortaa': ["Comfortaa", "cursive"],
				"baloo-2": ["Baloo 2", "cursive"],
			},
		},
		opacity: {
			16: ".16",
			25: ".25"
		},
	},
	plugins: [],
}
