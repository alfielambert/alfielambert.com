import { author, meta } from '@/lib/content'
import { MediaLink } from '@/components/ui/MediaLink'

export function AuthorBlock() {
  return (
    <footer className="mt-16 pt-10 border-t-2 border-ink">
      <p className="font-mono-alt text-xs tracking-widest uppercase text-ink mb-2">
        {author.name}
      </p>
      <p className="font-display font-semibold text-base mb-1">{author.role}</p>
      <p className="text-ink-mid text-sm leading-relaxed mb-5 max-w-md">{author.bio}</p>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        <MediaLink label="Website" href="https://alfielambert.com" external={false} />
        <MediaLink label="GitHub" href={meta.githubUrl} />
      </div>
    </footer>
  )
}
