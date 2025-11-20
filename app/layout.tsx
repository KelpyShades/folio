import type { Metadata } from 'next';
import { Geist_Mono, Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://info-appiahkelvin.vercel.app';
const siteName = 'Kelvin Appiah - Portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kelvin Appiah - Full Stack Developer & Founder',
    template: '%s | Kelvin Appiah',
  },
  description:
    'Portfolio of Kelvin Appiah - Self-taught full-stack software developer and founder of 404-Not-Null. Specializing in Flutter and Next.js development. Based in Kumasi, Ghana.',
  keywords: [
    'Kelvin Appiah',
    'Appiah Kelvin',
    'Software Developer',
    'Full Stack Developer',
    'Flutter Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Cross-platform Developer',
    'Web Developer',
    'Mobile App Developer',
    'Portfolio',
    '404-Not-Null',
    'Class-io',
    'Kelvin',
    'Appiah',
    'Kelvin Appiah Portfolio',
    'Kelvin Appiah Portfolio Website',
    'Kumasi',
    'Ghana',
    'React Developer',
    'PostgreSQL',
    'Tailwind CSS',
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
    title: 'Kelvin Appiah - Full Stack Developer & Founder',
    description:
      'Portfolio of Kelvin Appiah - Self-taught full-stack software developer and founder of 404-Not-Null. Specializing in Flutter and Next.js development. Based in Kumasi, Ghana.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Appiah - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvin Appiah - Full Stack Developer & Founder',
    description:
      'Portfolio of Kelvin Appiah - Self-taught full-stack software developer and founder of 404-Not-Null. Specializing in Flutter and Next.js development. Based in Kumasi, Ghana.',
    images: ['/og-image.png'],
    creator: '@appiah_kelvin_', // Update with actual Twitter handle
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
    google: 'IGUT4lBwVA2sqAOcfbee0H7agfY-ItUwAUiqc3BJNyU',
  },
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark light',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kelvin Appiah',
    jobTitle: 'Full Stack Developer & Founder',
    description:
      'Self-taught cross-platform software developer specializing in Flutter and Next.js.',
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
      'PostgreSQL',
      'Tailwind CSS',
      'Full Stack Development',
      'Cross-platform Development',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: '404-Not-Null',
        url: 'https://404notnull.vercel.app',
      },
      {
        '@type': 'Organization',
        name: 'Class-io',
        url: 'https://class-io.vercel.app',
      },
    ],
  };

  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${poppins.variable} ${poppins.className} ${geistMono.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
