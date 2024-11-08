import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./nav";

const sans = localFont({
	src: "./fonts/zed-sans-regular.ttf",
	variable: "--font-sans",
});
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
		<html lang="en">
			<body className={`${sans.variable} antialiased bg-base text-text h-screen flex flex-col`}>
				<Nav />
				<main>{children}</main>
			</body>
		</html>
	);
}
