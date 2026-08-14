import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { Callout } from './Callout'
import { InBrief } from './InBrief'
import { Figure } from './Figure'

const proseText = 'leading-[1.7] text-[18px] md:text-[19px] text-ink'

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      {...props}
      className="font-display font-bold text-2xl md:text-[28px] tracking-tight mt-14 mb-4 first:mt-0"
    />
  ),
  h3: (props) => (
    <h3 {...props} className="font-display font-semibold text-xl mt-10 mb-3" />
  ),
  p: (props) => <p {...props} className={`mb-6 ${proseText}`} />,
  ul: (props) => (
    <ul {...props} className={`mb-6 pl-5 space-y-2 list-disc marker:text-warm-gray ${proseText}`} />
  ),
  ol: (props) => (
    <ol {...props} className={`mb-6 pl-5 space-y-2 list-decimal marker:text-warm-gray ${proseText}`} />
  ),
  li: (props) => <li {...props} />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="my-8 border-l-4 border-ink pl-6 font-display italic text-xl md:text-2xl leading-snug text-ink-mid"
    />
  ),
  a: (props) => (
    <a
      {...props}
      className="text-ink underline decoration-ink/30 hover:decoration-ink underline-offset-2 transition-colors"
    />
  ),
  hr: () => <hr className="my-12 border-ink/15" />,
  strong: (props) => <strong {...props} className="font-semibold text-ink" />,
  table: (props) => (
    <div className="my-8 overflow-x-auto border border-ink/15">
      <table {...props} className="w-full text-sm border-collapse" />
    </div>
  ),
  thead: (props) => <thead {...props} className="bg-cream-dark" />,
  th: (props) => (
    <th
      {...props}
      className="font-mono-alt text-xs uppercase tracking-widest text-warm-gray text-left px-4 py-3 border-b border-ink/15 whitespace-nowrap"
    />
  ),
  td: (props) => (
    <td {...props} className="px-4 py-3 border-b border-ink/10 align-top text-ink-mid" />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="my-8 bg-cream-dark border border-ink/15 text-ink text-[13px] md:text-sm font-mono-alt leading-relaxed p-5 overflow-x-auto"
    />
  ),
  code: ({ className, ...rest }) => {
    const isFenced = typeof className === 'string' && className.includes('language-')
    if (isFenced) {
      return <code {...rest} className={`font-mono-alt ${className}`} />
    }
    return (
      <code
        {...rest}
        className="font-mono-alt text-[0.9em] bg-cream-dark border border-ink/10 px-1.5 py-0.5"
      />
    )
  },
  // Raw <figure>/<img>/<figcaption> HTML written directly in MDX falls back to
  // literal passthrough rather than routing through this components map (verified
  // empirically) — these three stay as a safety net for markdown ![]() syntax,
  // which does route through correctly. Use the Figure component for anything
  // that needs a caption.
  figure: (props) => <figure {...props} className="my-10" />,
  figcaption: (props) => (
    <figcaption {...props} className="font-mono-alt text-xs text-warm-gray mt-3 leading-relaxed" />
  ),
  img: ({ src, alt }) => (
    <span className="block relative aspect-[16/9] border-2 border-ink overflow-hidden bg-cream-dark">
      <Image
        src={typeof src === 'string' ? src : ''}
        alt={alt || ''}
        fill
        className="object-cover"
        sizes="(max-width: 760px) 100vw, 760px"
      />
    </span>
  ),
  Callout,
  InBrief,
  Figure,
}
