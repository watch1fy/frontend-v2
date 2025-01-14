import { nextui } from '@nextui-org/react'

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: '#11181C',
            primary: {
              100: '#FED1CF',
              300: '#FB6F84',
              400: '#F74B76',
              500: '#F31260',
              600: '#D00D64',
              700: '#AE0963',
              800: '#8C055C',
              900: '#740357',
              foreground: '#EEEEEE',
              DEFAULT: '#F31260',
            },
          },
        },
        dark: {
          colors: {
            background: '#101010',
            foreground: '#ECEDEE',
            primary: {
              100: '#FED1CF',
              300: '#FB6F84',
              400: '#F74B76',
              500: '#F31260',
              600: '#D00D64',
              700: '#AE0963',
              800: '#8C055C',
              900: '#740357',
              foreground: '#FFFFFF',
              DEFAULT: '#F31260',
            },
          },
        },
      },
    }),
  ],
}
