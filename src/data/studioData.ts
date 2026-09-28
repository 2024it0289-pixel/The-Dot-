import { CaseStudy, ServiceCapability, InsightArticle, TeamMember } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kora-capital',
    number: 'Case 01',
    title: 'Kora Capital',
    clientSubtitle: 'Series-A Fintech · San Francisco / London',
    summary: 'Next-generation digital wealth & institutional credit platform.',
    description:
      'Re-engineered Kora’s entire onboarding architecture and portfolio analytics dashboard. Eliminated multi-day manual compliance hurdles with an automated verification flow.',
    impactMetric: '+42% onboarding completion',
    impactDetail: 'Reduced identity verification cycle time from 4 days to 6 minutes flat.',
    tags: ['Product Strategy', 'Design System', 'Web App UX'],
    category: 'Fintech',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnK-JZRR2Ns-BwbPvb6AjE0CZsBIye0ykSnl81yQrWKwHA8JLr_Pe5DV42Rr0lXkTG8etO-n-E7VWBEzD9vbAY-KqURjywK6tEJio0Ys8AwUXgOGYR0AUnLKeFIdAZnT6TGjOujwfGMIhM12ZLeLucT2NeJzZU3QuW-Smv5NDn-tvU_x9FXfH5rGNflBj8_Rk0Vwzsx340XJjbV24MRwI3pgnNC8a8e0X4gJ2ZTpEtfWpq6ebROY5V',
    altText:
      'Modern sleek fintech dashboard UI interface on a desktop display, dark teal and warm cream color accents, real-time portfolio charts, data tables, clean typography with high aesthetic refinement',
    highlightTeal: true,
    client: {
      name: 'Marcus Sterling',
      role: 'Founder & Chief Executive Officer, Kora Capital',
      quote:
        'The Dot gave us what three previous agencies couldn’t: surgical design execution combined with genuine commercial acumen. Our conversion doubled in week three.',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDnO1iShgAAFaMKQSnrPcYKIz6EofXFoxwwlClCH0n4AIeMjayzZHZzQupxFHXgGG4fJ7HdIBzDzcQonpf0JkK9S3s_Z42Vc6nPC65-WnOdZNqUstxJ1i0uCt9RGBnoYwrgPTldBVrk5nQn_qTEYZB18s7gy4amjW6WhD0smW33-G4k5WhefdolYM39kEFUuNLqnXOmL_xHC7Nnk8NDy3wcMikBvhAtGHYVQ1sx72OwgZRD21kNhZeq',
    },
    details: {
      challenge:
        'Institutional credit allocators were abandoning the sign-up funnel due to a fragmented 14-step paper verification workflow that took 96 hours across fragmented KYC vendors.',
      solution:
        'We designed a single continuous intake flow with progressive document verification, real-time risk scoring visualizers, and a modular portfolio dashboard built on a high-density tabular typography grid.',
      duration: '8 Weeks (Fixed Sprint)',
      stack: ['React', 'TypeScript', 'Tailwind', 'Figma Tokens', 'D3.js Visualization'],
      outcomes: [
        { label: 'Onboarding Lift', value: '+42%', note: 'From sign-up to funded account' },
        { label: 'Verification Speed', value: '6 Mins', note: 'Down from 96 hours average' },
        { label: 'Assets Under Custody', value: '$84M', note: 'Allocated in first 90 days post-launch' },
      ],
    },
  },
  {
    id: 'vela-logistics',
    number: 'Case 02',
    title: 'Vela Logistics',
    clientSubtitle: 'Freight Intelligence · Chicago / Rotterdam',
    summary: 'Global Freight Dispatch & Quoting Engine',
    description:
      'Engineered an enterprise-grade freight rate calculator, route optimization engine, and carrier communication matrix for 14 international maritime and rail freight terminals.',
    impactMetric: '3.8x faster quoting velocity',
    impactDetail: 'Deployed across 14 international freight hubs with zero workflow disruption.',
    tags: ['Complex Data UX', 'Web Platform', 'User Research'],
    category: 'Logistics',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeRfm6LGWmrxp5aejwru_0GdbwLb3JZ1JFwiomwnlKOiFlPT5wIfwwuWBbCNtijl9cpAhs_VdCUnXMFHEBH-D8anAORjG1DzuBhw28mr6ibbHipZAJcNv5rnki8IgDblgJfViHu_tM5aolc51S8aYlIjEtwIwUKSZb8Jm66uAie5cc2p7cjeRuxIyMx-kWv3zpCij86VsSbJ5-53-t3xskQAtNWyTwdPxFSrvX_jw4daZAhW8DGnxY',
    altText:
      'Editorial screenshot of a logistics enterprise dispatch platform, showing routing maps, cargo freight status indicators, and clean data typography with high contrast warm cream background',
    client: {
      name: 'Elena Rostova',
      role: 'VP of Product Operations, Vela Freight',
      quote:
        'Dispatchers who had used Excel for twenty years adopted The Dot’s interface within two days. The speed improvement directly protects our cargo booking margins.',
    },
    details: {
      challenge:
        'Freight dispatchers spent an average of 47 minutes calculating multi-modal container transshipment rates across 6 legacy spreadsheets, creating latency in closing spot contracts.',
      solution:
        'Created a tactile keyboard-first calculation matrix with live tariff tables, dynamic fuel surcharge graphs, and one-click quote generation with PDF carrier manifests.',
      duration: '10 Weeks (Fixed Sprint)',
      stack: ['Next.js', 'Tailwind CSS', 'Figma', 'Interactive Mapbox', 'FastAPI'],
      outcomes: [
        { label: 'Quoting Velocity', value: '3.8x', note: 'Average quote generated in 3.2 minutes' },
        { label: 'Hub Adoption', value: '14 Hubs', note: '100% active daily usage across 350+ dispatchers' },
        { label: 'Booking Volume', value: '+27%', note: 'Increase in spot freight conversion' },
      ],
    },
  },
  {
    id: 'aurum-os',
    number: 'Case 03',
    title: 'Aurum OS',
    clientSubtitle: 'B2B SaaS · Berlin / New York',
    summary: 'Collaborative Document & Logic Architecture',
    description:
      'Designed the visual identity, brand positioning, and complete web product architecture for a workspace enabling cross-functional teams to build live algorithmic decision models.',
    impactMetric: 'Zero to live release in 14 weeks',
    impactDetail: 'Retained 88% month-3 user cohort; oversubscribed $4.2M seed round.',
    tags: ['Brand Identity', 'Product UX', 'Webflow Engineering'],
    category: 'B2B SaaS',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxsQntETB1wpav5gWqaBeZE03FqVu10uBmUWCXyf-PHNCI7OSzfsPbPzuY9Xo_3zgtxbaTNfMbAKzGOTMQFzJtUgux2lB2isz0fTT_cTIY7vXOCP6SIOaHt15joHvK6LKukGvKHvW5gugXaOWkAX54CViUVbE4zT52tiax61JKyT4iI2ycaohhsCVpKVxlN82QAuWO4lpXDOyBmHKsbP405F7ViAju1oSJ_i8ka66YzQDOFsPTbyDD',
    altText:
      'Sophisticated SaaS collaboration tool interface showing canvas documents, logic tree branches, minimalist typography, and warm aesthetic UI components',
    client: {
      name: 'Tariq Al-Mansoor',
      role: 'Co-founder & CTO, Aurum OS',
      quote:
        'The Dot’s ability to grasp complex graph computation concepts and render them as tactile, beautiful visual blocks was instrumental to our seed round narrative.',
    },
    details: {
      challenge:
        'Engineering teams loved the backend engine, but non-technical stakeholders found node-based computation intimidating and couldn’t parse logic dependencies.',
      solution:
        'Pioneered the "Living Document" design system combining prose blocks with inline reactive formulas, breadcrumbs, and zero-distraction focus modes.',
      duration: '14 Weeks (Zero-to-One)',
      stack: ['TypeScript', 'Canvas API', 'Webflow Marketing', 'Design Tokens'],
      outcomes: [
        { label: 'Cohort Retention', value: '88%', note: 'Month-3 active team retention rate' },
        { label: 'Seed Round', value: '$4.2M', note: 'Oversubscribed institutional financing round' },
        { label: 'Viral Coefficient', value: '1.42', note: 'Organic document-sharing invitations' },
      ],
    },
  },
];

