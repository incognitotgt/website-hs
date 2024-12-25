import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
			<body className={`${sans.variable} antialiased bg-base text-text h-screen flex flex-col overflow-x-hidden`}>
				<Nav />
				<main className="mt-20 p-2">{children}</main>
				<footer className="flex flex-row gap-2 mt-6 *:duration-200 p-2">
					<a href="https://ctp-webr.ing/tgt/previous" className="text-mauve hover:text-mauve/75 active:text-red">
						<ArrowLeft />
					</a>
					<a href="https://ctp-webr.ing/" className="text-blue hover:text-sky active:text-red italic">
						Catppuccin webring
					</a>
					<a href="https://ctp-webr.ing/tgt/next" className="text-mauve hover:text-mauve/75 active:text-red">
						<ArrowRight />
					</a>
				</footer>
			</body>
		</html>
	);
}
