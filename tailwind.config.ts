import catppuccin from "@catppuccin/tailwindcss";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/fumadocs-ui/dist/**/*.js",
	],
	plugins: [
		catppuccin({
			defaultFlavour: "mocha",
		}),
		animate,
	],
	presets: [createPreset({ preset: "catppuccin", addGlobalColors: true })],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
			},
		},
	},
} satisfies Config;
