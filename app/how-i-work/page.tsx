import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FaChevronLeft } from 'react-icons/fa6';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kelpyshades.com';

export const metadata: Metadata = {
  title: 'How I Work — Kelvin Appiah',
  description:
    "Engineering and leadership run on the same discipline: define the output before you start, or you're not delegating, you're wishing.",
  alternates: {
    canonical: `${siteUrl}/how-i-work`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/how-i-work`,
    title: 'How I Work — Kelvin Appiah',
    description:
      "Engineering and leadership run on the same discipline: define the output before you start, or you're not delegating, you're wishing.",
    images: [
      {
        url: '/how-i-work-og.png',
        width: 1200,
        height: 630,
        alt: 'How I Work — Operating Philosophy by Kelvin Appiah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Work — Kelvin Appiah',
    description:
      "Engineering and leadership run on the same discipline: define the output before you start, or you're not delegating, you're wishing.",
    images: ['/how-i-work-og.png'],
  },
};

export default function HowIWork() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'How I Work — Kelvin Appiah',
    description:
      "Engineering and leadership run on the same discipline: define the output before you start, or you're not delegating, you're wishing.",
    image: `${siteUrl}/how-i-work-og.png`,
    author: {
      '@type': 'Person',
      name: 'Kelvin Appiah',
      url: 'https://kelpyshades.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Kelvin Appiah',
      url: 'https://kelpyshades.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/how-i-work`,
    },
  };

  return (
    <main className="animate-fade mx-auto flex w-full max-w-225 flex-col px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Back Navigation */}
      <Link
        href="/"
        className="mb-8 inline-flex w-fit items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase transition-colors hover:text-black sm:mb-12 sm:text-xs"
      >
        <FaChevronLeft className="h-3 w-3" /> Back to Home
      </Link>

      {/* Header */}
      <header className="mb-10 max-w-195 sm:mb-12">
        <span className="mb-3 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:mb-4 sm:text-xs">
          Operating Philosophy
        </span>
        <h1
          className="mb-4 text-3xl font-bold tracking-tight text-[#111] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          How I Work
        </h1>
        <p className="text-base leading-relaxed font-light text-[#333] sm:text-lg md:text-xl lg:text-2xl">
          My operational framework for engineering, team leadership, and product strategy.
        </p>
      </header>

      {/* Content Column (optimized line width max-w-195) */}
      <article className="flex w-full max-w-195 flex-col gap-6 border-t border-[#eaeaea] pt-8 text-sm leading-relaxed text-[#333] sm:gap-8 sm:pt-12 sm:text-base md:text-lg">
        <p className="text-lg leading-relaxed font-semibold text-[#111] sm:text-xl md:text-2xl">
          Engineering and leadership run on the same discipline: define the output before you start,
          or you&apos;re not delegating, you&apos;re wishing.
        </p>
        <p>
          Every task I hand off has one owner, one output, and one deadline before it&apos;s
          assigned — no vague scope, no &ldquo;help out with X.&rdquo; When two developers joined
          for an active feature trial, they got the same standard I hold myself to: what done looks
          like in one sentence, a hard date, and a stuck-protocol — come to me after a set number of
          hours blocked, not before, not after three days of silence.
        </p>
        <p>
          I apply the same rule to the team itself, not just its tasks. A role only stays a role if
          there&apos;s a live task attached to it — not a title that sounded good when it was
          assigned. When people&apos;s real hours were going elsewhere, I resized the org chart to
          match reality instead of inflating it to look better on paper. It&apos;s a smaller
          decision than it sounds, but it&apos;s the one that makes a team easier to actually lead.
        </p>
        <p>
          I still write code deliberately, not by default — architecture decisions, hard technical
          calls, and anything blocking the whole team stay mine. Everything else belongs to
          whoever&apos;s positioned to own it. Staying in the code isn&apos;t nostalgia; it&apos;s
          how I stay sharp enough to know when a shortcut is being taken, or when something&apos;s
          harder than it&apos;s being described as.
        </p>
        <p>
          Outside engineering, I designed and run a lean operating system for the studio&apos;s
          public presence — a weekly loop that turns raw build notes into scheduled,
          platform-specific content, at near-zero cost, with no marketing hire. Same instinct as the
          delegation framework: build the system once, let it run, don&apos;t manufacture busywork
          to fill the gaps.
        </p>
      </article>
    </main>
  );
}
