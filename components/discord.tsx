"use client";

import { Card } from "fumadocs-ui/components/card";
import { CircleDashed, Clock, Code, MessageCircle } from "lucide-react";
import Image from "next/image";
import { type LanyardData, useLanyard } from "react-use-lanyard";
export function DiscordStatus() {
	const {
		isLoading,
		isValidating,
		data: { data: status } = {},
	} = useLanyard({
		userId: "1053443057451794585",
		apiUrl: `${process.env.NODE_ENV === "production" ? "www.incognitotgt.me" : "localhost:3000"}/lanyard`,
	});
	if (isLoading || isValidating || !status) return <div className="animate-pulse rounded-md bg-muted w-80 h-40" />;
	const avatarUrl = `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`;
	const customStatus = status.activities.find((activity) => activity.type === 4);
	const gameActivity = status.activities.find((activity) => activity.type === 0);
	const statusClassMap: Record<LanyardData["discord_status"], string> = {
		online: "border-green",
		idle: "border-yellow",
		dnd: "border-red",
		offline: "border-subtext2",
	};
	return (
		<Card
			className="w-80 h-40"
			title={`${status.discord_user.global_name} (${status.discord_user.username})`}
			icon={
				<Image
					src={avatarUrl}
					width={32}
					height={32}
					className={`rounded-full border ${statusClassMap[status.discord_status]}`}
					alt="Discord avatar"
				/>
			}
		>
			<div className="flex flex-col gap-2">
				{customStatus ? (
					<div className="flex flex-row gap-2 items-center">
						<MessageCircle className="size-4" />
						<p className="truncate">{customStatus.state}</p>
					</div>
				) : null}
				<div className="flex flex-row gap-2 items-center">
					{gameActivity ? (
						<>
							<Code className="size-4" />
							<p className="truncate">
								{gameActivity.name}: {gameActivity.details}
							</p>
							{gameActivity.timestamps ? (
								<>
									<Clock className="size-4" />
									<p>{formatElapsedTime(gameActivity.timestamps.start)}</p>
								</>
							) : null}
						</>
					) : (
						<>
							<CircleDashed className="size-4" />
							<p>No activity right now</p>
						</>
					)}
				</div>
			</div>
		</Card>
	);
}
function formatElapsedTime(startTimestamp: number) {
	const now = Date.now();
	const elapsedMs = now - startTimestamp;
	const hours = Math.floor(elapsedMs / (1000 * 60 * 60));
	const minutes = Math.floor((elapsedMs % (1000 * 60 * 60)) / (1000 * 60));
	return `${hours}h ${minutes}m`;
}
