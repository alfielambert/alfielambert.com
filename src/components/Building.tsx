'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { building, type BuildProject } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LabelChip } from '@/components/ui/LabelChip'

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function BuildVisual({ project }: { project: BuildProject }) {
  const { visual } = project

  if (visual.type === 'flow') {
    return (
      <div className="flex flex-wrap items-center gap-y-2 gap-x-2 font-mono-alt text-xs tracking-widest uppercase">
        {visual.steps.map((step, i) => (
          <span key={step} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-warm-gray" aria-hidden="true">
                &rarr;
              </span>
            )}
            <span className="px-2.5 py-1 border border-ink/30 text-ink-mid">{step}</span>
          </span>
        ))}
      </div>
    )
  }

  if (visual.type === 'transform') {
    return (
      <div className="inline-flex flex-wrap items-center gap-3 font-mono-alt text-xs tracking-widest uppercase">
        <span className="px-3 py-1.5 border border-ink/30 text-ink-mid">{visual.from}</span>
        <span className="text-warm-gray" aria-hidden="true">
          &rarr;
        </span>
        <span className="px-3 py-1.5 border-2 border-ink bg-yellow text-ink">{visual.to}</span>
      </div>
    )
  }

  return (
    <ul className="space-y-1.5">
      {visual.items.map((item) => (
        <li key={item} className="font-mono-alt text-xs text-ink flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-yellow border border-ink flex-shrink-0" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Building() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="building" className="bg-cream-dark border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionLabel number="03" label="Things I've built" />

        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-4 tracking-tight">
          From problem to product
        </h2>
        <p className="text-ink-mid max-w-xl mb-14">{building.intro}</p>

        <div>
          {building.projects.map((project, i) => (
            <motion.article
              key={project.title}
              id={slugify(project.title)}
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="border-b-2 border-ink last:border-b-0 py-10 md:py-12 scroll-mt-24"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-mono-alt text-xs text-warm-gray tabular-nums mt-2">
                  {project.number}
                </span>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="md:ml-9">
                <p className="text-ink-mid leading-relaxed max-w-2xl mb-6">{project.description}</p>

                <div className="mb-6">
                  <BuildVisual project={project} />
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <LabelChip key={tag}>{tag}</LabelChip>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 border-l-4 border-yellow pl-5 max-w-2xl">
          <p className="text-ink-mid leading-relaxed">{building.closing}</p>
        </div>
      </div>
    </section>
  )
}
