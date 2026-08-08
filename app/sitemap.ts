import type { MetadataRoute } from "next";
import { getSortedPostsData } from "@/lib/posts";
import { getSortedProjectsData } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kelpyshades.com";
	
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${siteUrl}/work`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${siteUrl}/how-i-work`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${siteUrl}/writing`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];

	const posts = getSortedPostsData();
	const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
		url: `${siteUrl}/writing/${post.slug}`,
		lastModified: post.date ? new Date(post.date) : new Date(),
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	const projects = getSortedProjectsData();
	const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
		url: `${siteUrl}/work/${project.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
