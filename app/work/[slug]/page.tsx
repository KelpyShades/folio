import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaChevronLeft, FaLink } from 'react-icons/fa6';

import { getProjectData, getSortedProjectsData, type Project } from '@/lib/projects';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kelpyshades.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const projects = getSortedProjectsData();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = getSortedProjectsData();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const ogImage = `/work/${slug}/opengraph-image`;

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: {
      canonical: `${siteUrl}/work/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `${siteUrl}/work/${slug}`,
      title: project.metaTitle,
      description: project.metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.imageAlt || project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.metaTitle,
      description: project.metaDescription,
      images: [ogImage],
      creator: '@KelpyShades',
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;

  let project: Project;
  try {
    project = await getProjectData(slug);
  } catch {
    notFound();
  }

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/work/${slug}#software`,
        name: project.title,
        operatingSystem: 'Android, iOS, Web',
        applicationCategory: project.category || 'SoftwareApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: project.metaDescription,
        url: project.linkHref,
        image: `${siteUrl}/work/${slug}/opengraph-image`,
        author: {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Kelvin Appiah',
          url: siteUrl,
        },
        creator: {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Kelvin Appiah',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: '404-Not-Null',
          url: 'https://404-Not-Null.vercel.app',
        },
      },
      {
        '@type': 'TechArticle',
        '@id': `${siteUrl}/work/${slug}#case-study`,
        headline: `${project.title} — Architecture & Technical Case Study`,
        description: project.metaDescription,
        url: `${siteUrl}/work/${slug}`,
        image: `${siteUrl}/work/${slug}/opengraph-image`,
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
        about: {
          '@id': `${siteUrl}/work/${slug}#software`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/work/${slug}#breadcrumb`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `${siteUrl}/work/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="animate-fade mx-auto flex w-full max-w-240 flex-col px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <Script
        id="project-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
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
          {project.title}
        </h1>
        <p className="text-base leading-relaxed font-light text-[#333] sm:text-lg md:text-xl lg:text-2xl">
          {project.subtitle}
        </p>
      </header>

      {/* Hero Image */}
      {project.imageSrc && (
        <div className="relative mb-10 aspect-16/10 w-full overflow-hidden border border-[#eaeaea] bg-[#fafafa] shadow-sm sm:mb-12">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Metadata Info Bar */}
      <div className="mb-10 grid grid-cols-1 gap-6 border-t border-b border-[#eaeaea] py-6 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase sm:mb-12 sm:grid-cols-2 sm:text-xs md:grid-cols-3">
        <div>
          <span className="mb-1 block text-[#888]">Technologies</span>
          <span className="text-xs text-[#111] sm:text-sm">{project.technologies}</span>
        </div>
        <div>
          <span className="mb-1 block text-[#888]">Status</span>
          <span className="text-xs text-[#111] sm:text-sm">{project.status}</span>
        </div>
        <div>
          <span className="mb-1 block text-[#888]">Link</span>
          <a
            href={project.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1.5 border-b border-[#111] text-xs text-[#111] hover:text-[#555] sm:text-sm"
          >
            {project.linkText} <FaLink className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>

      {/* Content Column */}
      <article
        className="prose-editorial mx-auto flex w-full max-w-205 flex-col text-sm leading-relaxed sm:text-base md:text-lg"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </main>
  );
}
