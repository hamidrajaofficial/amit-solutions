import React, { useState } from 'react';
import { 
  Search, 
  Share2, 
  Briefcase, 
  Video, 
  Play, 
  Layout, 
  ShoppingBag, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Zap,
  Globe
} from 'lucide-react';

interface CustomizedSolutionsTabsSectionProps {
  onOpenConsultation?: () => void;
}

export const CustomizedSolutionsTabsSection: React.FC<CustomizedSolutionsTabsSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 1,
      name: 'Search Engine Ads',
      icon: Search,
      badge: 'High Commercial Intent',
      subtitle: 'High-Intent Google & Microsoft Search Campaigns',
      description: 'Capture active buyers at the exact moment they search for your solutions. We engineer granular keyword targeting, negative match sculpting, and conversion-optimized ad extensions that maximize search impression share and high-value conversion volume.',
      highlights: [
        'Exact & Phrase Match commercial query harvesting',
        'Real-time automated smart bidding & bid cap governance',
        'Continuous negative keyword sculpting to eliminate budget waste',
        'Performance Max & Search Asset copy variations',
      ],
      deliverables: [
        'High-Intent Keyword Architecture Blueprint',
        'Ad Copy & Responsive Extension Variations',
        'Negative Keyword Guardrails & Weekly Cleansing',
        'Live Google Search Console & GA4 Attribution',
      ],
      metrics: {
        roas: '4.2x',
        cplReduction: '-38%',
        safetyScore: '99.4%',
      },
      platforms: ['Google Search', 'Microsoft Bing Ads', 'Performance Max', 'Google Search Partners'],
    },
    {
      id: 2,
      name: 'Facebook & Instagram',
      icon: Share2,
      badge: 'Multi-Channel Social',
      subtitle: 'Precision Audience Targeting & High-Converting Social Funnels',
      description: 'Scale customer acquisition across Meta’s 3+ billion active users with scroll-stopping video hooks, dynamic catalog ads, and lookalike modeling that turns casual social scrollers into qualified, paying customers.',
      highlights: [
        'Lookalike & first-party custom audience segmentation',
        'Multi-angle creative testing (UGC hooks, statics & carousels)',
        'Full-funnel dynamic retargeting & cart recovery workflows',
        'Advantage+ Audience AI budget scaling and optimization',
      ],
      deliverables: [
        'Meta Creative Asset Playbook & Video Hooks',
        'Audience Segmentation & Demographics Matrix',
        'Server-Side Conversions API (CAPI) Integration',
        'Weekly Creative Fatigue Monitoring & Rapid Refresh',
      ],
      metrics: {
        roas: '3.8x',
        cplReduction: '+48% Lift',
        safetyScore: 'Sub-24h',
      },
      platforms: ['Instagram Reels & Feed', 'Facebook Feed & Stories', 'Meta Advantage+', 'Messenger Ads'],
    },
    {
      id: 3,
      name: 'LinkedIn Ads',
      icon: Briefcase,
      badge: 'Enterprise B2B & ABM',
      subtitle: 'Enterprise B2B Lead Generation & Account-Based Marketing',
      description: 'Engage verified enterprise decision-makers, VP/C-suite buyers, and buying committees with high-precision firmographic targeting, Sponsored Content, and friction-free native Lead Gen Forms that feed directly to your CRM.',
      highlights: [
        'Firmographic, industry, company-size & job-title precision',
        'Account-Based Marketing (ABM) target account list matching',
        'Native Lead Gen Forms with auto-filled verified business data',
        'Thought leadership ads from verified founder and executive profiles',
      ],
      deliverables: [
        'Enterprise Account-Based Marketing List Match',
        'Native CRM Lead Routing Integration (HubSpot/Salesforce)',
        'C-Level Sponsored Content & Document Ad Creatives',
        'Pipeline Attribution & Sales Qualified Lead (SQL) Scorecard',
      ],
      metrics: {
        roas: '62%',
        cplReduction: '3.2x',
        safetyScore: '100%',
      },
      platforms: ['LinkedIn Sponsored Content', 'Message Ads (InMail)', 'Lead Gen Forms', 'Document Ads'],
    },
    {
      id: 4,
      name: 'TikTok & Short Video',
      icon: Video,
      badge: 'Viral Discovery & UGC',
      subtitle: 'Viral Discovery, Spark Ads & Native Short-Form Conversions',
      description: 'Harness the explosive organic velocity of short-form video advertising. We craft trend-aligned UGC creative hooks, Spark Ads, and high-impact short-form video ads that convert Millennial and Gen Z purchasing power into measurable revenue.',
      highlights: [
        'Native UGC-style storytelling, text overlays & audio hooks',
        'TikTok Spark Ads boosting highest-performing authentic posts',
        'Interactive display cards, voting stickers & pop-up vouchers',
        'Fast 7-day creative rotation to outpace algorithmic fatigue',
      ],
      deliverables: [
        'Weekly Short-Form Creative Batches & Angle Testing',
        'Trending Audio, Hook & Visual Storyboard Curation',
        'TikTok Pixel & Server-Side Event API Integration',
        'Spark Ads Influencer Licensing & Whitelisting Framework',
      ],
      metrics: {
        roas: '5.4x',
        cplReduction: '-42%',
        safetyScore: '2.9x',
      },
      platforms: ['TikTok In-Feed Ads', 'TikTok Spark Ads', 'TopView Takeovers', 'TikTok Shop'],
    },
    {
      id: 5,
      name: 'Video Ads',
      icon: Play,
      badge: 'High-Attention Screens',
      subtitle: 'YouTube In-Stream, Non-Skippable & Connected TV (CTV) Ads',
      description: 'Dominate high-attention video screens with cinematic narrative advertising on YouTube and streaming TV platforms. Drive brand recall, unskippable awareness, and direct response actions from deeply engaged viewers.',
      highlights: [
        'High-intent YouTube search, In-Stream & Shorts placements',
        'Connected TV (CTV) & living-room streaming device coverage',
        '5-second unskippable hook optimization that commands attention',
        'Direct-action end screens and actionable clickable prompts',
      ],
      deliverables: [
        'Storyboard, Hook & Direct-Response Scriptwriting Blueprint',
        'Custom Intent & In-Market YouTube Audience Clusters',
        'Brand Safety & Strict Publisher Channel Whitelisting',
        'Cross-Device View-Through Attribution Scorecard',
      ],
      metrics: {
        roas: '74%',
        cplReduction: '+58%',
        safetyScore: '8K UHD',
      },
      platforms: ['YouTube In-Stream', 'YouTube Shorts', 'Connected TV (Roku/Apple TV)', 'Google Video Partners'],
    },
    {
      id: 6,
      name: 'Display Network Ads',
      icon: Layout,
      badge: 'Programmatic Reach',
      subtitle: 'Programmatic Banner Reach, Dynamic Retargeting & Brand Recall',
      description: 'Keep your brand top-of-mind across millions of top-tier websites, mobile apps, and editorial publications through programmatic display networks with automated brand safety and placement whitelisting.',
      highlights: [
        'Programmatic DSP real-time bidding on premium inventory',
        'Dynamic retargeting based on user behavior and intent signals',
        'Contextual domain & keyword whitelisting for brand safety',
        'Guaranteed viewability rate (70%+ active view standard)',
      ],
      deliverables: [
        'Multi-Size Responsive HTML5 Animated Banner Suite',
        'Placement Audit & Low-Performing App Exclusion Lists',
        'Frequency Capping Guardrails to prevent ad fatigue',
        'TAG-Certified Brand Safety & Traffic Verification Reports',
      ],
      metrics: {
        roas: '99.8%',
        cplReduction: '<0.05%',
        safetyScore: '3.4x',
      },
      platforms: ['Google Display Network', 'Programmatic DSP Exchanges', 'Mobile App Network', 'Native Display'],
    },
    {
      id: 7,
      name: 'E-commerce Advertising',
      icon: ShoppingBag,
      badge: 'Catalog & Retail Scaling',
      subtitle: 'Shopping Feeds, Catalog Sales & Multi-Marketplace Scaling',
      description: 'Accelerate direct-to-consumer (DTC) and retail marketplace transactions with optimized Google Shopping feeds, Performance Max for retail, dynamic catalog retargeting, and high-margin product push strategies.',
      highlights: [
        'Merchant Center feed optimization, taxonomy & title enrichment',
        'Google Performance Max for retail product catalog scaling',
        'Dynamic Product Ads (DPA) targeting cart abandoners',
        'High-margin SKU priority segmentation and custom labels',
      ],
      deliverables: [
        'Product Catalog Feed Management & Attribute Optimization',
        'High-Margin SKU Priority Segmentation Architecture',
        'Dynamic Retargeting Sequences Across Meta & Google',
        'Automated Real-Time Feed Inventory & Price Sync',
      ],
      metrics: {
        roas: '4.6x',
        cplReduction: '+52%',
        safetyScore: '<15min',
      },
      platforms: ['Google Shopping', 'Shopify Catalog', 'Meta Dynamic Product Ads', 'Amazon Ads'],
    },
    {
      id: 8,
      name: 'Local Advertising',
      icon: MapPin,
      badge: 'Local Radius Domination',
      subtitle: 'Google Local Service Ads, Maps 3-Pack & Geo-Fenced Mobile Ads',
      description: 'Drive qualified local calls, verified store visits, and local service appointments from customers in your exact operating radius. We dominate Google Local Service Ads (Google Guaranteed), Maps 3-Pack, and hyper-local geo-fencing.',
      highlights: [
        'Google Guaranteed & Local Services Ads (LSA) setup and protection',
        'Google Maps 3-Pack sponsored pins and local extensions',
        'Hyper-targeted geo-fencing (1-5 mile high-intent radiuses)',
        'Click-to-call, directions and verified booking tracking',
      ],
      deliverables: [
        'Local Service Ads Verification & Dispute Management',
        'Google Business Profile (GBP) Ad Linkage & Extension Suite',
        'Live Call Tracking & Lead Quality Validation Dashboard',
        'Zip-Code & Sub-Region Revenue Attribution Map',
      ],
      metrics: {
        roas: '82%',
        cplReduction: 'Top 3',
        safetyScore: '-34%',
      },
      platforms: ['Google Local Services (Google Guaranteed)', 'Google Maps', 'Local Search Ads', 'Geo-Fenced Mobile'],
    },
  ];

  const current = services[activeTab];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFD] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Subtle Brand Ambient Tints */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#009656]/5 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#001965]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="w-full text-center space-y-3.5 mb-12 sm:mb-16">
          
          {/* Eyebrow Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-xs sm:text-sm font-bold text-[#009656] tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Customized Solutions</span>
            </div>
          </div>

          {/* Main Headline in Dual Brand Colors (Navy #001965 & Emerald #009656) */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#001965]">Our Services & </span>
            <span className="text-[#009656]">Solutions</span>
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
          <p className="text-[1rem] sm:text-[17px] text-neutral-600 leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Comprehensive digital advertising across search, social, and programmatic platforms.
          </p>

        </div>

        {/* 8 Interactive Switching Tabs Row (Horizontally Scrollable on Mobile/Tablet with Smooth Scrolling) */}
        <div className="w-full mb-10 overflow-x-auto pb-3 scrollbar-none">
          <div className="flex items-center justify-start xl:justify-center gap-2 sm:gap-4 min-w-max px-2 border-b border-slate-200">
            {services.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
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
                        ? 'bg-[#001965] text-white shadow-md ring-4 ring-[#001965]/15'
                        : 'bg-white text-[#001965] border border-slate-200 hover:border-[#009656]/50 hover:text-[#009656] shadow-xs'
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.9]" />
                  </div>
                  {/* Tab Label */}
                  <span className={`text-xs sm:text-[13px] whitespace-nowrap tracking-tight ${
                    isActive ? 'text-[#001965] font-bold' : 'text-slate-700 font-semibold'
                  }`}>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display - 3 Responsive Columns Card Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-200/90 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Column 1 (Left Side - 5 Cols on LG): Title, Subtitle, Description & Highlights */}
            <div className="lg:col-span-5 flex flex-col space-y-5 text-left">
              
              <div className="space-y-2">
                {/* Category Pill Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#009656]/10 text-[#009656] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{current.badge}</span>
                </div>

                {/* H3 Title with Index Number */}
                <h3 
                  className="text-xl sm:text-2xl font-bold text-[#001965] tracking-tight leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span className="text-[#009656] mr-2">0{current.id}.</span>
                  {current.name}
                </h3>

                {/* Subtitle */}
                <h4 className="text-sm sm:text-[15px] font-semibold text-slate-800 leading-snug">
                  {current.subtitle}
                </h4>
              </div>

              {/* In-Depth Channel Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Core Feature Highlights */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#001965] block mb-3">
                  Strategic Capabilities
                </span>
                <ul className="space-y-2.5">
                  {current.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#009656] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Column 2 (Middle - 4 Cols on LG): Key Deliverables & Format Architecture */}
            <div className="lg:col-span-4 flex flex-col space-y-6 text-left border-y lg:border-y-0 lg:border-x border-slate-100 py-6 lg:py-0 lg:px-8">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#001965] block mb-3.5">
                  Execution Deliverables
                </span>
                <div className="space-y-3">
                  {current.deliverables.map((item, dIdx) => (
                    <div 
                      key={dIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#009656]/40 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-[#001965]/10 text-[#001965] flex items-center justify-center shrink-0 mt-0.5">
                          <Layers className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Targeted Platforms & Formats */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#001965] block mb-2.5">
                  Targeted Networks &amp; Formats
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {current.platforms.map((platform, platIdx) => (
                    <span 
                      key={platIdx}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Column 3 (Right Side - 3 Cols on LG): Performance Metric Benchmarks & Direct CTA */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-6 text-left">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#001965] block mb-1">
                  Verified Performance Benchmarks
                </span>

                {/* Metric 1: Primary Target Benchmark */}
                <div className="p-4 rounded-xl bg-[#001965] text-white shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#009656]/20 rounded-full blur-xl pointer-events-none" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#009656] block mb-1">
                    Campaign Impact
                  </span>
                  <div 
                    className="text-3xl font-extrabold text-white tracking-tight leading-none mb-1 font-mono"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {current.metrics.roas}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    Average Channel Benchmark
                  </span>
                </div>

                {/* Metric 2: Efficiency / Velocity */}
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      Cost Efficiency
                    </span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#009656]" />
                  </div>
                  <div 
                    className="text-2xl font-bold text-[#001965] tracking-tight leading-none mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {current.metrics.cplReduction}
                  </div>
                  <span className="text-xs text-slate-600 font-normal">
                    Targeted Acquisition Lift
                  </span>
                </div>

                {/* Metric 3: Safety / Fraud Protection */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#009656]/15 text-[#009656] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#001965]">
                      {current.metrics.safetyScore} Protected
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Automated Fraud Exclusion
                    </div>
                  </div>
                </div>

              </div>

              {/* Dedicated Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-5 rounded-lg bg-[#001965] hover:bg-[#009656] text-white font-['Outfit',sans-serif] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer group"
                >
                  <span>Build {current.name} Plan</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="text-[11px] text-center text-slate-400 mt-2 font-normal">
                  Zero obligation &bull; 100% custom strategy
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomizedSolutionsTabsSection;
