'use client'
import { useRef, useState, type FormEvent } from 'react'
import { BrutalistButton } from '@/components/ui/BrutalistButton'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xljrpejl'

const ENQUIRY_TYPES = ['Building', 'Advising', 'Speaking', 'Something else']

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full bg-transparent border-2 border-cream/25 text-cream placeholder:text-cream/30 px-4 py-3 text-[15px] focus:outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/30 transition-colors'

const labelClass = 'font-mono-alt text-xs tracking-widest uppercase text-cream/40 mb-2 block'

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'submitting') return

    const form = formRef.current
    if (!form) return

    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-xl">
      <form ref={formRef} onSubmit={handleSubmit} noValidate={false}>
        {/* Honeypot — hidden from real visitors, left blank by humans */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>
        </div>

        <fieldset className="mb-5">
          <legend className={labelClass}>What&rsquo;s this about?</legend>
          <div className="flex flex-wrap gap-2">
            {ENQUIRY_TYPES.map((type, i) => (
              <label key={type} className="group/chip cursor-pointer">
                <input
                  type="radio"
                  name="enquiry_type"
                  value={type}
                  required={i === 0}
                  className="peer sr-only"
                />
                <span className="inline-flex items-center px-4 py-2 border-2 border-cream/25 text-cream/70 text-xs font-mono-alt uppercase tracking-widest transition-colors peer-checked:border-yellow peer-checked:text-yellow peer-checked:bg-yellow/10 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-yellow peer-focus-visible:outline-offset-2 group-hover/chip:border-cream/50">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mb-6">
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            className={`${inputClass} resize-y`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <BrutalistButton type="submit" variant="yellow" size="lg" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </BrutalistButton>

          <div aria-live="polite" className="text-sm">
            {status === 'success' && (
              <span className="text-yellow font-mono-alt text-xs tracking-widest uppercase">
                Message sent. I&rsquo;ll get back to you soon.
              </span>
            )}
            {status === 'error' && (
              <span className="text-coral font-mono-alt text-xs tracking-widest uppercase">
                Something went wrong. Please try again.
              </span>
            )}
          </div>
        </div>

        <p className="text-cream/40 text-xs mt-6 leading-relaxed">
          Your details are used only to respond to your enquiry. See the{' '}
          <a
            href="/privacy"
            className="underline decoration-cream/30 hover:decoration-cream text-cream/50 hover:text-cream/70 transition-colors"
          >
            Privacy Notice
          </a>
          .
        </p>
      </form>
    </div>
  )
}