export const ALL_CASE_STUDIES_ARCHIVE: CaseStudy[] = [
  ...CASE_STUDIES,
  {
    id: 'paypulse-gateway',
    number: 'Case 04',
    title: 'PayPulse Gateway',
    clientSubtitle: 'Embedded Payments · Bangalore / Singapore',
    summary: 'Developer-First Cross-Border Settlement Console',
    description:
      'Redesigned the developer documentation, API sandbox testing console, and merchant dashboard for Southeast Asia’s fastest growing payment orchestrator.',
    impactMetric: '65% drop in API integration tickets',
    impactDetail: 'Merchant onboarding decreased from 12 days to under 4 hours.',
    tags: ['Developer UX', 'API Console', 'Brand Direction'],
    category: 'Fintech',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnK-JZRR2Ns-BwbPvb6AjE0CZsBIye0ykSnl81yQrWKwHA8JLr_Pe5DV42Rr0lXkTG8etO-n-E7VWBEzD9vbAY-KqURjywK6tEJio0Ys8AwUXgOGYR0AUnLKeFIdAZnT6TGjOujwfGMIhM12ZLeLucT2NeJzZU3QuW-Smv5NDn-tvU_x9FXfH5rGNflBj8_Rk0Vwzsx340XJjbV24MRwI3pgnNC8a8e0X4gJ2ZTpEtfWpq6ebROY5V',
    altText: 'Clean payment developer console and live API testing harness',
    client: {
      name: 'Vikram Menon',
      role: 'Chief Technology Officer, PayPulse',
      quote:
        'Engineers praise our documentation and dashboard constantly. That visual trust converts enterprise CFOs and CTOs directly.',
    },
    details: {
      challenge: 'Merchants were stalling at API key configuration and webhook event verification.',
      solution: 'Interactive sandbox simulator with copyable SDK snippets in 6 programming languages.',
      duration: '6 Weeks Sprint',
      stack: ['Next.js', 'Tailwind', 'Monaco Editor', 'Stripe-grade UX'],
      outcomes: [
        { label: 'Support Reduction', value: '-65%', note: 'Ticket volume drop in developer support' },
        { label: 'Integration Speed', value: '4 Hours', note: 'Average time to first live transaction' },
        { label: 'Gross Volume', value: '$320M', note: 'Processed across 8 APAC currencies' },
      ],
    },
  },
  {
    id: 'linearscale-analytics',
    number: 'Case 05',
    title: 'LinearScale',
    clientSubtitle: 'Observability & Metrics · Boston',
    summary: 'Unified High-Throughput Kubernetes Telemetry',
    description:
      'Transformed dense multi-cluster server metrics into a clean, human-readable canvas with real-time anomaly isolation and zero lag rendering.',
    impactMetric: '4.2x Faster Mean Time to Resolution',
    impactDetail: 'Adopted by 80+ enterprise SRE teams monitoring 250,000+ cloud nodes.',
    tags: ['High-Density UI', 'Design System', 'Data Viz'],
    category: 'B2B SaaS',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxsQntETB1wpav5gWqaBeZE03FqVu10uBmUWCXyf-PHNCI7OSzfsPbPzuY9Xo_3zgtxbaTNfMbAKzGOTMQFzJtUgux2lB2isz0fTT_cTIY7vXOCP6SIOaHt15joHvK6LKukGvKHvW5gugXaOWkAX54CViUVbE4zT52tiax61JKyT4iI2ycaohhsCVpKVxlN82QAuWO4lpXDOyBmHKsbP405F7ViAju1oSJ_i8ka66YzQDOFsPTbyDD',
    altText: 'Kubernetes telemetry cluster view with high density charts',
    client: {
      name: 'Sarah Chen',
      role: 'Head of Infrastructure, LinearScale',
      quote:
        'The Dot understands how site reliability engineers think. Their typographic hierarchy allows engineers to spot memory spikes in a split second.',
    },
    details: {
      challenge: 'Too many flashing charts caused alert fatigue during infrastructure outages.',
      solution: 'Strict 3-color status discipline, tabular metrics with monospace alignment, and instant zoom canvas.',
      duration: '8 Weeks Sprint',
      stack: ['React', 'WebGL Canvas', 'Tailwind', 'Custom Time-Series Components'],
      outcomes: [
        { label: 'MTTR Speed', value: '4.2x', note: 'Reduction in outage diagnostic latency' },
        { label: 'Node Capacity', value: '250k', note: 'Supported simultaneous cluster nodes' },
        { label: 'User Satisfaction', value: '96%', note: 'SRE survey approval rating' },
      ],
    },
  },
  {
    id: 'kora-health',
    number: 'Case 06',
    title: 'Kora Health',
    clientSubtitle: 'Clinical Trials Intelligence · Zurich',
    summary: 'Patient Enrollment & Biomarker Screening Platform',
    description:
      'Constructed a compliant, intuitive clinical trial matching portal connecting research oncologists with accredited patient cohorts across the European Union.',
    impactMetric: '2.4x patient recruitment velocity',
    impactDetail: 'Compliant with GDPR, HIPAA, and EMA clinical data protocols.',
    tags: ['Healthtech UX', 'Regulatory Design', 'Web Platform'],
    category: 'Healthtech',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeRfm6LGWmrxp5aejwru_0GdbwLb3JZ1JFwiomwnlKOiFlPT5wIfwwuWBbCNtijl9cpAhs_VdCUnXMFHEBH-D8anAORjG1DzuBhw28mr6ibbHipZAJcNv5rnki8IgDblgJfViHu_tM5aolc51S8aYlIjEtwIwUKSZb8Jm66uAie5cc2p7cjeRuxIyMx-kWv3zpCij86VsSbJ5-53-t3xskQAtNWyTwdPxFSrvX_jw4daZAhW8DGnxY',
    altText: 'Biomarker clinical trial oncology matching screen',
    client: {
      name: 'Dr. Aris Thorne',
      role: 'Chief Medical Officer, Kora Health',
      quote:
        'Rare disease clinical trials live or die on recruitment speed. The Dot built a platform that treats patient dignity with the highest aesthetic care.',
    },
    details: {
      challenge: 'Patients were overwhelmed by 30-page medical question forms and dropped off.',
      solution: 'Conversational progressive eligibility checker with instant biomarker file parsing and secure hospital sync.',
      duration: '9 Weeks Sprint',
      stack: ['Next.js', 'Accessible WCAG AAA UI', 'Encrypted State Engine'],
      outcomes: [
        { label: 'Enrollment Speed', value: '2.4x', note: 'Faster cohort fill time' },
        { label: 'Protocol Match', value: '94%', note: 'First-pass clinical protocol accuracy' },
        { label: 'Retention Rate', value: '91%', note: 'Patient trial participation through Phase II' },
      ],
    },
  },
];

