import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "../components/providers/nextuiProviders";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import Footer from "@/components/footer";
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
  description: "Watch together, even when miles apart. Real-time sync, video chat, and more.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
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
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col h-full min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl py-12 px-6 flex-grow flex flex-col gap-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
