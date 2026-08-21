import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FaChevronLeft } from 'react-icons/fa6';
import { WritingPageContent } from '@/app/Core/Strings';
import { getSortedPostsData } from '@/lib/posts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kelpyshades.com';

export const metadata: Metadata = {
  title: 'Writing — Kelvin Appiah',
  description: WritingPageContent.subtitle,
  alternates: {
    canonical: `${siteUrl}/writing`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/writing`,
    title: 'Writing — Kelvin Appiah',
    description: WritingPageContent.subtitle,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Appiah - Writing Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing — Kelvin Appiah',
    description: WritingPageContent.subtitle,
    images: ['/og-image.png'],
    creator: '@KelpyShades',
  },
};

export default function WritingIndex() {
  const sortedPosts = getSortedPostsData();

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${siteUrl}/writing#blog`,
        name: "Kelvin Appiah's Technical Essays & Writing",
        url: `${siteUrl}/writing`,
        description: WritingPageContent.subtitle,
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
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/writing#breadcrumb`,
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
            name: 'Writing',
            item: `${siteUrl}/writing`,
          },
        ],
      },
    ],
  };

  return (
    <main className="animate-fade mx-auto flex w-full max-w-225 flex-col px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Back Navigation */}
      <Link
        href="/"
        className="mb-8 inline-flex w-fit items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase transition-colors hover:text-black sm:mb-12 sm:text-xs"
      >
        <FaChevronLeft className="h-3 w-3" /> {WritingPageContent.backText}
      </Link>

      {/* Header */}
      <header className="mb-10 max-w-195 sm:mb-12">
        <span className="mb-3 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:mb-4 sm:text-xs">
          {WritingPageContent.label}
        </span>
        <h1
          className="mb-4 text-3xl font-bold tracking-tight text-[#111] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {WritingPageContent.title}
        </h1>
        <p className="text-base leading-relaxed font-light text-[#333] sm:text-lg md:text-xl lg:text-2xl">
          {WritingPageContent.subtitle}
        </p>
      </header>

      {/* Articles List */}
      <div className="flex flex-col gap-10 border-t border-[#eaeaea] pt-8 sm:gap-12 sm:pt-12">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="group flex max-w-195 flex-col gap-3">
            <div className="flex items-center gap-4 font-mono text-[10px] text-[#777] sm:text-xs">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2
              className="text-xl leading-tight font-bold text-black transition-colors group-hover:text-[#555] sm:text-2xl"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm leading-relaxed font-light text-[#444] sm:text-base">
              {post.description}
            </p>
            <Link
              href={`/writing/${post.slug}`}
              className="mt-2 w-fit border-b border-black pb-0.5 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:border-[#555] hover:text-[#555]"
            >
              {WritingPageContent.readArticleText}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
