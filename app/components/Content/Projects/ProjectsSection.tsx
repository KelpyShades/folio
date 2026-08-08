import ProjectCard, { type Project } from "./ProjectCard";

const PROJECTS_DATA: Project[] = [
	{
		id: "class-io",
		name: "Class-io",
		snapshot: "An attendance verification system built to withstand spoofing and misreporting at university scale.",
		problem: "Manual and app-based attendance tracking is easy to fake — buddy check-ins, screenshotted codes, shared locations — and gives lecturers no reliable record to act on.",
		architecture: "Verification runs on two layers. Location is confirmed through GPS-locked tracking with multi-sample coordinate averaging, which filters out single-reading spoofing attempts. On top of that, a QR code rotates on a timer with a time-decaying encrypted token, so a code that's copied or screenshotted stops working within minutes. The system runs as two coordinated applications — one for lecturers, one for students — with offline sync so check-ins still resolve when campus connectivity drops, and anti-screenshot safeguards built into the display layer itself.",
		status: "Live in production, with 1,500+ active users across 4 university courses. Lecturers get a live dashboard as check-ins happen and one-click CSV/PDF export.",
		hero_image: "/classio.png",
		url: "https://classioedu.com",
		github: "",
		technologies: ["Flutter", "Supabase", "Cloudflare"],
	},
	{
		id: "groveh",
		name: "Groveh",
		snapshot: "A discovery-first commerce platform, with a feed and ranking system built to solve the two problems most marketplace feeds get wrong — proximity and fairness.",
		problem: "Vendors were selling through informal channels — WhatsApp groups, word of mouth — with no real storefront and no way to be discovered beyond who already knew them. Most feed designs also quietly bury good older listings behind a wall of whatever's most recent.",
		architecture: "Backend runs on Convex for real-time queries and mutations. Listing quality is scored with a Bayesian rating system, denormalized directly onto each listing and recomputed at write time, so ranking stays fast without recalculating on every read — score-ordered indexes mean a genuinely good listing from three months ago can still surface, not just whatever posted an hour ago. Proximity uses H3 hexagonal geospatial indexing at resolution 7, with coarser tiers derived on the fly for wider searches, and a buffer-then-reshuffle pattern that reorders by distance only within an already quality-filtered set — location breaks ties, it never overrides quality. Image delivery runs through Cloudflare's CDN with cache rules tuned so failed uploads don't get cached as if they'd succeeded.",
		status: "MVP shipped and public. Vendor onboarding is live, using a structured outreach and pitch framework across Food, Products, and Services.",
		hero_image: "/groveh.png",
		url: "https://groveh.app",
		github: "",
		technologies: ["Convex", "Next.js", "Expo", "Cloudflare", "H3"],
	},
];

const ProjectsSection = () => {
	return (
		<section className="py-24 md:py-40 flex flex-col lg:flex-row gap-16 lg:gap-32">
			<div className="w-full lg:w-75 shrink-0">
				<h2 className="text-5xl font-bold tracking-tight text-[#111]" style={{ fontFamily: 'var(--font-poppins)' }}>
					Selected Work
				</h2>
				<p className="font-mono text-sm uppercase tracking-widest text-[#777] mt-4 font-bold">
					2024 — Present
				</p>
			</div>

			<div className="flex-1 max-w-5xl">
				<ul className="flex flex-col gap-24">
					{PROJECTS_DATA.map((project) => (
						<li key={project.id}>
							<ProjectCard project={project} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default ProjectsSection;
