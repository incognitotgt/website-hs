export async function getWebringNavigation() {
	const membersUrl = "https://webring.hackclub.com/members.json";

	const response = await fetch(membersUrl);
	const members = (await response.json()) as { url: string }[];

	const currentIndex = members.findIndex((member) => new URL(member.url).hostname.toLowerCase() === "incognitotgt.me");

	if (currentIndex === -1) {
		return {
			previousUrl: members[members.length - 1].url,
			nextUrl: members[0].url,
		};
	}

	const prevIndex = (currentIndex - 1 + members.length) % members.length;
	const nextIndex = (currentIndex + 1) % members.length;

	return {
		previousUrl: members[prevIndex].url,
		nextUrl: members[nextIndex].url,
	};
}
