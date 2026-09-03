---
title: "Bayesian Priors and Distance Tiers: Ranking a Local Marketplace Feed"
description: "A Bayesian rating with a fixed prior, additive distance tiers, and recency confined to tie-breaks: how a local marketplace feed ranks quality over posting frequency."
date: "February 2, 2026"
readTime: "3 min read"
---

Chronological feeds create a structural bias: they reward posting frequency over quality, and well-reviewed vendor listings get pushed down by low-effort recent posts. This is the ranking that replaces that bias in Groveh, the local marketplace this post is written from. It does not sort by time. The first version did the simplest thing available: it sorted by creation time, so the feed mostly showed whoever had most recently created a storefront. Quite unfair, and that is what this ranking replaced.

### The fallacy of simple averages

Sorting by raw average rating is equally broken, because a single 5-star review outranks fifty reviews averaging 4.9. That penalizes exactly the vendors a marketplace should be promoting: the established ones with high review volume.

### A Bayesian rating with a fixed prior

Every listing carries a Bayesian weighted score:

```text
W = (R * v + C * m) / (v + m)
```

R is the listing's average rating, v its review count, C the prior rating, and m the prior weight. Groveh's prior is three reviews at 4.0: every listing starts as if it already had that record, and real reviews pull the score away from the anchor as volume grows.

With those numbers:

- A brand-new listing with 2 reviews at 5.0 scores (10 + 12) / 5 = 4.4.
- A veteran with 80 reviews at 4.7 scores (376 + 12) / 83 = 4.68.
- A single 5-star review scores (5 + 12) / 4 = 4.25.

The veteran wins, the single review lands below the prior anchor, and a flawless start cannot out-rank a proven track record. Listings marked New instead of rated score zero and sort to the bottom, so an unrated listing never floats above a rated one.

The prior is a fixed constant, not a computed marketplace average. A global mean over a thin review base would move with whatever handful of listings got reviewed that week, while a constant prior stays predictable for vendors.

### Distance is not a tie-breaker

An earlier version of this described distance as a secondary tie-breaker within a high-quality candidate set. That is not what ships. Distance is added straight into the primary score.

Each storefront stores an Uber H3 hexagonal cell, and the ranking derives coarser parent cells at read time, paying a tiered proximity boost that shrinks as the cells get coarser. The final score is the Bayesian rating plus that boost, sorted descending, and the boost is large enough to outweigh the entire quality range: a mediocre listing in the user's own cell outscores a flawless, heavily reviewed listing several cells away.

For a local marketplace, that is the point, or at least the consequence: an excellent storefront across town loses to an adequate one around the corner, because the customer was never going to travel that far. Proximity is co-equal with quality in the sort key, not a refinement of it.

### Where recency actually lives

No quality-ranked lane puts time into the primary score. Ties in the composite score break by a creation-time bucket, newer bucket first, and within the same bucket the order is a deterministic shuffle reseeded on a fixed rotation window, so equal-score listings rotate through positions instead of freezing into creation order. The trending lane is the one place time drives the score, using a decay function over favorites, reviews, and age, and the fresh-drops lane is pure recency.

The result is that recency is a lane, not a sort key. The default feed answers "what is good and near," and time only decides between listings that are otherwise equal.

### Caching

Bayesian scores are precomputed and stored on each listing, rewritten whenever a review is created, updated, or deleted. Compound indexes pair the cached score with type, category, and visibility, so top-rated lanes are index-ordered rather than sorted in memory on every request. There is no cron refreshing anything; the cache is write-through, and reads fall back to computing the score live if the stored value is missing.
