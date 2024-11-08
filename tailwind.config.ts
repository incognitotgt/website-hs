import catppuccin from "@catppuccin/tailwindcss";
import type { Config } from "tailwindcss";
export default {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	plugins: [
		catppuccin({
			defaultFlavour: "mocha",
		}),
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
			},
		},
	},
} satisfies Config;
