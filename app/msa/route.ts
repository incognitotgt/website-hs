import rangeCheck from "ip-range-check";
import type { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
	if (
		!process.env.SCHOOL_CIDR_RANGES ||
		!process.env.MSA_WEBSITE
	)
		return Response.json({ error: "One or more env variables are missing" }, { status: 500 });
	try {
		if (rangeCheck(req.headers.get("x-real-ip") || "", process.env.SCHOOL_CIDR_RANGES.split(","))) {
			return Response.redirect(
				`https://${process.env.MSA_WEBSITE}`,
				302,
			);
		}
	} catch (e) {
		console.error(e);
		return Response.json({ error: "allahu alam what the hell is wrong" }, { status: 500 });
	}
}
