# Portfolio Website — Content Spec (v3)

Copy-ready text for kelpyshades.com, in page order. No layout, color, or type direction — that's Figma's job. This is the "what goes on the page" file.

**Positioning:** Early-stage technical builder with real, live proof — not promise, not padding. You don't have ten years of experience to lean on, so the copy doesn't pretend to. Specificity carries the credibility instead: exact technical detail and exact leadership detail read as senior regardless of age, because vagueness is what reads as junior, not youth itself. State your stage plainly — final-year CS student, self-taught — without leading with it or apologizing for it. No stat strips, no marketing CTAs stacked at the top. Let the work and the writing carry the weight.

---

## 1. Identity

**Name / Titles:** Kelvin Appiah — Software Engineer · Product Architect · Technical Lead

**Intro paragraph:**
I design and build production software end-to-end — architecture, implementation, and the operating structure around it. Self-taught, based in Kumasi, Ghana, in my final year of a Computer Science degree. Currently Technical Co-Founder & CEO at 404notnull, where I lead engineering and product for two live platforms: Class-io and Groveh.

**Explore:**

- Class-io → classioedu.com
- Groveh → groveh.app
- Code → github.com/KelpyShades

---

## 2. Selected Work — Class-io

**Snapshot:** An attendance verification system built to withstand spoofing and misreporting at university scale.

**Problem:** Manual and app-based attendance tracking is easy to fake — buddy check-ins, screenshotted codes, shared locations — and gives lecturers no reliable record to act on.

**Architecture:** Verification runs on two layers. Location is confirmed through GPS-locked tracking with multi-sample coordinate averaging, which filters out single-reading spoofing attempts. On top of that, a QR code rotates on a timer with a time-decaying encrypted token, so a code that's copied or screenshotted stops working within minutes. The system runs as two coordinated applications — one for lecturers, one for students — with offline sync so check-ins still resolve when campus connectivity drops, and anti-screenshot safeguards built into the display layer itself.

**Where it stands:** Live in production, with 1,500+ active users across 4 university courses. Recently demoed to department leadership, with strong reception. Lecturers get a live dashboard as check-ins happen and one-click CSV/PDF export instead of manual reconciliation.

**Stack:** Flutter, Supabase, Cloudflare

**Link:** classioedu.com

**[ASSET NEEDED — do not publish without:]**

- A screen recording or screenshot of the QR scan + live dashboard. This is your strongest proof; don't ship the section without it.
- A real attributed quote, if you get one. No placeholder quotes.

---

## 3. Selected Work — Groveh

**Snapshot:** A discovery-first commerce platform, with a feed and ranking system built to solve the two problems most marketplace feeds get wrong — fairness and proximity.

**Problem:** Vendors were selling through informal channels — WhatsApp groups, word of mouth — with no real storefront and no way to be discovered beyond who already knew them. Most feed designs also quietly bury good older listings behind a wall of whatever's most recent.

**Architecture:** Backend runs on Convex for real-time queries and mutations. Listing quality is scored with a Bayesian rating system, denormalized directly onto each listing and recomputed at write time, so ranking stays fast without recalculating on every read — score-ordered indexes mean a genuinely good listing from three months ago can still surface, not just whatever posted an hour ago. Proximity uses H3 hexagonal geospatial indexing at resolution 7, with coarser tiers derived on the fly for wider searches, and a buffer-then-reshuffle pattern that reorders by distance only within an already quality-filtered set — location breaks ties, it never overrides quality. Image delivery runs through Cloudflare's CDN with cache rules tuned so failed uploads don't get cached as if they'd succeeded.

**Where it stands:** MVP shipped and public. Vendor onboarding is live, using a structured outreach and pitch framework, with real storefronts, custom handles, and QR-code sharing across three categories — Food, Products, Services.

**Stack:** Convex, Next.js, Expo, Cloudflare, H3

**Link:** groveh.app

**[ASSET NEEDED — do not publish without:]**

