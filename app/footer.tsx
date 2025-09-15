import { Hackclub } from "./icons";

export default function Footer({ webringUrls }: { webringUrls: { previousUrl: string; nextUrl: string } }) {
	return (
		<footer className="flex px-4 pt-2 gap-2 justify-center flex-row pb-2 mb-4">
			<hr />
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
		</footer>
	);
}
