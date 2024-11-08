import { type LucideIcon, Mail, MapPin } from "lucide-react";
import { Discord, GitHub } from "./icons";
export default function Home() {
	const projects: {
		name: string;
		description: string;
		link: string;
	}[] = [
		{
			name: "Stardust",
			description: "isolated, disposable workspaces, kinda like kasm but oss",
			link: "spaceness/stardust",
		},
		{
			name: "schoology-frontend",
			description: "alternative frontend for schoology that i work on sometimes",
			link: "incognitotgt/schoology-frontend",
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
	];
	return (
		<div className="p-2 flex flex-col text-md gap-2">
			im a swift and typescript developer i guess
			<h2 className="text-2xl font-bold text-mauve">random stuff and basic info</h2>
			<ul className="list-disc list-inside">
				<li>religious sunni muslim</li>
				<li>im in 8th grade</li>
				<li>just barely 14</li>
				<li>chronic catppuccin mocha mauve addict</li>
				<li>im in the exec board of my county's student council as the legislative affairs coordinator</li>
				<li>i kinda enjoy biking</li>
				<li>public infrastructure is interesting to me for no reason whatsoever</li>
			</ul>
			<h2 className="text-2xl font-bold text-mauve">stuff ive worked on</h2>
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
			I used to work on proxy sites a year ago but I don't find any reason to anymore, please don't bother me about
			them.
			<br />I also am working on open source alternatives to edtech products used by schools such as smartpass and
			various web filters.
			<h2 className="text-2xl font-bold text-mauve">things i know</h2>
			<ul className="list-disc list-inside">
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>ReactJS</li>
				<li>NextJS</li>
				<li>Astro</li>
				<li>Tailwind CSS</li>
				<li>Swift</li>
			</ul>
			<h2 className="text-2xl font-bold text-mauve">contact me</h2>
			<ul className="list-disc list-inside">
				{contact.map((c) => (
					<li key={c.name}>
						<a
							href={c.link}
							className="text-blue hover:text-sky duration-200 font-semibold"
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
