import { defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const blog = defineDocs({
	dir: "content/blog",
	docs: {
		schema: frontmatterSchema.extend({
			date: z.date(),
		}),
	},
});

export default defineConfig({
	mdxOptions: {
		rehypeCodeOptions: {
			themes: {
				light: "catppuccin-mocha",
				dark: "catppuccin-mocha",
			},
		},
	},
});
