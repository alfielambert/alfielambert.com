'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { speaking } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'

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
          I've hosted a specialist podcast, delivered investor pitches on stage and spoken at conferences. Comfortable acting as the public face of a technical company.
        </p>

        <div className="grid md:grid-cols-3 gap-0">
          {speaking.map((item, i) => (
            <motion.div
              key={item.title}
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="border-2 border-ink bg-cream p-8 md:p-10 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
            >
              {/* Image placeholder or real image */}
              <div className="w-full aspect-[16/9] border-2 border-ink bg-cream-dark mb-6 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale" />
                ) : (
                  <span className="font-mono-alt text-xs text-warm-gray text-center px-4">
                    [ Image placeholder — {item.title} ]
                  </span>
                )}
              </div>

              <span className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray block mb-3">
                {item.type}
              </span>
              <h3 className="font-display font-bold text-xl mb-3 leading-snug">{item.title}</h3>
              <p className="text-ink-mid text-sm leading-relaxed mb-4">{item.description}</p>

              {item.stats.length > 0 && (
                <ul className="space-y-1">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
