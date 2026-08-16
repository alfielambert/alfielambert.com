import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/writing'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  return [
    {
      url: 'https://alfielambert.com/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://alfielambert.com/page-metadata-inspector',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://alfielambert.com/page-metadata-inspector/support',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://alfielambert.com/page-metadata-inspector/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://alfielambert.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://alfielambert.com/writing',
      lastModified: posts[0] ? new Date(posts[0].updated) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `https://alfielambert.com/writing/${post.slug}`,
      lastModified: new Date(post.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
