import { source } from "@/lib/source";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
	title: "blog",
};
export default function Page() {
	const pages = source.getPages();
	return (
		<div className="flex flex-col items-center justify-center mt-4 mb-20">
			<h1 className="text-4xl font-bold mb-4 text-mauve">blog</h1>
			<p>for the minute chance i need to write something down (probably a security writeup)</p>
			<div className="flex flex-col justify-center">
				{pages
					.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
					.map((page) => (
						<div key={page.data.title} className="flex flex-col justify-center">
							<Link href={page.url} className="text-lg font-bold mb-2 text-blue active:text-red hover:text-sky">
								{page.data.title}
							</Link>
							<p>{new Date(page.data.date).toLocaleDateString()}</p>
						</div>
					))}
			</div>
		</div>
	);
}
