// tailwind.config.mjs
import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteCustom: "#F5F5F5",
        darkCustom: "#110305",
        primary: "#E64C63",
        primaryHover: "#E23C55",
        cardBg: "#E0E0E0",
        footerBg: "#1B0E10",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        card: "30px",
        btn: "99px",
      },
    },
  },
  plugins: [],
};

export default config;
