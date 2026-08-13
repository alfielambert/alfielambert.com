'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { speaking } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'

function ArrowUpRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MediaLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 py-2 font-mono-alt text-xs tracking-widest uppercase text-ink border-b-2 border-ink/25 hover:border-ink focus-visible:border-ink transition-colors w-fit"
    >
      {label}
      <ArrowUpRight />
    </a>
  )
}

export function Speaking() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="speaking" className="bg-cream-dark border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionLabel number="05" label="Speaking and media" />

        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-4 tracking-tight">
          On stage and on air
        </h2>
        <p className="text-ink-mid max-w-xl mb-14">
          I&rsquo;ve hosted a specialist podcast, been interviewed about companies I&rsquo;ve built and spoken on stage about startups, growth and acquisition. Comfortable acting as the public face of a technical company.
        </p>

        <div className="grid md:grid-cols-3 gap-0">
          {speaking.map((item, i) => (
            <motion.div
              key={item.title}
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="group/card border-2 border-ink bg-cream p-8 md:p-10 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
            >
              {/* Image */}
              <a
                href={item.imageHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.imageAriaLabel}
                className="group relative block w-full aspect-[16/9] border-2 border-ink bg-cream-dark mb-6 overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {item.isVideo && (
                  <span
                    className="absolute bottom-3 left-3 w-9 h-9 bg-ink border-2 border-cream flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3.5 2L9.5 6L3.5 10V2Z" fill="#F5F0E6" />
                    </svg>
                  </span>
                )}
              </a>

              <span className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray block mb-3">
                {item.type}
              </span>
              <h3 className="font-display font-bold text-xl mb-3 leading-snug">{item.title}</h3>
              <p className="text-ink-mid text-sm leading-relaxed mb-4">{item.description}</p>

              {item.stats.length > 0 && (
                <ul className="space-y-1 mb-2">
                  {item.stats.map((stat) => (
                    <li
                      key={stat}
                      className="font-mono-alt text-xs text-ink flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow border border-ink flex-shrink-0" aria-hidden="true" />
                      {stat}
                    </li>
                  ))}
                </ul>
              )}

              {/* External links */}
              <div className="flex flex-col mt-4 pt-4 border-t border-ink/15">
                {item.links.map((link) => (
                  <MediaLink key={link.href} label={link.label} href={link.href} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
