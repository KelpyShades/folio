import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaChevronLeft } from 'react-icons/fa6';
import { getSortedProjectsData } from '@/lib/projects';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kelpyshades.com';

export const metadata: Metadata = {
  title: 'Work — Kelvin Appiah',
  description: 'Selected case studies and production software built by Kelvin Appiah.',
  alternates: {
    canonical: `${siteUrl}/work`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/work`,
    title: 'Work — Kelvin Appiah',
    description: 'Selected case studies and production software built by Kelvin Appiah.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Appiah - Selected Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work — Kelvin Appiah',
    description: 'Selected case studies and production software built by Kelvin Appiah.',
    images: ['/og-image.png'],
    creator: '@KelpyShades',
  },
};

export default function WorkIndex() {
  const projects = getSortedProjectsData();

  const workJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/work#page`,
        name: "Kelvin Appiah's Work & Engineering Case Studies",
        url: `${siteUrl}/work`,
        description: 'Selected case studies and production software built by Kelvin Appiah (KelpyShades).',
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
        '@id': `${siteUrl}/work#breadcrumb`,
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
            name: 'Work',
            item: `${siteUrl}/work`,
          },
        ],
      },
    ],
  };

  return (
    <main className="animate-fade mx-auto flex w-full max-w-350 flex-col px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <Script
        id="work-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workJsonLd) }}
      />

      {/* Back Navigation */}
      <Link
        href="/"
        className="mb-8 inline-flex w-fit items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase transition-colors hover:text-black sm:mb-12 sm:text-xs"
      >
        <FaChevronLeft className="h-3 w-3" /> Back to Home
      </Link>

      {/* Header */}
      <header className="mb-12 max-w-225">
        <span className="mb-3 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:mb-4 sm:text-xs">
          Portfolio & Case Studies
        </span>
        <h1
          className="mb-4 text-3xl font-bold tracking-tight text-[#111] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Selected Work
        </h1>
        <p className="text-base leading-relaxed font-light text-[#333] sm:text-lg md:text-xl lg:text-2xl">
          Production software, platforms, and technical case studies built end-to-end.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-12 border-t border-[#eaeaea] pt-12 md:grid-cols-2 lg:gap-16">
        {projects.map((project) => (
          <article key={project.slug} className="group flex flex-col gap-4 sm:gap-6">
            <div className="relative aspect-16/10 w-full overflow-hidden border border-[#eaeaea] bg-[#fafafa] shadow-sm transition-shadow hover:shadow-md">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt || project.title}
                width={800}
                height={500}
                className="h-full w-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] font-bold tracking-widest text-[#777] uppercase sm:text-[10px]">
                {project.category}
              </span>
              <h2
                className="text-xl font-bold text-[#111] sm:text-2xl"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                <Link href={`/work/${project.slug}`}>{project.title}</Link>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-[#555] sm:text-base">
                {project.subtitle}
              </p>
              <Link
                href={`/work/${project.slug}`}
                className="mt-2 w-fit border-b border-black pb-0.5 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:border-[#555] hover:text-[#555]"
              >
                Read case study &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
