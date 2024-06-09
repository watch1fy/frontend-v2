import { NextUIProviders } from '@watchify/components'
import { Footer, Toast, WatchifyNavbar } from '@watchify/components'
import clsx from 'clsx'
import { Urbanist } from 'next/font/google'

export const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <head />
      <body
        className={clsx(
          'bg-background font-sans antialiased',
          urbanist.className,
        )}
      >
        <Toast />
        <NextUIProviders>
          <div className="flex flex-col h-full min-h-screen">
            <WatchifyNavbar />
            <main className="h-full flex-grow flex flex-col justify-center items-center">
              {children}
            </main>
            <Footer />
          </div>
        </NextUIProviders>
      </body>
    </html>
  )
}
