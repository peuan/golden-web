import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#9E13A2",
        secondary: "#FB09BB",
        error: "#F34378",
        warning: "#FDA90B",
        violet: "#612BB7",
        "blue-magento": "#844ADE",
        lighten: "#170A26",
      },

      backgroundImage: {
        "lighten-gradient":
          "linear-gradient(360deg, #170A26 0%, #2D1747 126.68%)",
      },

      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
      },

      container: {
        padding: {
          DEFAULT: "0.5rem",
          sm: "1rem",
        },
      }
    },
  },
  plugins: [nextui()],
};
