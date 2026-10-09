import React, { useState } from 'react';
import { 
  Search, 
  Target, 
  TrendingUp, 
  Share2, 
  Layout, 
  Mail, 
  MapPin, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface ServicesCarouselSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesCarouselSection: React.FC<ServicesCarouselSectionProps> = ({ 
  onOpenConsultation 
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const allServices = [
    {
      id: 0,
      icon: Search,
      title: 'Search Engine Optimization',
      desc: 'Our data-backed SEO services optimize your website architecture, content, and high-authority backlinks. We target high-intent commercial keywords to elevate your Google rankings, drive qualified organic traffic, and deliver predictable inbound leads for sustained business growth.',
    },
    {
      id: 1,
      icon: Target,
      title: 'Paid Search & PPC Media',
      desc: 'Maximize marketing ROI with targeted PPC campaigns across Google, Meta, and LinkedIn. We construct high-converting funnels, eliminate wasted ad spend through negative keyword sculpting, and scale profitable acquisition channels that generate immediate, high-quality customer conversions.',
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Conversion Rate Optimization',
      desc: 'Turn existing website visitors into qualified paying customers with scientific behavioral testing. We analyze user friction points, optimize landing page layouts, and refine conversion funnels to dramatically increase your lead volume without increasing your ad budget.',
    },
    {
      id: 3,
      icon: Share2,
      title: 'Content & Social Strategy',
      desc: 'Build enduring brand authority and customer trust with intent-driven content marketing. We create persuasive blogs, compelling case studies, and multi-channel social campaigns that engage prospective buyers, nurture long-term relationships, and accelerate overall sales pipeline velocity.',
    },
    {
      id: 4,
      icon: Layout,
      title: 'Website Design & UX',
      desc: 'We build lightning-fast, mobile-responsive websites engineered for seamless user engagement and search engine visibility. Every layout combines modern visual aesthetics with conversion-focused UX architecture that guides visitors directly toward booking consultations.',
    },
    {
      id: 5,
      icon: Mail,
      title: 'Email & Retention Marketing',
      desc: 'Automate customer retention and maximize lifetime value with personalized email sequences. We segment your subscriber list, implement automated lead nurture workflows, and craft compelling messaging that converts abandoned prospects into loyal, repeat brand advocates.',
    },
    {
      id: 6,
      icon: MapPin,
      title: 'Local SEO & Maps Growth',
      desc: 'Dominate local neighborhood search results and the Google Map Pack. We optimize your Google Business profile, build geo-targeted citations, and gather authentic customer reviews to attract high-intent local clients directly to your doorstep.',
    },
    {
      id: 7,
      icon: BarChart3,
      title: 'Analytics & Attribution',
      desc: 'Gain complete clarity over marketing attribution and customer acquisition costs. We deploy advanced tracking pixels, configure custom Google Analytics 4 dashboards, and provide transparent weekly reporting that guides strategic, data-driven executive decisions.',
    },
  ];

  const cardsPerPage = 4;
  const totalPages = Math.ceil(allServices.length / cardsPerPage);

  const nextPage = () => {
    const nextP = (pageIndex + 1) % totalPages;
    setPageIndex(nextP);
    setActiveCardIndex(nextP * cardsPerPage);
  };

  const prevPage = () => {
    const prevP = (pageIndex - 1 + totalPages) % totalPages;
    setPageIndex(prevP);
    setActiveCardIndex(prevP * cardsPerPage);
  };

  const currentCards = allServices.slice(
    pageIndex * cardsPerPage, 
    pageIndex * cardsPerPage + cardsPerPage
  );

  return (
    <section className="w-full bg-[#F4F7FB]/70 py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Block: Full Width */}
        <div className="w-full text-center space-y-3.5">
          
          {/* Eyebrow Style in Title Case (3 words) */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Core Growth Services</span>
            </div>
          </div>

          {/* Main Headline in Primary and Secondary Colors (No Black) */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2] w-full text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#001965]">Results-Oriented </span>
            <span className="text-[#009656]">Full-Service Digital Marketing Agency </span> <br className="hidden sm:inline" />
            <span className="text-[#001965]">For Performance-Driven Growth</span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
          </div>

          {/* Paragraph - Full Width */}
          <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal w-full text-center">
            We deliver structured internet marketing services through advanced strategies focused on goal-oriented growth. As a full-service marketing agency, we use data-driven optimization and real-time performance tracking to connect your brand with the right audience. From technical search engine dominance and targeted paid media to conversion architecture, we engineer high-converting customer acquisition funnels. Our dedicated specialists continuously test and refine every campaign touchpoint to lower acquisition costs while compounding your return on investment. Partner with an agile execution team committed to transparent analytics reporting, consistent lead generation, and sustainable market leadership.
          </p>

        </div>

        {/* 4 Cards in 1 Row with Same Exact Height and 1st Card Active matching screenshot */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {currentCards.map((service) => {
            const Icon = service.icon;
            const isActive = activeCardIndex === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveCardIndex(service.id)}
                className={`rounded-[2px] p-6 flex flex-col justify-between text-left transition-all duration-300 cursor-pointer h-[350px] ${
                  isActive
                    ? 'bg-[#EAF8F1] border border-emerald-200/90 text-neutral-900 shadow-lg shadow-emerald-900/5'
                    : 'bg-white border border-slate-200/90 text-neutral-900 shadow-xs hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5'
                }`}
              >
                {/* Upper Content: Icon + Title in 1 Row, then Description below */}
                <div className="space-y-4">
                  
                  {/* Row 1: Heading and Icon in 1 Single Row */}
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-11 h-11 rounded-[2px] shrink-0 flex items-center justify-center transition-colors ${
                        isActive 
                          ? 'bg-[#001965] text-white shadow-xs' 
                          : 'bg-[#F4F7FB] text-[#001965] border border-slate-200/80'
                      }`}
                    >
                      <Icon className="w-5 h-5 text-current" />
                    </div>

                    <h3 
                      className="text-base sm:text-[17px] font-bold tracking-tight leading-snug text-[#001965]"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p 
                    className="text-xs sm:text-[13px] leading-relaxed font-normal text-neutral-600 line-clamp-4"
                  >
                    {service.desc}
                  </p>

                </div>

                {/* Bottom Button: "Explore More" */}
                <div className="pt-4 flex justify-start">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsultation();
                    }}
                    className={`px-5 py-2 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border border-emerald-300 bg-white hover:bg-[#001965] text-[#001965] hover:text-white shadow-xs'
                        : 'border border-slate-300 text-[#001965] bg-white hover:bg-[#001965] hover:text-white'
                    }`}
                  >
                    Explore More
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Carousel Slide Controls */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-3 select-none">
          
          {/* Previous Arrow Button */}
          <button
            onClick={prevPage}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-neutral-600 hover:text-[#009656] hover:border-[#009656] hover:scale-105 transition-all cursor-pointer"
            aria-label="Previous services batch"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots & Active Stretched Indicator Pill */}
          <div className="flex items-center gap-1.5 px-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPageIndex(i);
                  setActiveCardIndex(i * cardsPerPage);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  pageIndex === i
                    ? 'w-6 h-2 bg-[#009656]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={nextPage}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-neutral-600 hover:text-[#009656] hover:border-[#009656] hover:scale-105 transition-all cursor-pointer"
            aria-label="Next services batch"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
