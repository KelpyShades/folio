import { query } from "./_generated/server";

export const getFeatured = query({
	handler: async (ctx) => {
		const projects = await ctx.db
			.query("projects")
			.filter((q) => q.eq(q.field("is_featured"), true))
			.collect();

		return projects.map((p) => ({
			...p,
			id: p._id,
		}));
	},
});
