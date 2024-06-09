/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@watchify/components/tailwind')],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@watchify/components/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@watchify/pages/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@watchify/components/node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@watchify/components/node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
}
