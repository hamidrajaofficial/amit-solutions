import { FaqCategory } from '../components/common/FaqSection';

export const homeFaqCategories: FaqCategory[] = [
  {
    id: 'general-onboarding',
    name: 'General & Onboarding',
    questions: [
      {
        q: 'How quickly can our business go live with AMIT Solutions?',
        a: 'Most client accounts kick off within 3 to 5 business days. Our dedicated onboarding team conducts access handshakes, analytics audits, and establishes shared Slack channels and reporting dashboards with zero operational downtime for your staff.',
      },
      {
        q: 'Do you require long-term binding contracts or termination fees?',
        a: 'No. Unlike traditional agencies, we operate on flexible month-to-month terms driven strictly by performance and ROI. We earn your business every 30 days through transparent deliverables and measurable growth.',
      },
      {
        q: 'Who will be managing our campaigns on a daily basis?',
        a: 'You work directly with dedicated senior directors and specialists with 10+ years of domain experience—not handed off to junior interns. You get direct Slack communication and scheduled bi-weekly sprint reviews.',
      },
      {
        q: 'How do you calculate and verify marketing ROI?',
        a: 'We track end-to-end attribution using GA4, verified CRM data, and custom real-time dashboards that measure qualified leads, customer acquisition cost (CAC), pipeline velocity, and closed revenue.',
      },
    ],
  },
  {
    id: 'web-design-dev',
    name: 'Web Design & Development',
    questions: [
      {
        q: 'What is your typical timeline for a custom website redesign?',
        a: 'Custom high-performance websites typically take 4 to 8 weeks depending on scope, custom architecture, interactive elements, and third-party integrations.',
      },
      {
        q: 'Will our website be mobile-responsive and optimized for conversions?',
        a: 'Every design is engineered mobile-first with sub-second page loads, conversion-optimized user flows, and strict compliance with Core Web Vitals standards.',
      },
      {
        q: 'Do you build on WordPress, Shopify, or custom modern frameworks?',
        a: 'We engineer across modern stacks including Next.js/React, headless architectures, Shopify Plus for e-commerce, and enterprise WordPress, tailored to your scalability needs.',
      },
      {
        q: 'Will our team be able to edit content after launch?',
        a: 'Yes. We implement intuitive visual content management systems with zero-code flexibility, accompanied by customized video training for your internal team.',
      },
    ],
  },
  {
    id: 'paid-advertising',
    name: 'Paid Advertising (PPC & Social)',
    questions: [
      {
        q: 'Which advertising platforms generate the best ROI for our business?',
        a: 'We evaluate your audience intent to determine the optimal media mix. B2B and high-intent buyers typically scale best on Google Search & LinkedIn, whereas high-volume B2C brands excel on Meta, TikTok, and YouTube.',
      },
      {
        q: 'How do you manage and protect our ad spend?',
        a: 'Your ad spend is paid directly to advertising platforms with 100% transparency. We implement strict negative keyword lists, bid caps, and daily anomaly detection to prevent wasted ad budget.',
      },
      {
        q: 'What ROAS or conversion lift can we anticipate?',
        a: 'While outcomes vary by vertical, our clients routinely achieve 2.8x to 5.4x ROAS improvements and 35-45% reductions in cost-per-lead within their first 90 days.',
      },
      {
        q: 'Do you create the ad creatives and video copy?',
        a: 'Yes. Our in-house creative team produces high-converting video hooks, UGC angles, motion graphics, and conversion-tested copywriting.',
      },
    ],
  },
  {
    id: 'seo-organic-growth',
    name: 'SEO & Organic Growth',
    questions: [
      {
        q: 'How long does it take to achieve Page 1 search rankings?',
        a: 'Noticeable indexation velocity and secondary keyword traction typically appear within 30 to 60 days. Compounding organic revenue and high-value competitive positions accelerate strongly between months 3 and 6.',
      },
      {
        q: 'How do you protect websites from Google algorithm updates?',
        a: 'We strictly enforce 100% white-hat, Google Search Essentials compliance with entity semantic mapping, authentic editorial link acquisition, and zero spam tactics.',
      },
      {
        q: 'Do you optimize for Google AI Overviews and ChatGPT citations?',
        a: 'Yes. Generative Engine Optimization (GEO) is built into our core strategy. We structure JSON-LD schema, entity nodes, and authoritative citations so your brand is cited by generative AI engines.',
      },
      {
        q: 'What is included in your technical SEO audits?',
        a: 'Our 24-point audit evaluates crawl depth, render budgets, canonical loops, mobile Core Web Vitals, duplicate content, and toxic backlink liabilities.',
      },
    ],
  },
];

