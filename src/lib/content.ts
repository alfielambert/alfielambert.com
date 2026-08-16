export const author = {
  name: 'Alfie Lambert',
  role: 'Founder, product & GTM operator.',
  bio: 'I build AI, data and SaaS products and take them to market.',
}

export const meta = {
  githubUrl: 'https://github.com/alfielambert',
  // TODO: Add booking link when available
  bookingLink: null as string | null,
  // TODO: Add CV PDF when available — place at /cv.pdf in public/
  cvPath: null as string | null,
}

export const hero = {
  headlineParts: ['I build and take', 'AI, data & SaaS', 'products to market.'],
  subheading:
    'Founder and product-growth leader with more than 12 years of experience across product strategy, positioning, go-to-market, fundraising and early-stage company building. I also build the AI tools and GTM systems I need myself, taking commercial problems from idea to working software.',
  evidence: [
    'Raised pre-seed and seed investment',
    'Built products used by tens of thousands',
    'Won work with global enterprises',
    'Led product, growth and go-to-market',
  ],
}

export type AccentColor = 'yellow' | 'coral' | 'blue'

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
}

export const projects: Project[] = [
  {
    id: 'oiya',
    number: '01',
    name: 'Oiya',
    tagline: 'Building the knowledge layer for reliable AI agents',
    role: 'Co-founder · Product & Growth',
    dates: 'Late 2025–Present',
    description:
      'Oiya gives AI agents a shared layer of structured, evolving company knowledge, so agents can work from reliable context rather than fragmented documents, stale prompts or isolated memories.',
    what:
      'I co-founded the business and lead across positioning, product strategy, customer discovery, go-to-market and fundraising.',
    outcomes: [
      'Two signed letters of intent before launch',
      'Developed an enterprise and partner pipeline before launch',
      'Produced the investor narrative, pitch materials and market messaging',
      'Built GEOYA and other internal GTM and market-intelligence tooling',
    ],
    tags: ['AI Infrastructure', 'Knowledge Layer', 'Agent Context'],
    accentColor: 'yellow',
  },
  {
    id: 'bizcrunch',
    number: '02',
    name: 'BizCrunch',
    tagline: 'Building a data platform for small-business acquisition',
    role: 'Co-founder · Head of Product and Growth',
    dates: 'April 2023–November 2025',
    description:
      'A data, analysis and outreach platform for acquisition entrepreneurs, search funds and professional buyers looking for UK businesses. Combined Companies House information with enriched company data, financial analysis and direct outreach tools.',
    what:
      'I led the platform from early customer discovery through product development, launch and growth to thousands of users, working across product strategy, positioning, fundraising, partnerships and commercial development.',
    outcomes: [
      'Raised pre-seed and seed investment',
      'Grew the platform to thousands of users',
      'Led development of AI-powered industry classification, replacing vague SIC codes with useful categories',
      'Hosted 44 podcast episodes with nearly 9,500 combined listens and YouTube views',
      'Pitched at Plexal following the BlockDojo accelerator',
      'Spoke and joined an early-stage startup panel at the London Blockchain Conference',
    ],
    tags: ['B2B Data', 'SaaS', 'AI Features', 'Podcast Host'],
    accentColor: 'coral',
  },
  {
    id: 'lix',
    number: '03',
    name: 'Lix',
    tagline: 'Taking B2B data products from self-service to enterprise delivery',
    role: 'Co-founder',
    // TODO: Confirm exact Lix dates before publishing
    dates: 'Dates to confirm',
    description:
      'Lix developed B2B people and company data products, APIs and enterprise data infrastructure for sales, recruitment, research and technology teams.',
    what:
      'I co-founded the company and worked across product, growth and commercial strategy, from early self-service products to enterprise data infrastructure.',
    outcomes: [
      'Helped grow products to tens of thousands of users',
      'Delivered work for global organisations including Gartner, Adani, Trend Micro and Netflix',
      'Built acquisition channels across product-led growth, content, partnerships and enterprise sales',
      'Developed positioning and go-to-market for B2B data, enrichment and API products',
    ],
    tags: ['B2B Data', 'API', 'Enterprise', 'Data Infrastructure'],
    accentColor: 'blue',
  },
  {
    id: 'strawberries',
    number: '04',
    name: 'Strawberries & Creem',
    tagline: 'Growing a festival tenfold',
    role: 'Director of Marketing and Communications',
    dates: 'July 2014–March 2018',
    description:
      'A UK music festival. I joined early and helped build it from a small event into a major fixture on the festival scene, leading marketing, communications, partnerships and audience growth across four years.',
    what:
      'Earlier in my career, before moving into technology full time. I led the full commercial and communications operation.',
    outcomes: [
      'Helped grow attendance tenfold to 10,000 people',
      'Secured six-figure commercial partnerships with household-name brands',
      'Generated coverage across national newspapers, radio and music publications',
    ],
    tags: ['Growth', 'Brand', 'Partnerships', 'Communications'],
    accentColor: 'yellow',
  },
]