- Screenshots of the feed and a real vendor storefront once there are listings worth showing.
- A vendor count only once it's a number you're comfortable standing behind.
- Nothing tagged `GROVEH — PRIVATE` belongs here, however the wording gets softened.

---

## 4. Leadership & Operating Systems

Engineering and leadership run on the same discipline: define the output before you start, or you're not delegating, you're wishing.

Every task I hand off has one owner, one output, and one deadline before it's assigned — no vague scope, no "help out with X." When two developers joined for an active feature trial, they got the same standard I hold myself to: what done looks like in one sentence, a hard date, and a stuck-protocol — come to me after a set number of hours blocked, not before, not after three days of silence.

I apply the same rule to the team itself, not just its tasks. A role only stays a role if there's a live task attached to it — not a title that sounded good when it was assigned. When people's real hours were going elsewhere, I resized the org chart to match reality instead of inflating it to look better on paper. It's a smaller decision than it sounds, but it's the one that makes a team easier to actually lead.

I still write code deliberately, not by default — architecture decisions, hard technical calls, and anything blocking the whole team stay mine. Everything else belongs to whoever's positioned to own it. Staying in the code isn't nostalgia; it's how I stay sharp enough to know when a shortcut is being taken, or when something's harder than it's being described as.

Outside engineering, I designed and run a lean operating system for the studio's public presence — a weekly loop that turns raw build notes into scheduled, platform-specific content, at near-zero cost, with no marketing hire. Same instinct as the delegation framework: build the system once, let it run, don't manufacture busywork to fill the gaps.

_Note: don't name the developers on trial specifically — the section should stay accurate regardless of how that trial resolves. Don't mention any departures; not relevant here and one is still private._

---

## 5. Technical Skills

- **Mobile & Web:** Flutter, Next.js, Expo, React
- **Backend & Data:** Supabase, Convex, H3 (geospatial), Cloudflare (Workers, R2, Pages)
- **Auth & Infra:** Clerk, Firebase
- **Tooling:** Git, GitHub Actions, PostHog, Sentry

---

## 6. Background

BSc Computer Science, University of Energy and Natural Resources (UENR) — final year, final semester.

One line. This section exists for credibility, not depth.

---

## 7. Contact

- Email: appiahkelvin060904@gmail.com
- GitHub: github.com/KelpyShades
- X: @KelpyShades
- LinkedIn: linkedin.com/in/kelvin-appiah

---

## Page metadata

**Title tag:** Kelvin Appiah — Software Engineer, Product Architect

**Meta description:** Self-taught software engineer and Technical Co-Founder & CEO building and operating Class-io and Groveh from Kumasi, Ghana.

---

## What NOT to put on the site

- **A stats bar / metrics strip anywhere.** This is a professional portfolio, not a product landing page. Numbers belong inside the case studies, in prose, where they're earned.
- **"For students" / campus-first framing**, for either product. State what each product does and who's verifiably using it — in numbers, inside the case study — without using the audience as the marketing hook.
- **The 9-person team framing, in any form.** Already corrected in your CV and master doc.
- **Named individuals on active trials**, or any departure (public or private). Not relevant to a portfolio, and one departure isn't public yet.
- **Invented testimonials, quotes, or vendor/user counts.** If it isn't real yet, leave the section without it.
- **Language that oversells seniority you don't have yet** — no "enterprise-scale," no "led a team of X" if it's not literally true. The technical and leadership detail already does that work; it doesn't need help from adjectives.

## Before you publish, check

- [ ] Class-io section has a real screenshot/recording, not a placeholder
- [ ] No product description leads with "students" or "campus" as the pitch
- [ ] No stats bar exists anywhere on the page
- [ ] Groveh vendor count (if added) is one you can stand behind
- [ ] No quote on the site is invented
- [ ] Leadership section doesn't name anyone currently on trial
- [ ] Numbers throughout get revisited as they change — they'll go stale first
