export const personId = 'https://alfielambert.com/#person'

export const author = {
  name: 'Alfie Lambert',
  role: 'Co-founder of Oiya.',
  bio: 'Co-founder of Oiya, the governed knowledge layer for AI agents. Previously co-founded Lix and BizCrunch.',
}

export const meta = {
  githubUrl: 'https://github.com/alfielambert',
  oiyaUrl: 'https://oiya.ai',
  // TODO: Add booking link when available
  bookingLink: null as string | null,
  // TODO: Add a public-safe CV (current version exposes a personal phone number and email). Place at /cv.pdf in public/
  cvPath: null as string | null,
}

export const hero = {
  eyebrow: 'Co-founder · Oiya',
  headline: { before: 'I build', highlight: 'AI and data', after: 'companies, and take them to market.' },
  subheading:
    "I'm co-founder of Oiya, the governed knowledge layer between company data and AI agents, where I lead go-to-market. Before Oiya, I co-founded Lix and BizCrunch, taking B2B data products from first version through to enterprise sales and fundraising.",
}

export const oiya = {
  headline: 'The governed knowledge layer between company data and AI agents.',
  problem:
    "Companies are deploying more AI agents every quarter, and each one gets its own prompt, retrieval setup and memory. With no shared source of truth underneath, they drift apart on the basics: pricing, definitions, processes, customer context. A sales agent quotes this quarter's pricing while the support agent is still quoting last quarter's.",
  solution:
    'Oiya sits underneath every agent. It connects the sources a company already uses, organises business definitions and decisions into a governed knowledge graph, and gives every agent one place to read from and write back to. Nothing becomes canonical without human approval, and when the business changes, every agent stays aligned.',
  facts: [
    { label: 'Role', value: 'Co-founder · GTM & Partnerships' },
    { label: 'Founding team', value: 'Adil Karim, Ben Turner, Alfie Lambert' },
    { label: 'Since', value: 'January 2026' },
  ],
}

export type AccentColor = 'yellow' | 'coral' | 'blue'

export interface ProjectLink {
  label: string
  href: string
}

export interface Company {
  id: string
  name: string
  role: string
  dates: string
  description: string
  outcomes: string[]
  accentColor: AccentColor
  links?: ProjectLink[]
}

export const companiesIntro =
  "Before Oiya, I co-founded two B2B data companies. Both times the job was the same: build the product, find out who'll pay for it, and get it to them."

export const companies: Company[] = [
  {
    id: 'lix',
    name: 'Lix',
    role: 'Co-founder · now Director',
    dates: 'Since November 2020',
    description:
      'B2B people and company data: self-service products, APIs and enterprise data infrastructure for sales, recruitment, research and technology teams.',
    outcomes: [
      'Products used by tens of thousands of people',
      'Built acquisition across product-led growth, content, partnerships and enterprise sales',
      'Led enterprise deals with Gartner, Trend Micro, Netflix, L.E.K. Consulting and Samsung',
      'Helped take the business from self-service data products into enterprise API and data-infrastructure delivery',
    ],
    accentColor: 'blue',
    links: [{ label: 'Lix', href: 'https://lix-it.com' }],
  },
  {
    id: 'bizcrunch',
    name: 'BizCrunch',
    role: 'Co-founder · Product & Growth',
    dates: 'April 2023–January 2026',
    description:
      'A data, analysis and outreach platform for people buying UK small businesses: acquisition entrepreneurs, search funds and professional buyers.',
    outcomes: [
      'Raised pre-seed and seed rounds',
      'Product manager for a team of four, from customer discovery through launch to thousands of users',
      'Won the Block Dojo cohort pitch and secured full programme funding on presentation day',
      'Led development of AI-powered industry classification, replacing broad SIC codes with commercially useful categories',
    ],
    accentColor: 'coral',
    links: [{ label: 'Block Dojo interview (CoinGeek)', href: 'https://www.youtube.com/watch?v=inLbFm5LS4U' }],
  },
]

export const principles = [
  {
    number: '01',
    title: 'Start with the commercial problem',
    body: "Technology matters when it changes what a customer can do, how quickly they can do it, what it costs or what they get from it. I start there and work back to the product.",
  },
  {
    number: '02',
    title: 'Get in front of buyers early',
    body: 'Product, positioning and GTM should develop together. An imperfect product in front of a real buyer teaches more than months of refining assumptions internally.',
  },
  {
    number: '03',
    title: 'Build distribution alongside the product',
    body: "A product without a route to customers isn't finished. I've built that route through product-led growth, content, partnerships and enterprise sales.",
  },
  {
    number: '04',
    title: 'Stay close to the technology',
    body: 'I still prototype, write code where it helps and work directly with APIs, models and automation. Knowing what the technology can actually do makes product and positioning decisions faster.',
  },
]

