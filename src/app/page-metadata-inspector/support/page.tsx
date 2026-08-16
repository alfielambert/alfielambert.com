import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Support | Page Metadata Inspector',
  description: 'Usage instructions, troubleshooting and how to report a bug for the Page Metadata Inspector Chrome extension.',
  alternates: { canonical: '/page-metadata-inspector/support' },
  robots: { index: true, follow: true },
}

const troubleshooting = [
  {
    q: '"This page can’t be inspected"',
    a: 'Chrome doesn’t allow extensions to read chrome:// pages, the Chrome Web Store, or a small number of other browser-internal pages. Try the extension on a normal website instead.',
  },
  {
    q: 'The popup opens but shows nothing useful',
    a: 'Reload the page and try again. This can happen if the page was still loading when the extension read it.',
  },
  {
    q: 'A field shows "Not present" that I expected to see',
    a: 'The extension only reports what’s actually in the page’s HTML. Check the page source for the relevant tag — some site builders inject metadata client-side after the page loads, which the extension may run before it appears.',
  },
  {
    q: 'JSON-LD shows a parse error',
    a: 'This means a script[type="application/ld+json"] block on the page contains invalid JSON (a common cause is a trailing comma or an unescaped quote). A JSON validator will usually pinpoint the exact issue.',
  },
]

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-t-2 border-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
            <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
              Page Metadata Inspector
            </p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-14">
              Support
            </h1>

            {/* What it does */}
            <h2 className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-4">
              What it does
            </h2>
            <p className="text-ink-mid leading-relaxed max-w-2xl mb-14">
              Page Metadata Inspector reads the page you&rsquo;re currently viewing and shows its title, meta description, canonical URL, robots directives, Open Graph tags, Twitter/X card tags and JSON-LD structured data, with plain-language notes on anything that looks off. It only reads the active tab, and only when you click the toolbar icon.
            </p>

            {/* Usage */}
            <h2 className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-4">
              How to use it
            </h2>
            <ol className="space-y-3 max-w-2xl mb-14 list-decimal list-inside text-ink-mid leading-relaxed">
              <li>Open the page you want to check.</li>
              <li>Click the Page Metadata Inspector icon in your Chrome toolbar (pin it via the puzzle-piece menu for quicker access).</li>
              <li>Review the metadata and any issues found on the right.</li>
              <li>Use <span className="font-display font-bold">Copy report</span> to copy a plain-text summary, if you want to share or save it.</li>
            </ol>

            {/* Troubleshooting */}
            <h2 className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
              Troubleshooting
            </h2>
            <div className="space-y-8 max-w-2xl mb-16">
              {troubleshooting.map((item) => (
                <div key={item.q}>
                  <p className="font-display font-bold text-base mb-1.5">{item.q}</p>
                  <p className="text-ink-mid text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Report a bug */}
            <h2 className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-4">
              Report a bug
            </h2>
            <p className="text-ink-mid leading-relaxed max-w-2xl mb-2">
              Use the{' '}
              <Link
                href="/#contact"
                className="font-display font-bold text-ink border-b-2 border-ink/25 hover:border-ink transition-colors"
              >
                contact form
              </Link>{' '}
              on alfielambert.com, with what you saw, the page URL you were checking, and your Chrome version if you can.
            </p>

            <p className="font-mono-alt text-xs text-warm-gray mt-14">
              Extension version: 1.1.0
            </p>

            <div className="mt-4">
              <Link
                href="/page-metadata-inspector"
                className="font-mono-alt text-xs tracking-widest uppercase text-ink border-b-2 border-ink/25 hover:border-ink transition-colors pb-0.5 w-fit"
              >
                Back to Page Metadata Inspector
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
