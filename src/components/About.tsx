'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { about } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function About() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="about" className="border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionLabel number="05" label="About" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-12 items-start">
          {/* Copy */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-8">
              A decade building at the intersection of product, growth and commercial strategy.
            </h2>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-mid leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Education callout */}
            <div className="mt-10 border-l-4 border-yellow pl-5">
              <p className="font-display font-bold text-sm uppercase tracking-widest text-warm-gray mb-1">
                Education
              </p>
              <div className="flex items-center gap-3 mb-0.5">
                <p className="font-display font-semibold text-lg">
                  University of Cambridge
                </p>
                <Image
                  src="/assets/cambridge-logo.png"
                  alt="University of Cambridge"
                  width={60}
                  height={21}
                  className="object-contain h-6 w-auto"
                />
              </div>
              <p className="text-ink-mid text-sm">
                BA, Human, Social and Political Sciences · 2013–2016
              </p>
              <p className="text-ink-mid text-sm mt-2">
                via City and Islington College Access Diploma, 100% distinction rate
              </p>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
            whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="relative max-w-sm mx-auto lg:mx-0"
          >
            {/* Offset block */}
            <div
              className="absolute inset-0 bg-cream-dark border-2 border-ink translate-x-4 translate-y-4"
              aria-hidden="true"
            />
            <div className="relative border-2 border-ink overflow-hidden aspect-[3/4]">
              <Image
                src="/headshots/about.jpg"
                alt="Alfie Lambert"
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
