import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="animate-fade mx-auto flex w-full max-w-350 flex-col px-4 sm:px-6 md:px-12">
      {/* HERO SECTION */}
      <section className="flex min-h-screen flex-col justify-center md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="inline-flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#111]"></span>
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#111] uppercase sm:text-xs">
                Kelvin Appiah
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h1
                className="text-4xl leading-[1.1] font-bold tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                I design and build <br className="md:block" /> production software <br />{' '}
                end-to-end.
              </h1>
              <p className="font-mono text-[11px] font-bold tracking-widest text-[#555] uppercase sm:text-xs">
                Technical Lead & Product Architect
              </p>
            </div>

            {/* Profile pic on mobile */}
            <div className="block h-36 w-36 overflow-hidden rounded-full border border-[#eaeaea] shadow-sm sm:h-52 sm:w-52 lg:hidden">
              <Image
                src="/profile.webp"
                alt="Kelvin Appiah"
                width={224}
                height={224}
                className="h-full w-full object-cover"
                priority
                quality={95}
              />
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-[#333] sm:text-lg md:text-xl">
              Self-taught, based in Kumasi, Ghana, in my final year of a Computer Science degree.
              Currently Technical Co-Founder & CEO at 404notnull, where I lead engineering and
              product for two live platforms: Class-io and Groveh.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] font-bold tracking-widest uppercase sm:text-xs">
              <a
                href="https://404notnull.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#111] pb-0.5 text-[#111] transition-colors hover:text-[#555]"
              >
                404-Not-Null ↗
              </a>
              <a
                href="https://github.com/KelpyShades"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#111] pb-0.5 text-[#111] transition-colors hover:text-[#555]"
              >
                Code ↗
              </a>
              <a
                href="https://drive.google.com/file/d/1HmVl0Wt-WZHJLEKLd71haERPp7bg7xMf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#111] pb-0.5 text-[#111] transition-colors hover:text-[#555]"
              >
                CV ↗
              </a>
            </div>
          </div>

          {/* Profile pic on desktop only */}
          <div className="hidden h-80 w-80 justify-self-end overflow-hidden rounded-full border border-[#eaeaea] shadow-md lg:block xl:h-96 xl:w-96">
            <Image
              src="/profile.webp"
              alt="Kelvin Appiah"
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
            About & Operations
          </h2>
        </div>

        <div className="flex max-w-3xl flex-1 flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h3
              className="text-xl font-bold text-[#111] sm:text-2xl"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Self-Taught & Creative Roots
            </h3>
            <p className="text-sm leading-relaxed text-[#444] sm:text-base md:text-lg">
              My engineering journey is self-taught. I began writing custom utilities in VB.NET and
              C# in high school, eventually scaling up to build full-stack web architectures and
              cross-platform mobile apps.
            </p>
            <p className="text-sm leading-relaxed text-[#444] sm:text-base md:text-lg">
              Alongside engineering, I am a realistic pencil sketch artist. The discipline of
              sketching—focusing on spatial hierarchy, detail limits, and composition—carries
              directly into my design philosophy, driving my focus on clean, high-performance, and
              minimalist UI layouts.
            </p>
          </div>

          <div className="flex flex-col gap-6 border-t border-[#eaeaea]/60 pt-10">
            <h3
              className="text-xl font-bold text-[#111] sm:text-2xl"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              404notnull & Team Execution
            </h3>
            <p className="text-sm leading-relaxed text-[#444] sm:text-base md:text-lg">
              As the Technical Co-Founder and Executive Lead at 404notnull, I direct an 8-person
              multidisciplinary student team (comprising developers, designers, and marketers) to
              build high-impact platforms. My focus is on shipping robust, production-ready software
              systems with a highly focused team.
            </p>
            <p className="text-sm leading-relaxed text-[#444] sm:text-base md:text-lg">
              By maintaining a &ldquo;Task-Centric&rdquo; workflow—where one owner executes one
              output by one deadline—we avoid bureaucratic bloat. I personally author over 90% of
              our core codebases cross-product, aligning engineering output with product strategy.
              To support our launch cycles, I built and deployed a custom &ldquo;Lean AI Marketing
              Engine&rdquo; that automatically processes raw Git commits into multi-platform
              scheduled social distribution on zero budget.
            </p>
          </div>
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
            Selected Work
          </h2>
          <p className="mt-4 font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:text-xs">
            2024 — Present
          </p>
        </div>

        <div className="grid max-w-5xl flex-1 grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
          {/* Class-io Card (YouTube Style) */}
          <div className="group flex flex-col gap-4 sm:gap-6">
            <div className="relative aspect-16/10 w-full overflow-hidden border border-[#eaeaea] bg-[#fafafa] shadow-sm transition-shadow hover:shadow-md">
              <Image
                src="https://classioedu.com/og-image.png"
                alt="Class-io preview"
                width={800}
                height={500}
                className="h-full w-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] font-bold tracking-widest text-[#777] uppercase sm:text-[10px]">
                EdTech • Mobile & Web
              </span>
              <h3
                className="text-xl font-bold text-[#111] sm:text-2xl"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Class-io
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-[#555] sm:text-base">
                Attendance verification that can&apos;t be spoofed. GPS-locked, QR-rotated, live in
                production with 1,500+ users.
              </p>
              <Link
                href="/work/class-io"
                className="mt-2 w-fit border-b border-black pb-0.5 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:border-[#555] hover:text-[#555]"
              >
                Read case study →
              </Link>
            </div>
          </div>

          {/* Groveh Card (YouTube Style) */}
          <div className="group flex flex-col gap-4 sm:gap-6">
            <div className="relative aspect-16/10 w-full overflow-hidden border border-[#eaeaea] bg-[#fafafa] shadow-sm transition-shadow hover:shadow-md">
              <Image
                src="https://groveh.app/og-image.png"
                alt="Groveh preview"
                width={800}
                height={500}
                className="h-full w-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] font-bold tracking-widest text-[#777] uppercase sm:text-[10px]">
                Marketplace • Web & Mobile
              </span>
              <h3
                className="text-xl font-bold text-[#111] sm:text-2xl"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Groveh
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-[#555] sm:text-base">
                Discovery-first commerce for vendors, with a feed built to rank on quality, not just
                recency. MVP shipped, vendor onboarding live.
              </p>
              <Link
                href="/work/groveh"
                className="mt-2 w-fit border-b border-black pb-0.5 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:border-[#555] hover:text-[#555]"
              >
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="flex flex-col gap-10 border-t border-[#eaeaea] py-16 md:py-24 lg:flex-row lg:gap-32 lg:py-32">
        <div className="w-full shrink-0 lg:w-75">
          <h2
            className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            How I Work
          </h2>
        </div>

        <div className="flex max-w-2xl flex-1 flex-col gap-6">
          <h3
            className="text-lg leading-relaxed font-bold text-[#111] sm:text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            I run engineering and leadership on the same rule: one owner, one output, one deadline,
            no exceptions — including for myself.
          </h3>
          <p className="text-sm leading-relaxed text-[#444] sm:text-base md:text-lg">
            I write code deliberately, not by default, and I&apos;d rather resize a team to match
            reality than inflate it to look better on paper.
          </p>
          <Link
            href="/how-i-work"
            className="mt-2 w-fit border-b border-black pb-0.5 font-mono text-xs font-bold tracking-widest text-[#111] uppercase transition-colors hover:border-[#555] hover:text-[#555]"
          >
            Read more about how I work →
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
            Technical Skills
          </h2>
        </div>

        <div className="grid max-w-4xl flex-1 grid-cols-2 gap-px border border-[#eaeaea] bg-[#eaeaea] md:grid-cols-4">
          <div className="flex flex-col justify-start bg-[#f8f4ee] p-5 sm:p-6 md:p-8">
            <span className="mb-4 font-mono text-[10px] font-bold text-[#777] uppercase sm:text-xs">
              Mobile & Web
            </span>
            <div className="flex flex-col gap-1.5 text-xs font-medium text-[#555] sm:text-sm">
              <span>Flutter</span>
              <span>Next.js</span>
              <span>Expo</span>
              <span>React</span>
            </div>
          </div>
          <div className="flex flex-col justify-start bg-[#f8f4ee] p-5 sm:p-6 md:p-8">
            <span className="mb-4 font-mono text-[10px] font-bold text-[#777] uppercase sm:text-xs">
              Backend & Data
            </span>
            <div className="flex flex-col gap-1.5 text-xs font-medium text-[#555] sm:text-sm">
              <span>Supabase</span>
              <span>Convex</span>
              <span>H3 (Geospatial)</span>
              <span>Cloudflare (Workers, R2, Pages)</span>
            </div>
          </div>
          <div className="flex flex-col justify-start bg-[#f8f4ee] p-5 sm:p-6 md:p-8">
            <span className="mb-4 font-mono text-[10px] font-bold text-[#777] uppercase sm:text-xs">
              Auth & Infra
            </span>
            <div className="flex flex-col gap-1.5 text-xs font-medium text-[#555] sm:text-sm">
              <span>Clerk</span>
              <span>Firebase</span>
            </div>
          </div>
          <div className="flex flex-col justify-start bg-[#f8f4ee] p-5 sm:p-6 md:p-8">
            <span className="mb-4 font-mono text-[10px] font-bold text-[#777] uppercase sm:text-xs">
              Tooling
            </span>
            <div className="flex flex-col gap-1.5 text-xs font-medium text-[#555] sm:text-sm">
              <span>Git</span>
              <span>GitHub Actions</span>
              <span>PostHog</span>
              <span>Sentry</span>
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="flex flex-col gap-10 border-t border-[#eaeaea] py-16 md:py-24 lg:flex-row lg:gap-32 lg:py-32">
        <div className="w-full shrink-0 lg:w-75">
          <h2
            className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Background
          </h2>
        </div>

        <div className="max-w-5xl flex-1">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="mb-1 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:text-xs">
                Education
              </span>
              <h4
                className="text-base font-bold uppercase sm:text-lg"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                BSc Computer Science
              </h4>
              <p className="text-xs text-[#555] sm:text-sm">
                University of Energy and Natural Resources
              </p>
              <p className="font-mono text-[10px] text-[#888] sm:text-xs">2023 — Present</p>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#555] sm:text-sm">
                BSc Computer Science, University of Energy and Natural Resources (UENR) — final
                year, final semester.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="mb-1 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:text-xs">
                Mechanical Apprenticeship
              </span>
              <h4
                className="text-base font-bold uppercase sm:text-lg"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Heavy Duty Mechanic Apprentice
              </h4>
              <p className="text-xs text-[#555] sm:text-sm">D & H Heavy Duty Mechanics</p>
              <p className="font-mono text-[10px] text-[#888] sm:text-xs">Oct 2022 — Dec 2022</p>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#555] sm:text-sm">
                Performed routine maintenance and inspections on heavy machinery. Developed physical
                systems troubleshooting skills and a hands-on mechanical diagnostic mindset that
                directly supports hardware and software systems debugging.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="mb-1 block font-mono text-[10px] font-bold tracking-widest text-[#777] uppercase sm:text-xs">
                Awards & Leadership
              </span>
              <h4
                className="text-base font-bold uppercase sm:text-lg"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Best Solar Project (1st Place)
              </h4>
              <p className="text-xs text-[#555] sm:text-sm">STEM Novation Competition</p>
              <p className="font-mono text-[10px] text-[#888] sm:text-xs">Nov 2022</p>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#555] sm:text-sm">
                Served as Prefect and Vice President of the Robotics Club. Architected a solar
                tracking system with custom software monitoring, awarded 1st place nationally for
                execution and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-start justify-between gap-12 border-t border-[#eaeaea] py-16 md:flex-row md:items-end md:gap-16 md:py-24 lg:py-32">
        <div className="flex flex-col gap-4">
          <h2
            className="mb-4 text-4xl leading-none font-bold tracking-tight text-black sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Let&apos;s Build.
          </h2>
          <a
            href="mailto:appiahkelvin060904@gmail.com"
            className="w-fit border-b-2 border-black pb-1 text-lg font-bold text-black transition-colors hover:border-[#555] hover:text-[#555] sm:text-xl"
          >
            appiahkelvin060904@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-3 font-mono text-[10px] font-bold tracking-widest text-[#555] uppercase sm:text-xs">
          <a
            href="https://drive.google.com/file/d/1HmVl0Wt-WZHJLEKLd71haERPp7bg7xMf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 w-fit border-b border-transparent pb-0.5 text-black transition-colors hover:border-black hover:text-black"
          >
            View CV ↓
          </a>
          <a
            href="https://github.com/KelpyShades"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-black"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/kelvin-appiah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-black"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://x.com/KelpyShades"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-black"
          >
            X (Twitter) ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
