import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { NextUIProviders } from "@/components/providers/nextuiProviders";
import { Navbar, Footer } from "@/components/ui/";
import clsx from "clsx";
import { Urbanist } from "next/font/google";
import { Toaster } from "sonner";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

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
        <NextUIProviders
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          <Toaster
            toastOptions={{
              unstyled: true,
              classNames: {
                title: "text-primary font-bold text-lg",
                toast:
                  "dark:bg-[#262629] bg-[#f5f5f5] px-4 pt-2 pb-3 shadow-xl rounded-lg dark:text-default flex flex-row justify-center items-center gap-4 border-1 dark:border-[#1e1e21] border-gray",
                description: "text-sm text-primary",
              },
            }}
            icons={{
              success: <FaCircleCheck size={24} />,
              error: <FaCircleExclamation size={24} />,
            }}
          />
          <div className="flex flex-col h-full min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl py-12 px-6 flex-grow flex flex-col gap-8">
              {children}
            </main>
            <Footer />
          </div>
        </NextUIProviders>
      </body>
    </html>
  );
}
