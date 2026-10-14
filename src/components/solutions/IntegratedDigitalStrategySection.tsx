import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntegratedDigitalStrategySectionProps {
  onOpenConsultation?: () => void;
  onExploreServices?: () => void;
}

export const IntegratedDigitalStrategySection: React.FC<IntegratedDigitalStrategySectionProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  const cards = [
    {
      dotColor: '#009656', // Brand Emerald
      title: 'Search visibility',
      description: 'Impressions, positions and clicks from Google Search Console — the same data you can open yourself.',
    },
    {
      dotColor: '#001965', // Brand Navy
      title: 'Qualified enquiries',
      description: 'Every form, WhatsApp tap and call logged with its source, so you know which channel produced which customer.',
    },
    {
      dotColor: '#007AFF', // Vibrant Blue
      title: 'Cost per enquiry',
      description: 'Ad spend reported against enquiries, not clicks — with wasted search terms and placements cut every week.',
    },
    {
      dotColor: '#009656', // Brand Emerald
      title: 'Tracking that works',
      description: 'GA4 and conversion tracking set up and verified before the first campaign spends anything.',
    },
  ];

  return (
    <section className="relative w-full bg-[#001040] overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-800">
      
      {/* Background Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#009656]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#001965]/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Paragraph, and Dual CTAs (5 Cols on LG) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            
            {/* Eyebrow Line & Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#009656] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#009656]">
                HOW WE HELP YOU GROW
              </span>
            </div>

            {/* H2 Headline in Brand White & Emerald */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span>Grow Your Business With an </span>
              <span className="text-[#009656]">Integrated Digital Strategy</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center gap-1.5 py-0.5">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-base sm:text-[17px] leading-relaxed font-normal">
              We connect search, social, ads and web around your goals, set up proper tracking, and report on the metrics that matter — visibility, qualified enquiries and cost per result — not vanity numbers.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              
              {/* Primary Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#009656] hover:bg-[#00ab62] text-white font-['Outfit',sans-serif] font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#009656]/30 hover:shadow-[#009656]/50 transition-all duration-300 cursor-pointer group hover:-translate-y-0.5"
              >
                <span>Request a growth plan</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Outline Button */}
              <button
                type="button"
                onClick={onExploreServices || onOpenConsultation}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/20 hover:border-white/50 text-white font-['Outfit',sans-serif] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              >
                <span>See our services</span>
              </button>

            </div>

          </div>

          {/* Right Column: 2x2 Clean White Feature Cards Grid (7 Cols on LG) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[170px]"
                >
                  <div>
                    {/* Header: Dot + Card Title */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <span 
                        className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs" 
                        style={{ backgroundColor: card.dotColor }} 
                      />
                      <h3 
                        className="text-base sm:text-[17px] font-bold text-[#001965] tracking-tight leading-snug"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Card Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntegratedDigitalStrategySection;
