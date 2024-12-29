import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Doto } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
const sans = Doto({ variable: "--font-sans", subsets: ["latin"] });
export const metadata: Metadata = {
	title: "tgt",
	description: "my personal portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${sans.variable} dark`}>
			<body className="font-sans antialiased bg-base text-text h-screen flex flex-col overflow-x-hidden selection:bg-surface2/60">
				<Nav />
				<main className="mt-20 px-2">{children}</main>
				<Analytics />
			</body>
		</html>
	);
}
