import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kelpyshades.com';
const siteName = 'Kelvin Appiah';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kelvin Appiah — Software Engineer, Product Architect & Technical Lead',
    template: '%s | Kelvin Appiah',
  },
  description:
    'Self-taught Software Engineer and Technical Co-Founder & CEO at 404-Not-Null, designing and building production software end-to-end (Class-io, Groveh) from Kumasi, Ghana.',
  keywords: [
    'Kelvin Appiah',
    'Appiah Kelvin',
    'Kelpy Shades',
    'KelpyShades',
    'Kelpy Shades developer',
    'Kelpy Shades founder',
    'Kelpy Shades co-founder',
    'Kelvin Appiah founder',
    'Kelvin Appiah co-founder',
    '404-Not-Null',
    '404-Not-Null lead',
    '404-Not-Null founder',
    '404-Not-Null co-founder',
    '404-Not-Null CEO',
    'Class-io',
    'Class-io developer',
    'Class-io founder',
    'Class-io co-founder',
    'Groveh',
    'Groveh developer',
    'Groveh founder',
    'Groveh co-founder',
    'Kelvin Appiah Portfolio',
    'Kelvin Appiah Portfolio Website',
  ],
  authors: [{ name: 'Kelvin Appiah', url: siteUrl }],
  creator: 'Kelvin Appiah',
  publisher: 'Kelvin Appiah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: 'Kelvin Appiah - Software Engineer, Product Architect & Technical Lead',
    description:
      'Portfolio of Kelvin Appiah (KelpyShades) - Self-taught Software Engineer, Product Architect, and Technical Co-Founder & CEO at 404-Not-Null, leading engineering for Class-io and Groveh from Kumasi, Ghana.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Appiah - Portfolio Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvin Appiah - Software Engineer, Product Architect & Technical Lead',
    description:
      'Portfolio of Kelvin Appiah (KelpyShades) - Self-taught Software Engineer, Product Architect, and Technical Co-Founder & CEO at 404-Not-Null, leading engineering for Class-io and Groveh from Kumasi, Ghana.',
    images: ['/og-image.png'],
    creator: '@KelpyShades',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
  category: 'Portfolio',
  classification: 'Portfolio Website',
  verification: {
    google: '_Kct7l0gN35OaNwgsO17dIfL9Hrd92nof5n5BuXkWiU',
  },
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Kelvin Appiah',
        alternateName: ['Kelpy Shades', 'KelpyShades', 'Appiah Kelvin'],
        jobTitle: 'Software Engineer, Product Architect & Technical Lead',
        description:
          'Self-taught Software Engineer and Technical Co-Founder & CEO at 404-Not-Null, leading engineering and product for Class-io and Groveh from Kumasi, Ghana.',
        url: siteUrl,
        image: `${siteUrl}/profile.webp`,
        sameAs: [
          'https://github.com/KelpyShades',
          'https://www.linkedin.com/in/kelvin-appiah',
          'https://x.com/appiah_kelvin_',
          'https://404-Not-Null.vercel.app',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kumasi',
          addressRegion: 'Ashanti Region',
          addressCountry: 'GH',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'University of Energy and Natural Resources',
          alternateName: 'UENR',
        },
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://404-Not-Null.vercel.app/#organization',
          name: '404-Not-Null',
          url: 'https://404-Not-Null.vercel.app',
        },
        founder: [
          {
            '@type': 'Organization',
            name: '404-Not-Null',
            url: 'https://404-Not-Null.vercel.app',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'Class-io',
            url: 'https://classioedu.com',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'Groveh',
            url: 'https://groveh.app',
          },
        ],
        knowsAbout: [
          'Flutter',
          'Dart',
          'Next.js',
          'TypeScript',
          'React',
          'Expo',
          'Convex',
          'Supabase',
          'H3 Hexagonal Geospatial Indexing',
          'Bayesian Rating Systems',
          'Cloudflare Workers',
          'Full Stack Development',
          'Product Architecture',
          'Mobile GPS Anti-Spoofing',
          'Distributed Systems',
          'Software Engineering',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Kelvin Appiah',
        alternateName: ['Kelpy Shades', 'KelpyShades', 'Kelvin Appiah'],
        description:
          'Official portfolio of Kelvin Appiah (KelpyShades) — Software Engineer, Product Architect & Technical Lead.',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
        author: {
          '@id': `${siteUrl}/#person`,
        },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} ${jetbrainsMono.variable} ${poppins.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* NAVIGATION HEADER */}
        <header className="sticky top-0 z-50 w-full border-b border-[#eaeaea]/40 bg-[#f8f4ee]/80 backdrop-blur-md">
          <nav className="mx-auto flex w-full max-w-350 items-center justify-end px-6 py-4 md:px-12 md:py-6">
            {/* <Link href="/" className="hidden sm:flex font-bold tracking-tight text-lg" style={{ fontFamily: 'var(--font-poppins)' }}>
								Kelvin Appiah
							</Link> */}
            <div className="flex gap-6 font-mono text-xs font-bold tracking-widest text-[#555] uppercase md:gap-10">
              <Link href="/#home" className="transition-colors hover:text-black">
                Home
              </Link>
              <Link href="/work" className="transition-colors hover:text-black">
                Work
              </Link>
              <Link href="/writing" className="transition-colors hover:text-black">
                Writing
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
