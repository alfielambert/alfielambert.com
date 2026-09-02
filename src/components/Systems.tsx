'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { systems, meta, type SystemProject } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { LabelChip } from '@/components/ui/LabelChip'
import { MediaLink } from '@/components/ui/MediaLink'

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function GithubMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      />
    </svg>
  )
}

function SystemVisualBlock({ project }: { project: SystemProject }) {
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

export function Systems() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="systems" className="bg-cream-dark border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-14">
          <div>
            <SectionLabel number="04" label="Hands-on AI systems" />

            <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-4 tracking-tight">
              Systems I have designed and shipped
            </h2>
            <p className="text-ink-mid max-w-xl">{systems.intro}</p>
          </div>

          <div className="flex-shrink-0">
            <MediaLink label="View my work on GitHub" href={meta.githubUrl} icon={<GithubMark />} />
          </div>
        </div>

        <div>
          {systems.projects.map((project, i) => (
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
                  <SystemVisualBlock project={project} />
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <LabelChip key={tag}>{tag}</LabelChip>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 pt-6 border-t border-ink/15">
                    {project.links.map((link) => (
                      <MediaLink key={link.href} label={link.label} href={link.href} />
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 border-l-4 border-yellow pl-5 max-w-2xl">
          <p className="text-ink-mid leading-relaxed">{systems.closing}</p>
        </div>
      </div>
    </section>
  )
}
