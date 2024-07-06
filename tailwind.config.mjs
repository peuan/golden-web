import { nextui } from '@nextui-org/react';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9E13A2",
      },

      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [nextui()],
};
