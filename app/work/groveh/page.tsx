import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaChevronLeft, FaLink } from 'react-icons/fa6';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kelpyshades.com';

export const metadata: Metadata = {
  title: 'Groveh — Discovery-First Commerce Platform',
  description:
    "A marketplace built around the two things most feed-based platforms get wrong: making sure good listings don't disappear over time, and making sure proximity doesn't override quality.",
  alternates: {
    canonical: `${siteUrl}/work/groveh`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/work/groveh`,
    title: 'Groveh — Discovery-First Commerce Platform',
    description:
      "A marketplace built around the two things most feed-based platforms get wrong: making sure good listings don't disappear over time, and making sure proximity doesn't override quality.",
    images: [
      {
        url: 'https://groveh.app/og-image.png',
        width: 1200,
        height: 750,
        alt: 'Groveh Case Study Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groveh — Discovery-First Commerce Platform',
    description:
      "A marketplace built around the two things most feed-based platforms get wrong: making sure good listings don't disappear over time, and making sure proximity doesn't override quality.",
    images: ['https://groveh.app/og-image.png'],
  },
};

export default function GrovehCaseStudy() {
  const grovehJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Groveh',
    operatingSystem: 'Android, iOS, Web',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Discovery-first commerce for local vendors, with a feed built to rank on quality, not just recency.',
    url: 'https://groveh.app',
    publisher: {
      '@type': 'Organization',
      name: '404notnull',
      url: 'https://404notnull.vercel.app',
    },
  };

  return (
    <main className="animate-fade mx-auto flex w-full max-w-240 flex-col px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <Script
        id="groveh-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(grovehJsonLd) }}
      />
      {/* Back Navigation */}
      <Link
        href="/"
        className="mb-8 inline-flex w-fit items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase transition-colors hover:text-black sm:mb-12 sm:text-xs"
      >
        <FaChevronLeft className="h-3 w-3" /> Back to Home
      </Link>

      {/* Header */}
      <header className="mb-10 max-w-180 sm:mb-12">
        <span className="mb-3 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:mb-4 sm:text-xs">
          Case Study
        </span>
        <h1
          className="mb-4 text-3xl font-bold tracking-tight text-[#111] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Groveh
        </h1>
        <p className="text-base leading-relaxed font-light text-[#333] sm:text-lg md:text-xl lg:text-2xl">
          A marketplace built around the two things most feed-based platforms get wrong: making sure
          good listings don&apos;t disappear over time, and making sure proximity doesn&apos;t
          override quality.
        </p>
      </header>

      {/* Hero Image */}
      <div className="relative mb-10 aspect-16/10 w-full overflow-hidden border border-[#eaeaea] bg-[#fafafa] shadow-sm sm:mb-12">
        <Image
          src="https://groveh.app/og-image.png"
          alt="Groveh UI Showcase"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Metadata Info Bar */}
      <div className="mb-10 grid grid-cols-1 gap-6 border-t border-b border-[#eaeaea] py-6 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase sm:mb-12 sm:grid-cols-2 sm:text-xs md:grid-cols-3">
        <div>
          <span className="mb-1 block text-[#888]">Technologies</span>
          <span className="text-xs text-[#111] sm:text-sm">
            Convex · Next.js · Expo · Cloudflare · H3
          </span>
        </div>
        <div>
          <span className="mb-1 block text-[#888]">Status</span>
          <span className="text-xs text-[#111] sm:text-sm">MVP Shipped & Live</span>
        </div>
        <div>
          <span className="mb-1 block text-[#888]">Link</span>
          <a
            href="https://groveh.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1.5 border-b border-[#111] text-xs text-[#111] hover:text-[#555] sm:text-sm"
          >
            groveh.app <FaLink className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>

      {/* Content Column (optimized line width max-w-180) */}
      <article className="mx-auto flex w-full max-w-205 flex-col gap-10 text-sm leading-relaxed text-[#333] sm:text-base md:text-lg">
        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            The Problem
          </h2>
          <p>
            Vendors were already doing real business — food, products, services — almost entirely
            through informal channels: WhatsApp groups, word of mouth, whoever happened to already
            know them. There was no shared place to build a real storefront, get discovered by
            someone new, or be found for being good rather than loud or recent.
          </p>
          <p>
            Most marketplace and social feeds also share a structural flaw: they favor recency so
            heavily that a genuinely well-reviewed listing from a few months ago becomes
            functionally invisible, buried under whatever posted an hour ago. Discovery ends up
            rewarding activity, not quality.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            How the Feed Works
          </h2>
          <p>
            Every listing is scored with a Bayesian rating system — a way of ranking quality that
            accounts for how many reviews a listing actually has, so five reviews at 5 stars
            don&apos;t automatically outrank fifty reviews at 4.8. That score is denormalized
            directly onto the listing and recomputed each time a new review comes in, keeping
            ranking fast without recalculating everything on every read. Listings are then served
            from score-ordered indexes, so a strong listing keeps surfacing regardless of when it
            was posted.
          </p>
          <p>
            Proximity is handled separately using H3, a hexagonal geospatial indexing system, at a
            resolution fine enough to distinguish nearby areas without needing exact GPS matching —
            and coarser hex tiers get pulled in on the fly when a search needs a wider radius. The
            two systems combine through a buffer-then-reshuffle pattern: quality filtering happens
            first, and only within that already-good set does proximity reorder results. Distance
            breaks ties — it never lets a mediocre nearby listing outrank a genuinely better one
            further away.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            Vendor Tools
          </h2>
          <p>
            Every vendor gets a real storefront, not just a listing — a custom handle (@yourbrand),
            a shareable QR code for the storefront itself, and a dashboard to manage listings,
            incoming orders, and posts in one place. Listings sit in three categories — Food,
            Products, Services — and the platform takes zero commission on orders.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            Infrastructure
          </h2>
          <p>
            The backend runs on Convex for real-time database queries and mutations, so listing
            updates and order status changes reflect immediately without a manual refresh. Images
            are served through Cloudflare&apos;s CDN, with cache rules specifically tuned so a
            failed upload doesn&apos;t get cached as if it had succeeded — a small detail, but the
            kind that causes real support headaches if it&apos;s missed.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            Where It Stands
          </h2>
          <p>
            MVP shipped and public. Vendor onboarding is live right now, using a structured outreach
            and pitch framework built specifically for getting the first real vendors on the
            platform.
          </p>
        </div>
      </article>
    </main>
  );
}
