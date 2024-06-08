import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import "./styles.css"

const preview: Preview = {
  parameters: {},
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
];

export default preview
