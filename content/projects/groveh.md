---
title: "Groveh"
subtitle: "Chronological feeds punish established local vendors. I built a marketplace that ranks by actual quality and physical proximity instead of who posted last."
metaTitle: "Building Groveh: A Better Local Marketplace — Kelvin Appiah"
metaDescription: "Local vendors were losing orders in chaotic WhatsApp threads. I built Groveh using Bayesian quality scoring and H3 hex indexing to surface the best vendors."
category: "Marketplace • Web & Mobile"
technologies: "Convex · Next.js · Expo · Cloudflare · H3"
status: "20+ active storefronts"
linkText: "groveh.app"
linkHref: "https://groveh.app"
imageSrc: "https://groveh.app/og-image.png"
imageAlt: "Groveh UI Showcase"
order: 2
---

## The Problem
Local vendors operate mostly through informal WhatsApp groups and Instagram DMs, lacking structured catalogs and losing orders in chaotic chat threads. Additionally, traditional marketplace feeds favor recency over quality, burying established, well-reviewed listings beneath recent posts.

## Bayesian Quality Ranking & Geospatial Indexing
Listings are ranked using a weighted Bayesian rating model: W = (R·v + C·m) / (v + m), adjusting average scores against review volume relative to marketplace baselines. Weighted scores are denormalized onto listing records at write time, keeping index reads fast without recalculating scores on every query.

Geospatial filtering utilizes Uber's H3 hexagonal indexing at resolution 7. Quality scoring filters top listings first, and H3 proximity reorders within that verified quality pool so distance breaks ties without penalizing higher-rated vendors.

## Storefront Profiles & Request-Based Checkout
Vendors manage storefront profiles (@handle), store banners, and downloadable QR codes across three unified categories: Food (orange accent), Products (blue accent), and Services (green accent).

Orders submit direct request notifications to the vendor dashboard without forced checkout gateways or platform commission fees. Payment and delivery terms are settled directly between buyer and vendor.

## Social Feed & Built-in Sharing Flywheel
An integrated social feed lets vendors post portfolio updates, product launches, and store announcements with direct item ordering.

Dynamic OG link previews automatically format rich card previews when storefront or listing links are shared in WhatsApp or Instagram DMs. Downloadable store QR codes allow vendors to bridge physical flyers, packaging, and menus directly to their digital storefront.

## Infrastructure & Real-Time Sync
Powered by Convex for real-time state synchronization across order requests, status updates, and listings. Image delivery is handled by Cloudflare CDN with strict cache rules to prevent caching failed uploads.

## Where It Stands
MVP shipped and live. Direct vendor outreach launched in early August 2026, with over 20 active storefronts currently onboarded across Food, Products, and Services.
