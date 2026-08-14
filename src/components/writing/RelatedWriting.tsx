import Link from 'next/link'
import type { Post } from '@/lib/writing'

export function RelatedWriting({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 pt-10 border-t-2 border-ink">
      <p className="font-mono-alt text-xs tracking-widest uppercase text-warm-gray mb-6">
        Related writing
      </p>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/writing/${post.slug}`} className="group block">
            <p className="font-display font-bold text-lg group-hover:underline underline-offset-2 mb-1">
              {post.title}
            </p>
            <p className="text-ink-mid text-sm leading-relaxed">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
