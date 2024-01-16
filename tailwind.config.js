/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        end: "170%",
      },
      minHeight: {
        halfScreen: "90vh",
      },
    },
  },
  plugins: [],
};
