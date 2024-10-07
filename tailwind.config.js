/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      translate: {
        end: "170%",
      },
      minHeight: {
        halfScreen: "90vh",
      },
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
        "Satoshi-regular": ["Satoshi-Regular", "sans-serif"],
      },
      colors: {
        darkBg: "#0D0D0D",
        lightBg: "#E9E9E9",
      },
      screens: {
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