export const SERVICES: ServiceCapability[] = [
  {
    id: 'product-ux',
    number: '01',
    badge: 'Core Specialism',
    title: 'Product & UX Design',
    description:
      'We untangle complex SaaS dashboards, multi-step customer portals, and internal tools into intuitive, frictionless workflows users actually love using.',
    checklist: [
      'End-to-end UX wireframing & interactive Figma prototypes',
      'Enterprise design systems (Tokens, Auto-layout, Documentation)',
      'User testing, cognitive walkthroughs, & friction analysis',
    ],
    bestFor: 'Seed to Series-B SaaS',
    duration: '6–12 week engagements',
    startingTier: '$18,000',
    deliverables: [
      'Comprehensive User Journey Maps',
      'Interactive High-Fidelity Prototype',
      'Complete Component Library with Design Tokens',
      'Developer Handoff Specification & Motion Guidelines',
    ],
  },
  {
    id: 'digital-platforms',
    number: '02',
    badge: 'High Demand',
    title: 'Websites & Digital Platforms',
    description:
      'Marketing websites engineered for extreme performance. Semantic Webflow builds, custom micro-interactions, responsive precision, and effortless client editing.',
    checklist: [
      'Bespoke Webflow development & client-first architecture',
      'Next.js / Headless web engineering & CMS setups',
      '95+ Google Lighthouse scores, SEO structuring, & speed audits',
    ],
    bestFor: 'Scaling B2B & Growth Brands',
    duration: '4–8 week sprint cycles',
    startingTier: '$14,000',
    deliverables: [
      'Bespoke Semantic Webflow or React/Next.js Codebase',
      'Client-First CMS Collections & Custom Field Setup',
      'Global Responsive Breakpoints (Desktop, Tablet, Mobile)',
      '95+ Lighthouse Performance, SEO, & Accessibility Pass',
    ],
  },
  {
    id: 'brand-identity',
    number: '03',
    badge: 'Strategic',
    title: 'Brand & Digital Identity',
    description:
      'Transformational visual identities built specifically for modern digital surfaces. We craft distinct systems that elevate enterprise credibility and valuation.',
    checklist: [
      'Strategic brand positioning, narrative, & voice direction',
      'Logo suites, typographic palettes, & comprehensive brand books',
      'Digital collateral, pitch decks, & social motion templates',
    ],
    bestFor: 'Category Challengers',
    duration: '3–6 week sprint packages',
    startingTier: '$12,000',
    deliverables: [
      'Brand Book & Positioning Constitution',
      'Scalable Vector Logo Suite (Primary, Wordmark, Insignia)',
      'Custom Curated Typographic & Color System',
      'Pitch Deck Template & Social Design Assets',
    ],
  },
  {
    id: 'growth-cro',
    number: '04',
    badge: 'Revenue Impact',
    title: 'Growth & Conversion Enablement',
    description:
      'Systematic Conversion Rate Optimization (CRO), data-backed landing page sprints, and funnel audits that extract maximum enterprise value from traffic.',
    checklist: [
      'Quantitative funnel teardowns & behavioral heatmap telemetry',
      'High-velocity multi-variant landing page experiments',
      'Post-click messaging consistency & demo request funnels',
    ],
    bestFor: 'Revenue Operations & Marketers',
    duration: 'Monthly Growth Retainers',
    startingTier: '$8,500 / mo',
    deliverables: [
      'Bi-Weekly Landing Page Sprint Releases',
      'Comprehensive Funnel Telemetry & Drop-Off Diagnostics',
      'Multi-Variant Copy & Layout A/B Tests',
      'Monthly Executive Growth & Attribution Report',
    ],
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'tactile-warmth-saas',
    title: 'The Death of Generic SaaS: Why Architectural Tactility Outconverts Pure White UI',
    readTime: '6 min read',
    category: 'Design Systems',
    publishedDate: 'March 2026',
    excerpt:
      'Enterprise buyers are numbed by identical white-and-purple interfaces. Here is how warm archival palettes and high-contrast typography command valuation premium.',
    author: {
      name: 'Aditya Rajan',
      role: 'Founding Partner, Design Systems',
    },
    content: [
      'Over the past five years, B2B software aesthetics converged into a single homogenous baseline: pure white backgrounds (#FFFFFF), faint grey borders, floating shadow cards, and generic purple accents. While clean, this homogeneity strips software of institutional weight.',
      'When enterprise buyers evaluate high-ticket software, subconscious credibility signals determine conversion velocity. Tactile editorial foundations—anchored in warm cream surfaces (#FEF9EF), razor-sharp hairline dividers, and deep carbon typography—signal deliberate craftsmanship rather than off-the-shelf templates.',
      'In our work with Kora Capital, transitioning from a clinical generic theme to a high-contrast editorial system reduced cognitive fatigue for wealth allocators spending 4+ hours daily in the interface, while driving a 42% lift in onboarding completion.',
    ],
  },
  {
    id: 'compliance-onboarding-ux',
    title: 'From 4 Days to 6 Minutes: Deconstructing Institutional Compliance Onboarding',
    readTime: '8 min read',
    category: 'Product Strategy',
    publishedDate: 'February 2026',
    excerpt:
      'How progressive disclosure and ambient document parsing turned a 14-step bureaucratic nightmare into an automated 6-minute pipeline.',
    author: {
      name: 'Maya Sundaram',
      role: 'Technical Architecture Partner',
    },
    content: [
      'Compliance onboarding is where 60% of B2B fintech customers churn. The traditional paradigm treats KYC/KYB as an adversarial gatekeeper: the user is dumped into a daunting form demanding 20 PDF uploads before they can experience any product value.',
      'By contrast, high-velocity onboarding treats compliance as an earned progression. We broke Kora’s 14-step paper maze into 3 discrete chapters: Entity Identity, Signatory Verification, and Allocation Readiness.',
      'Each state transitions with zero screen reloads, provides immediate visual feedback on OCR document scans, and lets users preview their future dashboard environment while back-channel checks execute in the background.',
    ],
  },
  {
    id: 'fixed-sprint-model',
    title: 'Why Fixed-Sprint Retainers Beat Agency Hourly Billing 10x',
    readTime: '5 min read',
    category: 'Studio Philosophy',
    publishedDate: 'January 2026',
    excerpt:
      'Hourly billing rewards slow agency output. Discover how 2-week bounded sprints align economic incentives between client and studio.',
    author: {
      name: 'Karthik Varma',
      role: 'Growth Strategy Lead',
    },
    content: [
      'The traditional agency agency model has an inherent moral hazard: the longer an agency takes to solve a design challenge, the more hours they bill the client. Scope creep becomes a revenue engine.',
      'At The Dot, we operate exclusively on fixed-scope, fixed-price sprint cycles (typically 4 to 12 weeks). Our clients receive a guaranteed price, a guaranteed launch date, and direct partner access with zero junior account managers in between.',
      'This model forces ruthlessness in prioritization. Instead of debating endless theoretical edge cases, we focus on the 20% of screens that deliver 80% of commercial impact, shipping production-ready systems that generate real revenue.',
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Aditya Rajan',
    role: 'Founding Partner & Design Director',
    location: 'Chennai · Direct Partner',
    bio: '12+ years directing digital product architecture and brand systems for venture-funded fintech, enterprise tools, and global platforms.',
    expertise: ['Design Systems', 'Product UX Architecture', 'Editorial Typography'],
  },
  {
    name: 'Maya Sundaram',
    role: 'Partner, Frontend & Technical Architecture',
    location: 'Bangalore / London',
    bio: 'Specialist in high-performance Webflow architectures, React/Next.js platforms, WebGL interactions, and headless enterprise CMS.',
    expertise: ['Webflow Development', 'TypeScript & React', 'Lighthouse Optimization'],
  },
  {
    name: 'Karthik Varma',
    role: 'Partner, Conversion Strategy & Growth',
    location: 'Chennai / San Francisco',
    bio: 'Former head of growth at high-scale B2B SaaS. Focused on quantitative funnel teardowns, multi-variant testing, and revenue attribution.',
    expertise: ['Conversion Optimization', 'Funnel Analytics', 'Positioning'],
  },
];

export const FAQS = [
  {
    id: 'kickoff',
    question: 'How quickly can our project kick off?',
    answer:
      'We onboard at most two new clients per calendar month to preserve partner-level immersion. Typically, onboarding and initial discovery kickoff within 10 to 14 business days from contract execution.',
  },
  {
    id: 'webflow-engineering',
    question: 'Do you handle both design and Webflow engineering?',
    answer:
      'Yes. We are full-cycle practitioners. We never hand off static designs and abandon your team. We build high-fidelity semantic Webflow architectures and React/Next.js codebases with full QA, analytics wiring, and team CMS training.',
  },
  {
    id: 'pricing',
    question: 'How do you price bespoke engagements?',
    answer:
      'We operate on fixed-scope, value-driven sprints. You receive a guaranteed price and timeline upfront with no surprise hourly billing. Typical full-system redesign and platform builds range from $12,000 to $35,000 based on functional complexity.',
  },
  {
    id: 'team',
    question: 'Who actually works on our product?',
    answer:
      'Zero junior bait-and-switch. Our founding partners and senior domain leads execute every phase, wireframe, and line of code directly with your product managers and founders.',
  },
  {
    id: 'post-launch',
    question: 'What happens after our product or site launches?',
    answer:
      'Every project includes a comprehensive handover period: Figma design token documentation, Webflow CMS video training, and 30 days of post-launch stabilization support. Clients often transition into our monthly Growth & CRO retainers for continuous optimization.',
  },
];
