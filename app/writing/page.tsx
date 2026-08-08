import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { FaChevronLeft } from "react-icons/fa6";
import { posts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kelpyshades.com";

export const metadata: Metadata = {
	title: "Writing — Kelvin Appiah",
	description: "Essays and technical deep-dives on software engineering, product architecture, and decentralized systems.",
	alternates: {
		canonical: `${siteUrl}/writing`,
	},
	openGraph: {
		type: "website",
		url: `${siteUrl}/writing`,
		title: "Writing — Kelvin Appiah",
		description: "Essays and technical deep-dives on software engineering, product architecture, and decentralized systems.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Kelvin Appiah - Writing Showcase",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Writing — Kelvin Appiah",
		description: "Essays and technical deep-dives on software engineering, product architecture, and decentralized systems.",
		images: ["/og-image.png"],
	},
};

export default function WritingIndex() {
	const sortedPosts = [...posts].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	const blogJsonLd = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": "Kelvin Appiah's Writing",
		"url": `${siteUrl}/writing`,
		"description": "Essays and technical deep-dives on software engineering, product architecture, and decentralized systems.",
		"publisher": {
			"@type": "Person",
			"name": "Kelvin Appiah",
			"url": siteUrl
		}
	};

	return (
		<main className="w-full max-w-225 mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-20 flex flex-col animate-fade">
			<Script
				id="blog-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
			/>

			{/* Back Navigation */}
			<Link
				href="/"
				className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#555] hover:text-black transition-colors mb-8 sm:mb-12 w-fit font-bold"
			>
				<FaChevronLeft className="w-3 h-3" /> Back to Home
			</Link>

			{/* Header */}
			<header className="mb-10 sm:mb-12 max-w-195">
				<span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#777] font-bold block mb-3 sm:mb-4">
					Journal & Notes
				</span>
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
					Writing
				</h1>
				<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#333] leading-relaxed font-light">
					Technical essays, engineering deep-dives, and operational notes.
				</p>
			</header>

			{/* Articles List */}
			<div className="flex flex-col border-t border-[#eaeaea] pt-8 sm:pt-12 gap-10 sm:gap-12">
				{sortedPosts.map((post) => (
					<article key={post.slug} className="group flex flex-col gap-3 max-w-195">
						<div className="flex items-center gap-4 font-mono text-[10px] sm:text-xs text-[#777]">
							<span>{post.date}</span>
							<span>•</span>
							<span>{post.readTime}</span>
						</div>
						<h2 className="text-xl sm:text-2xl font-bold text-black group-hover:text-[#555] transition-colors leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
							<Link href={`/writing/${post.slug}`}>
								{post.title}
							</Link>
						</h2>
						<p className="text-sm sm:text-base text-[#444] leading-relaxed font-light">
							{post.description}
						</p>
						<Link
							href={`/writing/${post.slug}`}
							className="text-[#111] font-mono text-xs uppercase tracking-widest font-bold border-b border-black pb-0.5 w-fit hover:text-[#555] hover:border-[#555] transition-colors mt-2"
						>
							Read Article →
						</Link>
					</article>
				))}
			</div>
		</main>
	);
}
