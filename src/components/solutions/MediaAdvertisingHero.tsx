import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Headset, ChevronRight, Sparkles } from 'lucide-react';

interface MediaAdvertisingHeroProps {
  onOpenConsultation?: () => void;
  onExploreServices?: () => void;
}

export const MediaAdvertisingHero: React.FC<MediaAdvertisingHeroProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  const checklist = [
    'Real-time programmatic ad bidding.',
    'Precision audience segment targeting.',
    'Omnichannel reach across top networks.',
    'Full transparency on placement and spend.',
  ];

  const handlePrimaryClick = (e: React.MouseEvent) => {
    if (onOpenConsultation) {
      e.preventDefault();
      onOpenConsultation();
    }
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    if (onExploreServices) {
      e.preventDefault();
      onExploreServices();
    } else if (onOpenConsultation) {
      e.preventDefault();
      onOpenConsultation();
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#EBF5FF] via-[#F4F9FF] to-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
      {/* Background Graphic Watermark ("RESULTS" in Brand Navy subtle opacity matching screenshot) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center opacity-[0.03]"
      >
        <span 
          className="text-[#001965] font-black text-[120px] sm:text-[180px] lg:text-[240px] tracking-widest uppercase font-['Outfit',sans-serif]"
        >
          RESULTS
        </span>
      </div>

      {/* Subtle Ambient Brand Glows (Navy #001965 & Emerald #009656) */}
      <div 
        aria-hidden="true"
        className="absolute -top-32 right-10 w-96 h-96 bg-[#001965]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true"
        className="absolute -bottom-32 left-10 w-96 h-96 bg-[#009656]/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Content Side (7 Cols on LG) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Kicker Eyebrow Badge (Brand Emerald Pill with Pulsing Dot) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-[#009656] font-['Outfit',sans-serif] font-bold text-xs sm:text-sm mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Targeted Media Buying</span>
            </div>

            {/* H1 Heading (Outfit font, two-tone with Navy #001965 & Emerald #009656) */}
            <h1 
              className="font-['Outfit',sans-serif] font-bold text-3xl sm:text-4xl lg:text-[50px] leading-[1.14] mb-6 capitalize tracking-tight"
            >
              <span className="text-[#001965]">Stop Splashing. </span>
              <span className="text-[#009656]">Start Dominating.</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="font-sans text-neutral-600 text-base sm:text-[17px] leading-relaxed mb-8 max-w-xl">
              Scattering your budget across unproven channels wastes capital. We utilize programmatic and hyper-targeted media buying to scale your brand presence globally.
            </p>

            {/* Feature Checklist (Brand Emerald Accents) */}
            <ul className="space-y-4 mb-10 text-left w-full max-w-md lg:max-w-none">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-800">
                  <div className="mt-0.5 bg-[#009656]/12 rounded-full p-1 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#009656] stroke-[3px]" />
                  </div>
                  <span className="font-sans font-medium text-sm sm:text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Dual CTAs (Brand Primary Solid #001965 with Emerald Hover + Secondary Pill with Emerald Arrow Badge) */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
              
              {/* Button 1 (Brand Primary Solid: Navy #001965 to Emerald #009656) */}
              <button 
                type="button"
                onClick={handlePrimaryClick}
                className="inline-block cursor-pointer group"
              >
                <div className="flex items-center justify-center h-[52px] px-6 rounded-[8px] border-2 border-[#001965] bg-[#001965] hover:bg-[#009656] hover:border-[#009656] text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <Headset 
                    size={20} 
                    className="mr-2.5 transition-colors duration-300 stroke-white" 
                  />
                  <span className="font-['Outfit',sans-serif] font-bold text-[16px] sm:text-[17px] whitespace-nowrap tracking-tight">
                    Analyze media plan
                  </span>
                  <ArrowRight 
                    size={20} 
                    className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1 stroke-white" 
                  />
                </div>
              </button>

              {/* Button 2 (Brand Secondary Pill with Emerald Badge) */}
              <button 
                type="button"
                onClick={handleSecondaryClick}
                className="inline-block cursor-pointer group"
              >
                <div className="inline-flex items-center h-[52px] bg-white border-2 border-[#001965] hover:border-[#009656] rounded-full p-1 pl-6 pr-1.5 shadow-sm transition-all hover:shadow-md whitespace-nowrap">
                  <span className="text-[#001965] group-hover:text-[#009656] font-['Outfit',sans-serif] font-bold text-[15px] sm:text-[16px] tracking-tight mr-4 select-none transition-colors">
                    Let's Get Started
                  </span>
                  <div className="bg-[#009656] group-hover:bg-[#007f49] w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                    <ChevronRight 
                      stroke="white" 
                      strokeWidth={3} 
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" 
                    />
                  </div>
                </div>
              </button>

            </div>
          </div>

          {/* Right Column: Visual Comparison System (5 Cols on LG) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 px-1 sm:px-2">
            
            {/* Visual 1: Traditional Ads (Blind Data) */}
            <div className="flex flex-col gap-3.5">
              <div className="text-center mb-1">
                <h4 className="font-['Outfit',sans-serif] font-bold text-lg md:text-xl text-[#001965]">
                  Traditional Ads
                </h4>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Blind Data
                </span>
              </div>

              {/* Card Flow */}
              <div className="relative h-64 md:h-80 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between overflow-hidden shadow-xs">
                <div className="w-full px-2 py-2 bg-slate-100 text-slate-500 rounded-full text-[10px] sm:text-[11px] font-bold text-center uppercase tracking-wider">
                  Ad Placement
                </div>
                
                {/* Slow Moving Flow Dot */}
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-300"
                  animate={{
                    top: ['25%', '75%'],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div className="w-full px-2 py-2 border border-slate-200 text-slate-400 rounded-full text-[10px] sm:text-[11px] font-bold text-center uppercase tracking-wider">
                  No ROI
                </div>
              </div>

              {/* Stat Footer Card */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-xs">
                <span className="block text-2xl md:text-3xl font-['Outfit',sans-serif] font-extrabold text-slate-300 leading-none mb-1">
                  Low CTR
                </span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">
                  Performance
                </span>
              </div>
            </div>

            {/* Visual 2: AMIT Solutions (Omnichannel Engine - Following Real Brand Language) */}
            <div className="flex flex-col gap-3.5">
              <div className="text-center mb-1">
                <h4 className="font-['Outfit',sans-serif] font-bold text-lg md:text-xl text-[#001965] flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#009656]" />
                  <span>AMIT Solutions</span>
                </h4>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#009656]">
                  Omnichannel
                </span>
              </div>

              {/* Card Flow with Brand Emerald Border Accent */}
              <div className="relative h-64 md:h-80 bg-white border-2 border-[#009656]/35 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-between overflow-hidden shadow-md ring-2 ring-[#009656]/10">
                
                {/* Top Channel Badges in Navy & Emerald Accents */}
                <div className="grid grid-cols-2 gap-2 w-full z-10">
                  <div className="px-1 py-1.5 bg-slate-50 border border-slate-200 text-[#001965] rounded-lg text-[9px] sm:text-[10px] font-bold text-center uppercase tracking-wider shadow-xs">
                    TikTok
                  </div>
                  <div className="px-1 py-1.5 bg-slate-50 border border-slate-200 text-[#001965] rounded-lg text-[9px] sm:text-[10px] font-bold text-center uppercase tracking-wider shadow-xs">
                    Meta
                  </div>
                </div>

                {/* Fast Animated Glow Flow Dots in Brand Navy (#001965) & Brand Emerald (#009656) */}
                <motion.div 
                  className="absolute left-1/3 w-2.5 h-2.5 rounded-full bg-[#001965] shadow-[0_0_12px_rgba(0,25,101,0.7)]"
                  animate={{
                    top: ['25%', '72%'],
                    left: ['30%', '50%'],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="absolute right-1/3 w-2.5 h-2.5 rounded-full bg-[#009656] shadow-[0_0_12px_rgba(0,150,86,0.9)]"
                  animate={{
                    top: ['25%', '72%'],
                    right: ['30%', '50%'],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 1.6,
                    delay: 0.35,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Bottom Conversion Node in Brand Emerald #009656 */}
                <button
                  type="button"
                  onClick={handlePrimaryClick}
                  className="w-full px-2 py-2.5 bg-[#009656] hover:bg-[#007f49] text-white rounded-full text-[10px] sm:text-[11px] font-bold text-center uppercase tracking-wider shadow-md shadow-[#009656]/30 transition-all cursor-pointer"
                >
                  Global Sale
                </button>
              </div>

              {/* Stat Footer Card in Soft Emerald Background with Navy Title */}
              <div className="bg-[#009656]/10 border border-[#009656]/25 rounded-2xl p-4 sm:p-5 text-center shadow-xs">
                <span className="block text-2xl md:text-3xl font-['Outfit',sans-serif] font-extrabold text-[#001965] leading-none mb-1">
                  High CTR
                </span>
                <span className="text-[9px] uppercase font-bold text-[#009656] tracking-widest">
                  Performance
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaAdvertisingHero;
