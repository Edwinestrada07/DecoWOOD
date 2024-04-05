/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html.js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252B31",
        secondary: "#2C393F",
        accent: "#2E4348",
        button: "#2E4348",
      },
    },
  },
  plugins: [],
};
