/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ffb100",
        dark_purple: "#420039",
      },
    },
  },
  plugins: [],
};