export const seoFaqCategories: FaqCategory[] = [
  {
    id: 'general-seo-onboarding',
    name: 'General & Onboarding',
    questions: [
      {
        q: 'How quickly can our website begin ranking with AMIT Solutions?',
        a: 'Initial crawl optimization and technical indexation improvements take effect within 1 to 2 weeks. Measurable keyword movements and organic traffic gains typically compound within 30 to 60 days, leading to sustainable top-3 positions by months 3 through 6.',
      },
      {
        q: 'Do you require long-term binding contracts or termination fees?',
        a: 'No. All our SEO engagements operate on flexible month-to-month agreements. We earn your business continuously through transparent sprint deliverables and measurable ranking momentum.',
      },
      {
        q: 'Do you guarantee #1 rankings on Google?',
        a: 'No ethical agency can guarantee specific #1 positions because Google’s algorithms continually evolve. However, our proven methodology systematically ranks clients on Page 1 across high-value commercial search terms, backed by verified case studies.',
      },
      {
        q: 'Who manages our SEO campaigns on a day-to-day basis?',
        a: 'You work directly with dedicated senior search directors and technical specialists with 10+ years of enterprise SEO experience—with direct Slack access and bi-weekly sprint reviews.',
      },
    ],
  },
  {
    id: 'technical-seo-indexing',
    name: 'Technical SEO & Core Web Vitals',
    questions: [
      {
        q: 'How do you identify and resolve crawling and indexation blockers?',
        a: 'We use log file analysis, Screaming Frog deep crawls, and proprietary tooling to uncover orphan pages, render budget bottlenecks, broken canonicals, and redirect loops.',
      },
      {
        q: 'What is your approach to Core Web Vitals and site speed?',
        a: 'We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) through asset compression, code splitting, and caching architecture.',
      },
      {
        q: 'How do you handle complex e-commerce or multi-location indexing?',
        a: 'We implement faceted navigation guardrails, dynamic sitemaps, structured schema, and localized canonical rules to eliminate duplicate content bloat.',
      },
      {
        q: 'How do you prevent penalties from Google algorithm updates?',
        a: 'We practice 100% white-hat, Google-compliant SEO. We build authentic content for real human users, optimize technical infrastructure, and earn genuine editorial links without automated schemes.',
      },
    ],
  },
  {
    id: 'keyword-content-strategy',
    name: 'Keyword & Content Strategy',
    questions: [
      {
        q: 'How do you identify high-intent keywords that actually convert?',
        a: 'We categorize search queries by commercial transactional intent rather than empty search volume, prioritizing keywords where searchers have active buying intent.',
      },
      {
        q: 'What is topical authority and how do content clusters work?',
        a: 'We build interconnected pillar pages and semantic sub-topic clusters that signal comprehensive domain expertise to Google’s ranking algorithms.',
      },
      {
        q: 'Do you optimize content for AI Overviews and Generative search (GEO)?',
        a: 'Yes. We structure Knowledge Graph entity nodes and structured JSON-LD schemas so your brand is cited as the primary authority in Google AI Overviews, Gemini, and Perplexity.',
      },
      {
        q: 'Do you write the SEO content or do we need internal copywriters?',
        a: 'Our in-house editorial team creates comprehensive, E-E-A-T compliant articles, product copy, and landing pages tailored to your brand voice.',
      },
    ],
  },
  {
    id: 'link-building-authority-pr',
    name: 'Link Building & Authority PR',
    questions: [
      {
        q: 'What kind of backlinks do you build for clients?',
        a: 'We exclusively secure tier-1 contextual editorial backlinks from real, high-DR industry publications and national news outlets through data-driven digital PR and original research.',
      },
      {
        q: 'Do you use Private Blog Networks (PBNs) or link farms?',
        a: 'Never. We enforce a zero-tolerance policy against PBNs, link farms, and toxic networks. Every backlink is verifiable, editorial, and penalty-proof.',
      },
      {
        q: 'How do you determine which pages receive backlink equity?',
        a: 'We direct authority to priority commercial money pages and core topical hubs, balancing brand anchor text diversity to maximize domain equity.',
      },
      {
        q: 'What is the difference between Local SEO and National SEO?',
        a: 'Local SEO targets geographic keywords and Google Maps 3-Pack rankings for regional customers, while National SEO targets competitive commercial queries across whole countries.',
      },
    ],
  },
];

