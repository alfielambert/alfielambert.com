import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Alfie Lambert | Founder, Product and Growth',
  description:
    'Founder and product-growth operator building AI, data and SaaS products, GTM systems and internal tools.',
  metadataBase: new URL('https://alfielambert.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Alfie Lambert | Founder, Product and Growth',
    description:
      'Founder and product-growth operator building AI, data and SaaS products, GTM systems and internal tools.',
    url: 'https://alfielambert.com',
    siteName: 'Alfie Lambert',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://alfielambert.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alfie Lambert — Founder, Product and Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alfie Lambert | Founder, Product and Growth',
    description:
      'Founder and product-growth operator building AI, data and SaaS products, GTM systems and internal tools.',
    images: [
      {
        url: 'https://alfielambert.com/og-image.jpg',
        alt: 'Alfie Lambert — Founder, Product and Growth',
      },
    ],
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alfie Lambert',
  url: 'https://alfielambert.com',
  email: 'alfielambert@zoho.com',
  jobTitle: 'Founder and Product-Growth Leader',
  description:
    'Founder and product-growth leader with more than 12 years of experience building AI, data and SaaS products.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Cambridge',
  },
  knowsAbout: [
    'Product Strategy',
    'Go-to-Market',
    'AI Products',
    'SaaS',
    'B2B Data',
    'Fundraising',
    'Product Marketing',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
