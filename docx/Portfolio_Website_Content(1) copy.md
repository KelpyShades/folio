# Portfolio Website — Content Spec (v4)

Copy-ready text for kelpyshades.com. No layout, color, or type direction — that's Figma's job. This is the "what goes on the page" file, now split across pages instead of one long scroll.

**Positioning (unchanged):** Early-stage technical builder with real, live proof — not promise, not padding. Specificity carries the credibility. State your stage plainly, don't lead with it or apologize for it. No stat strips.

---

## Site Map

- `/` — Home (lean, scannable, links out to everything else)
- `/work/class-io` — full case study
- `/work/groveh` — full case study
- `/how-i-work` — full leadership & operating-systems essay
- `/writing` — blog index (**don't launch until 2-3 posts are ready** — see note at bottom)

---

## 1. Home Page

### Identity
**Name / Titles:** Kelvin Appiah — Software Engineer · Product Architect · Technical Lead

**Intro paragraph:**
I design and build production software end-to-end — architecture, implementation, and the operating structure around it. Self-taught, based in Kumasi, Ghana, in my final year of a Computer Science degree. Currently Technical Co-Founder & CEO at 404notnull, where I lead engineering and product for two live platforms: Class-io and Groveh.

**Explore:**
- Class-io → classioedu.com
- Groveh → groveh.app
- Code → github.com/KelpyShades

### Selected Work (cards — one line each, link out)

**Class-io** — Attendance verification that can't be spoofed. GPS-locked, QR-rotated, live in production with 1,500+ users.
→ Read the full case study (`/work/class-io`)

**Groveh** — Discovery-first commerce for vendors, with a feed built to rank on quality, not just recency. MVP shipped, vendor onboarding live.
→ Read the full case study (`/work/groveh`)

### How I Work (teaser — full version on its own page)

I run engineering and leadership on the same rule: one owner, one output, one deadline, no exceptions — including for myself. I write code deliberately, not by default, and I'd rather resize a team to match reality than inflate it to look better on paper.
→ Read more about how I work (`/how-i-work`)

### Technical Skills
- **Mobile & Web:** Flutter, Next.js, Expo, React
- **Backend & Data:** Supabase, Convex, H3 (geospatial), Cloudflare (Workers, R2, Pages)
- **Auth & Infra:** Clerk, Firebase
- **Tooling:** Git, GitHub Actions, PostHog, Sentry

### Background
BSc Computer Science, University of Energy and Natural Resources (UENR) — final year, final semester.

### Contact
- Email: appiahkelvin060904@gmail.com
- GitHub: github.com/KelpyShades
- X: @KelpyShades
- LinkedIn: linkedin.com/in/kelvin-appiah

---

## 2. Project Page — `/work/class-io`

**Title:** Class-io — Attendance Verification for Universities

**Dek:** A GPS-locked, QR-rotated attendance system built to survive the ways students actually try to beat attendance software — and it's been used enough to prove it works.

**The Problem**
University attendance still runs on paper sign-in sheets, buddy check-ins, or basic QR/check-in apps that don't hold up under scrutiny. A friend signs in for someone running late. A QR code gets screenshotted and passed around a group chat. A location field gets spoofed. None of it gives a lecturer a record they can actually trust, and reconciling any of it by hand afterward is its own tax on their time.

**How It Works**
Class-io verifies attendance on two layers that both have to check out before a sign-in counts.

Location is confirmed through GPS-locked tracking that takes multiple coordinate samples and averages them, filtering out the crude spoofing attempts a single fake reading would let through. On top of that, the QR code itself isn't static — it rotates on a timer, and each code carries a time-decaying encrypted token, so a code that's copied or screenshotted goes dead within minutes, long before it could circulate.

The system runs as two coordinated applications — one for lecturers, one for students — rather than one app trying to do both jobs. Lecturers get a live dashboard that updates as students check in during the session itself, not a report generated afterward. Offline sync means the app keeps working when campus wifi drops, syncing check-ins once connectivity returns instead of losing them.

**Integrity Safeguards**
Anti-screenshot safeguards on the display layer and session-level controls close off the easy workarounds that make most attendance apps trivial to game.

**Admin & Reporting**
What used to be a manual reconciliation job — cross-checking a paper sheet against a roster — is now a one-click export. Lecturers and administrators pull CSV or PDF attendance records straight from the dashboard.

**Where It Stands**
Live in production, with 1,500+ active students and 4 lecturers using it across their courses. Demoed directly to department leadership, with strong reception — an actual working system evaluated by the people who'd have to trust it, not a pitch.

**Tech Stack:** Flutter (cross-platform mobile), Supabase (auth, database, real-time), Cloudflare (edge infrastructure)

**Link:** classioedu.com

**[ASSET NEEDED before publishing:]**
- Screen recording of the QR scan flow + live dashboard updating in real time
- A real quote from a lecturer or department head, if and when you have one you can attribute by name. No placeholder quotes.

---

## 3. Project Page — `/work/groveh`

**Title:** Groveh — Discovery-First Commerce Platform

**Dek:** A marketplace built around the two things most feed-based platforms get wrong: making sure good listings don't disappear over time, and making sure proximity doesn't override quality.

**The Problem**
Vendors were already doing real business — food, products, services — almost entirely through informal channels: WhatsApp groups, word of mouth, whoever happened to already know them. There was no shared place to build a real storefront, get discovered by someone new, or be found for being good rather than loud or recent.

Most marketplace and social feeds also share a structural flaw: they favor recency so heavily that a genuinely well-reviewed listing from a few months ago becomes functionally invisible, buried under whatever posted an hour ago. Discovery ends up rewarding activity, not quality.

**How the Feed Works**
Every listing is scored with a Bayesian rating system — a way of ranking quality that accounts for how many reviews a listing actually has, so five reviews at 5 stars don't automatically outrank fifty reviews at 4.8. That score is denormalized directly onto the listing and recomputed each time a new review comes in, keeping ranking fast without recalculating everything on every read. Listings are then served from score-ordered indexes, so a strong listing keeps surfacing regardless of when it was posted.

Proximity is handled separately using H3, a hexagonal geospatial indexing system, at a resolution fine enough to distinguish nearby areas without needing exact GPS matching — and coarser hex tiers get pulled in on the fly when a search needs a wider radius. The two systems combine through a buffer-then-reshuffle pattern: quality filtering happens first, and only within that already-good set does proximity reorder results. Distance breaks ties — it never lets a mediocre nearby listing outrank a genuinely better one further away.

**Vendor Tools**
Every vendor gets a real storefront, not just a listing — a custom handle (@yourbrand), a shareable QR code for the storefront itself, and a dashboard to manage listings, incoming orders, and posts in one place. Listings sit in three categories — Food, Products, Services — and the platform takes zero commission on orders.

**Infrastructure**
The backend runs on Convex for real-time database queries and mutations, so listing updates and order status changes reflect immediately without a manual refresh. Images are served through Cloudflare's CDN, with cache rules specifically tuned so a failed upload doesn't get cached as if it had succeeded — a small detail, but the kind that causes real support headaches if it's missed.

**Where It Stands**
MVP shipped and public. Vendor onboarding is live right now, using a structured outreach and pitch framework built specifically for getting the first real vendors on the platform.

**Tech Stack:** Convex (backend, real-time), Next.js (web), Expo (mobile), Cloudflare (CDN/edge), H3 (geospatial indexing)

**Link:** groveh.app

**[ASSET NEEDED before publishing:]**
- Screenshots of the feed and a real vendor storefront once there are listings worth showing
- A vendor count only once it's a number you're comfortable standing behind
- Nothing tagged `GROVEH — PRIVATE` belongs here, however the wording gets softened

---

## 4. How I Work Page — `/how-i-work`

*(Full version — home page gets only the teaser above.)*

Engineering and leadership run on the same discipline: define the output before you start, or you're not delegating, you're wishing.

Every task I hand off has one owner, one output, and one deadline before it's assigned — no vague scope, no "help out with X." When two developers joined for an active feature trial, they got the same standard I hold myself to: what done looks like in one sentence, a hard date, and a stuck-protocol — come to me after a set number of hours blocked, not before, not after three days of silence.

I apply the same rule to the team itself, not just its tasks. A role only stays a role if there's a live task attached to it — not a title that sounded good when it was assigned. When people's real hours were going elsewhere, I resized the org chart to match reality instead of inflating it to look better on paper. It's a smaller decision than it sounds, but it's the one that makes a team easier to actually lead.

I still write code deliberately, not by default — architecture decisions, hard technical calls, and anything blocking the whole team stay mine. Everything else belongs to whoever's positioned to own it. Staying in the code isn't nostalgia; it's how I stay sharp enough to know when a shortcut is being taken, or when something's harder than it's being described as.

Outside engineering, I designed and run a lean operating system for the studio's public presence — a weekly loop that turns raw build notes into scheduled, platform-specific content, at near-zero cost, with no marketing hire. Same instinct as the delegation framework: build the system once, let it run, don't manufacture busywork to fill the gaps.

*Note: don't name the developers on trial specifically — keep this accurate regardless of how the trial resolves. Don't mention any departures; not relevant here and one is still private.*

---

## 5. Writing — `/writing`

**Don't build this section until you have 2-3 posts ready.** An empty or one-post blog undercuts the rest of the site more than not having one at all.

**Where posts come from:** the same weekly capture notes that already feed your Buffer content — no new process. Occasionally one is worth a full page instead of a social post. Reuse the exact threshold from your own marketing engine doc: *only when something genuinely earns it, one or two a month is plenty to start.*

**What belongs here (pulling from your existing content pillars):**
- **Dev Knowledge & Craft** — technical breakdowns, e.g. "How Groveh's feed keeps good listings from disappearing," "Building attendance verification that can't be screenshotted around"
- **Build in Public** — real decisions, real mistakes, told straight — same translation formula you already use: what happened → what it made you realize
- **Problem/Product retrospectives** — Class-io stories now that active build work has slowed; there are months of shipped features and real reactions still unmined

**Format:** title, one-line dek, body. No separate categories page needed at this size — a simple chronological list on `/writing` is enough until there's a real reason to add tags.

---

## Page metadata

**Title tag:** Kelvin Appiah — Software Engineer, Product Architect

**Meta description:** Self-taught software engineer and Technical Co-Founder & CEO building and operating Class-io and Groveh from Kumasi, Ghana.

---

## What NOT to put on the site

- **A stats bar / metrics strip anywhere.** Numbers belong inside case studies, in prose, where they're earned.
- **"For students" / campus-first framing**, for either product. State what each product does and who's verifiably using it, in numbers, without using the audience as the hook.
- **The 9-person team framing**, in any form.
- **Named individuals on active trials**, or any departure, public or private.
- **Invented testimonials, quotes, or vendor/user counts.**
- **Language that oversells seniority you don't have yet** — no "enterprise-scale," no "led a team of X" unless literally true.

## Before you publish, check

- [ ] Class-io and Groveh pages each have real screenshots/recordings, not placeholders
- [ ] No product description leads with "students" or "campus" as the pitch
- [ ] No stats bar exists anywhere
- [ ] Groveh vendor count (if added) is one you can stand behind
- [ ] No quote anywhere on the site is invented
- [ ] `/how-i-work` doesn't name anyone currently on trial
- [ ] `/writing` isn't live with fewer than 2-3 posts
- [ ] Numbers throughout get revisited as they change — they'll go stale first