export type SystemVisual =
  | { type: 'flow'; steps: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'transform'; from: string; to: string }

export interface SystemProject {
  number: string
  title: string
  description: string
  visual: SystemVisual
  tags: string[]
  links?: ProjectLink[]
}

export const systems = {
  intro:
    "I'm a commercial founder who still builds. I prototype, work directly with APIs and models, and design agent workflows myself. These are systems I've designed and shipped.",
  projects: [
    {
      number: '01',
      title: 'Governed agent knowledge',
      description:
        "Second Brain is an open-source Python system I built that turns evidence into approved, traceable knowledge and compiles task-specific context for AI agents. It's designed to share that knowledge across agents through OpenLore and MCP, and I run my own agent workspaces, instructions and SOPs on OpenLore.",
      visual: {
        type: 'flow',
        steps: ['Evidence', 'Review', 'Approved knowledge', 'Agent context'],
      },
      tags: ['Python', 'MCP', 'Agent Knowledge'],
      links: [
        { label: 'Second Brain', href: 'https://github.com/alfielambert/second-brain' },
        { label: 'OpenLore', href: 'https://github.com/aakarim/OpenLore' },
      ],
    },
    {
      number: '02',
      title: 'Multi-model market intelligence',
      description:
        "Internal tools for Oiya's GTM that run a fixed set of prompts across several AI models, record how each one describes and recommends companies in our market, and track competitor presence and content gaps over time. Testing model output against known data also shows where deterministic logic does the job more reliably than another model call.",
      visual: {
        type: 'transform',
        from: 'Model outputs',
        to: 'Market signal',
      },
      tags: ['Python', 'Model APIs', 'Evaluation'],
    },
    {
      number: '03',
      title: 'Intent-signal prospecting',
      description:
        'A config-driven Python pipeline built on the Lix API. It finds LinkedIn posts by keyword cluster, deduplicates and enriches the authors, finds business email addresses and produces a campaign-ready export, so a live conversation becomes an outreach-ready prospect.',
      visual: {
        type: 'flow',
        steps: ['Keyword clusters', 'LinkedIn posts', 'Author dedup', 'Enrichment', 'Campaign export'],
      },
      tags: ['Python', 'Lix API', 'GTM'],
    },
    {
      number: '04',
      title: 'Production workflow automation',
      description:
        'An n8n workflow I deployed for a paying client. A photo sent over Telegram becomes a published social post: Cloudinary handles the image, OpenAI writes the caption within set constraints and the Meta Graph API publishes it, with retries, credential controls and a guard that only publishes once every step has finished.',
      visual: {
        type: 'flow',
        steps: ['Telegram photo', 'Cloudinary', 'OpenAI', 'Meta Graph API', 'Published post'],
      },
      tags: ['n8n', 'APIs', 'Automation'],
    },
  ] as SystemProject[],
  closing:
    "The pattern across all of these: AI models where they add something, deterministic logic where it's more reliable, and a person signing off where judgement matters.",
}

export const about = {
  headline: "I've spent my career building technology companies.",
  paragraphs: [
    'At Lix, which I co-founded with Adil Karim, we built B2B data products used by tens of thousands of people. I led enterprise deals with organisations including Gartner, Trend Micro, Netflix, L.E.K. Consulting and Samsung.',
    'At BizCrunch, I was product manager for a team of four, took the platform to thousands of users, raised pre-seed and seed rounds and won the Block Dojo accelerator cohort pitch.',
    "Today I'm co-founder of Oiya with Adil and Ben Turner, building the governed knowledge layer between company data and AI agents. I lead go-to-market, positioning and partnerships.",
    "My first role close to ML & AI was at Pivigo in 2017, working on growth for a platform that connected organisations with data scientists. Since then I've built with LLMs, data pipelines, APIs, automation and agent systems.",
    'While at University, I ran marketing at early-stage companies, including Strawberries & Creem festival, where I helped grow attendance tenfold to 10,000.',
    "Before moving into technology, I returned to education through an access course, achieved a 100% distinction rate and went on to study Human, Social and Political Sciences at the University of Cambridge. The plan was to become a journalist, and I still love to write, but I was bitten by the tech bug and that led me down the path I've been on ever since.",
  ],
}

export interface SpeakingLink {
  label: string
  href: string
}

export interface SpeakingItem {
  type: string
  title: string
  description: string
  stats: string[]
  image: string
  imageAlt: string
  imageHref: string
  imageAriaLabel: string
  isVideo: boolean
  links: SpeakingLink[]
}

