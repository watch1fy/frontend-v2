import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { NextUIProviders } from "@/components/providers/nextuiProviders";
import { Footer, Toast, Navbar } from "@/components/ui/";
import clsx from "clsx";
import { Urbanist } from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Watchify | Watch Together",
    template: `%s - ${"Watchify | Watch Together"}`,
  },
  description:
    "Watch together, even when miles apart. Real-time sync, video chat, and more.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body
        className={clsx(
          "bg-background font-sans antialiased",
          urbanist.className,
        )}
      >
        <Toast />
        <NextUIProviders
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          <div className="flex flex-col h-full min-h-screen">
            <Navbar />
            <main className="h-full flex-grow flex flex-col justify-center items-center">
              {children}
            </main>
            <Footer />
          </div>
        </NextUIProviders>
      </body>
    </html>
  );
}
