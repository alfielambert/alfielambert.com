import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { LabelChip } from '@/components/ui/LabelChip'

export const metadata: Metadata = {
  title: 'Page Metadata Inspector | Alfie Lambert',
  description:
    'A lightweight Chrome extension that inspects the metadata shaping how a page is understood by search engines and social platforms.',
  alternates: { canonical: '/page-metadata-inspector' },
  robots: { index: true, follow: true },
}

const inspects = [
  { label: 'Page title', note: 'Present, and a reasonable length' },
  { label: 'Meta description', note: 'Present, and a reasonable length' },
  { label: 'Canonical URL', note: 'Present, and not conflicting' },
  { label: 'Robots directives', note: 'What, if anything, is set' },
  { label: 'H1 elements', note: 'How many, and what they say' },
  { label: 'Open Graph tags', note: 'title, description, image, url, type' },
  { label: 'Twitter / X card', note: 'card, title, description, image' },
  { label: 'JSON-LD structured data', note: 'Block count and detected types' },
]

export default function PageMetadataInspectorPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-t-2 border-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
            <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
              Chrome extension
            </p>

            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6 max-w-2xl">
              Page Metadata Inspector
            </h1>

            <p className="text-ink-mid text-lg leading-relaxed max-w-2xl mb-4">
              A lightweight Chrome extension that inspects the metadata shaping how a page is understood by search engines and social platforms.
            </p>

            <p className="text-ink-mid leading-relaxed max-w-2xl mb-14">
              Open it on any page to see the page title, meta description, canonical URL, robots directives, Open Graph and Twitter/X card metadata, and JSON-LD structured data in one place — with a plain-language note on anything that looks off. It checks metadata only. It doesn&rsquo;t guarantee rankings or social performance.
            </p>

            {/* What it inspects */}
            <h2 className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
              What it inspects
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-16 max-w-2xl">
              {inspects.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-yellow border border-ink flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-display font-bold text-sm">{item.label}</p>
                    <p className="text-ink-mid text-sm">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Who it's for */}
            <h2 className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-4">
              Who it&rsquo;s for
            </h2>
            <p className="text-ink-mid leading-relaxed max-w-2xl mb-16">
              Marketers, SEOs, developers, and anyone checking a page before or after it goes live — for quick QA on landing pages, articles, product pages and site updates, without digging through page source or switching between several tools.
            </p>

            {/* Screenshots */}
            <h2 className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
              Screenshots
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/3] border-2 border-ink bg-cream-dark flex items-center justify-center"
                >
                  <span className="font-mono-alt text-xs text-warm-gray uppercase tracking-widest">
                    Screenshot {n}
                  </span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-display font-bold tracking-tight border-2 border-ink/30 text-warm-gray bg-transparent cursor-default"
                aria-disabled="true"
              >
                Chrome Web Store — coming soon
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/page-metadata-inspector/support"
                className="font-mono-alt text-xs tracking-widest uppercase text-ink border-b-2 border-ink/25 hover:border-ink transition-colors pb-0.5 w-fit"
              >
                Support
              </Link>
              <Link
                href="/page-metadata-inspector/privacy"
                className="font-mono-alt text-xs tracking-widest uppercase text-ink border-b-2 border-ink/25 hover:border-ink transition-colors pb-0.5 w-fit"
              >
                Privacy
              </Link>
              <Link
                href="/"
                className="font-mono-alt text-xs tracking-widest uppercase text-ink border-b-2 border-ink/25 hover:border-ink transition-colors pb-0.5 w-fit"
              >
                alfielambert.com
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-2">
              <LabelChip>Manifest V3</LabelChip>
              <LabelChip>No account required</LabelChip>
              <LabelChip>No analytics</LabelChip>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
