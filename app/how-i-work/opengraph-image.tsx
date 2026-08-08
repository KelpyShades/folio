import { ImageResponse } from "next/og";

export const alt = "How I Work — Operating Philosophy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
						Kelvin Appiah — Operating Philosophy
					</div>
					<div
						style={{
							fontSize: 56,
							fontWeight: "bold",
							color: "#111",
							lineHeight: 1.25,
							marginBottom: "24px",
							letterSpacing: "-0.02em",
						}}
					>
						How I Work
					</div>
					<div
						style={{
							fontSize: 26,
							color: "#444",
							lineHeight: 1.5,
						}}
					>
						I run engineering and leadership on the same rule: one owner, one output, one deadline, no exceptions — including for myself.
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
						Kelvin Appiah · 2026
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
