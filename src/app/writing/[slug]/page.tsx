import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { AuthorBlock } from '@/components/writing/AuthorBlock'
import { RelatedWriting } from '@/components/writing/RelatedWriting'
import { mdxComponents } from '@/components/writing/mdx-components'
import { getAllPosts, getPostBySlug, getPostNumber, getRelatedPosts } from '@/lib/writing'
import { author } from '@/lib/content'

interface PageProps {
  params: Promise<{ slug: string }>
}

function isViewable(post: ReturnType<typeof getPostBySlug>): post is NonNullable<typeof post> {
  if (!post) return false
  if (post.draft && process.env.NODE_ENV === 'production') return false
  return true
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!isViewable(post)) return {}

  const url = `https://alfielambert.com/writing/${post.slug}`
  const imageUrl = post.image.startsWith('http')
    ? post.image
    : `https://alfielambert.com${post.image}`

  return {
    title: `${post.title} | Alfie Lambert`,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [author.name],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [{ url: imageUrl, alt: post.title }],
    },
    robots: { index: true, follow: true },
  }
}

function formatLongDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00Z')
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!isViewable(post)) notFound()

  const number = getPostNumber(post.slug)
  const related = getRelatedPosts(post)
  const url = `https://alfielambert.com/writing/${post.slug}`
  const imageUrl = post.image.startsWith('http')
    ? post.image
    : `https://alfielambert.com${post.image}`
  const hasUpdate = post.updated !== post.date

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Person', name: author.name, url: 'https://alfielambert.com' },
    datePublished: post.date,
    dateModified: post.updated,
    image: imageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <>
      <SiteHeader />
      <main>
        <article className="border-t-2 border-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
            <header className="max-w-[760px] mx-auto mb-12">
              {post.draft && (
                <p className="font-mono-alt text-xs tracking-widest uppercase bg-yellow text-ink inline-block px-2 py-1 mb-6 border border-ink">
                  Draft — not published
                </p>
              )}
              <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
                Writing / {number}
              </p>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.08] mb-6">
                {post.title}
              </h1>
              <p className="text-ink-mid text-xl leading-relaxed mb-8 max-w-[640px]">
                {post.standfirst}
              </p>
              <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray">
                {author.name} &middot;{' '}
                <time dateTime={post.date}>{formatLongDate(post.date)}</time>
                {hasUpdate && (
                  <>
                    {' '}
                    &middot; Updated <time dateTime={post.updated}>{formatLongDate(post.updated)}</time>
                  </>
                )}{' '}
                &middot; {post.readingTime} min read
              </p>
            </header>

            <hr className="max-w-[760px] mx-auto border-ink mb-14" />

            <div className="max-w-[760px] mx-auto">
              <post.MDXContent components={mdxComponents} />

              <AuthorBlock />
              <RelatedWriting posts={related} />
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
