/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#F2F2F2", // Light gray
      secondary: "#171D28", // Dark gray
      accent: "#F2D8A7", // Light yellow
      accentDark: "#BFAA84", // Dark yellow
    },

    fontFamily: {
      serif: ["Libre Baskerville", "serif"],
      sans: ["Roboto", "sans-serif"],
    },
  },
};
export const plugins = [];
