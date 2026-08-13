'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { capabilities } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function WhatIDo() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="what-i-do" className="bg-ink border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionLabel number="04" label="What I do" light />

        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-14 tracking-tight text-cream">
          Where I operate
        </h2>

        <div className="grid sm:grid-cols-2 gap-0">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="border border-cream/20 p-8 md:p-10 hover:bg-white/5 transition-colors group"
            >
              <span className="font-mono-alt text-xs text-yellow/80 tracking-widest mb-4 block">
                {cap.number}
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-cream mb-4 leading-snug">
                {cap.title}
              </h3>
              <p className="text-cream/60 leading-relaxed text-[15px]">{cap.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
