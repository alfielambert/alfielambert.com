'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { meta } from '@/lib/content'
import { BrutalistButton } from '@/components/ui/BrutalistButton'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const shouldReduce = useReducedMotion()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meta.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback: open mail client
      window.location.href = `mailto:${meta.email}`
    }
  }

  return (
    <section id="contact" className="bg-ink border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionLabel number="07" label="Contact" light />

        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="mt-10"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-cream mb-6 max-w-3xl leading-tight">
            Let&rsquo;s talk about ambitious technology.
          </h2>

          <p className="text-cream/60 text-lg max-w-xl mb-12 leading-relaxed">
            I&rsquo;m open to conversations about ambitious AI, data and SaaS products: building, advising, or for speaking appointments.
          </p>

          {/* Email display */}
          <div className="mb-10">
            <p className="font-mono-alt text-xs tracking-widest uppercase text-cream/40 mb-3">
              Email
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${meta.email}`}
                className="font-display font-bold text-2xl md:text-3xl text-yellow hover:text-yellow/80 transition-colors"
              >
                {meta.email}
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-alt tracking-widest uppercase border-2 border-cream/40 text-cream/60 hover:border-yellow hover:text-yellow transition-colors"
                aria-label={copied ? 'Email address copied' : 'Copy email address'}
              >
                {copied ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M1 6L4.5 9.5L11 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <rect x="4" y="4" width="7" height="7" rx="0" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 4V2H1V9H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <BrutalistButton
              href={`mailto:${meta.email}`}
              variant="yellow"
              size="lg"
            >
              Send an email
            </BrutalistButton>

            {meta.cvPath && (
              <BrutalistButton
                href={meta.cvPath}
                variant="outline"
                size="lg"
                external
                className="border-cream/40 text-cream hover:bg-cream hover:text-ink"
              >
                Download CV
              </BrutalistButton>
            )}

            {meta.bookingLink && (
              <BrutalistButton
                href={meta.bookingLink}
                variant="outline"
                size="lg"
                external
                className="border-cream/40 text-cream hover:bg-cream hover:text-ink"
              >
                Book a call
              </BrutalistButton>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
