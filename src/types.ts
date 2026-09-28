export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  clientSubtitle: string;
  summary: string;
  description: string;
  impactMetric: string;
  impactDetail: string;
  tags: string[];
  category: 'Fintech' | 'Logistics' | 'B2B SaaS' | 'Healthtech';
  image: string;
  altText: string;
  highlightTeal?: boolean;
  client: {
    name: string;
    role: string;
    quote: string;
    avatar?: string;
  };
  details: {
    challenge: string;
    solution: string;
    duration: string;
    stack: string[];
    outcomes: { label: string; value: string; note: string }[];
  };
}

export interface ServiceCapability {
  id: string;
  number: string;
  badge: string;
  title: string;
  description: string;
  checklist: string[];
  bestFor: string;
  duration: string;
  deliverables: string[];
  startingTier: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  readTime: string;
  category: string;
  publishedDate: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  expertise: string[];
}
