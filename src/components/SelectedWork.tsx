'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { projects, type AccentColor } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LabelChip } from '@/components/ui/LabelChip'

const accentBg: Record<AccentColor, string> = {
  yellow: 'bg-yellow',
  coral: 'bg-coral',
  blue: 'bg-blue',
}

const accentText: Record<AccentColor, string> = {
  yellow: 'text-ink',
  coral: 'text-cream',
  blue: 'text-cream',
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.article
      initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="relative border-b-2 border-ink last:border-b-0 py-16 md:py-20"
      id={project.id}
    >
      {/* Ghost number */}
      <span
        className="absolute -top-4 right-0 font-display font-extrabold leading-none select-none pointer-events-none hidden md:block text-ink"
        style={{ fontSize: 'clamp(120px, 18vw, 220px)', opacity: 0.04 }}
        aria-hidden="true"
      >
        {project.number}
      </span>

      {/* Header row */}
      <div className="flex flex-wrap items-start gap-4 mb-2">
        <span className="font-mono-alt text-xs text-warm-gray tabular-nums mt-1">
          {project.number}
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h3 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-ink">
              {project.name}
            </h3>
            <span
              className={`hidden sm:inline-block px-3 py-1 text-xs font-mono-alt uppercase tracking-widest border-2 border-ink ${accentBg[project.accentColor]} ${accentText[project.accentColor]}`}
            >
              {project.role.split('·')[0].trim()}
            </span>
          </div>
          <p className="font-mono-alt text-sm text-warm-gray mt-1">{project.dates}</p>
        </div>
      </div>

      {/* Tagline */}
      <p className="font-display font-semibold text-xl md:text-2xl text-ink mb-8 max-w-2xl pl-10">
        {project.tagline}
      </p>

      {/* Two-col content */}
      <div className="grid md:grid-cols-2 gap-8 pl-10">
        <div>
          <p className="text-ink-mid leading-relaxed mb-4">{project.description}</p>
          <p className="text-ink-mid leading-relaxed">{project.what}</p>
        </div>

        <div>
          <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-4">
            Selected outcomes
          </p>
          <ul className="space-y-3">
            {project.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-ink-mid">
                <span
                  className={`mt-1.5 w-2 h-2 flex-shrink-0 border-2 border-ink ${accentBg[project.accentColor]}`}
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <LabelChip key={tag}>{tag}</LabelChip>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function SelectedWork() {
  return (
    <section id="work" className="border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20">
        <SectionLabel number="02" label="Selected work" />
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-0 tracking-tight">
          Companies I have built and grown
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
