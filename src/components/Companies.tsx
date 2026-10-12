'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { companies, companiesIntro, type AccentColor, type Company } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { MediaLink } from '@/components/ui/MediaLink'

const accentBg: Record<AccentColor, string> = {
  yellow: 'bg-yellow',
  coral: 'bg-coral',
  blue: 'bg-blue',
}

function CompanyCard({ company, index }: { company: Company; index: number }) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.article
      initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="border-2 border-ink bg-cream shadow-brutal flex flex-col"
      id={company.id}
    >
      <div className={`h-2 border-b-2 border-ink ${accentBg[company.accentColor]}`} aria-hidden="true" />

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-none mb-3">
          {company.name}
        </h3>
        <p className="font-mono-alt text-xs tracking-widest uppercase text-ink mb-1">{company.role}</p>
        <p className="font-mono-alt text-xs text-warm-gray mb-6">{company.dates}</p>

        <p className="text-ink-mid leading-relaxed mb-6">{company.description}</p>

        <ul className="space-y-3 mb-6">
          {company.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-3 text-ink">
              <span
                className={`mt-1.5 w-2 h-2 flex-shrink-0 border-2 border-ink ${accentBg[company.accentColor]}`}
                aria-hidden="true"
              />
              <span className="leading-relaxed">{o}</span>
            </li>
          ))}
        </ul>

        {company.links && company.links.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-auto pt-5 border-t border-ink/15">
            {company.links.map((link) => (
              <MediaLink key={link.href} label={link.label} href={link.href} />
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export function Companies() {
  return (
    <section id="companies" className="bg-cream-dark border-b-2 border-ink scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionLabel number="02" label="Track record" />
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-4 tracking-tight">
          Companies I&rsquo;ve built
        </h2>
        <p className="text-ink-mid text-lg leading-relaxed max-w-2xl mb-12">{companiesIntro}</p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
