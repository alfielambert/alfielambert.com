import { meta } from '@/lib/content'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t-2 border-ink/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-display font-extrabold text-sm text-cream">
            <span>A</span>
            <span className="text-yellow bg-ink-mid px-0.5">L</span>
          </span>
          <span className="font-mono-alt text-xs text-cream/30">
            &copy; {year} Alfie Lambert
          </span>
        </div>
        <a
          href={`mailto:${meta.email}`}
          className="font-mono-alt text-xs text-cream/40 hover:text-yellow transition-colors"
        >
          {meta.email}
        </a>
      </div>
    </footer>
  )
}
