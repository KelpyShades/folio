import { ImageResponse } from "next/og";
import { getSortedPostsData } from "@/lib/posts";

export const alt = "Article Showcase";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
	const { slug } = await params;
	const posts = getSortedPostsData();
	const post = posts.find((p) => p.slug === slug);

	return new ImageResponse(
		(
			<div
				style={{
					background: "#f4f2ee",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "80px",
				}}
			>
				<div style={{ fontSize: 28, color: "#111", fontFamily: 'sans-serif' }}>
					Kelvin Appiah | Portfolio
				</div>
				<div
					style={{
						fontSize: 72,
						fontWeight: "900",
						color: "#111",
						lineHeight: 1.1,
						letterSpacing: "-0.03em",
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
					}}
				>
					{post?.title || "Article"}
				</div>
				<div style={{ fontSize: 36, color: "#222" }}>
					Writing & Essays
				</div>
			</div>
		),
		{ ...size }
	);
}
