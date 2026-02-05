import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const referer = request.headers.get("referer");
	const ip = request.headers.get('x-forwarded-for')
  const headers = Object.fromEntries(request.headers);
	if (referer?.includes("schoology.com") || ip?.startsWith('69.67.8')) {
		await fetch(process.env.DISCORD_HOOK_URL as string, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content: "@everyone schoology referer or bcps ip detected!!!",
				embeds: [
					{
						fields: Object.entries(headers)
							.filter(([k]) => !k.includes("sec-") && !k.includes("cookie") && !k.includes("accept") && !k.includes('x-vercel'))
							.map(([k, v]) => ({
								name: k,
								value: `\`${v}\``,
								inline: true,
							})),
					},
				],
			}),
		});
	}
	return NextResponse.next();
}
