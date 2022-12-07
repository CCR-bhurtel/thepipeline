/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "#1400ff",
      },
      screens: {
        sm: "320px",
        usm: "425px",
        md: "768px",

        lg: "1024px",
      },
    },
  },
  plugins: [],
};
