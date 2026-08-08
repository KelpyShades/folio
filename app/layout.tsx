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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kelpyshades.com';
const siteName = 'Kelvin Appiah - Portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kelvin Appiah — Software Engineer, Product Architect & Technical Lead',
    template: '%s | Kelvin Appiah',
  },
  description:
    'Self-taught Software Engineer and Technical Co-Founder & CEO at 404notnull, designing and building production software end-to-end (Class-io, Groveh) from Kumasi, Ghana.',
  keywords: [
    'Kelvin Appiah',
    'Appiah Kelvin',
    'Kelpy Shades',
    'KelpyShades',
    'Kelpy Shades developer',
    'Kelpy Shades founder',
    'Kelvin Appiah founder',
    '404notnull',
    '404-Not-Null',
    '404-Not-Null lead',
    '404-Not-Null founder',
    'Class-io',
    'Class-io developer',
    'Class-io founder',
    'Groveh',
    'Groveh developer',
    'Groveh founder',
    'Convex',
    'Supabase',
    'H3 geospatial',
    'Bayesian rating systems',
    'Kumasi',
    'Ghana',
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
      'Portfolio of Kelvin Appiah - Self-taught Software Engineer, Product Architect, and Technical Co-Founder & CEO at 404notnull, leading engineering for Class-io and Groveh from Kumasi, Ghana.',
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
      'Portfolio of Kelvin Appiah - Self-taught Software Engineer, Product Architect, and Technical Co-Founder & CEO at 404notnull, leading engineering for Class-io and Groveh from Kumasi, Ghana.',
    images: ['/og-image.png'],
    creator: '@appiah_kelvin_',
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
        jobTitle: 'Software Engineer, Product Architect & Technical Lead',
        description:
          'Self-taught Software Engineer and Technical Co-Founder & CEO at 404notnull, leading engineering and product for Class-io and Groveh.',
        url: siteUrl,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kumasi',
          addressCountry: 'GH',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'University of Energy and Natural Resources',
        },
        knowsAbout: [
          'Flutter',
          'Next.js',
          'TypeScript',
          'React',
          'Convex',
          'Supabase',
          'H3 Hexagonal Indexing',
          'Bayesian Rating Systems',
          'Cloudflare Workers',
          'Full Stack Development',
          'Product Architecture',
        ],
        memberOf: [
          {
            '@type': 'Organization',
            name: '404notnull',
            url: 'https://404notnull.vercel.app',
          },
          {
            '@type': 'Organization',
            name: 'Class-io',
            url: 'https://classioedu.com',
          },
          {
            '@type': 'Organization',
            name: 'Groveh',
            url: 'https://groveh.app',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Kelvin Appiah',
        alternateName: 'KelpyShades',
        description:
          'Portfolio of Kelvin Appiah - Software Engineer, Product Architect & Technical Lead.',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
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
          <nav className="mx-auto flex w-full max-w-350 items-center justify-end px-6 py-6 md:px-12">
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
