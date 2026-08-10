export const meta = {
  email: 'alfielambert@zoho.com',
  // TODO: Add booking link when available
  bookingLink: null as string | null,
  // TODO: Add CV PDF when available — place at /cv.pdf in public/
  cvPath: null as string | null,
}

export const hero = {
  headlineParts: ['I build and take', 'AI, data & SaaS', 'products to market.'],
  subheading:
    'Founder and product-growth leader with more than 12 years of experience across product strategy, positioning, go-to-market, fundraising and early-stage company building.',
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
    title: 'Technical communication',
    body: 'Helping customers, investors and teams understand complex AI and data products. Translating difficult infrastructure into clear commercial value.',
  },
]

export const about = {
  paragraphs: [
    'I have spent more than a decade building and growing early-stage technology companies.',
    'Across Lix, BizCrunch and Oiya, I have worked from early customer discovery through product development, positioning, launch, growth, enterprise delivery and fundraising. I have led AI-powered product features, built go-to-market strategies, raised investment and represented companies through podcasts, conference talks and investor pitches.',
    'I am particularly interested in products that turn difficult data or infrastructure problems into something commercially useful. My role is often to connect what the technology can do with what the market actually needs, then make that value clear to customers, partners and investors.',
    'Before moving into technology, I returned to education through an access course, achieved a 100% distinction rate and went on to study Human, Social and Political Sciences at the University of Cambridge. The plan was to become a journalist, and I still love to write, but I was bitten by the tech bug and that led me down the path I\'ve been on ever since.',
  ],
}

export const speaking = [
  {
    type: 'Podcast host',
    title: 'The M&AZing Podcast',
    description:
      'I created and hosted a specialist podcast covering the small-business acquisition market. Across 44 full episodes, I interviewed founders, investors and acquisition entrepreneurs. The Buy-Side Breakdown series assessed real businesses for sale and how a buyer might grow them.',
    stats: ['44 full episodes', 'Nearly 9,500 combined listens and views'],
    // TODO: Add podcast artwork — place at /assets/mazing-podcast.jpg
    image: null as string | null,
  },
  {
    type: 'Investor showcase',
    title: 'BlockDojo Cohort 5 at Plexal',
    description:
      'Delivered the investor showcase pitch for BizCrunch at the BlockDojo Cohort 5 event at Plexal, following completion of the accelerator programme.',
    stats: [],
    // TODO: Add image from Plexal pitch — place at /assets/plexal-pitch.jpg
    image: null as string | null,
  },
  {
    type: 'Conference talk',
    title: 'London Blockchain Conference',
    description:
      'Spoke at the London Blockchain Conference and joined an early-stage startup panel discussing company building, growth and investment.',
    stats: [],
    // TODO: Add conference image — place at /assets/lbc-talk.jpg
    image: null as string | null,
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
