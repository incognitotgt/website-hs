import Image from "next/image";
import Link from "next/link";
import logo from "./icon.jpg";
export default function Nav() {
	return (
		<nav className="h-16 fixed bg-mantle/20 rounded-md p-4 flex flex-row justify-between border border-mauve m-[0.5vw] w-[99vw] backdrop-blur-sm gap-4 z-20">
			<Link
				href="/"
				className="inline-flex justify-center items-center py-4 hover:bg-surface2/70 rounded-md duration-200"
			>
				<Image src={logo} className="size-8 rounded-md mr-2" alt="tgt icon" />
				<h1 className="text-2xl font-bold text-subtext0 sm:block hidden">tgt</h1>
			</Link>
			<div className="flex flex-row gap-4 justify-center items-center">
				<Link
					className="text-blue hover:text-sky active:text-red font-bold"
					href="https://ma-personal.notion.site/resume"
				>
					resume
				</Link>
				;
				<Link href="/blog" className="text-blue hover:text-sky active:text-red font-bold">
					blog
				</Link>
				;
				<Link
					href="https://www.icloud.com/sharedalbum/#B1p5oqs3qcBHRb6"
					target="_blank"
					rel="noopener noreferer"
					className="text-blue hover:text-sky active:text-red font-bold"
				>
					photography
				</Link>
			</div>
		</nav>
	);
}
