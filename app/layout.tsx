import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Doto } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getWebringNavigation } from "@/lib/hc-webring";
import Footer from "./footer";
import Nav from "./nav";
const sans = Doto({ variable: "--font-sans", subsets: ["latin"] });
export const metadata: Metadata = {
	title: { default: "tgt", template: "%s - tgt" },
	description: "my personal portfolio",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const hcUrls = await getWebringNavigation();

	return (
		<html lang="en" className={`${sans.variable} dark`}>
			<body className="font-sans antialiased bg-base text-text font-medium h-screen flex flex-col overflow-x-hidden selection:bg-surface2/60">
				<TooltipProvider>
					<Nav />
					<main className="mt-20 px-2">{children}</main>
					<Footer webringUrls={hcUrls} />
				</TooltipProvider>
				<Analytics />
			</body>
		</html>
	);
}
