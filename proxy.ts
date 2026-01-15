import { NextResponse, after } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
	const referer = request.headers.get("referer");
	const headers = Object.fromEntries(request.headers);
	if (referer?.includes("schoology.com")) {
		await fetch(process.env.DISCORD_HOOK_URL as string, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content: "@everyone schoology referer detected!!!",
				embeds: [
					{
						fields: Object.entries(headers)
							.filter(([k]) => !k.includes("sec-") && !k.includes("cookie") && !k.includes("accept"))
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
