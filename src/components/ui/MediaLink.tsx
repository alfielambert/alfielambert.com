function ArrowUpRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

interface MediaLinkProps {
  label: string
  href: string
  external?: boolean
  light?: boolean
}

export function MediaLink({ label, href, external = true, light = false }: MediaLinkProps) {
  const colorClass = light
    ? 'text-cream border-cream/30 hover:border-cream focus-visible:border-cream'
    : 'text-ink border-ink/25 hover:border-ink focus-visible:border-ink'

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group inline-flex items-center gap-1.5 py-2 font-mono-alt text-xs tracking-widest uppercase border-b-2 transition-colors w-fit ${colorClass}`}
    >
      {label}
      <ArrowUpRight />
    </a>
  )
}
