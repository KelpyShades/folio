import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	projects: defineTable({
		name: v.string(),
		description: v.string(),
		hero_image: v.string(),
		gallery: v.array(v.string()),
		url: v.string(),
		github: v.string(),
		technologies: v.array(v.string()),
		team: v.string(),
		role: v.string(),
		start_date: v.string(),
		end_date: v.string(),
		status: v.string(),
		category: v.string(),
		is_featured: v.boolean(),
		key_features: v.array(v.string()),
		impact: v.string(),
	}),
});
