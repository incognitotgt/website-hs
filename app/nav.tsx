import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "./icon.png";
export default function Nav() {
	return (
		<nav className="h-16 fixed bg-mantle/20 rounded-md p-4 flex flex-row justify-between border border-mauve m-[0.5vw] w-[99vw] backdrop-blur-sm">
			<Link href="/" className="inline-flex justify-center items-center py-4 hover:bg-surface0 rounded-md duration-200">
				<Image src={logo} className="size-8 rounded-md mr-2" alt="tgt icon" />
				<h1 className="text-2xl font-bold text-subtext0">tgt</h1>
			</Link>
			<div className="flex flex-row gap-4 justify-center items-center">
				<a
					href="https://ctp-webr.ing/tgt/previous"
					className="text-mauve hover:text-mauve/75 active:text-red"
					aria-label="back"
				>
					<ArrowLeft />
				</a>
				<a href="https://ctp-webr.ing/" className="text-blue hover:text-sky active:text-red italic">
					Catppuccin webring
				</a>
				<a
					href="https://ctp-webr.ing/tgt/next"
					className="text-mauve hover:text-mauve/75 active:text-red"
					aria-label="forward"
				>
					<ArrowRight />
				</a>
			</div>
		</nav>
	);
}
