import { DiscordStatus, SuspenseFallback } from "@/components/discord";
import { StackProgress } from "@/components/stack-progress";
import { Card } from "fumadocs-ui/components/card";
import { Clock12, GraduationCap, type LucideIcon, Mail, Sparkle, Sparkles } from "lucide-react";
import { Suspense } from "react";
import {
	Astro,
	Bluesky,
	Discord,
	GitHub,
	JavaScript,
	NextJS,
	ReactJS,
	Signal,
	SolidJS,
	Svelte,
	Swift,
	TypeScript,
} from "./icons";
type Contact = {
	name: string;
	link: string;
	display: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
	color: string;
};
export default function Home() {
	const projects: {
		name: string;
		description: string;
		link: string;
		Icon?: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
	}[] = [
		{
			name: "Stardust",
			description: "isolated, disposable workspaces",
			link: "spaceness/stardust",
			Icon: Sparkles,
		},
		{
			name: "schoology-frontend",
			description: "alternative frontend for schoology (wip)",
			link: "incognitotgt/schoology-frontend",
			Icon: GraduationCap,
		},
		{
			name: "Starlight",
			description: "simple remote desktop",
			link: "incognitotgt/starlight-web",
			Icon: Sparkle,
		},
	];
	const contact: Contact[] = [
		{
			name: "Email",
			link: "mailto:tgt@incognitotgt.me",
			display: "tgt@incognitotgt.me",
			Icon: Mail,
			color: "text-yellow",
		},
		{
			name: "Discord",
			link: "https://discord.com/users/268000823961962240",
			display: "tg.t",
			Icon: Discord,
			color: "text-lavender",
		},
		{
			name: "Signal",
			link: "https://signal.me/#eu/Kf52oLQ2pC8glop6IBOjRUYDfeyCZ5TIleAw1VQrgUkWVDcljKdJjoYaWPlip8qg",
			display: "mhx.01",
			Icon: Signal,
			color: "fill-blue",
		},
		{
			name: "GitHub",
			link: "https://github.com/incognitotgt",
			display: "incognitotgt",
			Icon: GitHub,
			color: "text-text",
		},
		{
			name: "Bluesky",
			link: "https://bsky.app/profile/incognitotgt.me",
			display: "incognitotgt.me",
			Icon: Bluesky,
			color: "text-sky",
		},
	];
	return (
		<div className="p-2 flex flex-col text-md gap-2">
			<section>
				I'm a fullstack developer. I'm one of the owners and founders of{" "}
				<a
					href="https://github.com/spaceness"
					className="text-blue font-bold active:text-red hover:text-sky duration-150"
				>
					spaceness
				</a>
			</section>
			<div className="flex w-full md:flex-row flex-col">
				<section className="md:w-1/2 flex flex-col gap-2">
					<h2 className="text-2xl font-bold text-mauve">random stuff and basic info</h2>
					<ul className="list-disc list-inside">
						<li>14</li>
						<li>sunni muslim</li>
						<li>freshman</li>
						<li>school muslim student association founding president (middle school)</li>
						<li>county student council legislative affairs coordinator</li>
						<li>public infrastructure is interesting to me for no reason whatsoever</li>
						<li>cyclist</li>
					</ul>
					<h2 className="text-2xl font-bold text-mauve">projects</h2>
					<div className="flex flex-wrap gap-2">
						{projects.map(({ Icon, ...project }) => (
							<Card
								className="w-56"
								title={project.name}
								description={project.description}
								href={`https://github.com/${project.link}`}
								key={project.name}
								icon={Icon && <Icon />}
							/>
						))}
					</div>
				</section>
				<section className="md:w-1/2 flex flex-col gap-2">
					<h2 className="text-2xl font-bold text-mauve">languages/stack</h2>
					<div className="grid grid-cols-2 w-full gap-2">
						<StackProgress title="JavaScript" progress={80} Icon={JavaScript} />
						<StackProgress title="TypeScript" progress={85} Icon={TypeScript} />
						<StackProgress title="Svelte" progress={50} Icon={Svelte} />
						<StackProgress title="React" progress={95} Icon={ReactJS} />
						<StackProgress title="Next.js" progress={100} Icon={NextJS} />
						<StackProgress title="Astro" progress={80} Icon={Astro} />
						<StackProgress title="SolidJS" progress={60} Icon={SolidJS} />
						<StackProgress title="Swift" progress={50} Icon={Swift} />
					</div>
					<h2 className="text-2xl font-bold text-mauve">contact</h2>
					<div className="flex flex-wrap gap-2">
						{contact.map(({ name, display, link, Icon, color }) => (
							<Card
								className="w-56"
								title={name}
								description={display}
								href={link}
								icon={<Icon className={`size-6 ${color}`} />}
								key={name}
							/>
						))}
						<Card
							className="w-56"
							title="Time"
							description="EST - America/New_York"
							icon={<Clock12 className="text-green" />}
						/>
					</div>
				</section>
			</div>
			<hr />
			<h2 className="text-2xl font-bold text-mauve">activity</h2>
			<Suspense fallback={<SuspenseFallback />}>
				<DiscordStatus />
			</Suspense>
		</div>
	);
}
