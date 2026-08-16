import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { getAllPosts } from '@/lib/writing'

export const metadata: Metadata = {
  title: 'Writing | Alfie Lambert',
  description: 'Notes on product, GTM, AI and the things I build.',
  alternates: { canonical: '/writing' },
  openGraph: {
    title: 'Writing | Alfie Lambert',
    description: 'Notes on product, GTM, AI and the things I build.',
    url: 'https://alfielambert.com/writing',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00Z')
  const day = d.getUTCDate().toString().padStart(2, '0')
  const month = d.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' }).toUpperCase()
  return `${day} ${month}`
}

function yearOf(dateStr: string) {
  return dateStr.slice(0, 4)
}

export default function WritingIndexPage() {
  const posts = getAllPosts()

  const grouped = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = yearOf(post.date)
    acc[year] = acc[year] || []
    acc[year].push(post)
    return acc
  }, {})
  const years = Object.keys(grouped).sort((a, b) => (a < b ? 1 : -1))

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-t-2 border-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
            <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
              Writing
            </p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6">
              Notes on product, GTM, AI and the things I build.
            </h1>

            {posts.length === 0 && (
              <p className="text-ink-mid max-w-xl">Nothing published yet — check back soon.</p>
            )}

            <div className="max-w-3xl mt-16">
              {years.map((year) => (
                <div key={year} className="mb-4">
                  <p className="font-mono-alt text-sm text-warm-gray mb-2 mt-12 first:mt-0">
                    {year}
                  </p>
                  <div className="border-t-2 border-ink">
                    {grouped[year].map((post) => (
                      <Link
                        key={post.slug}
                        href={`/writing/${post.slug}`}
                        className="group block py-8 border-b border-ink/15"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                          <span className="font-mono-alt text-xs text-warm-gray tabular-nums flex-shrink-0 sm:w-16">
                            {formatDate(post.date)}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-2 group-hover:underline underline-offset-2">
                              {post.title}
                            </h2>
                            <p className="text-ink-mid leading-relaxed mb-3 max-w-xl">
                              {post.standfirst}
                            </p>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
