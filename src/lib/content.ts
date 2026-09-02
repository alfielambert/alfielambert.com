export const personId = 'https://alfielambert.com/#person'

export const author = {
  name: 'Alfie Lambert',
  role: 'AI transformation, product & GTM leader.',
  bio: 'I help organisations turn AI from experiments into working systems, across product, agents and go-to-market.',
}

export const meta = {
  githubUrl: 'https://github.com/alfielambert',
  // TODO: Add booking link when available
  bookingLink: null as string | null,
  // TODO: Add a public-safe CV (current version exposes a personal phone number and email). Place at /cv.pdf in public/
  cvPath: null as string | null,
}

export const hero = {
  eyebrow: 'AI Transformation · Product · Company Building',
  headlineParts: ['I turn AI from experiments into', 'working systems.', ''],
  subheading:
    'Founder and product leader with 12+ years building technology companies. I work across AI products, agents, company knowledge and workflow redesign, connecting what the technology can do with how organisations actually work.',
  evidence: [
    'Approximately $1m ARR',
    '£500k raised',
    'Enterprise deals',
    '12+ years building technology companies',
  ],
}

export const thesis = {
  lead: 'The unit of AI transformation is the workflow.',
  support:
    'Models matter, but most of the value is won or lost in the surrounding system: the context an AI can access, the handoffs between people and agents, the controls on what it can do, and whether the workflow itself has actually been redesigned.',
  principles: [
    'Workflow before model.',
    'Context is infrastructure.',
    'Measure changed work, not AI adoption.',
  ],
}

export type AccentColor = 'yellow' | 'coral' | 'blue'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  number: string
  name: string
  tagline: string
  role: string
  dates: string
  description: string
  what: string
  outcomes: string[]
  tags: string[]
  accentColor: AccentColor
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'oiya',
    number: '01',
    name: 'Oiya',
    tagline: 'Building company knowledge infrastructure for AI agents',
    role: 'Co-founder · Product and GTM leadership',
    dates: 'January 2026–Present',
    description:
      'Oiya gives AI agents a shared layer of structured, evolving company knowledge, so agents can work from reliable context rather than fragmented documents, stale prompts or isolated memories.',
    what:
      'I co-founded the business and lead product and GTM: positioning, the investor narrative, customer discovery and the commercial pipeline.',
    outcomes: [
      'Secured two letters of intent',
      'Developed the product positioning, investor narrative and commercial pipeline',
      'Built multi-model GTM tooling and supporting workflows',
    ],
    tags: ['AI Agents', 'Company Knowledge', 'Agent Context'],
    accentColor: 'yellow',
    links: [{ label: 'Oiya', href: 'https://oiya.ai' }],
  },
  {
    id: 'bizcrunch',
    number: '02',
    name: 'BizCrunch',
    tagline: 'A data platform for small-business acquisition',
    role: 'Co-founder · Product & Growth Lead',
    dates: 'April 2023–January 2026',
    description:
      'A data, analysis and outreach platform for acquisition entrepreneurs, search funds and professional buyers looking for UK businesses, combining Companies House data with enrichment, financial analysis and direct outreach tools.',
    what:
      'I acted as product manager and led a team of four, working across product, positioning and commercial development from early customer discovery through to launch and growth.',
    outcomes: [
      'Raised £500,000',
      'Built AI-assisted company-classification capabilities, replacing vague SIC codes with useful categories',
      'Took the company through the Block Dojo accelerator and won the cohort presentation-day pitch, with BizCrunch fully funded on presentation day',
      'Hosted and produced the company podcast',
    ],
    tags: ['B2B Data', 'Product Leadership', 'AI Classification', 'Podcast Host'],
    accentColor: 'coral',
    links: [{ label: 'Block Dojo interview (CoinGeek)', href: 'https://www.youtube.com/watch?v=inLbFm5LS4U' }],
  },
  {
    id: 'lix',
    number: '03',
    name: 'Lix',
    tagline: 'Bootstrapping B2B data infrastructure to enterprise delivery',
    role: 'Director · Formerly operating co-founder',
    dates: 'November 2020–Present',
    description:
      'Lix builds B2B people and company data products, APIs and enterprise data infrastructure for sales, recruitment, research and technology teams.',
    what:
      'I was an operating co-founder and now retain a director role. As an operator, I helped bootstrap the business to approximately $1m ARR with a two-person team and led enterprise deals with organisations including Gartner, Trend Micro, Netflix, LEK and Samsung.',
    outcomes: [
      'Bootstrapped to approximately $1m ARR with a two-person team',
      'Led enterprise deals with Gartner, Trend Micro, Netflix, LEK and Samsung',
      'Built acquisition channels across product-led growth, content, partnerships and enterprise sales',
    ],
    tags: ['B2B Data', 'API', 'Enterprise Sales', 'Bootstrapped'],
    accentColor: 'blue',
    links: [{ label: 'Lix', href: 'https://lix-it.com' }],
  },
]

