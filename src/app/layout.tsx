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

const TITLE = 'Alfie Lambert | Co-founder of Oiya · AI, Product & GTM'
const DESCRIPTION =
  'Co-founder of Oiya, the governed knowledge layer for AI agents. Previously co-founded Lix and BizCrunch, selling B2B data to Gartner, Netflix and others.'

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
        alt: 'Alfie Lambert, co-founder of Oiya',
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
        alt: 'Alfie Lambert, co-founder of Oiya',
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
  jobTitle: 'Co-founder, Oiya',
  description:
    'Co-founder of Oiya, the governed knowledge layer for AI agents, where he leads go-to-market, positioning and partnerships. Previously co-founded Lix and BizCrunch.',
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
    'AI Agents',
    'Agent Knowledge Infrastructure',
    'Machine Learning',
    'Product Strategy',
    'Go-to-Market',
    'Enterprise Sales',
    'B2B Data',
    'Startup Fundraising',
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
