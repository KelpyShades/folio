import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaChevronLeft, FaLink } from 'react-icons/fa6';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kelpyshades.com';

export const metadata: Metadata = {
  title: 'Class-io — Attendance Verification for Universities',
  description:
    'A GPS-locked, QR-rotated attendance system built to survive the ways students actually try to beat attendance software.',
  alternates: {
    canonical: `${siteUrl}/work/class-io`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/work/class-io`,
    title: 'Class-io — Attendance Verification for Universities',
    description:
      'A GPS-locked, QR-rotated attendance system built to survive the ways students actually try to beat attendance software.',
    images: [
      {
        url: 'https://classioedu.com/og-image.png',
        width: 1200,
        height: 750,
        alt: 'Class-io Case Study Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Class-io — Attendance Verification for Universities',
    description:
      'A GPS-locked, QR-rotated attendance system built to survive the ways students actually try to beat attendance software.',
    images: ['https://classioedu.com/og-image.png'],
  },
};

export default function ClassIoCaseStudy() {
  const classIoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Class-io',
    operatingSystem: 'Android, iOS, Web',
    applicationCategory: 'EducationalApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'A GPS-locked, QR-rotated attendance system built to survive the ways students actually try to beat attendance software.',
    url: 'https://classioedu.com',
    publisher: {
      '@type': 'Organization',
      name: '404notnull',
      url: 'https://404notnull.vercel.app',
    },
  };

  return (
    <main className="animate-fade mx-auto flex w-full max-w-240 flex-col px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <Script
        id="class-io-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(classIoJsonLd) }}
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
          Class-io
        </h1>
        <p className="text-base leading-relaxed font-light text-[#333] sm:text-lg md:text-xl lg:text-2xl">
          A GPS-locked, QR-rotated attendance system built to survive the ways students actually try
          to beat attendance software — and it&apos;s been used enough to prove it works.
        </p>
      </header>

      {/* Hero Image */}
      <div className="relative mb-10 aspect-16/10 w-full overflow-hidden border border-[#eaeaea] bg-[#fafafa] shadow-sm sm:mb-12">
        <Image
          src="https://classioedu.com/og-image.png"
          alt="Class-io UI Showcase"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Metadata Info Bar */}
      <div className="mb-10 grid grid-cols-1 gap-6 border-t border-b border-[#eaeaea] py-6 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase sm:mb-12 sm:grid-cols-2 sm:text-xs md:grid-cols-3">
        <div>
          <span className="mb-1 block text-[#888]">Technologies</span>
          <span className="text-xs text-[#111] sm:text-sm">Flutter · Supabase · Cloudflare</span>
        </div>
        <div>
          <span className="mb-1 block text-[#888]">Status</span>
          <span className="text-xs text-[#111] sm:text-sm">1,500+ Users Live</span>
        </div>
        <div>
          <span className="mb-1 block text-[#888]">Link</span>
          <a
            href="https://classioedu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1.5 border-b border-[#111] text-xs text-[#111] hover:text-[#555] sm:text-sm"
          >
            classioedu.com <FaLink className="h-2.5 w-2.5" />
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
            University attendance still runs on paper sign-in sheets, buddy check-ins, or basic
            QR/check-in apps that don&apos;t hold up under scrutiny. A friend signs in for someone
            running late. A QR code gets screenshotted and passed around a group chat. A location
            field gets spoofed. None of it gives a lecturer a record they can actually trust, and
            reconciling any of it by hand afterward is its own tax on their time.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            How It Works
          </h2>
          <p>
            Class-io verifies attendance on two layers that both have to check out before a sign-in
            counts.
          </p>
          <p>
            Location is confirmed through GPS-locked tracking that takes multiple coordinate samples
            and averages them, filtering out the crude spoofing attempts a single fake reading would
            let through. On top of that, the QR code itself isn&apos;t static — it rotates on a
            timer, and each code carries a time-decaying encrypted token, so a code that&apos;s
            copied or screenshotted goes dead within minutes, long before it could circulate.
          </p>
          <p>
            The system runs as two coordinated applications — one for lecturers, one for students —
            rather than one app trying to do both jobs. Lecturers get a live dashboard that updates
            as students check in during the session itself, not a report generated afterward.
            Offline sync means the app keeps working when campus wifi drops, syncing check-ins once
            connectivity returns instead of losing them.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            Integrity Safeguards
          </h2>
          <p>
            Anti-screenshot safeguards on the display layer and session-level controls close off the
            easy workarounds that make most attendance apps trivial to game.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            Admin & Reporting
          </h2>
          <p>
            What used to be a manual reconciliation job — cross-checking a paper sheet against a
            roster — is now a one-click export. Lecturers and administrators pull CSV or PDF
            attendance records straight from the dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-lg font-bold tracking-wider text-black uppercase sm:text-xl">
            Where It Stands
          </h2>
          <p>
            Live in production, with 1,500+ active students and 4 lecturers using it across their
            courses. Demoed directly to department leadership, with strong reception — an actual
            working system evaluated by the people who&apos;d have to trust it, not a pitch.
          </p>
        </div>
      </article>
    </main>
  );
}
