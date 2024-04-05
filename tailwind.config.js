/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxll: { max: "1535px" },
      xll: { max: "1279px" },
      lgg: { max: "1023px" },
      mdd: { max: "768px" },
      smm: { max: "480px" },
    },
  },
  plugins: [],
};
