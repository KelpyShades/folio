import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FaChevronLeft } from 'react-icons/fa6';
import { HowIWorkPageContent } from '@/app/Core/Strings';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kelpyshades.com';

export const metadata: Metadata = {
  title: 'How I Work — Kelvin Appiah',
  description: HowIWorkPageContent.leadParagraph,
  alternates: {
    canonical: `${siteUrl}/how-i-work`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/how-i-work`,
    title: 'How I Work — Kelvin Appiah',
    description: HowIWorkPageContent.leadParagraph,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How Kelvin Appiah Works — Operating Philosophy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Work — Kelvin Appiah',
    description: HowIWorkPageContent.leadParagraph,
    images: ['/og-image.png'],
    creator: '@KelpyShades',
  },
};

export default function HowIWork() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${siteUrl}/how-i-work#article`,
        headline: 'How I Work — Engineering & Operational Philosophy',
        description: HowIWorkPageContent.leadParagraph,
        image: `${siteUrl}/og-image.png`,
        author: {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Kelvin Appiah',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Kelvin Appiah',
          url: siteUrl,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteUrl}/how-i-work`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/how-i-work#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'How I Work',
            item: `${siteUrl}/how-i-work`,
          },
        ],
      },
    ],
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
        <FaChevronLeft className="h-3 w-3" /> {HowIWorkPageContent.backText}
      </Link>

      {/* Header */}
      <header className="mb-10 max-w-195 sm:mb-12">
        <span className="mb-3 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:mb-4 sm:text-xs">
          {HowIWorkPageContent.label}
        </span>
        <h1
          className="mb-4 text-3xl font-bold tracking-tight text-[#111] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {HowIWorkPageContent.title}
        </h1>
        <p className="text-base leading-relaxed font-light text-[#333] sm:text-lg md:text-xl lg:text-2xl">
          {HowIWorkPageContent.subtitle}
        </p>
      </header>

      {/* Content Column */}
      <article className="flex w-full max-w-195 flex-col gap-6 border-t border-[#eaeaea] pt-8 text-sm leading-relaxed text-[#333] sm:gap-8 sm:pt-12 sm:text-base md:text-lg">
        <p className="text-lg leading-relaxed font-semibold text-[#111] sm:text-xl md:text-2xl">
          {HowIWorkPageContent.leadParagraph}
        </p>
        {HowIWorkPageContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
