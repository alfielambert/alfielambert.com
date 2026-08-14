import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const WRITING_DIR = path.join(process.cwd(), 'content/writing')

export interface PostFrontmatter {
  title: string
  description: string
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
  description: string
  date: string
  updated: string
  topics: string[]
  image: string
  draft: boolean
  related: string[]
  author: string
  content: string
  readingTime: number
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
  if (!fs.existsSync(WRITING_DIR)) return []

  const files = fs.readdirSync(WRITING_DIR).filter((f) => f.endsWith('.mdx'))

  return files.map((filename) => {
    const filePath = path.join(WRITING_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const fm = data as PostFrontmatter

    const slug = fm.slug || filename.replace(/\.mdx$/, '')

    return {
      slug,
      title: fm.title,
      description: fm.description,
      date: fm.date,
      updated: fm.updated || fm.date,
      topics: fm.topics || [],
      image: fm.image || DEFAULT_SOCIAL_IMAGE,
      draft: Boolean(fm.draft),
      related: fm.related || [],
      author: fm.author || 'Alfie Lambert',
      content,
      readingTime: readingTimeMinutes(content),
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