export const speaking: SpeakingItem[] = [
  {
    type: 'Podcast host',
    title: 'The M&A Zing Podcast',
    description:
      "I created and hosted BizCrunch's podcast on the small-business acquisition market, interviewing founders, investors and acquisition entrepreneurs across 44 full episodes. The Buy-Side Breakdown series assessed real businesses for sale and how a buyer might grow them.",
    stats: ['44 full episodes', 'Nearly 9,500 combined listens and views'],
    image: '/assets/mazing-podcast.jpg',
    imageAlt: 'Cover art for The M&A Zing Podcast, featuring Alfie Lambert',
    imageHref: 'https://open.spotify.com/show/6Plsau3DROLuv0ayBEZG6O',
    imageAriaLabel: 'Listen to The M&A Zing Podcast on Spotify',
    isVideo: false,
    links: [
      { label: 'Listen on Spotify', href: 'https://open.spotify.com/show/6Plsau3DROLuv0ayBEZG6O' },
    ],
  },
  {
    type: 'Media interview',
    title: 'CoinGeek Interview',
    description:
      'Interviewed during the Block Dojo accelerator about BizCrunch, the acquisition market and how we were using data to make buying and selling small businesses easier.',
    stats: [],
    image: '/assets/coingeek-interview.jpg',
    imageAlt: 'CoinGeek Conversations interview thumbnail featuring BizCrunch',
    imageHref: 'https://www.youtube.com/watch?v=inLbFm5LS4U',
    imageAriaLabel: 'Watch the CoinGeek interview on YouTube',
    isVideo: true,
    links: [
      { label: 'Watch interview', href: 'https://www.youtube.com/watch?v=inLbFm5LS4U' },
      {
        label: 'Read article',
        href: 'https://coingeek.com/block-dojo-startups-sports-finex-and-bizcrunch-improving-business-efficiency-with-blockchain-video/',
      },
    ],
  },
  {
    type: 'Conference talk',
    title: 'London Blockchain Conference',
    description:
      'Spoke on entrepreneurship through acquisition and joined a founder panel on company building, growth and investment.',
    stats: [],
    image: '/assets/lbc-talk.jpg',
    imageAlt: 'Alfie Lambert speaking on stage at the London Blockchain Conference',
    imageHref: 'https://youtu.be/ozCdym6VKOs?si=MHM98OWUtUOXyWs6',
    imageAriaLabel: 'Watch the London Blockchain Conference talk on YouTube',
    isVideo: true,
    links: [
      { label: 'Watch talk', href: 'https://youtu.be/ozCdym6VKOs?si=MHM98OWUtUOXyWs6' },
      { label: 'Past speaker listing', href: 'https://londonblockchain.net/speakers/past-speakers/' },
    ],
  },
]

export interface TimelineEntry {
  period: string
  company: string
  role: string
  type: 'founder' | 'operator' | 'consultant' | 'education'
  logo?: string
  subtitle?: string
}

export const timeline: TimelineEntry[] = [
  {
    period: 'Jan 2026–Present',
    company: 'Oiya',
    role: 'Co-founder · GTM & Partnerships',
    type: 'founder',
  },
  {
    period: 'Apr 2023–Jan 2026',
    company: 'BizCrunch',
    role: 'Co-founder · Product & Growth',
    type: 'founder',
  },
  {
    period: 'Nov 2020–Present',
    company: 'Lix',
    role: 'Co-founder · now Director',
    type: 'founder',
  },
  {
    period: 'Mar 2018–Nov 2020',
    company: 'Lambert & Bizzle',
    role: 'Growth Consultant',
    type: 'consultant',
  },
  {
    period: 'Feb–Dec 2017',
    company: 'Pivigo',
    role: 'Growth',
    type: 'operator',
  },
  {
    period: 'Oct 2016–Jan 2017',
    company: 'CityMunch',
    role: 'Chief Marketing Officer',
    type: 'operator',
  },
  {
    period: 'Jul 2014–Mar 2018',
    company: 'Strawberries & Creem',
    role: 'Director of Marketing and Communications',
    type: 'operator',
  },
  {
    period: 'Apr 2013–Jan 2015',
    company: 'Futurecoins',
    role: 'Chief Marketing Officer',
    type: 'operator',
  },
  {
    period: '2013–2016',
    company: 'University of Cambridge',
    role: 'BA, Human, Social and Political Sciences',
    subtitle: 'via City and Islington College Access Diploma, 100% distinction rate',
    type: 'education',
    logo: '/assets/cambridge-logo.png',
  },
  {
    period: '2012–2013',
    company: 'City and Islington College',
    role: 'Access Diploma, Mixed Media, 100% distinction rate',
    type: 'education',
  },
]
