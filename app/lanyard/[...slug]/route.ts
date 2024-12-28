import type { NextRequest } from "next/server";
export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params;
	const data = await (
		await fetch(`https://api.lanyard.rest/${slug.join("/")}?${req.nextUrl.searchParams.toString()}`)
	).json();
	return Response.json(data);
}
