import { blog } from "@/.source";
import { loader } from "fumadocs-core/source";

export const source = loader({
	baseUrl: "/blog",
	source: blog.toFumadocsSource(),
});
