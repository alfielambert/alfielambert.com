# alfielambert.com

My personal website: [alfielambert.com](https://alfielambert.com)

I'm co-founder of Oiya, the governed knowledge layer for AI agents. Before that I co-founded Lix and BizCrunch. The site is my professional home outside LinkedIn: what I'm building now, companies I've built, systems I've shipped, writing, speaking and a way to get in touch.

## Stack

- **Next.js** (App Router) + **TypeScript** + **React**
- **Tailwind CSS v4** (theme tokens in `src/app/globals.css`)
- **Framer Motion** for section-level animation
- MDX-based writing system (`@mdx-js/mdx`, `gray-matter`, `remark-gfm`)
- Deployed on **Cloudflare Workers** via `@opennextjs/cloudflare`

## Local development

```bash
npm install
npm run dev
```

This runs a content-generation step first (see below), then starts `next dev`.

## Project structure

```
src/app/                  App Router routes (page.tsx, layout.tsx, writing/, privacy/, page-metadata-inspector/)
src/components/           Homepage sections and shared UI (src/components/ui/)
src/components/writing/   MDX renderers and article furniture (callouts, figures, related posts)
src/lib/content.ts        All homepage copy: hero, proof, Oiya, companies, systems, principles, timeline, speaking
src/lib/writing.ts        Reads generated writing content, computes reading time, related posts
content/writing/*.mdx     Article source files
scripts/generate-writing-content.mjs   Compiles MDX into a build-time module (see below)
```

## Where homepage content lives

Almost all homepage copy (the hero, proof points, Oiya, companies, hands-on systems, principles, timeline, speaking items) is centralised in `src/lib/content.ts`. Components under `src/components/` are mostly presentation; edit content there rather than in JSX where possible.

## How writing is published

1. Add an `.mdx` file to `content/writing/` with frontmatter (`title`, `description`, `date`, `topics`, `draft`, etc; see `src/lib/writing.ts` for the full shape).
2. `scripts/generate-writing-content.mjs` compiles every article's MDX body into a plain JS module at build time (`src/lib/generated/`). This exists because Cloudflare Workers have no filesystem at runtime and disallow the `new Function` calls that `next-mdx-remote`'s runtime MDX evaluator relies on, so compiling ahead of time avoids both problems.
3. Set `draft: false` to publish. Draft posts are excluded from `getAllPosts()`, the sitemap, RSS and the homepage "Latest writing" section, and 404 in production.
4. Commit and push. The sitemap (`src/app/sitemap.ts`), RSS (`src/app/feed.xml/route.ts`) and homepage update automatically for published content.

There is no CMS. Don't add one for this.

## Validation commands

```bash
npm run lint          # ESLint
npx tsc --noEmit       # TypeScript, no build output
npm run build          # Full production build (also runs the content-generation step)
```

## Deployment notes

Production is a Cloudflare Worker built with `@opennextjs/cloudflare`. Pushes to `main` trigger an automated Cloudflare build and deploy.

For a manual deploy:

```bash
npm run deploy   # opennextjs-cloudflare build && opennextjs-cloudflare deploy
npm run preview  # build + local Cloudflare Worker preview
```

`wrangler.jsonc` and `open-next.config.ts` hold the Worker/asset bindings. The site has no ISR or revalidation (everything is static or `force-static`), so no incremental cache store is configured.

## Repository

This repository is public because I want the work itself to be visible: the point where product thinking, GTM and software increasingly overlap.

More about my work at [alfielambert.com](https://alfielambert.com).
