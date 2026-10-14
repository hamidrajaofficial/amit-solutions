import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import fallbackShowcaseImg from '../assets/images/google_ads_digital_marketing.jpg';

interface OnlineVisibilityShowcaseSectionProps {
  onOpenConsultation: () => void;
}

export const OnlineVisibilityShowcaseSection: React.FC<OnlineVisibilityShowcaseSectionProps> = ({ 
  onOpenConsultation 
}) => {
  const imageUrl = "https://swaichwebdesign.co.nz/wp-content/uploads/2023/11/Google-Ads-Digital-marketing.jpg";

  const keyPoints = [
    {
      title: 'Dominate Google Search & Local Map Pack',
      desc: 'Position your business at the very top when high-intent local customers search for your products and services.',
    },
    {
      title: 'High-Converting Targeted Google Ads (PPC)',
      desc: 'Eliminate wasted ad spend with precision negative keywords and high-intent keyword bidding that drives ready-to-buy leads.',
    },
    {
      title: 'Full-Funnel Conversion Optimization',
      desc: 'Turn website visitors into booked appointments and phone inquiries with fast, mobile-friendly landing page experiences.',
    },
    {
      title: 'Transparent ROI & Attribution Tracking',
      desc: 'Know exactly where every dollar goes with real-time performance analytics, conversion tracking, and transparent reporting.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 2 Columns: Left Column (Heading, Content, Pillars & CTA), Right Column (Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Rich Content, Strategy Pillars & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              {/* Eyebrow Style in Title Case (3 words) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide w-fit">
                <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
                <span>Search Engine Visibility</span>
              </div>

              {/* Main Headline in Primary and Secondary Colors (No Black) */}
              <h2 
                className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="text-[#001965]">Get Your Business </span>
                <span className="text-[#009656]">Visible Online </span>
                <span className="text-[#001965]">With Us</span>
              </h2>

              {/* Decorative Brand Divider */}
              <div className="flex items-center gap-1.5 py-0.5">
                <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
                <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              </div>

              {/* Paragraph Content shifted from above */}
              <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal">
                In today's competitive digital landscape, being online isn't enough—your business needs to be found by the right people at the exact moment they are ready to purchase. We combine data-backed search engine optimization, hyper-targeted Google advertising, and strategic conversion funnels to elevate your brand above competitors, capture high-value customer demand, and accelerate steady inbound growth.
              </p>
            </div>

            {/* Strategy Pillars / Bullet Points */}
            <div className="space-y-3.5 pt-2">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#009656]/10 text-[#009656] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009656]" />
                  </div>
                  <div>
                    <h4 className="text-[0.941rem] font-bold text-[#001965] leading-snug">
                      {point.title}
                    </h4>
                    <p className="text-[0.941rem] text-neutral-600 leading-relaxed mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Metrics & Call to Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-[#009656] hover:bg-[#007a44] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-[#009656]/20 transition-all duration-200 flex items-center gap-2 cursor-pointer group"
              >
                <span>Get Free Visibility Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Simple Clean Image starting from heading height */}
          <div className="lg:col-span-5 flex items-start justify-center lg:justify-end lg:pt-8">
            <div className="w-full max-w-[480px]">
              <img
                src={imageUrl}
                onError={(e) => {
                  // Fallback to locally saved asset if remote CDN has network issue
                  e.currentTarget.src = fallbackShowcaseImg;
                }}
                alt="Get your business visible online with Google Ads and Digital Marketing"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
