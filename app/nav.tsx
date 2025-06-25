import Image from "next/image";
import Link from "next/link";
import logo from "./icon.jpg";
import { Hackclub } from "./icons";
export default function Nav({ webringUrls }: { webringUrls: { previousUrl: string; nextUrl: string } }) {
	return (
		<nav className="h-16 fixed bg-mantle/20 rounded-md p-4 flex flex-row justify-between border border-mauve m-[0.5vw] w-[99vw] backdrop-blur-sm gap-4">
			<Link
				href="/"
				className="inline-flex justify-center items-center py-4 hover:bg-surface2/70 rounded-md duration-200"
			>
				<Image src={logo} className="size-8 rounded-md mr-2" alt="tgt icon" />
				<h1 className="text-2xl font-bold text-subtext0">tgt</h1>
			</Link>
			<div className="flex flex-row gap-4 justify-center items-center">
				<Link
					className="text-blue hover:text-sky active:text-red font-bold"
					href="https://ma-personal.notion.site/resume"
				>
					resume
				</Link>
				/
				<a
					href={webringUrls.previousUrl}
					className="text-mauve hover:text-mauve/75 active:text-red text-xl font-extrabold"
					aria-label="back"
				>
					{"<"}
				</a>
				<a href="https://webring.hackclub.com/" className="text-blue hover:text-sky active:text-red italic font-bold">
					<Hackclub className="fill-red size-6" />
				</a>
				<a
					href={webringUrls.nextUrl}
					className="text-mauve hover:text-mauve/75 active:text-red text-xl font-extrabold"
					aria-label="forward"
				>
					{">"}
				</a>
				/
				<a
					href="https://ctp-webr.ing/tgt/previous"
					className="text-mauve hover:text-mauve/75 active:text-red text-xl font-extrabold"
					aria-label="back"
				>
					{"<"}
				</a>
				<a href="https://ctp-webr.ing/" className="text-blue hover:text-sky active:text-red italic font-bold">
					Catppuccin webring
				</a>
				<a
					href="https://ctp-webr.ing/tgt/next"
					className="text-mauve hover:text-mauve/75 active:text-red text-xl font-extrabold"
					aria-label="forward"
				>
					{">"}
				</a>
			</div>
		</nav>
	);
}