export const leadGenFaqCategories: FaqCategory[] = [
  {
    id: 'lead-generation-strategy',
    name: 'Full-Funnel Strategy',
    questions: [
      {
        q: 'What is a full-funnel lead generation architecture?',
        a: 'A full-funnel approach synchronizes top-of-funnel awareness (programmatic ads, social discovery), mid-funnel consideration (high-value lead magnets, interactive tools), and bottom-of-funnel conversion (retargeting, demo bookings, sales calls) into one connected automated pipeline.',
      },
      {
        q: 'How do you target high-intent B2B decision makers and qualified buyers?',
        a: 'We combine first-party intent data, LinkedIn account-based marketing (ABM), firmographic matching, and programmatic audience segmentation to place your message directly in front of vetted decision-makers.',
      },
      {
        q: 'How fast can our business start generating sales-qualified leads (SQLs)?',
        a: 'Paid media pipelines often generate initial leads within 3 to 7 days of campaign launch. Full-funnel optimization and nurturing workflows typically hit peak conversion efficiency by weeks 3 to 6.',
      },
      {
        q: 'Do you provide lead validation and CRM integration?',
        a: 'Yes. We integrate directly with Salesforce, HubSpot, Close, and custom webhooks to qualify, enrich, and route leads in real-time, preventing spam inquiries from wasting your sales team’s time.',
      },
    ],
  },
  {
    id: 'media-buying-spend',
    name: 'Programmatic & Media Buying',
    questions: [
      {
        q: 'How do you prevent wasted ad spend in media buying?',
        a: 'We utilize real-time algorithmic bidding, strict placement exclusions, daily frequency caps, negative keyword sculpting, and automated anomaly detectors to eliminate low-converting ad inventory.',
      },
      {
        q: 'Which platforms perform best for multi-channel acquisition?',
        a: 'We tailor the media mix to your customer profile: Google Search & LinkedIn for high-intent B2B and SaaS, Meta & TikTok for volume consumer interest, and programmatic display for hyper-targeted retargeting.',
      },
      {
        q: 'Who owns the ad accounts and audience data?',
        a: 'You retain 100% ownership of all advertising accounts, pixels, customer lists, and creative assets. All ad spend is paid directly to platforms with zero markup or hidden fees.',
      },
    ],
  },
  {
    id: 'lead-nurturing-crm',
    name: 'Nurture & Conversion Flow',
    questions: [
      {
        q: 'What happens after a prospective lead submits their details?',
        a: 'We build automated multi-touch nurturing journeys including instant SMS/email confirmations, calendar scheduling embeds, personalized case study delivery, and CRM stage progression.',
      },
      {
        q: 'Do you create the landing pages and conversion copy?',
        a: 'Yes. Our conversion specialists design ultra-fast, mobile-optimized landing pages with clear value propositions, interactive calculators, and friction-free forms.',
      },
      {
        q: 'How do we track cost-per-acquisition (CPA) and customer lifetime value (LTV)?',
        a: 'We configure closed-loop revenue attribution dashboards tracking every touchpoint from initial impression to closed deal revenue.',
      },
    ],
  },
];

export const localFaqCategories: FaqCategory[] = [
  {
    id: 'local-seo-fundamentals',
    name: 'Google Maps & 3-Pack',
    questions: [
      {
        q: 'How long does it take to rank in Google Maps 3-Pack?',
        a: 'Initial Google Business Profile (GBP) optimizations and category refinements show measurable proximity lifts within 14 to 30 days. Sustained top-3 map pack dominance across competitive local search terms typically solidifies between months 2 and 4.',
      },
      {
        q: 'What factors determine ranking in the local map pack?',
        a: 'Google’s local algorithm evaluates three primary pillars: Proximity (distance to searcher), Prominence (review velocity, average star rating, and authoritative local backlinks), and Relevance (accurate category selection, services list, and localized website content).',
      },
      {
        q: 'Can you help us rank in surrounding towns where we don’t have a physical address?',
        a: 'Yes. We construct dedicated localized service area pages (SAPs), geo-targeted schema markup, and regional citations that establish organic local authority across your entire operating territory.',
      },
      {
        q: 'How do you handle multiple locations or franchise branches?',
        a: 'We implement centralized multi-location management, verified bulk GBP listings, localized citation consistency, and store-specific review generation workflows.',
      },
    ],
  },
  {
    id: 'local-citations-reviews',
    name: 'Citations & Review Management',
    questions: [
      {
        q: 'What are NAP citations and why are they critical?',
        a: 'NAP stands for Name, Address, and Phone number. Consistent NAP data across authoritative directories (Yelp, Apple Maps, Bing Places, YellowPages, industry associations) sends trust signals to Google that your business is legitimate.',
      },
      {
        q: 'How do you help us get more 5-star Google reviews?',
        a: 'We deploy automated post-service review request systems via SMS and email with direct Google review links, QR codes for in-store checkout, and staff incentives.',
      },
      {
        q: 'Can fake or negative reviews be removed from our listing?',
        a: 'We actively monitor your profile, flag defamatory or policy-violating competitor reviews for Google removal, and provide expert response templates to protect your brand reputation.',
      },
    ],
  },
  {
    id: 'local-services-ads',
    name: 'Local Services Ads (LSA)',
    questions: [
      {
        q: 'What is the difference between Local SEO and Google Local Services Ads?',
        a: 'Local SEO earns unpaid top positions in the Google Maps 3-Pack. Google Local Services Ads (Google Guaranteed / Google Screened) appear at the absolute top of search results on a pay-per-lead basis with a trusted green badge.',
      },
      {
        q: 'Do you manage Google Guaranteed / LSA onboarding?',
        a: 'Yes. We assist with background checks, license verification, insurance submission, and dispute bogus calls to get credits back from Google.',
      },
    ],
  },
];


