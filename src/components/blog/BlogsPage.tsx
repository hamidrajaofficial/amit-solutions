import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  CheckCircle2, 
  X,
  Share2,
  Bookmark,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { WhyClientsSaySection } from '../WhyClientsSaySection';
import { FaqSection } from '../common/FaqSection';
import { PreFooterCTASection } from '../PreFooterCTASection';
import { homeFaqCategories } from '../../data/faqData';

interface BlogPost {
  id: string;
  title: string;
  category: 'SEO' | 'Paid Ads' | 'Local SEO' | 'Web & CRO' | 'Strategy';
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  imageBg: string;
  featured?: boolean;
  content: {
    introduction: string;
    keyTakeaways: string[];
    bodyParagraphs: string[];
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 'b2b-organic-pipeline',
    title: 'How We Scaled Organic B2B Pipeline by 340% Without Increasing Ad Spend',
    category: 'SEO',
    featured: true,
    excerpt: 'A complete forensic breakdown of our high-intent keyword clustering, technical search optimization, and bottom-of-funnel conversion architecture that transformed inbound qualified revenue.',
    readTime: '7 min read',
    date: 'Oct 12, 2026',
    author: 'Hamid Raja',
    authorRole: 'Head of Search Strategy',
    imageBg: 'from-[#001965] to-[#0c3c66]',
    content: {
      introduction: 'In the modern B2B landscape, acquiring enterprise accounts through rising paid ad costs is becoming unsustainable. Here is how AMIT Solutions engineered an organic search engine architecture that outranks legacy incumbents and compounds MRR month-over-month.',
      keyTakeaways: [
        'Shifted from vanity high-volume keywords to high-intent commercial evaluation queries.',
        'Eliminated technical crawl bloat to accelerate Google bot indexing by 82%.',
        'Built interactive ROI calculator modules that converted top-of-funnel traffic directly into booked demos.',
        'Established contextual authority through verified editorial partnerships.'
      ],
      bodyParagraphs: [
        'Most agencies treat SEO as a content treadmill—churning out generic AI articles targeting broad top-of-funnel terms. When we audited the client, we discovered that 92% of their organic traffic came from queries that had zero purchasing intent.',
        'Our team pivoted the entire organic roadmap around Bottom-Of-Funnel (BOFU) comparison and alternative search terms. These queries have lower search volume but carry a 14x higher demo conversion rate.',
        'Combined with custom Core Web Vitals optimization and schema markup, the client jumped from page 4 to Google Position #1 across 42 high-ticket commercial keywords within 90 days.'
      ]
    }
  },
  {
    id: 'google-algorithm-update-2026',
    title: 'Google Helpful Content & Core Algorithm Shift: The 2026 Ranking Playbook',
    category: 'SEO',
    excerpt: 'Demystifying the latest search engine quality updates. Learn why programmatic thin content is getting de-indexed and how real human expertise wins.',
    readTime: '5 min read',
    date: 'Oct 8, 2026',
    author: 'Marcus Vance',
    authorRole: 'Technical SEO Director',
    imageBg: 'from-[#001965]/90 to-[#009656]/90',
    content: {
      introduction: 'Recent search updates have fundamentally penalized websites that prioritize volume over genuine subject matter authority. Discover the exact structural signals search algorithms now prioritize.',
      keyTakeaways: [
        'Information gain score: content must provide new, un-recycled data.',
        'Authoritativeness: clear author credentials, case studies, and transparent citations.',
        'User engagement signals: time on page and low search bounce rate.'
      ],
      bodyParagraphs: [
        'Search engines have moved from simple semantic keyword matching to complex neural intent models. Pages that simply regurgitate what already exists in the top 10 search results are experiencing severe visibility drops.',
        'To insulate your business against algorithm volatility, our methodology injects proprietary case study data, video summaries, and expert commentary into every published asset.'
      ]
    }
  },
  {
    id: 'local-geogrid-domination',
    title: 'Local Google 3-Pack Mastery: GeoGrid Ranking Signals Decoded',
    category: 'Local SEO',
    excerpt: 'Stop relying on single-point ranking reports. See how precision proximity signals and localized entity optimization dominate street-by-street Google Maps.',
    readTime: '6 min read',
    date: 'Sep 29, 2026',
    author: 'Sarah Jenkins',
    authorRole: 'Local Visibility Lead',
    imageBg: 'from-[#009656] to-[#007f49]',
    content: {
      introduction: 'Google Maps drives up to 70% of all local customer inquiries. However, ranking #1 at your physical storefront doesn’t mean customers 2 miles away can find you.',
      keyTakeaways: [
        'GeoGrid heatmaps show the exact radius where your business ranks in the top 3.',
        'Citations must match USPS and official business registries verbatim.',
        'Review velocity and geo-tagged client photos expand your ranking radius by up to 5 miles.'
      ],
      bodyParagraphs: [
        'Local SEO is fundamentally a game of proximity and prominence. Through GeoGrid analysis, we identify precise blind spots in your service territory where competitors are siphoning your leads.',
        'By systematically building localized neighborhood pages and securing geo-specific brand mentions, we expand your Google 3-Pack radius across your entire metropolitan footprint.'
      ]
    }
  },
  {
    id: 'vanity-metrics-death',
    title: 'The Death of Vanity Metrics: How to Track True CAC and Blended ROAS',
    category: 'Paid Ads',
    excerpt: 'Clicks, impressions, and video views do not pay the bills. Here is how modern growth marketers engineer clean multi-touch attribution.',
    readTime: '6 min read',
    date: 'Sep 21, 2026',
    author: 'David Chen',
    authorRole: 'Paid Media Architect',
    imageBg: 'from-[#001965] to-[#1e293b]',
    content: {
      introduction: 'With browser privacy restrictions and fragmented user journeys, in-platform ROAS numbers from Meta and Google Ads are notoriously inaccurate.',
      keyTakeaways: [
        'Never optimize campaigns based purely on platform reported conversions.',
        'Implement server-side tracking (CAPI) to recover 25-35% of lost attribution data.',
        'Focus on Customer Acquisition Cost (CAC) against 90-day Lifetime Value (LTV).'
      ],
      bodyParagraphs: [
        'Ad networks optimize for what is easiest to track, not what is most profitable for your business. When you optimize for cheap clicks, you train algorithms to find window shoppers rather than high-ticket buyers.',
        'Our paid media architecture connects your CRM pipeline directly with Google and Meta server APIs, feeding back real revenue data so the algorithms bid aggressively on your highest-value customers.'
      ]
    }
  },
  {
    id: 'website-redesign-trap',
    title: 'Why 90% of Website Redesigns Tank Organic Traffic (And How to Prevent It)',
    category: 'Web & CRO',
    excerpt: 'Migrating to a sleek new design often results in a catastrophic 50%+ traffic drop. The pre-launch checklist every founder and agency must execute.',
    readTime: '8 min read',
    date: 'Sep 15, 2026',
    author: 'Elena Rostova',
    authorRole: 'Head of Web Architecture',
    imageBg: 'from-[#009656]/85 to-[#001965]',
    content: {
      introduction: 'A aesthetically beautiful website is useless if nobody visits it. Most web design agencies have zero search engine optimization expertise, leading to devastating URL broken redirects.',
      keyTakeaways: [
        '1:1 301 Redirect Mapping: Never delete legacy URLs without permanent redirection.',
        'Retain heading hierarchies and body text word counts on key ranking pages.',
        'Benchmark Core Web Vitals in a staging environment prior to DNS switch.'
      ],
      bodyParagraphs: [
        'During a redesign, designers frequently simplify navigation, truncate in-depth copy, and change URL slugs. To Google, your website appears to have lost 70% of its content overnight.',
        'At AMIT Solutions, our web architecture process couples modern, high-converting UI/UX design with strict SEO migration protocols, ensuring zero ranking loss and an immediate boost in conversion rates.'
      ]
    }
  },
  {
    id: 'full-funnel-growth-system',
    title: 'Full-Funnel Growth Architecture: Connecting Search, Social & Web CRO',
    category: 'Strategy',
    excerpt: 'Siloed marketing channels waste capital. Discover how unifying SEO, paid ads, and conversion funnels compounds marketing returns.',
    readTime: '5 min read',
    date: 'Sep 04, 2026',
    author: 'Hamid Raja',
    authorRole: 'Head of Search Strategy',
    imageBg: 'from-[#001965] to-[#009656]',
    content: {
      introduction: 'A prospect rarely converts on their first touchpoint. They discover you on Google, see a remarketing ad on LinkedIn, read a review, and finally book a consultation.',
      keyTakeaways: [
        'Use search intent to identify problems and paid retargeting to present the solution.',
        'Personalize landing page messaging based on the incoming traffic source.',
        'Unified analytics reporting eliminates finger-pointing between marketing channels.'
      ],
      bodyParagraphs: [
        'When SEO and paid ads operate in silos, you often find your paid campaigns bidding on keywords you already organically dominate, or your landing pages failing to answer the searcher intent.',
        'An integrated growth system shares data bidirectionally. High-converting search queries inform paid ad copy, while ad performance data reveals profitable new keywords for SEO targeting.'
      ]
    }
  }
];

