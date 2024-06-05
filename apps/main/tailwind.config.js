/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@watchify/design-system/tailwind')],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@watchify/design-system/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@watchify/pages/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@watchify/design-system/node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@watchify/design-system/node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
}
