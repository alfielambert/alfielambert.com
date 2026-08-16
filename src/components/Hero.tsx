'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { hero } from '@/lib/content'
import { BrutalistButton } from '@/components/ui/BrutalistButton'

export function Hero() {
  const shouldReduce = useReducedMotion()

  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

  const fadeUp = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease },
        }

  return (
    <section id="hero" className="pt-16">
      {/* Main hero grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">

          {/* Left: Copy */}
          <div className="max-w-3xl">
            <motion.p
              {...fadeUp(0)}
              className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6"
            >
              Founder · Product · Growth
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-extrabold text-[40px] sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[88px] leading-[0.95] tracking-tight text-balance mb-8"
            >
              {hero.headlineParts[0]}{' '}
              <span className="relative inline-block px-1">
                <span className="absolute inset-x-0 top-[6%] bottom-[4%] bg-yellow" aria-hidden="true" />
                <span className="relative">{hero.headlineParts[1]}</span>
              </span>{' '}
              {hero.headlineParts[2]}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg md:text-xl text-ink-mid leading-relaxed max-w-xl mb-10"
            >
              {hero.subheading}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <BrutalistButton href="#work" variant="filled" size="lg">
                View my work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 3L8 13M8 13L3 8M8 13L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </BrutalistButton>
              <BrutalistButton href="/#contact" variant="outline" size="lg">
                Get in touch
              </BrutalistButton>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            {...(shouldReduce ? {} : { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, delay: 0.2, ease } })}
            className="relative self-start w-[280px] sm:w-[320px] lg:w-[360px] mx-auto lg:mx-0 lg:mt-6 flex-shrink-0"
          >
            {/* Yellow offset block */}
            <div
              className="absolute inset-0 bg-yellow border-2 border-ink translate-x-4 translate-y-4"
              aria-hidden="true"
            />
            {/* Photo */}
            <div className="relative border-2 border-ink overflow-hidden aspect-[3/4]">
              <Image
                src="/headshots/hero.jpg"
                alt="Alfie Lambert"
                fill
                className="object-cover object-top grayscale"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Evidence strip */}
      <div className="bg-ink border-y-2 border-ink overflow-x-hidden">
        <div
          className="px-6 md:px-10 py-4 flex items-center justify-center gap-0 overflow-x-auto scrollbar-none"
          role="list"
          aria-label="Key achievements"
        >
          {hero.evidence.map((item, i) => (
            <div
              key={item}
              className="flex items-center flex-shrink-0"
              role="listitem"
            >
              {i > 0 && (
                <span className="text-yellow/40 mx-6 font-mono-alt text-xs select-none" aria-hidden="true">
                  /
                </span>
              )}
              <span className="font-mono-alt text-xs tracking-widest uppercase text-cream whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
