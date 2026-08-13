'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { meta } from '@/lib/content'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Building', href: '#building' },
  { label: 'What I do', href: '#what-i-do' },
  { label: 'About', href: '#about' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Experience', href: '#experience' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-cream transition-shadow duration-300 ${
          scrolled ? 'border-b-2 border-ink' : 'border-b-2 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Wordmark */}
          <a
            href="#hero"
            className="font-display font-extrabold text-lg tracking-tight text-ink hover:text-ink transition-colors"
            aria-label="Alfie Lambert — home"
          >
            <span className="text-ink">A</span>
            <span className="text-yellow bg-ink px-0.5">L</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono-alt text-xs tracking-widest uppercase text-ink-mid hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-alt tracking-widest uppercase border-2 border-ink text-ink bg-transparent hover:bg-ink hover:text-cream transition-colors shadow-brutal"
          >
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 border-2 border-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream pt-16 flex flex-col"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col border-t-2 border-ink">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="px-6 py-5 font-display font-bold text-2xl text-ink border-b-2 border-ink/20 hover:bg-yellow transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobile}
                className="px-6 py-5 font-display font-bold text-2xl text-ink border-b-2 border-ink/20 hover:bg-yellow transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="px-6 pt-8">
              <a
                href={`mailto:${meta.email}`}
                className="font-mono-alt text-sm text-warm-gray"
              >
                {meta.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
