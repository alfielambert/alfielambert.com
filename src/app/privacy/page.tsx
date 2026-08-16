import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Privacy Notice | Alfie Lambert',
  description: 'What happens to the information you submit through the contact form on alfielambert.com.',
  alternates: { canonical: '/privacy' },
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
              alfielambert.com
            </p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
              Privacy Notice
            </h1>
            <p className="font-mono-alt text-xs text-warm-gray mb-14">
              Last updated: 16 August 2026
            </p>

            <div className="max-w-2xl space-y-12">
              <div>
                <p className="text-ink-mid leading-relaxed">
                  This site is operated by Alfie Lambert. This notice covers the only personal data this site actually collects: what you submit through the contact form.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">What the contact form collects</h2>
                <p className="text-ink-mid leading-relaxed mb-3">
                  If you use the contact form, it submits:
                </p>
                <ul className="space-y-2">
                  {['Your name', 'Your email address', 'The enquiry type you select (Building, Advising, Speaking or Something else)', 'The message you write'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-yellow border border-ink flex-shrink-0" aria-hidden="true" />
                      <span className="text-ink-mid leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Why it&rsquo;s collected</h2>
                <p className="text-ink-mid leading-relaxed">
                  Only to read and respond to your enquiry. Nothing submitted through the form is used for marketing, analytics or any purpose beyond replying to you.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">How it&rsquo;s processed</h2>
                <p className="text-ink-mid leading-relaxed">
                  Form submissions are sent directly to{' '}
                  <a
                    href="https://formspree.io/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold text-ink border-b-2 border-ink/25 hover:border-ink transition-colors"
                  >
                    Formspree
                  </a>
                  , a third-party form-processing service, which delivers them to Alfie&rsquo;s inbox. Formspree is the only third-party service this site sends visitor-submitted data to. Formspree&rsquo;s own privacy policy governs how they handle and retain that data on their systems; this site does not set an exact retention period beyond what Formspree&rsquo;s service provides.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">What this site doesn&rsquo;t do</h2>
                <p className="text-ink-mid leading-relaxed">
                  This site runs no analytics, no advertising trackers, and sets no tracking or advertising cookies. It doesn&rsquo;t use your data for profiling or automated decision-making, and doesn&rsquo;t sell or share it with anyone beyond the form processor described above.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Your rights</h2>
                <p className="text-ink-mid leading-relaxed mb-3">
                  Under UK data protection law, you can ask to:
                </p>
                <ul className="space-y-2 mb-3">
                  {[
                    'See what personal data is held about you',
                    'Have inaccurate data corrected',
                    'Have your data deleted',
                    "Restrict or object to how it's used",
                    'Receive a copy of your data in a portable format',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-yellow border border-ink flex-shrink-0" aria-hidden="true" />
                      <span className="text-ink-mid leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-ink-mid leading-relaxed">
                  You can also complain to the UK Information Commissioner&rsquo;s Office (ICO) if you think your data has been mishandled.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Changes to this notice</h2>
                <p className="text-ink-mid leading-relaxed">
                  If this notice changes, the update will be reflected on this page and the date above.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl mb-4">Contact</h2>
                <p className="text-ink-mid leading-relaxed">
                  Questions about this notice, or requests relating to your data, can be sent via the{' '}
                  <Link
                    href="/#contact"
                    className="font-display font-bold text-ink border-b-2 border-ink/25 hover:border-ink transition-colors"
                  >
                    contact form
                  </Link>{' '}
                  above.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
