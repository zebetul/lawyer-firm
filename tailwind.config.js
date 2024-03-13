/** @type {import('tailwindcss').Config} */
export const content = [
	"./src/pages/**/*.{js,jsx,ts,tsx}",
	"./src/components/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
	extend: {
		colors: {
			primary: "#F2F2F2",
			secondary: "#171D28",
			// secondary: "#E52D1A",
			accent: "#F2D8A7",
			accentDark: "#BFAA84",
		},

		fontFamily: {
			serif: ["Libre Baskerville", "serif"],
			sans: ["Roboto", "sans-serif"],
		},
	},
};
export const plugins = [];
