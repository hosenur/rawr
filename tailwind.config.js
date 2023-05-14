/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f02e65",
        secondary: "#f35884",
      },
    },
  },
  plugins: [],
};
