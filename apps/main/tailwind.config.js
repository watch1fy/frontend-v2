/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@watchify/design-system/dist/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('@watchify/design-system/tailwind')],
}
