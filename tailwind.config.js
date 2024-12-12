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
        lightBg: "#F4F4F4",
      },
      screens: {
        xxl: "1440px",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle, rgba(44,40,36,1) 10%,rgba(10,10,10,1) 70%)",
      },
    },
  },
  plugins: [],
};
