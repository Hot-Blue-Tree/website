const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|link|ripple|spinner|form).js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#09213a',
        'brand-silver': '#C0C0C0',
      },
    },
  },
  plugins: [nextui()],
}