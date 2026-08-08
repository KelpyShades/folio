import Image from 'next/image';
import Link from 'next/link';
import {
  AboutContent,
  BackgroundContent,
  FooterContent,
  HeroContent,
  HowIWorkContent,
  SelectedWorkContent,
  TechnicalSkillsContent,
  WritingPageContent,
} from '@/app/Core/Strings';
import { getSortedPostsData } from '@/lib/posts';
import { getSortedProjectsData } from '@/lib/projects';

export default async function Home() {
  const posts = getSortedPostsData();
  const projects = getSortedProjectsData();
  const recentPosts = posts.slice(0, 2);
  const recentProjects = projects.slice(0, 2);
  const hasMorePosts = posts.length > 2;
  const hasMoreProjects = projects.length > 2;

  return (
    <main className="animate-fade mx-auto flex w-full max-w-350 flex-col px-4 sm:px-6 md:px-12">
      {/* HERO SECTION */}
      <section id="home" className="flex min-h-screen flex-col justify-center md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="inline-flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#111]"></span>
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#111] uppercase sm:text-xs">
                {HeroContent.name}
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h1
                className="text-4xl leading-[1.1] font-bold tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {HeroContent.headline.line1} <br className="md:block" />{' '}
                {HeroContent.headline.line2} <br /> {HeroContent.headline.line3}
              </h1>
              <p className="font-mono text-[11px] font-bold tracking-widest text-[#555] uppercase sm:text-xs">
                {HeroContent.role}
              </p>
            </div>

            {/* Profile pic on mobile */}
            <div className="block h-36 w-36 overflow-hidden rounded-full border border-[#eaeaea] shadow-sm sm:h-52 sm:w-52 lg:hidden">
              <Image
                src={HeroContent.profileImage.src}
                alt={HeroContent.profileImage.alt}
                width={224}
                height={224}
                className="h-full w-full object-cover"
                priority
                quality={95}
              />
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-[#333] sm:text-lg md:text-xl">
              {HeroContent.description}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] font-bold tracking-widest uppercase sm:text-xs">
              {HeroContent.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[#111] pb-0.5 text-[#111] transition-colors hover:text-[#555]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Profile pic on desktop only */}
          <div className="hidden h-80 w-80 justify-self-end overflow-hidden rounded-full border border-[#eaeaea] shadow-md lg:block xl:h-96 xl:w-96">
            <Image
              src={HeroContent.profileImage.src}
              alt={HeroContent.profileImage.alt}
              width={768}
              height={768}
              className="h-full w-full object-cover"
              priority
              quality={95}
            />
          </div>
        </div>
      </section>

      {/* ABOUT & OPERATIONS */}
      <section
        id="about"
        className="flex flex-col gap-10 border-t border-[#eaeaea] py-16 md:py-24 lg:flex-row lg:gap-32 lg:py-32"
      >
        <div className="w-full shrink-0 lg:w-75">
          <h2
            className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {AboutContent.sectionTitle}
          </h2>
        </div>

        <div className="flex max-w-3xl flex-1 flex-col gap-10">
          {AboutContent.subsections.map((section, idx) => (
            <div
              key={section.title}
              className={`flex flex-col gap-6 ${idx > 0 ? 'border-t border-[#eaeaea]/60 pt-10' : ''}`}
            >
              <h3
                className="text-xl font-bold text-[#111] sm:text-2xl"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {section.title}
              </h3>
              {section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm leading-relaxed text-[#444] sm:text-base md:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="flex flex-col gap-10 border-t border-[#eaeaea] py-16 md:py-24 lg:flex-row lg:gap-32 lg:py-32"
      >
        <div className="w-full shrink-0 lg:w-75">
          <h2
            className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {SelectedWorkContent.sectionTitle}
          </h2>
          <p className="mt-4 font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:text-xs">
            {SelectedWorkContent.period}
          </p>
        </div>

        <div className="flex max-w-5xl flex-1 flex-col gap-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
            {recentProjects.map((project) => (
              <div key={project.slug} className="group flex flex-col gap-4 sm:gap-6">
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
                  <h3
                    className="text-xl font-bold text-[#111] sm:text-2xl"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {project.title}
                  </h3>
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
              </div>
            ))}
          </div>

          {hasMoreProjects && (
            <div className="mt-4 border-t border-[#eaeaea]/60 pt-8">
              <Link
                href="/work"
                className="inline-flex w-fit items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:text-[#555] sm:text-sm"
              >
                View all work &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="flex flex-col gap-10 border-t border-[#eaeaea] py-16 md:py-24 lg:flex-row lg:gap-32 lg:py-32">
        <div className="w-full shrink-0 lg:w-75">
          <h2
            className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {HowIWorkContent.sectionTitle}
          </h2>
        </div>

        <div className="flex max-w-2xl flex-1 flex-col gap-6">
          <h3
            className="text-lg leading-relaxed font-bold text-[#111] sm:text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {HowIWorkContent.headline}
          </h3>
          <p className="text-sm leading-relaxed text-[#444] sm:text-base md:text-lg">
            {HowIWorkContent.description}
          </p>
          <Link
            href={HowIWorkContent.ctaHref}
            className="mt-2 w-fit border-b border-black pb-0.5 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:border-[#555] hover:text-[#555]"
          >
            {HowIWorkContent.ctaText}
          </Link>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="flex flex-col gap-10 border-t border-[#eaeaea] py-16 md:py-24 lg:flex-row lg:gap-32 lg:py-32">
        <div className="w-full shrink-0 lg:w-75">
          <h2
            className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {TechnicalSkillsContent.sectionTitle}
          </h2>
        </div>

        <div className="grid max-w-4xl flex-1 grid-cols-2 gap-px border border-[#eaeaea] bg-[#eaeaea] md:grid-cols-4">
          {TechnicalSkillsContent.categories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col justify-start bg-[#f8f4ee] p-5 sm:p-6 md:p-8"
            >
              <span className="mb-4 font-mono text-[10px] font-bold text-[#777] uppercase sm:text-xs">
                {category.title}
              </span>
              <div className="flex flex-col gap-1.5 text-xs font-medium text-[#555] sm:text-sm">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="flex flex-col gap-10 border-t border-[#eaeaea] py-16 md:py-24 lg:flex-row lg:gap-32 lg:py-32">
        <div className="w-full shrink-0 lg:w-75">
          <h2
            className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {BackgroundContent.sectionTitle}
          </h2>
        </div>

        <div className="max-w-5xl flex-1">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {BackgroundContent.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <span className="mb-1 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:text-xs">
                  {item.category}
                </span>
                <h4
                  className="text-base font-bold uppercase sm:text-lg"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-[#555] sm:text-sm">{item.institution}</p>
                <p className="font-mono text-[10px] text-[#888] sm:text-xs">{item.period}</p>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#555] sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section className="flex flex-col gap-10 border-t border-[#eaeaea] py-16 md:py-24 lg:flex-row lg:gap-32 lg:py-32">
        <div className="w-full shrink-0 lg:w-75">
          <h2
            className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {WritingPageContent.title}
          </h2>
        </div>

        <div className="flex max-w-3xl flex-1 flex-col gap-12">
          {recentPosts.map((post, idx) => (
            <div
              key={post.slug}
              className={`group flex flex-col gap-4 ${idx > 0 ? 'border-t border-[#eaeaea]/60 pt-12' : ''}`}
            >
              <div className="flex items-center gap-3 font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:text-xs">
                <span>{post.date}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <h3
                className="text-xl font-bold text-[#111] transition-colors group-hover:text-[#555] sm:text-2xl"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm leading-relaxed text-[#444] sm:text-base md:text-lg">
                {post.description}
              </p>
              <Link
                href={`/writing/${post.slug}`}
                className="mt-2 w-fit border-b border-black pb-0.5 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:border-[#555] hover:text-[#555]"
              >
                {WritingPageContent.readArticleText}
              </Link>
            </div>
          ))}

          {hasMorePosts && (
            <div className="mt-4 border-t border-[#eaeaea]/60 pt-8">
              <Link
                href="/writing"
                className="inline-flex w-fit items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:text-[#555] sm:text-sm"
              >
                View all writing &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-start justify-between gap-12 border-t border-[#eaeaea] py-16 md:flex-row md:items-end md:gap-16 md:py-24 lg:py-32">
        <div className="flex flex-col gap-4">
          <h2
            className="mb-4 text-4xl leading-none font-bold tracking-tight text-black sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {FooterContent.title}
          </h2>
          <a
            href={`mailto:${FooterContent.email}`}
            className="w-fit border-b-2 border-black pb-1 text-lg font-bold text-black transition-colors hover:border-[#555] hover:text-[#555] sm:text-xl"
          >
            {FooterContent.email}
          </a>
        </div>
        <div className="flex flex-col gap-3 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase sm:text-xs">
          {FooterContent.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.isPrimary
                  ? 'mb-3 w-fit border-b border-transparent pb-0.5 text-black transition-colors hover:border-black hover:text-black'
                  : 'w-fit transition-colors hover:text-black'
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
