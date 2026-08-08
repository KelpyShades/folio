export interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	readTime: string;
	content: string; // HTML format for easy rendering
}

export const posts: Post[] = [
	{
		slug: "gps-locking-anti-spoofing-mobile",
		title: "GPS-Locking & Anti-Spoofing: How We Verified Attendance in Class-io",
		description: "An in-depth look at building spoof-resistant location verification systems on campus using averaged coordinate sampling, mock location detection, and network-time reconciliation.",
		date: "January 15, 2026",
		readTime: "8 min read",
		content: `
			<p>Attendance verification software has a fundamental vulnerability: it assumes the device's location reports are honest. In a university environment, where students are highly motivated to find bypasses, standard location checks fail immediately. Students use mock-location developers tools, VPNs, or screenshotted QR codes to check in from their dorm rooms.</p>
			
			<h3>The Mock Location Problem</h3>
			<p>On Android and iOS, mock location APIs allow users to simulate GPS coordinates. Standard geolocation packages in Flutter or React Native will blindly report these simulated coordinates as the user's true location. To block this, we implemented direct native channel checks in Class-io to inspect the mock-provider flags at the operating system level, rejecting any request initiated while mock-providers are active.</p>

			<h3>Averaged Coordinate Sampling</h3>
			<p>A single GPS reading is highly susceptible to jitter and temporary spoofing. Class-io's checking protocol enforces a 5-second lock. During this period, the app collects multiple coordinate samples, calculates their variance, and computes the geometric mean. If the coordinate variance exceeds a set threshold, it indicates coordinates are jumping rapidly (often a sign of hardware spoofing tools), and the sign-in is blocked.</p>

			<h3>Rotational QR Timers</h3>
			<p>To prevent students from screenshotting the check-in screen and sharing it in group chats, Class-io employs a dynamic, rotating QR code that refreshes every 15 seconds. Each QR frame embeds a time-locked payload encrypted using AES-GCM. The server decrypts the token and checks the timestamp against NTP-synchronized network time. If the token is older than 20 seconds, the check-in is rejected, closing the loop on screenshot sharing.</p>
		`
	},
	{
		slug: "bayesian-ranking-vs-recency-marketplace-feeds",
		title: "Bayesian Ranking vs. Recency: Why Chronological Feeds Dilute Marketplace Quality",
		description: "Why chronological ordering rewards spam instead of quality, and how we built Groveh's feed using weighted Bayesian estimations to prioritize value.",
		date: "February 2, 2026",
		readTime: "6 min read",
		content: `
			<p>Most local marketplace feeds suffer from a structural flaw: chronological bias. By sorting listings purely by the time they were created, platforms force vendors into a cycle of constant reposting. Genuinely high-quality storefronts with history and reviews get pushed down by low-effort spam that posted minutes ago.</p>

			<h3>The Fallacy of Simple Averages</h3>
			<p>Simply sorting listings by average rating (e.g., stars) is equally flawed. A listing with one 5-star review will outrank a listing with fifty reviews and a 4.9-star rating. This is mathematically dishonest and discourages vendors from building long-term reputations.</p>

			<h3>Weighted Bayesian Estimations</h3>
			<p>To solve this, Groveh implements a Bayesian rating model. The formula adjusts the raw average rating of a listing based on the volume of reviews it receives relative to the platform average:</p>
			
			<p style="font-family: var(--font-jetbrains-mono); padding: 1rem; background: #eaeaea; border-radius: 4px; font-size: 0.875rem;">
				W = (R * v + C * m) / (v + m)
			</p>
			
			<p>Where <strong>W</strong> is the weighted rating, <strong>R</strong> is the listing's average rating, <strong>v</strong> is the number of reviews, <strong>m</strong> is the threshold minimum reviews required to rank (we set this dynamically), and <strong>C</strong> is the average rating across the entire marketplace. This ensures that listings with deep, positive history naturally float to the top, while new listings are gracefully benchmarked against the average.</p>

			<h3>Geospatial Re-ranking</h3>
			<p>Once the quality scores are computed and cached, we layer on geospatial proximity using Uber's H3 hexagonal indexing. Proximity acts as a regional filter, rather than a raw sort key. This ensures that you are shown the best-reviewed vendors in your local hexagon tier, instead of just the absolute closest seller regardless of their quality.</p>
		`
	}
];