interface BlogsPageProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['All', 'SEO', 'Paid Ads', 'Local SEO', 'Web & CRO', 'Strategy'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Section (with 30px Top Spacing) */}
      <section className="relative pt-[30px] pb-16 sm:pb-20 bg-gradient-to-b from-[#F0F6FC]/80 via-[#F7FAFD]/50 to-white overflow-hidden hero-section-top-spacing border-b border-slate-200/60">
        
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#001965]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#009656]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="w-full max-w-3xl mx-auto text-center space-y-3.5 mb-10 sm:mb-12">
            
            {/* Eyebrow Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-xs sm:text-sm font-bold text-[#009656] tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
                <span>INSIGHTS &amp; STRATEGIES</span>
              </div>
            </div>

            {/* Main Headline in Brand Dual Colors */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.18] text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Latest Digital Marketing </span>
              <span className="text-[#009656]">Insights &amp; Articles</span>
            </h1>

            {/* Decorative Brand Divider */}
            <div className="flex items-center justify-center gap-1.5 py-1">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Subtitle */}
            <p className="text-[1.05rem] text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto text-center">
              Actionable frameworks, data-backed SEO tactics, paid media strategies, and high-impact conversion case studies curated by our senior growth architects.
            </p>

          </div>

          {/* Search Bar & Category Filters */}
          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* Search Input */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search articles by keyword, topic, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-200/90 shadow-sm focus:border-[#009656] focus:ring-2 focus:ring-[#009656]/20 text-sm font-medium text-neutral-800 placeholder-neutral-400 outline-none transition-all"
              />
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer shadow-2xs ${
                      isActive
                        ? 'bg-[#001965] text-white shadow-md'
                        : 'bg-white border border-slate-200/80 text-neutral-600 hover:text-[#009656] hover:border-[#009656]/40'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 2. Featured Deep Dive Card (Shown when on 'All' and no search) */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="py-10 bg-white border-b border-slate-100">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-gradient-to-r from-[#001965] to-[#0c3c66] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden group">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#009656]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-4">
                
                {/* Featured Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009656] text-white text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Case Study</span>
                </div>

                {/* Title */}
                <h2 
                  onClick={() => setActiveArticle(featuredPost)}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug hover:text-[#00ab62] transition-colors cursor-pointer"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {featuredPost.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                  {featuredPost.excerpt}
                </p>

                {/* Meta info & Read Button */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 font-medium">
                      <User className="w-3.5 h-3.5 text-[#009656]" />
                      <span>{featuredPost.author}</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#009656]" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#009656]" />
                      <span>{featuredPost.date}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(featuredPost)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#009656] hover:bg-[#00ab62] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* 3. Blog Grid Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <div>
              <h3 
                className="text-xl sm:text-2xl font-bold text-[#001965] tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {selectedCategory === 'All' ? 'All Articles & Guides' : `${selectedCategory} Articles`}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Showing {filteredPosts.length} practical growth articles
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-500">
              <TrendingUp className="w-4 h-4 text-[#009656]" />
              <span>Updated Weekly</span>
            </div>
          </div>

          {/* Cards Grid (3 Columns on Desktop) */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#009656]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  
                  {/* Top Graphic Banner */}
                  <div className={`h-36 bg-gradient-to-br ${post.imageBg} p-5 flex flex-col justify-between text-white relative overflow-hidden`}>
                    <div className="flex items-center justify-between relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[11px] font-bold tracking-wider uppercase">
                        <Tag className="w-3 h-3 text-[#009656]" />
                        <span>{post.category}</span>
                      </span>

                      <span className="flex items-center gap-1 text-[11px] text-slate-200 font-medium">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <div className="relative z-10">
                      <span className="text-[11px] text-slate-300 font-mono">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 
                        onClick={() => setActiveArticle(post)}
                        className="text-lg sm:text-xl font-bold text-[#001965] tracking-tight leading-snug group-hover:text-[#009656] transition-colors cursor-pointer mb-3"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {post.title}
                      </h4>
                      <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Action footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#001965] text-white flex items-center justify-center text-xs font-bold font-mono">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-800 leading-tight">
                            {post.author}
                          </div>
                          <div className="text-[10px] text-neutral-500 leading-tight">
                            {post.authorRole}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveArticle(post)}
                        className="text-xs font-bold text-[#001965] group-hover:text-[#009656] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>

                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-3">
              <p className="text-lg font-bold text-neutral-700">
                No articles found matching &quot;{searchQuery}&quot;
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-sm font-bold text-[#009656] hover:underline cursor-pointer"
              >
                Reset search &amp; view all articles
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. Newsletter / Growth Dispatch Box */}
      <section className="py-14 bg-[#F2F7FC]/80 border-y border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs font-bold text-[#009656] tracking-wide">
            <Bookmark className="w-3.5 h-3.5" />
            <span>BI-WEEKLY DISPATCH</span>
          </div>

          <h3 
            className="text-2xl sm:text-3xl font-bold text-[#001965] tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Get Actionable Growth Tactics Straight to Your Inbox
          </h3>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Join 12,000+ Founders, CMOs, and marketing leaders. No fluff, no spam—just pure search algorithms analysis and revenue blueprints.
          </p>

          {newsletterSubscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#009656] text-[#009656] font-bold text-sm shadow-sm animate-in fade-in">
              <CheckCircle2 className="w-5 h-5" />
              <span>You&apos;re subscribed! Check your inbox for our latest search teardown.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Enter your business email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#009656] text-sm text-neutral-800 placeholder-neutral-400 outline-none shadow-xs"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#001965] hover:bg-[#009656] text-white font-['Outfit',sans-serif] font-bold text-sm whitespace-nowrap transition-all shadow-md cursor-pointer"
              >
                Subscribe Free
              </button>
            </form>
          )}

        </div>
      </section>

      {/* 5. What Our Clients Say */}
      <WhyClientsSaySection onOpenConsultation={onOpenConsultation} />

      {/* 6. Frequently Asked Questions */}
      <FaqSection 
        eyebrow="HELP & INFORMATION"
        titlePrefix="Frequently Asked "
        titleHighlight="Questions"
        description="Everything you need to know about our growth frameworks, publishing schedules, and full-service digital marketing agency solutions."
        categories={homeFaqCategories}
        id="blogs-faq"
      />

      {/* 7. PreFooter Call to Action */}
      <PreFooterCTASection onOpenConsultation={onOpenConsultation} />

      {/* Interactive Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#009656]/10 text-[#009656] text-xs font-bold uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-neutral-400">&middot; {activeArticle.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => alert('Link copied to clipboard!')}
                  className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Share Article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Article Content */}
            <div className="p-6 sm:p-10 space-y-6">
              
              <h2 
                className="text-2xl sm:text-3xl font-bold text-[#001965] tracking-tight leading-snug"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-3 text-xs text-neutral-500 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-[#001965] text-white flex items-center justify-center font-bold">
                  {activeArticle.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-neutral-800">{activeArticle.author}</div>
                  <div>{activeArticle.authorRole} &middot; {activeArticle.date}</div>
                </div>
              </div>

              <p className="text-base text-neutral-700 leading-relaxed font-medium">
                {activeArticle.content.introduction}
              </p>

              {/* Key Takeaways Box */}
              <div className="p-5 rounded-2xl bg-[#009656]/5 border border-[#009656]/20 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#009656]">
                  Key Takeaways for Your Business
                </h4>
                <ul className="space-y-2">
                  {activeArticle.content.keyTakeaways.map((point, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-[#009656] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body paragraphs */}
              <div className="space-y-4 pt-2">
                {activeArticle.content.bodyParagraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Consultation Callout inside Article */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl">
                <div>
                  <h4 className="text-sm font-bold text-[#001965]">
                    Need tailored execution on this strategy?
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Our senior specialists can audit your domain and build a step-by-step roadmap.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenConsultation();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#001965] hover:bg-[#009656] text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
                >
                  Schedule Free Audit
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
