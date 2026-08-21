// LANDING PAGE CONTENT
export const HeroContent = {
  name: 'Kelvin Appiah',
  headline: {
    line1: 'I design and build',
    line2: 'production software',
    line3: 'end-to-end.',
  },
  role: 'Technical Lead & Product Architect',
  profileImage: {
    src: '/profile.webp',
    alt: 'Kelvin Appiah',
  },
  description:
    'Self-taught, based in Kumasi, Ghana, in my final year of a Computer Science degree. Currently Technical Co-Founder & CEO at 404-Not-Null, leading engineering and product for two live platforms: Class-io and Groveh.',
  links: [
    {
      label: '404-Not-Null ↗',
      href: 'https://404-Not-Null.vercel.app',
    },
    {
      label: 'Github ↗',
      href: 'https://github.com/KelpyShades',
    },
    {
      label: 'Résumé ↗',
      href: 'https://drive.google.com/file/d/1nx6WntYGxcB_fMMc1Kt2ZkTzQcbpHU2l/view?usp=sharing',
    },
  ],
};

export const AboutContent = {
  sectionTitle: 'About & Operations',
  subsections: [
    {
      title: 'Self-Taught & Technical Progression',
      paragraphs: [
        'My engineering journey is self-taught, progressing from Vanilla HTML/CSS/JS and SASS to Dart, Flutter, TypeScript, Tailwind CSS, Next.js, and Expo. I handle production software end-to-end: system architecture, implementation, and operations.',
        'I balance a full-time BSc Computer Science degree while architecting and running 404-Not-Null, keeping engineering focused on reliable execution and maintainable code.',
      ],
    },
    {
      title: '404-Not-Null & Execution',
      paragraphs: [
        'As Technical Co-Founder and CEO at 404-Not-Null, I architect the core infrastructure across our product studio and drive the engineering execution.',
        'We run on a strict, task-centric workflow: one owner, one output, one deadline. To support product launches on zero budget, I built an automated marketing engine that converts raw Git commits into scheduled social posts across platforms.',
      ],
    },
  ],
};

export const SelectedWorkContent = {
  sectionTitle: 'Selected Work',
  period: '2024 — Present',
};

export const HowIWorkContent = {
  sectionTitle: 'How I Work',
  headline:
    'I run engineering and leadership on the same rule: one owner, one output, one deadline, no exceptions.',
  description:
    'I write code deliberately. I care about shipping production software, not managing inflated roadmaps.',
  ctaText: 'Read more about how I work →',
  ctaHref: '/how-i-work',
};

export const TechnicalSkillsContent = {
  sectionTitle: 'Technical Skills',
  categories: [
    {
      title: 'Mobile & Web',
      skills: ['Flutter', 'Next.js', 'Expo', 'React'],
    },
    {
      title: 'Backend & Data',
      skills: ['Supabase', 'Convex', 'H3 (Geospatial)', 'Cloudflare (Workers, R2, Pages)'],
    },
    {
      title: 'Auth & Infra',
      skills: ['Clerk', 'Firebase'],
    },
    {
      title: 'Tooling',
      skills: ['Git', 'GitHub Actions', 'PostHog', 'Sentry'],
    },
  ],
};

export const BackgroundContent = {
  sectionTitle: 'Background',
  items: [
    {
      category: 'Education',
      title: 'BSc Computer Science',
      institution: 'University of Energy and Natural Resources',
      period: '2023 — Present',
      description:
        'BSc Computer Science, University of Energy and Natural Resources (UENR) — final year, final semester.',
    },
    {
      category: 'Mechanical Apprenticeship',
      title: 'Heavy Duty Mechanic Apprentice',
      institution: 'D & H Heavy Duty Mechanics',
      period: 'Oct 2022 — Dec 2022',
      description:
        'Maintained and inspected heavy machinery. Troubleshooting physical mechanical systems built the diagnostic discipline I apply to software debugging.',
    },
    {
      category: 'Awards & Leadership',
      title: 'Best Solar Project (1st Place)',
      institution: 'STEM Novation Competition',
      period: 'Nov 2022',
      description:
        'Served as Vice President of the Robotics Club. Built a solar tracking system with software monitoring that won 1st place nationally at the STEM Novation Competition.',
    },
  ],
};

export const FooterContent = {
  title: "Let's Build.",
  email: 'hello@kelpyshades.com',
  links: [
    {
      label: 'View Résumé ↗',
      href: 'https://drive.google.com/file/d/1nx6WntYGxcB_fMMc1Kt2ZkTzQcbpHU2l/view?usp=sharing',
      isPrimary: true,
    },
    {
      label: 'GitHub ↗',
      href: 'https://github.com/KelpyShades',
    },
    {
      label: 'LinkedIn ↗',
      href: 'https://www.linkedin.com/in/kelvin-appiah',
    },
    {
      label: 'X (Twitter) ↗',
      href: 'https://x.com/appiah_kelvin_',
    },
  ],
};

// HOW I WORK PAGE CONTENT
export const HowIWorkPageContent = {
  label: 'Operating Philosophy',
  title: 'How I Work',
  subtitle: 'How I handle engineering execution, team management, and product strategy.',
  backText: 'Back to Home',
  leadParagraph:
    'Engineering and leadership run on the same discipline: define the output before you start, or you are not delegating, you are wishing.',
  paragraphs: [
    "Execution means removing ambiguity. Every task requires one owner, one output, and one deadline. I hold myself to the exact same standard I expect from the team: define 'done' in a single sentence, and surface blockers in two hours instead of three days.",
    'Software gets complicated when you optimize for paper instead of production. I keep our engineering lean: roles and roadmaps only exist if they attach to live outputs.',
    'I still write code every day. Handling architecture and critical paths directly keeps me sharp enough to tell a real technical blocker from a lazy shortcut.',
    'Outside engineering, I built a pipeline that turns our Git commits into scheduled social posts. It runs our public distribution with zero marketing spend. Build the system once, let it run, and avoid busywork.',
  ],
};

// WRITING PAGE & ARTICLES CONTENT
export const WritingPageContent = {
  backText: 'Back to Home',
  backToWritingText: 'Back to Writing',
  label: 'Journal & Notes',
  title: 'Writing',
  subtitle: 'Technical essays, engineering deep-dives, and operational notes.',
  readArticleText: 'Read Article →',
};
