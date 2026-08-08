import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	cacheComponents: true,
	images: {
		qualities: [75, 95],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.convex.cloud",
			},
			{
				protocol: "https",
				hostname: "*.convex.db",
			},
			{
				protocol: "https",
				hostname: "classioedu.com",
			},
			{
				protocol: "https",
				hostname: "groveh.app",
			},
		],
	},
};

export default nextConfig;
