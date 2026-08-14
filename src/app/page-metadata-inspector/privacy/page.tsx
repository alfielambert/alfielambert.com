import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { meta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Privacy Policy | Page Metadata Inspector',
  description: 'What Page Metadata Inspector accesses, and confirmation that nothing is stored, transmitted or shared.',
  alternates: { canonical: '/page-metadata-inspector/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-t-2 border-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
            <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
              Page Metadata Inspector
            </p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="font-mono-alt text-xs text-warm-gray mb-14">
              Last updated: 14 August 2026
            </p>

            <div className="max-w-2xl space-y-12">
              <div>
                <p className="text-ink-mid leading-relaxed">
                  Page Metadata Inspector reads the metadata of the page you&rsquo;re currently viewing and shows it to you, entirely on your device. This page describes exactly what that involves, in plain terms, based on what the extension actually does.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">What it accesses</h2>
                <p className="text-ink-mid leading-relaxed mb-3">
                  When you click the extension icon, it reads the active tab&rsquo;s URL and its HTML &mdash; page title, meta description, robots directives, canonical link, H1 headings, Open Graph tags, Twitter/X card tags, and JSON-LD structured data &mdash; and displays it in the popup.
                </p>
                <p className="text-ink-mid leading-relaxed">
                  It only does this when you actively click the icon. It has no standing or background access to any tab, and no access to tabs you haven&rsquo;t clicked the icon on.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Why it accesses it</h2>
                <p className="text-ink-mid leading-relaxed">
                  This is the entire function of the extension: reading a page&rsquo;s metadata is how it shows that metadata back to you. Nothing is accessed beyond what&rsquo;s needed to display the fields listed above.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Is anything stored?</h2>
                <p className="text-ink-mid leading-relaxed">
                  No. The extension does not use any browser storage API. The metadata it reads exists only in the popup&rsquo;s memory while it&rsquo;s open, and is discarded the moment the popup closes. Nothing is written to disk, and nothing syncs to any account.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Is anything transmitted?</h2>
                <p className="text-ink-mid leading-relaxed">
                  No. The extension makes no network requests of any kind. There is no server, no API, and no analytics or telemetry of any kind built into it.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Is anything shared or sold?</h2>
                <p className="text-ink-mid leading-relaxed">
                  No. There are no third parties involved in how this extension works &mdash; no third-party scripts, SDKs, or services of any kind. Nothing is shared or sold, because nothing leaves your device in the first place.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">The one exception: Copy report</h2>
                <p className="text-ink-mid leading-relaxed">
                  The popup has a &ldquo;Copy report&rdquo; button. If, and only if, you click it, a plain-text summary of the metadata already shown to you is copied to your own system clipboard using the standard browser clipboard API. That data goes to your clipboard and nowhere else &mdash; it&rsquo;s under your control from that point, the same as copying any other text.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Data retention</h2>
                <p className="text-ink-mid leading-relaxed">
                  There is nothing to retain. No data is stored or transmitted, so there is no retention period to disclose.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Permissions</h2>
                <p className="text-ink-mid leading-relaxed mb-3">
                  The extension requests two permissions:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-yellow border border-ink flex-shrink-0" aria-hidden="true" />
                    <span className="text-ink-mid leading-relaxed">
                      <span className="font-display font-bold text-ink">activeTab</span> &mdash; access to the page you&rsquo;re viewing, only after you click the icon. No access to other tabs, and no access to this tab until you click.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-yellow border border-ink flex-shrink-0" aria-hidden="true" />
                    <span className="text-ink-mid leading-relaxed">
                      <span className="font-display font-bold text-ink">scripting</span> &mdash; lets the extension run its metadata-reading function in the active tab once invoked. This is what actually reads the page.
                    </span>
                  </li>
                </ul>
                <p className="text-ink-mid leading-relaxed mt-3">
                  No host permissions are requested, and the extension cannot run on any page in the background.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Chrome Web Store Limited Use disclosure</h2>
                <p className="text-ink-mid leading-relaxed">
                  Page Metadata Inspector&rsquo;s use of Chrome browser APIs is limited to reading the active tab&rsquo;s metadata, at your request, to display it back to you within the extension&rsquo;s own interface. That data is never transferred to, or used by, any other party or purpose, and is never used for advertising. Because nothing is transmitted or stored, there is no data-use activity beyond this single, on-device, user-initiated purpose.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Changes to this policy</h2>
                <p className="text-ink-mid leading-relaxed">
                  If this policy changes, the update will be reflected on this page and the date above.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Contact</h2>
                <p className="text-ink-mid leading-relaxed">
                  Questions about this policy can be sent to{' '}
                  <a
                    href={`mailto:${meta.email}`}
                    className="font-display font-bold text-ink border-b-2 border-ink/25 hover:border-ink transition-colors"
                  >
                    {meta.email}
                  </a>.
                </p>
              </div>
            </div>

            <div className="mt-16">
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
