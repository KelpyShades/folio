---
title: "Bayesian Ranking vs. Recency: Why Chronological Feeds Dilute Marketplace Quality"
description: "Why chronological feeds favor spam over quality, and how we built Groveh's feed using weighted Bayesian estimations."
date: "February 2, 2026"
readTime: "6 min read"
---

Chronological feeds create a structural bias: they reward posting frequency over quality. Well-reviewed vendor listings get pushed down by low-effort recent posts.

### The Fallacy of Simple Averages
Sorting by raw average rating is equally broken: a single 5-star review outranks fifty reviews averaging 4.9 stars. This penalizes established vendors with high review volume.

### Weighted Bayesian Estimations
Groveh uses a Bayesian rating model that adjusts average ratings based on review volume relative to marketplace baselines:

```text
W = (R * v + C * m) / (v + m)
```

Where **W** is the weighted rating, **R** is the listing's average rating, **v** is review count, **m** is the minimum review threshold, and **C** is the marketplace average rating. This keeps proven vendors at top ranks while fairly benchmarking new listings.

### Geospatial Re-ranking
Cached quality scores are combined with Uber H3 hexagonal indexing. Distance acts as a secondary tie-breaker within high-quality candidate sets rather than an absolute sort key.
