'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { oiya, meta } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BrutalistButton } from '@/components/ui/BrutalistButton'

export function Oiya() {
  const shouldReduce = useReducedMotion()
  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

  return (
    <section id="oiya" className="border-y-2 border-ink scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionLabel number="01" label="Building now" />

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 mt-6 items-start">
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-4">
              Oiya
            </h2>
            <p className="font-display font-bold text-2xl md:text-3xl leading-snug tracking-tight mb-8 max-w-2xl">
              {oiya.headline}
            </p>

            <div className="space-y-5 max-w-2xl">
              <p className="text-ink-mid text-lg leading-relaxed">{oiya.problem}</p>
              <p className="text-ink-mid text-lg leading-relaxed">{oiya.solution}</p>
            </div>
          </motion.div>

          {/* At a glance */}
          <motion.aside
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="border-2 border-ink bg-cream shadow-brutal-lg"
            aria-label="Oiya at a glance"
          >
            <p className="bg-yellow border-b-2 border-ink px-6 py-3 font-mono-alt text-xs tracking-widest uppercase">
              Oiya at a glance
            </p>
            <dl className="px-6">
              {oiya.facts.map((fact) => (
                <div key={fact.label} className="py-4 border-b border-ink/15 last:border-b-0">
                  <dt className="font-mono-alt text-[11px] tracking-widest uppercase text-warm-gray mb-1">
                    {fact.label}
                  </dt>
                  <dd className="font-display font-bold text-lg leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="px-6 pb-6 pt-2">
              <BrutalistButton href={meta.oiyaUrl} variant="filled" size="md" external>
                Visit oiya.ai
              </BrutalistButton>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
