export const metadata = {
	title: "not found",
};

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center p-2">
			<h1 className="text-5xl font-bold mb-4 text-red">404</h1>
			<p className="text-xl">lost eh?</p>
		</div>
	);
}