export const capabilities = [
  {
    number: '01',
    title: 'AI transformation and workflow redesign',
    body: 'Identifying which workflows are worth changing, deciding where AI or agents actually belong in them, designing the handoffs between people and agents, and defining outcomes that can be measured.',
  },
  {
    number: '02',
    title: 'AI agents, knowledge and context',
    body: 'Organisational knowledge, context, permissions and controls: the infrastructure agents need around them to work reliably rather than impressively in a demo.',
  },
  {
    number: '03',
    title: 'Product strategy and positioning',
    body: 'Turning technically complex capability into a product and a proposition that technical and commercial audiences can both understand and buy.',
  },
  {
    number: '04',
    title: 'Company building and GTM',
    body: 'Validation, early product development, fundraising, distribution, enterprise sales and the commercial traction that turns a working system into a business.',
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
    'Positioning aside, this is the work itself: production systems combining AI models, APIs and deterministic logic, built to solve specific commercial problems.',
  projects: [
    {
      number: '01',
      title: 'Governed agent knowledge',
      description:
        'I design and operate structured knowledge and agent workflows using OpenLore, including personal and team workspaces, agent instructions, memory, SOPs and MCP-based access. I also built Second Brain, a deterministic knowledge-governance system that turns evidence into controlled knowledge for agents.',
      visual: {
        type: 'list',
        items: [
          'Personal and team workspaces',
          'Agent instructions and memory',
          'SOPs',
          'MCP-based access',
        ],
      },
      tags: ['MCP', 'Agent Memory', 'Knowledge Systems'],
      links: [
        { label: 'OpenLore', href: 'https://github.com/alfielambert/OpenLore' },
        { label: 'Second Brain', href: 'https://github.com/alfielambert/second-brain' },
      ],
    },
    {
      number: '02',
      title: 'Production workflow automation',
      description:
        'An n8n workflow that takes a photo sent over Telegram and turns it into a published social post: image handling through Cloudinary, caption generation through OpenAI, publishing through the Meta Graph API, with status checks, retries and a guard that only publishes once every step has actually finished.',
      visual: {
        type: 'flow',
        steps: ['Telegram photo', 'Cloudinary', 'OpenAI', 'Meta Graph API', 'Published post'],
      },
      tags: ['n8n', 'APIs', 'Automation'],
    },
    {
      number: '03',
      title: 'Intent-signal prospecting',
      description:
        'A workflow built on the Lix API that searches LinkedIn posts by keyword cluster, deduplicates the authors behind them, enriches the resulting people, finds verified contact details and produces a campaign-ready export, turning a live conversation into an outreach-ready prospect.',
      visual: {
        type: 'flow',
        steps: ['Keyword clusters', 'LinkedIn posts', 'Author dedup', 'Enrichment', 'Campaign export'],
      },
      tags: ['Lix API', 'LLM Classification', 'GTM'],
    },
    {
      number: '04',
      title: 'Practical model evaluation',
      description:
        'Running a fixed prompt bank across several models, recording where a brand gets mentioned, comparing outputs over time and testing classification quality against known data, then deciding where deterministic logic is more reliable than adding another model.',
      visual: {
        type: 'transform',
        from: 'Model outputs',
        to: 'Evaluated signal',
      },
      tags: ['Model Evaluation', 'Python', 'Deterministic Logic'],
    },
  ] as SystemProject[],
  closing:
    'The pattern across all of these is the same: combine AI models with deterministic logic, clear controls and a human gate where judgement still matters, rather than trusting a model to run the whole thing unsupervised.',
}

export const about = {
  paragraphs: [
    'More than 12 years building technology companies, from early-stage product and growth through to enterprise commercial delivery.',
    'At Lix, I helped bootstrap a B2B data business to approximately $1m in annual recurring revenue with a two-person team, and led enterprise deals with organisations including Gartner, Trend Micro and Samsung. At BizCrunch, I acted as product manager for a team of four, took the company through the Block Dojo accelerator and helped raise £500,000. At Oiya, I am building company knowledge infrastructure for AI agents from the ground up.',
    'My role now is usually the same wherever I apply it: connecting what AI and modern software can actually do with how an organisation really works, then making that useful to the people who have to adopt it.',
    'Before moving into technology, I returned to education through an access course, achieved a 100% distinction rate and went on to study Human, Social and Political Sciences at the University of Cambridge. The plan was to become a journalist, and I still love to write, but I was bitten by the tech bug and that led me down the path I\'ve been on ever since.',
  ],
}

export const speakingTopics = [
  'AI transformation starts with workflow design',
  'Building reliable AI agents: context, knowledge and human handoffs',
  'From pilots to production: where enterprise AI programmes go wrong',
]

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
      'I created and hosted a specialist podcast covering the small-business acquisition market. Across 44 full episodes, I interviewed founders, investors and acquisition entrepreneurs. The Buy-Side Breakdown series assessed real businesses for sale and how a buyer might grow them.',
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
      'Interviewed during the Block Dojo accelerator about BizCrunch, the acquisition market and how we were using data and technology to improve the process of buying and selling businesses.',
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
      'Spoke on entrepreneurship through acquisition and joined an early-stage company panel covering company building, growth and investment.',
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
    role: 'Co-founder, Product & GTM Leadership',
    type: 'founder',
  },
  {
    period: 'Apr 2023–Jan 2026',
    company: 'BizCrunch',
    role: 'Co-founder · Product & Growth Lead',
    type: 'founder',
  },
  {
    period: 'Nov 2020–Present',
    company: 'Lix',
    role: 'Director · Formerly Operating Co-founder',
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
