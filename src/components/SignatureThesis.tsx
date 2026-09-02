'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { thesis } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function SignatureThesis() {
  const shouldReduce = useReducedMotion()
  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

  return (
    <section id="thesis" className="bg-cream-dark border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionLabel number="02" label="Signature thesis" />

        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-10 tracking-tight max-w-2xl">
          How I think about AI transformation
        </h2>

        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="border-l-4 border-yellow pl-5 md:pl-6 max-w-2xl mb-14"
        >
          <p className="font-display font-bold text-2xl md:text-3xl leading-snug mb-4">
            {thesis.lead}
          </p>
          <p className="text-ink-mid text-lg leading-relaxed">{thesis.support}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 border-t-2 border-ink">
          {thesis.principles.map((p, i) => (
            <motion.div
              key={p}
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="border-b-2 sm:border-b-0 sm:border-r-2 border-ink last:border-r-0 last:border-b-0 py-6 sm:px-6 first:sm:pl-0"
            >
              <span className="font-mono-alt text-xs text-warm-gray tabular-nums block mb-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-display font-bold text-lg leading-snug">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