export const capabilities = [
  {
    number: '01',
    title: 'Product and positioning',
    body: 'Turning complex technical capabilities into clear products, categories and propositions that resonate with technical and commercial audiences alike.',
  },
  {
    number: '02',
    title: 'Go-to-market',
    body: 'Building practical strategies across customer discovery, acquisition, content, partnerships and sales, from early traction to scaled growth.',
  },
  {
    number: '03',
    title: 'Early-stage company building',
    body: 'Moving from idea through validation, launch, growth, fundraising and commercial adoption. Comfortable with no existing playbook and real ambiguity.',
  },
  {
    number: '04',
    title: 'AI-assisted product building',
    body: 'Building internal tools, agents and GTM systems myself, combining APIs, automation and custom code. That turns a commercial problem into working software without always needing to hand it to engineering.',
  },
]

export type BuildVisual =
  | { type: 'flow'; steps: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'transform'; from: string; to: string }

export interface BuildProject {
  number: string
  title: string
  description: string
  visual: BuildVisual
  tags: string[]
}

export const building = {
  intro:
    'AI-assisted development means I can build more of my own GTM infrastructure myself, rather than briefing it to an engineering team or buying another SaaS tool. These are three systems built to solve specific commercial problems.',
  projects: [
    {
      number: '01',
      title: 'GEOYA',
      description:
        'Traditional SEO metrics don\'t tell you whether ChatGPT, Claude, Gemini or Perplexity actually recommend your company when someone asks about your category, or who gets recommended instead. GEOYA is an internal system I built at Oiya that runs structured prompts across multiple AI models and turns the responses into competitive intelligence.',
      visual: {
        type: 'list',
        items: [
          'Tracks how often a brand is recommended',
          'Surfaces which competitors appear instead',
          'Flags content and positioning gaps',
        ],
      },
      tags: ['Python', 'Next.js', 'Multi-model LLMs'],
    },
    {
      number: '02',
      title: 'Intent-based prospecting',
      description:
        'Most prospecting starts from static attributes: job title, sector, company size. This system starts from what people are actually talking about. It searches LinkedIn posts for relevant conversations, then qualifies and enriches the people behind them into outreach-ready prospects, giving me an intent signal around almost any market I want to investigate.',
      visual: {
        type: 'flow',
        steps: ['Conversation', 'Person', 'Qualification', 'Enrichment', 'Prospect'],
      },
      tags: ['APIs', 'n8n', 'LLM classification'],
    },
    {
      number: '03',
      title: 'Hiring signal intelligence',
      description:
        'Job adverts show what companies are actually spending money and hiring people to do, often before it becomes obvious in surveys or press coverage. This system analyses job postings against configurable keywords and themes to surface where hiring demand is increasing, which sectors are investing, and where that points to a GTM opportunity.',
      visual: {
        type: 'transform',
        from: 'Job postings',
        to: 'Market signal',
      },
      tags: ['Job data', 'Python', 'LLM classification'],
    },
  ] as BuildProject[],
  closing:
    'Alongside these three, I build smaller workflows around lead research, qualification, enrichment and account segmentation, combining n8n, APIs, LLMs and custom code as needed — sometimes for judgement, sometimes deliberately deterministic. The pattern is the same each time: take a commercial idea, turn the data and logic behind it into a working tool, and use it to drive a GTM outcome.',
}

export const about = {
  paragraphs: [
    'I have spent more than a decade building and growing early-stage technology companies.',
    'Across Lix, BizCrunch and Oiya, I have worked from early customer discovery through product development, positioning, launch, growth, enterprise delivery and fundraising. I have led AI-powered product features, built go-to-market strategies, raised investment and represented companies through podcasts, conference talks and investor pitches.',
    'I am particularly interested in products that turn difficult data or infrastructure problems into something commercially useful. My role is often to connect what the technology can do with what the market actually needs, then make that value clear to customers, partners and investors.',
    'Before moving into technology, I returned to education through an access course, achieved a 100% distinction rate and went on to study Human, Social and Political Sciences at the University of Cambridge. The plan was to become a journalist, and I still love to write, but I was bitten by the tech bug and that led me down the path I\'ve been on ever since.',
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
    period: 'Late 2025–Present',
    company: 'Oiya',
    role: 'Co-founder, Product & Growth',
    type: 'founder',
  },
  {
    period: '2023–2025',
    company: 'BizCrunch',
    role: 'Co-founder, Head of Product and Growth',
    type: 'founder',
  },
  {
    // TODO: Confirm exact Lix dates before publishing
    period: 'Dates to confirm',
    company: 'Lix',
    role: 'Co-founder',
    type: 'founder',
  },
  {
    period: '2018–2020',
    company: 'Lambert & Bizzle',
    role: 'Growth Consultant',
    type: 'consultant',
  },
  {
    // TODO: Confirm exact Pivigo dates
    period: '2017',
    company: 'Pivigo',
    role: 'Growth',
    type: 'operator',
  },
  {
    period: '2016–2017',
    company: 'CityMunch',
    role: 'Chief Marketing Officer',
    type: 'operator',
  },
  {
    period: '2014–2018',
    company: 'Strawberries & Creem',
    role: 'Director of Marketing and Communications',
    type: 'operator',
  },
  {
    period: '2013–2015',
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
