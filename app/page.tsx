import { type LucideIcon, Mail, MapPin } from "lucide-react";
import { Bluesky, Discord, GitHub, Instagram } from "./icons";
export default function Home() {
	const projects: {
		name: string;
		description: string;
		link: string;
	}[] = [
		{
			name: "Stardust",
			description: "isolated, disposable workspaces",
			link: "spaceness/stardust",
		},
		{
			name: "schoology-frontend",
			description: "alternative frontend for schoology (wip)",
			link: "incognitotgt/schoology-frontend",
		},
		{
			name: "schoology-ios",
			description: "better mobile app for schoology (wip)",
			link: "incognitotgt/schoology-ios",
		},
	];
	const contact: {
		name: string;
		link: string;
		display: string;
		Icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
	}[] = [
		{
			name: "Email",
			link: "mailto:tgt@incognitotgt.me",
			display: "tgt@incognitotgt.me",
			Icon: Mail,
		},
		{
			name: "Discord",
			link: "https://discord.com/users/268000823961962240",
			display: "tg.t",
			Icon: Discord,
		},
		{
			name: "GitHub",
			link: "https://github.com/incognitotgt",
			display: "@incognitotgt",
			Icon: GitHub,
		},
		{
			name: "Instagram",
			link: "https://instagram.com/sudormrf_",
			display: "@sudormrf_",
			Icon: Instagram,
		},
		{
			name: "Bluesky",
			link: "https://bsky.app/profile/incognitotgt.me",
			display: "@incognitotgt.me",
			Icon: Bluesky,
		},
	];
	return (
		<div className="p-2 flex flex-col text-md gap-2">
			I'm Mashoor, a fullstack web developer.
			<section>
				I'm one of the owners and founders of{" "}
				<a
					href="https://github.com/spaceness"
					className="text-blue font-bold active:text-red hover:text-sky duration-150"
				>
					spaceness
				</a>{" "}
				where i make a lot of cool projects with others.
			</section>
			<h2 className="text-2xl font-bold text-mauve">Random stuff and basic info</h2>
			<ul className="list-disc list-inside">
				<li>14</li>
				<li>sunni muslim</li>
				<li>8th grade</li>
				<li>school muslim student association president</li>
				<li>exec board of my county's student council as the legislative affairs coordinator</li>
				<li>i enjoy biking</li>
				<li>public infrastructure is interesting to me for no reason whatsoever</li>
			</ul>
			<h2 className="text-2xl font-bold text-mauve">Projects</h2>
			<ul className="list-disc list-inside">
				{projects.map((project) => (
					<li key={project.name}>
						<a
							href={`https://github.com/${project.link}`}
							className="text-blue font-bold active:text-red hover:text-sky duration-150"
						>
							{project.name}
						</a>
						<div className="text-sm">{project.description}</div>
					</li>
				))}
			</ul>
			<h2 className="text-2xl font-bold text-mauve">Languages</h2>
			<ul className="list-disc list-inside">
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>ReactJS</li>
				<li>NextJS</li>
				<li>Astro</li>
				<li>Tailwind CSS</li>
				<li>Swift</li>
			</ul>
			<h2 className="text-2xl font-bold text-mauve">Contact</h2>
			<ul className="list-disc list-inside">
				{contact.map((c) => (
					<li key={c.name} aria-label={c.name}>
						<a
							href={c.link}
							className="text-blue hover:text-sky active:text-red duration-200 font-semibold"
							target="_blank"
							rel="noreferrer noopener"
						>
							<c.Icon className="inline-block w-5 h-5 mr-1" />
							{c.display}
						</a>
					</li>
				))}
				<li>
					<MapPin className="inline-block w-5 h-5 mr-1" />
					Baltimore, MD
				</li>
			</ul>
		</div>
	);
}
