import { ImageResponse } from "next/og";
import { posts } from "@/lib/posts";

export const alt = "Article Showcase";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
	const { slug } = await params;
	const post = posts.find((p) => p.slug === slug);

	return new ImageResponse(
		(
			<div
				style={{
					background: "#f8f4ee",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "80px",
					border: "1px solid #eaeaea",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							fontSize: 16,
							textTransform: "uppercase",
							letterSpacing: "0.15em",
							color: "#777",
							fontWeight: "bold",
							marginBottom: "32px",
						}}
					>
						Kelvin Appiah — Writing
					</div>
					<div
						style={{
							fontSize: 52,
							fontWeight: "bold",
							color: "#111",
							lineHeight: 1.25,
							marginBottom: "24px",
							letterSpacing: "-0.02em",
						}}
					>
						{post?.title || "Article"}
					</div>
					<div
						style={{
							fontSize: 24,
							color: "#444",
							lineHeight: 1.5,
							display: "-webkit-box",
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}
					>
						{post?.description || ""}
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						borderTop: "1px solid #eaeaea",
						paddingTop: "32px",
					}}
				>
					<div style={{ fontSize: 18, color: "#555", fontWeight: "bold" }}>
						{post?.date} · {post?.readTime}
					</div>
					<div style={{ fontSize: 20, fontWeight: "bold", color: "#111", letterSpacing: "0.05em" }}>
						kelpyshades.com
					</div>
				</div>
			</div>
		),
		{ ...size }
	);
}
