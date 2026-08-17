import type { ComponentType } from 'react'
import { generatedWritingPosts } from './generated/writing-content.generated'

export interface PostFrontmatter {
  title: string
  description: string
  /** On-page dek shown under the H1. Falls back to `description` if omitted. */
  standfirst?: string
  date: string
  updated?: string
  topics: string[]
  image?: string
  slug?: string
  draft?: boolean
  related?: string[]
  author?: string
}

export interface Post {
  slug: string
  title: string
  /** Meta/OG/Twitter/JSON-LD description. */
  description: string
  /** On-page dek shown under the H1 — may differ from `description`. */
  standfirst: string
  date: string
  updated: string
  topics: string[]
  image: string
  draft: boolean
  related: string[]
  author: string
  content: string
  readingTime: number
  /** Compiled at build time from the post's MDX body — see scripts/generate-writing-content.mjs. */
  MDXContent: ComponentType<{ components?: Record<string, unknown> }>
}

const DEFAULT_SOCIAL_IMAGE = '/og-image.jpg'

function readingTimeMinutes(content: string): number {
  const plain = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/[#>*_~-]/g, ' ')
  const words = plain.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function loadRawPosts(): Post[] {
  return generatedWritingPosts.map(({ slug, frontmatter, content, MDXContent }) => {
    const fm = frontmatter as unknown as PostFrontmatter

    return {
      slug: fm.slug || slug,
      title: fm.title,
      description: fm.description,
      standfirst: fm.standfirst || fm.description,
      date: fm.date,
      updated: fm.updated || fm.date,
      topics: fm.topics || [],
      image: fm.image || DEFAULT_SOCIAL_IMAGE,
      draft: Boolean(fm.draft),
      related: fm.related || [],
      author: fm.author || 'Alfie Lambert',
      content,
      readingTime: readingTimeMinutes(content),
      MDXContent,
    }
  })
}

/** All published posts, newest first. */
export function getAllPosts(): Post[] {
  return loadRawPosts()
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** Every post including drafts — used only for local dev / preview needs. */
export function getAllPostsIncludingDrafts(): Post[] {
  return loadRawPosts().sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return loadRawPosts().find((p) => p.slug === slug)
}

/** Chronological issue number ("001" = earliest published post). */
export function getPostNumber(slug: string): string {
  const chronological = [...getAllPosts()].sort((a, b) => (a.date > b.date ? 1 : -1))
  const index = chronological.findIndex((p) => p.slug === slug)
  return String(index + 1).padStart(3, '0')
}

export function getRelatedPosts(post: Post, max = 3): Post[] {
  const all = getAllPosts()
  const bySlug = post.related
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is Post => Boolean(p) && p!.slug !== post.slug)
  return bySlug.slice(0, max)
}
