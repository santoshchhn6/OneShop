/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.teal, DEFAULT: colors.teal[600] },
      },
    },
  },
  plugins: [],
};
