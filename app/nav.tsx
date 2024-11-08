import Image from "next/image";
import Link from "next/link";
import logo from "./icon.png";
export default function Nav() {
	return (
		<nav className="h-16 fixed bg-mantle/20 rounded-md p-4 flex flex-row justify-between border border-mauve m-[1vw] w-[98vw] backdrop-blur-sm">
			<div className="flex flex-row h-full gap-2 justify-center items-center">
				<Image src={logo} className="size-12 rounded-lg" alt="tgt" />
				<h1 className="text-2xl font-bold text-subtext0">tgt</h1>
			</div>
			<div className="flex flex-row gap-4 justify-center items-center">
				<Link href="/" className="text-blue hover:text-sky font-bold">
					Home
				</Link>
				<Link href="https://github.com/incognitotgt" className="text-blue hover:text-sky font-bold">
					GitHub
				</Link>
			</div>
		</nav>
	);
}
