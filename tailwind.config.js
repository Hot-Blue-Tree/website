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
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'blockquote p:first-of-type::before': {
              content: '""'
            },
            'blockquote p:last-of-type::after': {
              content: '""'
            },
            maxWidth: 'none',
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '2em',
              marginBottom: '2em',
            },
            'thead th': {
              borderBottom: '2px solid #e5e7eb',
              padding: '0.75em',
              fontWeight: '600',
              textAlign: 'left',
              backgroundColor: '#f9fafb',
            },
            'tbody td': {
              padding: '0.75em',
              borderBottom: '1px solid #e5e7eb',
              verticalAlign: 'top',
            },
            'tbody tr:last-child td': {
              borderBottom: 'none',
            },
            'tbody tr:hover': {
              backgroundColor: '#f9fafb',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    nextui(),
  ],
}