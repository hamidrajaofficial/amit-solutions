import React, { useState } from 'react';
import { ServiceHeroSection } from './ServiceHeroSection';
import { SeoCaseStudiesSection } from './SeoCaseStudiesSection';
import { ServiceHowWeWorkSection } from './ServiceHowWeWorkSection';
import { SeoConsultationRoadmapSection } from './SeoConsultationRoadmapSection';
import { SeoWhyClientsSaySection } from './SeoWhyClientsSaySection';
import { SeoPreFooterCTASection } from './SeoPreFooterCTASection';
import { FaqSection } from '../common/FaqSection';
import { seoFaqCategories } from '../../data/faqData';
import seoHeroBg from '../../assets/images/seo_agency_hero_bg_1791811156291.jpg';
import { 
  Search, 
  TrendingUp, 
  CheckCircle2, 
  Compass, 
  Link2, 
  MapPin, 
  FileText, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  Users,
  Target,
  Cpu,
  Sparkles,
  Video,
  BarChart3,
  AlertTriangle,
  TrendingDown,
  ShieldAlert,
  X,
  Check,
  Send,
  Share2
} from 'lucide-react';

interface SeoServicePageProps {
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
}

export const SeoServicePage: React.FC<SeoServicePageProps> = ({
  onOpenConsultation,
  onNavigateHome,
}) => {
  const [activeChallengeTab, setActiveChallengeTab] = useState<string | null>('01');
  const [activeStrategicTab, setActiveStrategicTab] = useState<number>(0);

  const handleToggleChallengeTab = (id: string) => {
    setActiveChallengeTab(prev => (prev === id ? null : id));
  };

  const strategicSeoSolutions = [
    {
      id: 1,
      name: 'SEO Audit',
      icon: FileText,
      subtitle: 'Analyze, Optimize, and Improve Website Performance',
      description: "Analyze your website's health with indepth website seo audit services, identify issues, and find opportunities to improve search rankings.",
      bulletPoints: [
        'Comprehensive crawlability/indexing audit',
        'Core Web Vitals & speed benchmarking',
        'Manual penalty & toxic link scan',
        'Architecture & internal link evaluation',
      ],
      deliverables: [
        'SEO Health Audit Report',
        'Fix & Priority Roadmap',
        'Performance Baseline',
        'Indexation Status Map',
      ],
      resources: [
        'Senior SEO Auditor',
        'Tech SEO Specialist',
        'Data Analytics Lead',
        'Strategic Project Manager',
      ],
    },
    {
      id: 2,
      name: 'Competitor Analysis',
      icon: BarChart3,
      subtitle: 'Deconstruct Market Rivals and Uncover Ranking Advantages',
      description: 'Systematically reverse-engineer what competitors rank for, evaluate backlink acquisitions, and expose high-converting market gaps to claim organic dominance.',
      bulletPoints: [
        'Competitor keyword gap & revenue query matrix',
        'Organic backlink profile & anchor velocity audit',
        'Content footprint & SERP feature ownership comparison',
        'Quarterly market penetration benchmarking',
      ],
      deliverables: [
        'Competitor Benchmark Matrix',
        'SERP Dominance Playbook',
        'Keyword & Traffic Share Gap Report',
        'Target Authority Roadmap',
      ],
      resources: [
        'Competitive Intelligence Lead',
        'Senior Market Strategist',
        'Search Data Analyst',
        'Technical SEO Consultant',
      ],
    },
    {
      id: 3,
      name: 'Keyword Research',
      icon: Search,
      subtitle: 'Capture Commercial Demand & High-Intent Search Queries',
      description: 'Map buyer journeys across transactional, informational, and zero-click AI search terms to drive high-converting traffic instead of empty pageviews.',
      bulletPoints: [
        'High-intent search query clustering & intent mapping',
        'Zero-click & generative AI prompt answer targeting',
        'Long-tail commercial keyword expansion',
        'Search volume, CPC & conversion valuation analysis',
      ],
      deliverables: [
        'Intent-Mapped Keyword Architecture',
        'Content Velocity Blueprint',
        'Opportunity Valuation Scorecard',
        'Topical Authority Cluster Map',
      ],
      resources: [
        'Intent Research Specialist',
        'Content Strategist',
        'Audience Data Analyst',
        'SEO Campaign Lead',
      ],
    },
    {
      id: 4,
      name: 'Link Building',
      icon: Share2,
      subtitle: 'Acquire Tier-1 Authority Links That Move SERP Needles',
      description: 'White-hat contextual backlinks from real, high-DR editorial publications that build domain authority, compound trust, and outrank established competitors.',
      bulletPoints: [
        'Editorial outreach to real industry publications',
        'Data-driven linkable asset & study creation',
        'Anchor text diversity & natural distribution guardrails',
        'Zero PBNs, zero spam networks, 100% verified placements',
      ],
      deliverables: [
        'Live Editorial Placements Tracker',
        'Link Profile Health Report',
        'Anchor Distribution Analysis',
        'Authority Growth Attribution',
      ],
      resources: [
        'Digital PR Director',
        'Senior Outreach Specialist',
        'Journalist Relations Lead',
        'Backlink Quality Auditor',
      ],
    },
    {
      id: 5,
      name: 'Guest Posting',
      icon: Send,
      subtitle: 'Targeted Thought Leadership & High-Quality Placements',
      description: 'Publish expert editorial thought-leadership across vetted authority blogs to amplify your brand voice, referral traffic, and organic algorithmic trust.',
      bulletPoints: [
        'Strict vetting of domain metrics (DR 50+, genuine traffic)',
        'Original, ghostwritten thought leadership content',
        'Contextual in-content brand mentions & anchor links',
        'Permanent placement guarantees with fast indexing',
      ],
      deliverables: [
        'Guaranteed Live Article URLs',
        'Domain Authority & Traffic Verification',
        'Ghostwritten Master Drafts',
        'Indexing & Cache Confirmation',
      ],
      resources: [
        'Editorial Copy Director',
        'Publication Relations Manager',
        'Senior SEO Copywriter',
        'Content Verification Lead',
      ],
    },
    {
      id: 6,
      name: 'Technical SEO',
      icon: Cpu,
      subtitle: 'Frictionless Crawling, Indexing, and Search Architecture',
      description: 'Eliminate JavaScript rendering barriers, crawl budget waste, canonical errors, and Core Web Vital bottlenecks so search bots easily understand and rank your assets.',
      bulletPoints: [
        'Log file analysis & crawl budget optimization',
        'Server-side rendering & dynamic rendering audit',
        'Complex schema markup & JSON-LD graph generation',
        'Faceted navigation, canonicalization & redirect cleanup',
      ],
      deliverables: [
        'Technical Remediation Roadmap',
        'Valid Structured Data Graphs',
        'Server Log Crawl Insights',
        'Core Web Vitals Pass Certificate',
      ],
      resources: [
        'Principal Technical SEO Architect',
        'Full-Stack Web Engineer',
        'Performance Benchmarking Lead',
        'Search Systems Consultant',
      ],
    },
    {
      id: 7,
      name: 'On-Page SEO',
      icon: FileText,
      subtitle: 'Precision On-Site Optimization for Maximum SERP Relevance',
      description: 'Optimize page structure, semantic headings, metadata, internal linking graphs, and content depth to capture primary and secondary target queries effortlessly.',
      bulletPoints: [
        'Entity-first semantic content optimization',
        'Header hierarchy, title tags & meta CTR testing',
        'Internal link graph optimization & PR sculpturing',
        'Image SEO, alt attributes & accessibility alignment',
      ],
      deliverables: [
        'On-Page Optimization Matrix',
        'Entity & Topical Coverage Scores',
        'CTR-Optimized Metadata Suite',
        'Internal Link Graph Mapping',
      ],
      resources: [
        'Senior On-Page Specialist',
        'SEO Editor & Copy Chief',
        'UX & Readability Consultant',
        'Analytics Optimization Lead',
      ],
    },
    {
      id: 8,
      name: 'Off-Page SEO',
      icon: Globe,
      subtitle: 'Holistic Brand Authority, Signals, and Citation Ecosystem',
      description: 'Build a rock-solid off-site footprint across high-trust directories, brand co-citations, social trust signals, and Google Knowledge Graph verification.',
      bulletPoints: [
        'Entity creation & Google Knowledge Graph optimization',
        'Unlinked brand mention reclamation & outreach',
        'Top-tier industry citations & clean NAP syndication',
        'Sentiment & digital brand authority monitoring',
      ],
      deliverables: [
        'Entity & Brand Signal Audit',
        'Knowledge Panel Verification Guide',
        'Syndicated Citation Inventory',
        'Off-Page Trust Factor Scorecard',
      ],
      resources: [
        'Brand Authority Strategist',
        'Entity Optimization Specialist',
        'Citation & Syndication Manager',
        'Reputation & Sentiment Lead',
      ],
    },
  ];


  const challengesAndSolutions = [
    {
      id: '01',
      challengeIcon: TrendingDown,
      challengeBadge: 'Search Bottleneck',
      challengeTitle: 'Stagnant Organic Traffic & Slow Indexing',
      challengeDesc: 'Newly published high-value pages take weeks or months to get indexed by search engines, while existing keyword rankings plateau or suffer sudden volatility after core algorithm updates.',
      solutionIcon: CheckCircle2,
      solutionBadge: 'AMIT Solution',
      solutionTitle: 'Harmonized Content Clusters & Dynamic Indexation',
      solutionDesc: 'We overhaul internal architecture, resolve crawl-depth blockers, and construct semantic topic clusters with automated indexing pings that force Google and Bing to crawl and rank priority pages rapidly.',
      metric: '+180% Faster Indexing',
      tag: 'Architecture & Indexing',
    },
    {
      id: '02',
      challengeIcon: ShieldAlert,
      challengeBadge: 'Authority Deficit',
      challengeTitle: 'Weak Domain Authority & Risky Link Profiles',
      challengeDesc: 'Legacy competitors monopolize top positions due to historic domain authority, while previous low-tier agency outreach left your backlink profile diluted with low-trust or toxic links.',
      solutionIcon: Award,
      solutionBadge: 'AMIT Solution',
      solutionTitle: 'High-Impact Tier-1 Digital PR & Strategic Authority',
      solutionDesc: 'We secure top-tier editorial placements, national press features, and authoritative industry citations that transfer genuine high-equity link juice and build indestructible organic authority.',
      metric: '100% Editorial Placement',
      tag: 'Digital PR & Trust',
    },
    {
      id: '03',
      challengeIcon: Sparkles,
      challengeBadge: 'AI Disruption',
      challengeTitle: 'Zero-Click AI Overviews & Lost SERP Clicks',
      challengeDesc: 'Google AI Overviews, Gemini snapshots, and zero-click SERP features are answering user queries directly, causing high-ranking pages to experience lower click-through rates.',
      solutionIcon: Cpu,
      solutionBadge: 'AMIT Solution',
      solutionTitle: 'Generative Engine Optimization (GEO) & Entity Mapping',
      solutionDesc: 'We structure Knowledge Graph entity nodes, structured JSON-LD schemas, and authoritative citation frameworks so your brand is cited as the primary source in AI-generated answers.',
      metric: 'Top Generative Citations',
      tag: 'AI Overview & LLM',
    },
    {
      id: '04',
      challengeIcon: AlertTriangle,
      challengeBadge: 'Revenue Disconnect',
      challengeTitle: 'High Ranking Impressions But Low Conversions',
      challengeDesc: 'Your site ranks for vanity keywords that draw informational traffic, but none of these visitors translate into qualified leads, enterprise pipeline, or revenue.',
      solutionIcon: Target,
      solutionBadge: 'AMIT Solution',
      solutionTitle: 'Commercial Intent Funnels & Conversion-Focused SEO',
      solutionDesc: 'We recalibrate keyword targeting exclusively around high-intent transactional queries, pairing every ranking page with conversion-optimized UX pathways that convert clicks into signed clients.',
      metric: '8.4x Average SEO ROI',
      tag: 'Revenue Attribution',
    },
  ];



  return (
    <div className="w-full bg-white">
      
      {/* 1. Reusable Service Hero Section */}
      <ServiceHeroSection
        backgroundImage={seoHeroBg}
        titlePrefix="The #1"
        highlightedTitle="Search Engine Optimization Agency"
        description="Affordable search engine optimization agency empowering businesses with proven, results-driven strategies. Our local and international SEO services from capturing high-value leads to maintaining visibility in a changing search landscape. We provide the strategy that turns your goals into results. You know what your business needs grow online, the right strategy makes them achievable, and we're here to provide it."
        highlightedCalloutPrefix="Don't waste your Budget on amateurs SEOs."
        highlightedCalloutSuffix="We help you in improving your website online visibility."
        primaryCtaText="Get Free Consultation"
        secondaryCtaText="Let's Get Started"
        onPrimaryCta={onOpenConsultation}
        onSecondaryCta={onOpenConsultation}
      />

      {/* 2. Key Performance Metrics Bar (Structured Like Homepage with Elevated Service-Specific Architecture) */}
      <section className="w-full border-t border-b border-slate-200/90 relative z-20 bg-slate-100 shadow-md">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-stretch">
          
          {/* Card 1: Crisp White Card - +1,848% Organic Traffic */}
          <div className="bg-white px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[205px] border-r border-b lg:border-b-0 border-slate-200 text-neutral-900 group hover:bg-slate-50 transition-colors">
            {/* Tag Slot with Icon */}
            <div className="h-6 flex items-center justify-between mb-2">
              <span className="inline-block border border-[#001965] text-[#001965] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                TRAFFIC
              </span>
              <TrendingUp className="w-3.5 h-3.5 text-[#009656]" />
            </div>
            {/* Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-[#001965] tracking-tight leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                +1,848%
              </span>
            </div>
            {/* Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009656] leading-snug">
                Organic Traffic
              </span>
            </div>
            {/* Subtitle / Case Study context */}
            <p className="text-[11px] text-neutral-600 leading-snug">
              Home Services Brand verified organic expansion.
            </p>
          </div>

          {/* Card 2: Solid Brand Emerald Accent - +458% AI Search Citations */}
          <div className="bg-[#009656] text-white px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[205px] border-r border-b lg:border-b-0 border-white/20 shadow-inner group hover:bg-[#00824a] transition-colors">
            {/* Tag Slot with Icon */}
            <div className="h-6 flex items-center justify-between mb-2">
              <span className="inline-block border border-white text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                AI SEARCH
              </span>
              <Award className="w-3.5 h-3.5 text-white/90" />
            </div>
            {/* Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                +458%
              </span>
            </div>
            {/* Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white leading-snug">
                AI Search Citations
              </span>
            </div>
            {/* Subtitle / Case Study context */}
            <p className="text-[11px] text-white/95 leading-snug">
              OMMA Award Winner across Perplexity & SearchGPT.
            </p>
          </div>

          {/* Card 3: Deep Navy Accent - 1,009% Return on Ad Spend */}
          <div className="bg-[#00144f] px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[205px] border-r border-b lg:border-b-0 border-white/10 text-white group hover:bg-[#00185c] transition-colors">
            {/* Tag Slot with Icon */}
            <div className="h-6 flex items-center justify-between mb-2">
              <span className="inline-block border border-white/40 text-white/90 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                ROAS
              </span>
              <Target className="w-3.5 h-3.5 text-[#009656]" />
            </div>
            {/* Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                1,009%
              </span>
            </div>
            {/* Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009656] leading-snug">
                Return On Ad Spend
              </span>
            </div>
            {/* Subtitle / Case Study context */}
            <p className="text-[11px] text-slate-300 leading-snug">
              Multi-Brand Franchise combined conversion pipeline.
            </p>
          </div>

          {/* Card 4: Crisp White Card - +106% Organic Leads */}
          <div className="bg-white px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[205px] border-r border-b md:border-b-0 border-slate-200 text-neutral-900 group hover:bg-slate-50 transition-colors">
            {/* Tag Slot with Icon */}
            <div className="h-6 flex items-center justify-between mb-2">
              <span className="inline-block border border-[#001965] text-[#001965] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                LEADS
              </span>
              <Zap className="w-3.5 h-3.5 text-[#009656]" />
            </div>
            {/* Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-[#001965] tracking-tight leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                +106%
              </span>
            </div>
            {/* Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009656] leading-snug">
                Organic Leads
              </span>
            </div>
            {/* Subtitle / Case Study context */}
            <p className="text-[11px] text-neutral-600 leading-snug">
              QSR Franchise Campaign high-intent conversion rate.
            </p>
          </div>

          {/* Card 5: Solid Brand Emerald Accent - 15,000+ Locations Managed */}
          <div className="bg-[#009656] text-white px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[205px] border-r border-slate-200 md:border-r-0 lg:border-r border-white/20 shadow-inner group hover:bg-[#00824a] transition-colors">
            {/* Tag Slot with Icon */}
            <div className="h-6 flex items-center justify-between mb-2">
              <span className="inline-block border border-white text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                LOCATIONS
              </span>
              <MapPin className="w-3.5 h-3.5 text-white/90" />
            </div>
            {/* Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                15,000+
              </span>
            </div>
            {/* Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white leading-snug">
                Locations Managed
              </span>
            </div>
            {/* Subtitle / Case Study context */}
            <p className="text-[11px] text-white/95 leading-snug">
              Active Franchise Units dominate local Google Maps.
            </p>
          </div>

          {/* Card 6: Deep Navy Accent - 700+ Marketing Experts */}
          <div className="bg-[#00144f] px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[205px] text-white group hover:bg-[#00185c] transition-colors">
            {/* Tag Slot with Icon */}
            <div className="h-6 flex items-center justify-between mb-2">
              <span className="inline-block border border-white/40 text-white/90 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                EXPERTS
              </span>
              <Users className="w-3.5 h-3.5 text-[#009656]" />
            </div>
            {/* Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                700+
              </span>
            </div>
            {/* Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009656] leading-snug">
                Marketing Experts
              </span>
            </div>
            {/* Subtitle / Case Study context */}
            <p className="text-[11px] text-slate-300 leading-snug">
              Full-Time Igniters executing technical & content SEO.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Market Challenges & Solutions Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="w-full text-center space-y-3.5 mb-12 sm:mb-16">
            
            {/* Eyebrow Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
                <span>Market Challenges & Solutions</span>
              </div>
            </div>

            {/* Main Headline in Dual Colors */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Is Your Business </span>
              <span className="text-[#009656]">Facing These Challenges?</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center justify-center gap-1.5 py-1">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Subtitle Description */}
            <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal max-w-3xl mx-auto text-center">
              Search engine algorithms change rapidly, competitors buy their way to the top, and outdated tactics silently waste marketing budgets. Here is how our high-precision SEO strategies diagnose and solve each core roadblock.
            </p>

          </div>

          {/* Interactive Challenge Cards Row (1 Row on Desktop / 4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
            {challengesAndSolutions.map((item) => {
              const ChallengeIcon = item.challengeIcon;
              const isActive = activeChallengeTab === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleToggleChallengeTab(item.id)}
                  className={`text-left p-5 sm:p-6 rounded-[2px] border transition-all duration-300 flex flex-col justify-between group cursor-pointer relative ${
                    isActive
                      ? 'bg-white border-[#009656] shadow-lg ring-2 ring-[#009656]/30 -translate-y-1'
                      : 'bg-[#F8FAFC] border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {/* Top Pointer Indicator when active */}
                  {isActive && (
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#009656]" />
                    </div>
                  )}

                  <div className="space-y-3.5 w-full">
                    {/* Icon + <h3> Heading */}
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-[2px] shrink-0 flex items-center justify-center border transition-colors ${
                        isActive
                          ? 'bg-rose-500 text-white border-rose-600 shadow-2xs'
                          : 'bg-white text-rose-600 border-rose-200 group-hover:bg-rose-50'
                      }`}>
                        <ChallengeIcon className="w-4 h-4 text-current" />
                      </div>
                      <h3
                        className={`text-sm sm:text-[15px] font-bold tracking-tight leading-snug transition-colors ${
                          isActive ? 'text-[#001965]' : 'text-[#001965]/90 group-hover:text-[#001965]'
                        }`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {item.challengeTitle}
                      </h3>
                    </div>

                    {/* Issue Content Description */}
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {item.challengeDesc}
                    </p>
                  </div>

                  {/* Solution Active / Explore Solution Dropdown Button */}
                  <div className="pt-4 mt-3 border-t border-slate-200/70 w-full">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleChallengeTab(item.id);
                      }}
                      className={`w-full py-2 px-3 rounded-[2px] font-bold text-[11px] uppercase tracking-wider flex items-center justify-between transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#009656] text-white shadow-xs'
                          : 'bg-slate-100/90 text-slate-700 hover:bg-[#001965] hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isActive ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            <span>Solution Active</span>
                          </>
                        ) : (
                          <>
                            <span>Explore Solution</span>
                          </>
                        )}
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Solution Dropdown Card (Pure Solution Showcase - No Issue Duplication) */}
          {(() => {
            if (!activeChallengeTab) return null;
            const activeItem = challengesAndSolutions.find(c => c.id === activeChallengeTab);
            if (!activeItem) return null;
            const ActiveSolutionIcon = activeItem.solutionIcon;

            return (
              <div 
                id="solution-dropdown-card"
                className="bg-[#F8FAFC] border-2 border-[#009656] rounded-[2px] p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-top-4"
              >
                {/* Background Subtle Accent Glow */}
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#009656]/5 pointer-events-none blur-2xl" />

                <div className="relative z-10 space-y-6 sm:space-y-8">
                  {/* Solution Main Showcase: Icon + <h4> Heading + Description */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] shrink-0 flex items-center justify-center bg-[#009656] text-white shadow-md">
                          <ActiveSolutionIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="space-y-1">
                          {/* Solution Heading strictly as <h4> */}
                          <h4 
                            className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#001965] leading-snug"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            {activeItem.solutionTitle}
                          </h4>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveChallengeTab(null)}
                        aria-label="Close solution"
                        className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xs transition-colors cursor-pointer shrink-0"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Solution Description Content */}
                    <p className="text-[1rem] sm:text-[1.05rem] text-neutral-700 leading-relaxed font-normal max-w-4xl sm:pl-[72px]">
                      {activeItem.solutionDesc}
                    </p>
                  </div>

                  {/* Simple Bullet Points */}
                  <div className="pt-2 sm:pl-[72px]">
                    <ul className="space-y-2.5 sm:space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#009656] shrink-0 mt-1.5" />
                        <span>
                          <strong className="font-bold text-[#001965]">Guaranteed Benchmark:</strong>{' '}
                          <span className="text-neutral-600 font-medium">{activeItem.metric} measured progress</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#009656] shrink-0 mt-1.5" />
                        <span>
                          <strong className="font-bold text-[#001965]">Search Essentials Ready:</strong>{' '}
                          <span className="text-neutral-600 font-medium">Google algorithm & AI citation compliant</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#009656] shrink-0 mt-1.5" />
                        <span>
                          <strong className="font-bold text-[#001965]">Fast Rollout & Live Attribution:</strong>{' '}
                          <span className="text-neutral-600 font-medium">Bi-weekly reporting tied to qualified pipeline</span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#009656] animate-pulse" />
                      <span>Ready to eliminate this roadblock permanently?</span>
                    </div>
                    <button
                      type="button"
                      onClick={onOpenConsultation}
                      className="w-full sm:w-auto py-3 px-6 bg-[#009656] hover:bg-[#008248] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
                    >
                      <span>Fix This Roadblock With Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })()}



        </div>
      </section>

      {/* Strategic SEO Solutions Section (Following Website Branding Language) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFD] border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="w-full text-center space-y-3.5 mb-12 sm:mb-16">
            
            {/* Eyebrow Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
                <span>What We Do</span>
              </div>
            </div>

            {/* Main Headline in Dual Brand Colors */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2] max-w-4xl mx-auto"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Strategic SEO </span>
              <span className="text-[#009656]">Solutions— </span>
              <span className="text-[#001965]">by a Search Engine Optimization Agency</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center justify-center gap-1.5 py-1">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Subtitle Description */}
            <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal max-w-4xl mx-auto text-center">
              Partner with a professional search engine optimization agency providing end-to-end solutions to improve search performance, boost website traffic, and achieve long-term online growth with expert, results-driven strategies. We are a performance-focused global SEO company providing local and international SEO services for competitive markets. Our customized strategies and budget-friendly plans position us as an affordable SEO agency delivering measurable growth and strong online presence. Don&apos;t wait, maximize your ROI, outrank competitors, and grow your online presence with our customized solutions designed for measurable results.
            </p>

          </div>

          {/* Interactive Navigation Tabs Row */}
          <div className="w-full mb-10 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center justify-start xl:justify-center gap-3 sm:gap-6 min-w-max px-2 border-b border-slate-200">
              {strategicSeoSolutions.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = activeStrategicTab === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveStrategicTab(idx)}
                    className={`flex flex-col items-center gap-2 pb-3.5 px-3 transition-all duration-200 cursor-pointer border-b-2 -mb-[2px] ${
                      isActive
                        ? 'border-[#009656] text-[#001965]'
                        : 'border-transparent text-slate-600 hover:text-[#009656]'
                    }`}
                  >
                    {/* Circle Icon Container */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isActive
                          ? 'bg-[#001965] text-white shadow-sm ring-4 ring-[#001965]/15'
                          : 'bg-white text-[#001965] border border-slate-200 hover:border-[#009656]/50 hover:text-[#009656]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Tab Label */}
                    <span className={`text-xs sm:text-[13px] whitespace-nowrap ${
                      isActive ? 'text-[#001965] font-bold' : 'text-slate-700 font-semibold'
                    }`}>
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Display - 3 Responsive Columns */}
          {(() => {
            const currentSolution = strategicSeoSolutions[activeStrategicTab] || strategicSeoSolutions[0];
            return (
              <div className="bg-white rounded-[2px] p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200/90 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
                  
                  {/* Column 1 (Left Side): H3, Subtitle, Description & Bullet points */}
                  <div className="flex flex-col space-y-4 text-left">
                    <div className="space-y-2.5">
                      {/* H3 Title */}
                      <h3 
                        className="text-xl sm:text-2xl font-bold text-[#001965] tracking-tight"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        <span className="text-[#009656] mr-1.5">{currentSolution.id < 10 ? `0${currentSolution.id}` : currentSolution.id}.</span>
                        {currentSolution.name}
                      </h3>

                      {/* Subtitle H4 */}
                      <h4 className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                        {currentSolution.subtitle}
                      </h4>

                      {/* Content Description */}
                      <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                        {currentSolution.description}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-slate-700">
                      {currentSolution.bulletPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#009656] shrink-0 mt-1.5" />
                          <span className="leading-normal font-medium text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2 (Middle): Key Deliverables (Simple Column, No Cards) */}
                  <div className="flex flex-col space-y-4 text-left border-t md:border-t-0 md:border-l border-slate-200/80 pt-6 md:pt-0 md:pl-6 lg:pl-8">
                    <div className="pb-3 border-b border-slate-100 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#009656]" />
                      <h4 
                        className="text-base sm:text-lg font-bold text-[#001965] tracking-tight"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Key Deliverables
                      </h4>
                    </div>

                    <ul className="space-y-3.5">
                      {currentSolution.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 group">
                          <div className="w-5 h-5 rounded-full bg-[#009656]/10 border border-[#009656]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#009656] group-hover:border-[#009656] transition-colors">
                            <Check className="w-3 h-3 text-[#009656] group-hover:text-white stroke-[2.5] transition-colors" />
                          </div>
                          <span className="font-medium text-slate-700 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3 (Right): Resource Allocation (Simple Column, No Cards) */}
                  <div className="flex flex-col space-y-4 text-left border-t md:border-t-0 md:border-l border-slate-200/80 pt-6 md:pt-0 md:pl-6 lg:pl-8">
                    <div className="pb-3 border-b border-slate-100 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#001965]" />
                      <h4 
                        className="text-base sm:text-lg font-bold text-[#001965] tracking-tight"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Resource Allocation
                      </h4>
                    </div>

                    <ul className="space-y-3.5">
                      {currentSolution.resources.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 group">
                          <div className="w-5 h-5 rounded-full bg-[#001965]/5 border border-[#001965]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#001965] group-hover:border-[#001965] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#001965] group-hover:bg-white transition-colors" />
                          </div>
                          <span className="font-medium text-slate-700 leading-snug">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* Proven Case Studies - Creating a 360° Experience (SEO Customized) */}
      <SeoCaseStudiesSection onOpenConsultation={onOpenConsultation} />

      {/* How We Work Process Timeline (Matching Screenshot with Authentic Branding) */}
      <ServiceHowWeWorkSection 
        titlePrefix="Here's Exactly "
        titleHighlight="What Happens Next"
        subtitle="That's why we take a different approach — we listen carefully, guide you step-by-step, and create a clear, personalized SEO ranking roadmap."
      />

      {/* Comparison Section: Traditional Agencies vs AMIT Solutions (Following Brand Language) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="w-full text-center space-y-3.5 mb-12 sm:mb-16">
            
            {/* Eyebrow Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
                <span>Agency Comparison</span>
              </div>
            </div>

            {/* Main Headline in Brand Navy and Emerald */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2] text-balance text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">AMIT Solutions SEO Services Are </span>
              <span className="text-[#009656]">Engineered Differently</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center justify-center gap-1.5 py-1">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Subtitle Description */}
            <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal max-w-3xl mx-auto text-center">
              Discover why scaling businesses choose AMIT Solutions over traditional agencies that rely on rigid contracts, junior staff, and opaque reporting.
            </p>

          </div>

          {/* 3-Column Comparison Table Container */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[760px]">
                
                {/* Table Header */}
                <thead>
                  <tr className="border-b border-slate-200">
                    
                    {/* Column 1 Header: Featured Features */}
                    <th className="w-[30%] p-5 sm:p-6 bg-slate-50 text-left align-top">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Evaluation Matrix
                      </span>
                      <span 
                        className="text-base sm:text-lg font-bold text-[#001965]"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Featured Features
                      </span>
                    </th>

                    {/* Column 2 Header: The Traditional Agency */}
                    <th className="w-[35%] p-5 sm:p-6 bg-rose-50/50 border-x border-slate-200 text-left align-top">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>The Traditional Agency</span>
                      </div>
                      <h4 
                        className="text-base sm:text-lg font-bold text-slate-800"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        The Outdated Agency Model
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        Rigid retainers &amp; junior staff execution
                      </p>
                    </th>

                    {/* Column 3 Header: Alvi Digital Marketing Agency / AMIT Solutions */}
                    <th className="w-[35%] p-5 sm:p-6 bg-[#001965] text-left text-white align-top relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#009656] via-emerald-400 to-[#009656]" />
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#009656] text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Alvi Digital Marketing Agency (AMIT Solutions)</span>
                      </div>
                      <h4 
                        className="text-base sm:text-lg font-bold text-white flex items-center gap-2"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        <span>The Engineered Advantage</span>
                      </h4>
                      <p className="text-xs text-slate-300 font-normal mt-0.5">
                        Senior search directors &amp; live ROI attribution
                      </p>
                    </th>

                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-100 text-sm">
                  {[
                    {
                      feature: 'Contract Terms & Commitments',
                      featureDesc: 'Retainer flexibility and contractual obligations',
                      traditional: {
                        tag: 'Rigid 6-12 Month Retainers',
                        desc: 'Locked into multi-quarter hostage retainers with punitive cancellation fees regardless of ranking results.',
                      },
                      amit: {
                        tag: '100% Performance-Driven & Agile',
                        desc: 'Month-to-month flexibility. We earn your business every 30 days based on demonstrable ranking and revenue gains.',
                      }
                    },
                    {
                      feature: 'Dedicated Talent & Seniority',
                      featureDesc: 'Who actually works on your search campaigns daily',
                      traditional: {
                        tag: 'Inexperienced Junior Staff',
                        desc: 'Pitched by charismatic senior partners, then silently handed off to entry-level interns and generalists.',
                      },
                      amit: {
                        tag: 'Senior Dedicated Search Architects',
                        desc: '10+ year veteran SEO directors and technical search architects actively designing and executing your sprints.',
                      }
                    },
                    {
                      feature: 'Methodology & Algorithm Safety',
                      featureDesc: 'Compliance with Google Core Updates and standards',
                      traditional: {
                        tag: 'Risky Shortcuts & Black-Hat Tactics',
                        desc: 'Unsafe PBN link schemes and automated shortcuts that leave your domain vulnerable to catastrophic penalties.',
                      },
                      amit: {
                        tag: '100% White-Hat & AI-Citation Compliant',
                        desc: 'Future-proof optimization strictly aligned with Google Search Essentials, Core Updates, and generative engine standards.',
                      }
                    },
                    {
                      feature: 'Reporting & Business Attribution',
                      featureDesc: 'Measurement of actual business revenue vs vanity metrics',
                      traditional: {
                        tag: 'Vague PDFs & Vanity Impressions',
                        desc: 'Generic monthly PDFs filled with confusing graphs and impressions that fail to correlate with actual sales.',
                      },
                      amit: {
                        tag: '24/7 Live Pipeline Revenue Attribution',
                        desc: 'Live executive dashboards mapping keyword visibility directly to qualified inquiries, demos, and verifiable ROI.',
                      }
                    },
                    {
                      feature: 'Turnaround & Communication',
                      featureDesc: 'Sprint agility, execution speed, and direct responsiveness',
                      traditional: {
                        tag: 'Weeks of Bureaucracy & Red Tape',
                        desc: 'Slow turnaround times, impersonal ticket queues, and unresponsive junior account managers.',
                      },
                      amit: {
                        tag: 'Bi-Weekly Sprints & Direct Slack Access',
                        desc: 'Rapid 14-day execution cycles, dedicated private Slack channel, and proactive weekly strategy updates.',
                      }
                    },
                    {
                      feature: 'Strategy Personalization',
                      featureDesc: 'How the strategy is tailored for your market vertical',
                      traditional: {
                        tag: 'Cookie-Cutter Generic Checklists',
                        desc: 'One-size-fits-all checklists recycled across dozens of clients with zero competitive gap research.',
                      },
                      amit: {
                        tag: 'Custom Vertical Growth Blueprint',
                        desc: 'Bespoke entity clustering, competitor query reverse-engineering, and tailored commercial intent funnels.',
                      }
                    },
                    {
                      feature: 'AI Overviews & GEO Optimization',
                      featureDesc: 'Generative Engine Optimization (ChatGPT, Gemini, Perplexity)',
                      traditional: {
                        tag: 'Ignored or Treated as an Afterthought',
                        desc: 'Outdated keyword stuffing with zero schema knowledge graph mapping for generative AI answer engines.',
                      },
                      amit: {
                        tag: 'Full Generative Engine Optimization (GEO)',
                        desc: 'Knowledge graph entity structuring and citation frameworks that get your brand cited in Google AI Overviews.',
                      }
                    }
                  ].map((row, idx) => (
                    <tr 
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50/60 transition-colors' : 'bg-slate-50/40 hover:bg-slate-50 transition-colors'}
                    >
                      {/* Col 1: Feature Title & Subtitle */}
                      <td className="p-4 sm:p-5 align-top">
                        <div className="font-bold text-[#001965] text-sm sm:text-[15px]">
                          {row.feature}
                        </div>
                        <div className="text-xs text-slate-500 font-normal mt-0.5">
                          {row.featureDesc}
                        </div>
                      </td>

                      {/* Col 2: Traditional Agencies */}
                      <td className="p-4 sm:p-5 align-top bg-rose-50/15 border-x border-slate-200/80">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <div>
                            <span className="font-bold text-slate-800 text-xs sm:text-[13px] block">
                              {row.traditional.tag}
                            </span>
                            <p className="text-xs text-slate-500 leading-relaxed mt-1">
                              {row.traditional.desc}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Col 3: AMIT Solutions */}
                      <td className="p-4 sm:p-5 align-top bg-emerald-50/30">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#009656]/15 text-[#009656] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <div>
                            <span className="font-bold text-[#001965] text-xs sm:text-[13px] block">
                              {row.amit.tag}
                            </span>
                            <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                              {row.amit.desc}
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

                {/* Table Footer with Action Button */}
                <tfoot>
                  <tr className="border-t border-slate-200 bg-slate-50">
                    <td className="p-4 sm:p-5 text-xs text-slate-500 font-medium">
                      Ready to experience the difference?
                    </td>
                    <td className="p-4 sm:p-5 border-x border-slate-200/80 text-xs text-rose-600 font-medium">
                      Risk: Budget burn &amp; locked retainers
                    </td>
                    <td className="p-4 sm:p-5 bg-emerald-50/40">
                      <button
                        onClick={onOpenConsultation}
                        className="w-full py-3 px-4 rounded-lg bg-[#001965] hover:bg-[#009656] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        <span>Experience AMIT Solutions</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </td>
                  </tr>
                </tfoot>

              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Ready to Take the Next Step in Your Digital Growth? (Strategic SEO Roadmap & Consultation) */}
      <SeoConsultationRoadmapSection onOpenConsultation={onOpenConsultation} />

      {/* What Our Clients Say (Video Stories & Verified Google Reviews) */}
      <SeoWhyClientsSaySection onOpenConsultation={onOpenConsultation} />

      {/* Frequently Asked Questions (Matching Screenshot with Category Selector + Accordion) */}
      <FaqSection 
        eyebrow="HELP & INFORMATION"
        titlePrefix="Frequently Asked "
        titleHighlight="Questions"
        description="Everything you need to know about partnering with AMIT Solutions, our 100% white-hat methodologies, transparent pricing, and organic ranking performance."
        categories={seoFaqCategories}
      />

      {/* Scale Your Business with AMIT Solutions (Pre-Footer CTA Section) */}
      <SeoPreFooterCTASection onOpenConsultation={onOpenConsultation} />

    </div>
  );
};
