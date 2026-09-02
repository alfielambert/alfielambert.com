import Link from 'next/link'
import { getAllPosts } from '@/lib/writing'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { MediaLink } from '@/components/ui/MediaLink'

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00Z')
  const day = d.getUTCDate().toString().padStart(2, '0')
  const month = d.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' }).toUpperCase()
  return `${day} ${month}`
}

export function LatestWriting() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section id="writing" className="border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionLabel number="05" label="Latest writing" />
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-6 mb-14 tracking-tight">
          From the notebook
        </h2>

        <div className="max-w-3xl border-t-2 border-ink">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block py-8 border-b border-ink/15 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <span className="font-mono-alt text-xs text-warm-gray tabular-nums flex-shrink-0 sm:w-16">
                  {formatDate(post.date)}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-2 group-hover:underline underline-offset-2">
                    {post.title}
                  </h3>
                  <p className="text-ink-mid leading-relaxed mb-3 max-w-xl">{post.standfirst}</p>
                  <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray">
                    {post.topics.join(' · ')}
                    {post.topics.length > 0 && ' · '}
                    {post.readingTime} min
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <MediaLink label="All writing" href="/writing" external={false} />
        </div>
      </div>
    </section>
  )
}
