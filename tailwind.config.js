/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const safelist = ["font-body", "font-heading"];
export const theme = {
  extend: {
    fontFamily: {
      body: ["var(--font-body)"],
      heading: ["var(--font-heading)"],
    },
  },
};
export const plugins = [];
