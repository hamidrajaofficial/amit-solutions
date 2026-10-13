import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SeoPreFooterCTASectionProps {
  onOpenConsultation: () => void;
}

export const SeoPreFooterCTASection: React.FC<SeoPreFooterCTASectionProps> = ({ 
  onOpenConsultation 
}) => {
  return (
    <section className="relative w-full bg-[#F0F5FA] py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 overflow-hidden">
      
      {/* Subtle ambient decorative gradient blurs */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" 
      />
      <div 
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/2" 
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="w-full max-w-4xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
          {/* Eyebrow Style in Title Case */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Accelerate Your Growth</span>
            </div>
          </div>

          {/* Main Headline in Primary and Secondary Colors */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2] w-full text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#001965]">Scale Your Business with </span>
            <span className="text-[#009656]">AMIT </span>
            <span className="text-[#001965]">Solutions</span>
          </h2>

          {/* Decorative Divider with 3 dots */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
          </div>

          {/* Subtitle description */}
          <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal w-full text-center max-w-3xl mx-auto">
            Whether you&apos;re looking to acquire more high-value organic leads, scale e-commerce revenue, or dominate search rankings, our team of search architects is ready to build your tailored roadmap.
          </p>
        </div>

        {/* 3 Columns Divided by Thin Vertical Lines Exactly as in Home Page */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 items-stretch max-w-5xl mx-auto py-2">
          
          {/* Column 1: See AMIT in Action */}
          <div className="px-6 lg:px-8 py-6 md:py-2 flex flex-col items-center text-center justify-between">
            <div className="w-full flex flex-col items-center">
              <h3 
                className="text-xl sm:text-[22px] font-bold text-[#001965] tracking-tight mb-2.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                See AMIT in Action
              </h3>
              <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal max-w-xs">
                Experience a 1-on-1 walkthrough of our organic growth engine, live keyword dashboards, and proven SEO frameworks tailored for your industry.
              </p>
            </div>

            {/* Solid Pill Button */}
            <button
              onClick={onOpenConsultation}
              className="mt-6 inline-flex items-center justify-center gap-1.5 px-7 py-2.5 rounded-full bg-[#009656] hover:bg-[#007f48] text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Request an SEO Demo</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Column 2: Chat with Us Instantly */}
          <div className="px-6 lg:px-8 py-6 md:py-2 flex flex-col items-center text-center justify-between">
            <div className="w-full flex flex-col items-center">
              <h3 
                className="text-xl sm:text-[22px] font-bold text-[#001965] tracking-tight mb-2.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Chat with Us Instantly
              </h3>
              <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal max-w-xs">
                Have quick questions about our technical SEO audits, pricing, or deliverables? Connect directly with our search architects in real time.
              </p>
            </div>

            {/* Outline Pill Button */}
            <button
              onClick={onOpenConsultation}
              className="mt-6 inline-flex items-center justify-center gap-1.5 px-7 py-2.5 rounded-full bg-white hover:bg-emerald-50/60 text-[#009656] border-2 border-[#009656] font-semibold text-sm transition-all shadow-xs hover:shadow-sm cursor-pointer group"
            >
              <span>Start Live Chat</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Column 3: Talk to an Expert Today */}
          <div className="px-6 lg:px-8 py-6 md:py-2 flex flex-col items-center text-center justify-between">
            <div className="w-full flex flex-col items-center">
              <h3 
                className="text-xl sm:text-[22px] font-bold text-[#001965] tracking-tight mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Talk to an Expert Today
              </h3>

              {/* Prominent Phone Number */}
              <a 
                href="tel:+14126843034"
                className="text-2xl sm:text-[28px] font-extrabold text-[#009656] hover:text-[#001965] transition-colors tracking-tight block my-0.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                +1 (412) 684 3034
              </a>

              <div className="text-xs text-neutral-500 font-medium mb-2.5">
                <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">Direct Hotline</span>
                <span className="mx-1.5">•</span>
                <span>Mon-Fri</span>
              </div>

              <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal max-w-xs">
                Call our search advisory team directly to discuss your immediate ranking bottlenecks and get answers on the spot.
              </p>
            </div>

            {/* Solid Pill Button */}
            <button
              onClick={onOpenConsultation}
              className="mt-6 inline-flex items-center justify-center gap-1.5 px-7 py-2.5 rounded-full bg-[#009656] hover:bg-[#007f48] text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Get Personalized Assistance</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
