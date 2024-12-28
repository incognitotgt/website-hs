import { Card } from "fumadocs-ui/components/card";
import { type LucideIcon, Mail, MapPin, Rocket, Sparkles } from "lucide-react";
import { Bluesky, Discord, GitHub, Instagram } from "./icons";
type Contact = {
	name: string;
	link: string;
	display: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
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
			Icon: Rocket,
		},
		{
			name: "schoology-ios",
			description: "better mobile app for schoology (wip)",
			link: "incognitotgt/schoology-ios",
		},
	];
	const contact: Contact[] = [
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
			display: "incognitotgt",
			Icon: GitHub,
		},
		{
			name: "Instagram",
			link: "https://instagram.com/sudormrf_",
			display: "sudormrf_",
			Icon: Instagram,
		},
		{
			name: "Bluesky",
			link: "https://bsky.app/profile/incognitotgt.me",
			display: "incognitotgt.me",
			Icon: Bluesky,
		},
	];
	return (
		<div className="p-2 flex flex-col text-md gap-2">
			<section>
				I'm Mashoor, a fullstack web developer. I'm one of the owners and founders of{" "}
				<a
					href="https://github.com/spaceness"
					className="text-blue font-bold active:text-red hover:text-sky duration-150"
				>
					spaceness
				</a>
			</section>
			<div className="flex w-full md:flex-row flex-col">
				<section className="md:w-1/2 flex flex-col gap-2">
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
					<div className="flex flex-wrap gap-2">
						{contact.map(({ name, display, link, Icon }) => (
							<Card
								className="w-56"
								title={name}
								description={display}
								href={link}
								icon={<Icon className="size-6" />}
								key={name}
							/>
						))}
						<Card className="w-56" title="Location" description="Baltimore, MD, USA" icon={<MapPin />} />
					</div>
				</section>
			</div>
		</div>
	);
}
