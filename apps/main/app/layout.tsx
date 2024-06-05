import { RootLayout } from '@watchify/pages'
import { Viewport, Metadata } from 'next'
import '@/styles/globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Watchify | Watch Together',
    template: `%s - ${'Watchify | Watch Together'}`,
  },
  description:
    'Watch together, even when miles apart. Real-time sync, video chat, and more.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default RootLayout
