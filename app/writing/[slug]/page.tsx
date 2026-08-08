import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaChevronLeft } from 'react-icons/fa6';
import { posts } from '@/lib/posts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kelpyshades.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteUrl}/writing/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `${siteUrl}/writing/${slug}`,
      title: post.title,
      description: post.description,
      images: [
        {
          url: `/writing/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/writing/${slug}/opengraph-image`],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Kelvin Appiah',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Kelvin Appiah',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/writing/${slug}`,
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
        href="/writing"
        className="mb-8 inline-flex w-fit items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase transition-colors hover:text-black sm:mb-12 sm:text-xs"
      >
        <FaChevronLeft className="h-3 w-3" /> Back to Writing
      </Link>

      {/* Header */}
      <header className="mb-10 max-w-195 sm:mb-12">
        <div className="mb-3 flex items-center gap-4 font-mono text-[10px] text-[#777] sm:mb-4 sm:text-xs">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1
          className="mb-4 text-2xl font-bold tracking-tight text-[#111] sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {post.title}
        </h1>
        <p className="text-base leading-relaxed font-light text-[#444] italic sm:text-lg md:text-xl">
          {post.description}
        </p>
      </header>

      {/* Article Content */}
      <article
        className="flex w-full max-w-195 flex-col gap-6 border-t border-[#eaeaea] pt-8 text-sm leading-relaxed font-light text-[#333] sm:pt-12 sm:text-base md:text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
