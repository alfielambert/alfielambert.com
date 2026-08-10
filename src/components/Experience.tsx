'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { timeline, type TimelineEntry } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'

const typeStyles: Record<TimelineEntry['type'], string> = {
  founder: 'bg-yellow border-ink',
  operator: 'bg-cream border-ink',
  consultant: 'bg-coral border-ink',
  education: 'bg-blue border-ink',
}

const typeLabels: Record<TimelineEntry['type'], string> = {
  founder: 'Founder',
  operator: 'Operator',
  consultant: 'Consultant',
  education: 'Education',
}

export function Experience() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="experience" className="border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionLabel number="06" label="Experience" />
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-14 tracking-tight">
          Twelve years across product, growth and company building
        </h2>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-12">
          {(Object.keys(typeLabels) as TimelineEntry['type'][]).map((type) => (
            <div key={type} className="flex items-center gap-2">
              <span
                className={`w-3 h-3 border-2 ${typeStyles[type]} flex-shrink-0`}
                aria-hidden="true"
              />
              <span className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray">
                {typeLabels[type]}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-ink/20 hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {timeline.map((entry, i) => (
              <motion.div
                key={`${entry.company}-${i}`}
                initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                className="relative md:pl-8 border-b border-ink/10 last:border-b-0 py-5 group"
              >
                {/* Dot */}
                <span
                  className={`absolute left-0 top-[22px] w-4 h-4 border-2 ${typeStyles[entry.type]} hidden md:block`}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                  <span className="font-mono-alt text-xs text-warm-gray w-36 flex-shrink-0">
                    {entry.period}
                  </span>
                  <span className="font-display font-bold text-lg text-ink group-hover:text-ink transition-colors">
                    {entry.company}
                  </span>
                  <span className="text-ink-mid text-sm flex-1">
                    {entry.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
