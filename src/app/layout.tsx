import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { meta, personId } from '@/lib/content'

const dejaVu = localFont({
  src: [
    { path: '../fonts/DejaVuSerif.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/DejaVuSerif-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/DejaVuSerifCondensed-Bold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})

const TITLE = 'Alfie Lambert | AI Transformation, Product & GTM'
const DESCRIPTION =
  'Alfie Lambert helps organisations turn AI from experiments into working systems, across AI transformation, AI agents, workflow redesign, company knowledge, product strategy and company building.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://alfielambert.com'),
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': 'https://alfielambert.com/feed.xml' },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://alfielambert.com',
    siteName: 'Alfie Lambert',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://alfielambert.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alfie Lambert · AI Transformation, Product & GTM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: 'https://alfielambert.com/og-image.jpg',
        alt: 'Alfie Lambert · AI Transformation, Product & GTM',
      },
    ],
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: 'Alfie Lambert',
  url: 'https://alfielambert.com',
  image: 'https://alfielambert.com/headshots/hero.jpg',
  jobTitle: 'AI Transformation, Product and GTM Leader',
  description:
    'AI transformation, product and GTM leader with more than 12 years building technology companies, working across AI products, agents, company knowledge and workflow redesign.',
  worksFor: {
    '@type': 'Organization',
    name: 'Oiya',
    url: 'https://oiya.ai',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Cambridge',
  },
  sameAs: [meta.githubUrl, 'https://x.com/AlfieOiya'],
  knowsAbout: [
    'AI Transformation',
    'AI Agents',
    'Agentic Systems',
    'Workflow Design',
    'Organisational Knowledge',
    'AI Product Strategy',
    'Product Strategy',
    'Go-to-Market',
    'B2B Data',
    'Early-stage Company Building',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${dejaVu.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
