export default function Footer() {
	return (
		<footer className="flex px-4 pt-2 gap-2 justify-center flex-row pb-2 mb-4">
			<hr />
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
