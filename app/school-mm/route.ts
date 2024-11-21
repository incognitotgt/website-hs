import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	if (
		!process.env.SCHOOL_CIDR_RANGES ||
		!process.env.MATTERMOST_HOST ||
		!process.env.MATTERMOST_TEAM_NAME ||
		!process.env.MATTERMOST_TOKEN
	)
		return Response.json({ error: "One or more env variables are missing" }, { status: 500 });
	const rangeArray = process.env.SCHOOL_CIDR_RANGES.split(",");
	for (const range of rangeArray) {
		try {
			if (req.headers.get("x-forwarded-for")?.includes(range)) {
				const teamName = req.nextUrl.searchParams.get("name") || process.env.MATTERMOST_TEAM_NAME;
				const teams = await fetch(`https://${process.env.MATTERMOST_HOST}/api/v4/users/me/teams`, {
					headers: { Authorization: `Bearer ${process.env.MATTERMOST_TOKEN}` },
				});
				if (!teams.ok) return Response.json({ error: "Failed to fetch team" }, { status: 500 });
				const team = ((await teams.json()) as { name: string; invite_id: string }[]).find((t) => t.name === teamName);
				if (!team) return Response.json({ error: "Team not found" }, { status: 404 });
				return Response.redirect(
					`https://${process.env.MATTERMOST_HOST}/signup_user_complete/?id=${team.invite_id}&md=link&sbr=fa`,
					302,
				);
			}
		} catch (e) {
			console.error(e);
			return Response.json({ error: "Failed to fetch team" }, { status: 500 });
		}
	}
	return Response.json({ error: "Unauthorized" }, { status: 401 });
}
