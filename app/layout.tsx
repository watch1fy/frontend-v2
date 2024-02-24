import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { urbanist } from "@/config/fonts";
import { Providers } from "../components/providers/nextuiProviders";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { SuperTokensProvider } from "@/components/providers/supertokensProvider";
import Footer from "@/components/footer";

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
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
			<SuperTokensProvider>
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
			</SuperTokensProvider>
		</html>
	);
}
