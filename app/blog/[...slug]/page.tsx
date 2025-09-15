import { source } from "@/lib/source";
import type { Metadata } from "next";

import { Card, Cards } from "fumadocs-ui/components/card";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Heading } from "fumadocs-ui/components/heading";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);

	if (!page) notFound();

	const { body: MDX } = page.data;

	return (
		<DocsBody className="sm:mx-36 mx-1 pt-4 mb-4">
			<h1 className="text-5xl text-mauve -mb-4">{page.data.title}</h1>
			<h2 className="text-subtext0">{new Date(page.data.date).toLocaleDateString()}</h2>
			<MDX
				components={{
					h1: (props) => <Heading as="h1" {...props} />,
					h2: (props) => <Heading as="h2" {...props} />,
					h3: (props) => <Heading as="h3" {...props} />,
					h4: (props) => <Heading as="h4" {...props} />,
					h5: (props) => <Heading as="h5" {...props} />,
					h6: (props) => <Heading as="h6" {...props} />,
					Card: (props) => <Card {...props} />,
					Cards: (props) => <Cards {...props} />,
					Step: (props) => <Step {...props} />,
					Steps: (props) => <Steps {...props} />,
					Tab: (props) => <Tab {...props} />,
					Tabs: (props) => <Tabs {...props} />,
					// @ts-expect-error get out
					img: (props) => <ImageZoom {...props} />,
					pre: ({ ref: _ref, ...props }) => (
						<CodeBlock {...props}>
							<Pre>{props.children}</Pre>
						</CodeBlock>
					),
				}}
			/>
		</DocsBody>
	);
}

export async function generateStaticParams() {
	return source.getPages().map((page) => ({
		slug: page.slugs,
	}));
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params;
	const page = source.getPage(params.slug);

	if (page == null) notFound();
	const imageParams = new URLSearchParams();
	const description = page?.data.description ?? "";
	imageParams.set("title", page?.data.title ?? "");
	imageParams.set("description", description);

	return {
		title: page?.data.title,
		description: page?.data.description,
	} satisfies Metadata;
}
