import { NextResponse, after } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
	const referer = request.headers.get("Referer");
	const headers = Object.fromEntries(request.headers);
	if (referer?.includes("schoology.com")) {
		after(() =>
			fetch(process.env.DISCORD_HOOK_URL as string, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					content: "@everyone schoology referer detected!!!",
					embeds: [
						{
							fields: Object.entries(headers).map(([k, v]) => ({
								name: k,
								value: `\`${v}\``,
								inline: true,
							})),
						},
					],
				}),
			}),
		);
	}
	return NextResponse.next();
}
