'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { meta } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { MediaLink } from '@/components/ui/MediaLink'
import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="contact" className="bg-ink border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionLabel number="08" label="Contact" light />

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

          <ContactForm />

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
            {meta.cvPath && (
              <MediaLink label="Download CV" href={meta.cvPath} light />
            )}
            {meta.bookingLink && (
              <MediaLink label="Book a call" href={meta.bookingLink} light />
            )}
            <MediaLink label="GitHub" href={meta.githubUrl} light />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
