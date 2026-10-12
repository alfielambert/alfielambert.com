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
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-10 lg:pt-14 lg:pb-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">

          {/* Left: Copy */}
          <div className="max-w-3xl">
            <motion.p
              {...fadeUp(0)}
              className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-extrabold text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] leading-[0.95] tracking-tight text-balance mb-6 lg:mb-8"
            >
              {hero.headline.before}{' '}
              <span className="relative inline-block px-1">
                <span className="absolute inset-x-0 top-[6%] bottom-[4%] bg-yellow" aria-hidden="true" />
                <span className="relative">{hero.headline.highlight}</span>
              </span>{' '}
              {hero.headline.after}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-base sm:text-lg md:text-xl text-ink-mid leading-relaxed max-w-2xl mb-8 lg:mb-10"
            >
              {hero.subheading}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <BrutalistButton href="#oiya" variant="filled" size="lg">
                What I&rsquo;m building
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 3L8 13M8 13L3 8M8 13L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </BrutalistButton>
              <BrutalistButton href="#contact" variant="outline" size="lg">
                Get in touch
              </BrutalistButton>
            </motion.div>
          </div>

          {/* Right: Portrait (desktop only, so proof and Oiya come first on phones) */}
          <motion.div
            {...(shouldReduce ? {} : { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, delay: 0.2, ease } })}
            className="relative self-start hidden lg:block w-[340px] xl:w-[360px] lg:mt-6 flex-shrink-0"
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
                sizes="320px"
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
