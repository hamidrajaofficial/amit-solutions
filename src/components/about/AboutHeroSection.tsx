import React from 'react';
import { 
  Headset, 
  ArrowRight, 
  ChevronRight, 
  Globe, 
  BarChart2, 
  Lightbulb, 
  Target, 
  MapPin,
  Minus,
  Square,
  X
} from 'lucide-react';
import aboutManImg from '../../assets/images/about_man_pointing_1791981939190.jpg';

interface AboutHeroSectionProps {
  onOpenConsultation?: () => void;
  onExploreServices?: () => void;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
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
    <section className="relative w-full bg-gradient-to-b from-[#EBF5FF] via-[#F4F9FF] to-white overflow-hidden pt-[30px] pb-16 sm:pb-20 lg:pb-24 border-b border-slate-200/80 hero-section-top-spacing">
      
      {/* Background Graphic Watermark (Subtle Brand Sphere & World Coordinates) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center opacity-[0.035]"
      >
        <span 
          className="text-[#001965] font-black text-[100px] sm:text-[160px] lg:text-[220px] tracking-widest uppercase font-['Outfit',sans-serif]"
        >
          AMIT SPHERE
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

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading, Subtitle & Dual Action Buttons (7 Cols on LG) */}
          <div className="lg:col-span-6 xl:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">
            
            {/* H1 Heading: Two-Tone using Brand Navy #001965 & Brand Emerald #009656 */}
            <h1 
              className="font-['Outfit',sans-serif] font-bold text-3xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight"
            >
              <span className="text-[#001965]">Learn More About </span>
              <span className="block text-[#009656] mt-1 sm:mt-2">AMIT Solutions</span>
            </h1>

            {/* Paragraph / Subtitle with Brand Voice */}
            <p className="font-sans text-neutral-600 text-base sm:text-[17.5px] leading-relaxed max-w-xl font-normal">
              You&apos;ve come to the right place. AMIT Solutions is the leader in data-driven SEO training, full-funnel digital growth, and next-level link building strategies.
            </p>

            {/* Dual CTAs (Matching Brand Buttons System) */}
            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start w-full">
              
              {/* Button 1: Solid Brand Navy (#001965) to Emerald (#009656) with Headset & Arrow */}
              <button 
                type="button"
                onClick={handlePrimaryClick}
                className="inline-block cursor-pointer group"
              >
                <div className="flex items-center justify-center h-[52px] px-6 sm:px-7 rounded-[8px] border-2 border-[#001965] bg-[#001965] hover:bg-[#009656] hover:border-[#009656] text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <Headset 
                    size={20} 
                    className="mr-2.5 transition-colors duration-300 stroke-white" 
                  />
                  <span className="font-['Outfit',sans-serif] font-bold text-[16px] sm:text-[17px] whitespace-nowrap tracking-tight">
                    Get Free Consultation
                  </span>
                  <ArrowRight 
                    size={20} 
                    className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1 stroke-white" 
                  />
                </div>
              </button>

              {/* Button 2: White Pill with Navy Border & Emerald Circle Arrow Badge */}
              <button 
                type="button"
                onClick={handleSecondaryClick}
                className="inline-block cursor-pointer group"
              >
                <div className="inline-flex items-center h-[52px] bg-white border-2 border-[#001965] hover:border-[#009656] rounded-full p-1 pl-6 pr-1.5 shadow-sm transition-all hover:shadow-md whitespace-nowrap">
                  <span className="text-[#001965] group-hover:text-[#009656] font-['Outfit',sans-serif] font-bold text-[15px] sm:text-[16px] tracking-tight mr-4 select-none transition-colors">
                    Let&apos;s Get Started
                  </span>
                  <div className="bg-[#009656] group-hover:bg-[#007f49] w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all shadow-sm">
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

          {/* Right Column: Visual Composition with Person, Brand Circle & Floating Cards (5 Cols on LG) */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center items-start relative">
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-square flex items-start justify-center">
              
              {/* 1. Large Dashed Outer Concentric Ring in Brand Emerald */}
              <div 
                aria-hidden="true" 
                className="absolute top-0 inset-x-2 sm:inset-x-4 aspect-square rounded-full border-2 border-dashed border-[#009656]/50 pointer-events-none"
              />

              {/* 2. Inner Solid Vibrant Brand Gradient Circle Disk (#001965 to #009656) */}
              <div 
                aria-hidden="true"
                className="absolute top-3 sm:top-4 w-[76%] sm:w-[80%] aspect-square rounded-full bg-gradient-to-tr from-[#001965] via-[#005a3b] to-[#009656] shadow-2xl pointer-events-none"
              />

              {/* 3. Smiling Professional Man Cutout pointing to the left */}
              <div className="relative z-10 top-1 sm:top-2 w-[82%] sm:w-[86%] aspect-square rounded-full overflow-hidden flex items-end justify-center">
                <img 
                  src={aboutManImg} 
                  alt="AMIT Solutions lead SEO consultant pointing to checklist" 
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
              </div>

              {/* 4. Floating Card 1: Your Business Checklist (Top Left - Exactly where he points!) */}
              <div className="absolute top-10 sm:top-14 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-xl border border-slate-200/90 w-[200px] sm:w-[220px] text-left transition-transform hover:scale-105 duration-300">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100 text-[11px] font-bold text-[#001965] font-['Outfit',sans-serif]">
                  <span className="truncate pr-1">Your Business Checklist</span>
                  <div className="flex items-center gap-1 text-slate-400 shrink-0">
                    <Minus className="w-2.5 h-2.5 hover:text-slate-600 cursor-pointer" />
                    <Square className="w-2.5 h-2.5 hover:text-slate-600 cursor-pointer" />
                    <X className="w-2.5 h-2.5 hover:text-slate-600 cursor-pointer" />
                  </div>
                </div>

                {/* Checklist items with brand emerald toggle switches */}
                <div className="space-y-2 text-[11.5px] font-semibold text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>Digital Marketing</span>
                    {/* Toggle Switch (Active Brand Emerald #009656) */}
                    <div className="w-6 h-3.5 bg-[#009656] rounded-full p-0.5 flex items-center justify-end shadow-2xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Website Designing</span>
                    <div className="w-6 h-3.5 bg-[#009656] rounded-full p-0.5 flex items-center justify-end shadow-2xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Content Writing</span>
                    <div className="w-6 h-3.5 bg-[#009656] rounded-full p-0.5 flex items-center justify-end shadow-2xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Floating Card 2: 28 Days SEO Challenge (Bottom Left/Center) */}
              <div className="absolute bottom-2 sm:bottom-4 left-6 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-xl border border-slate-200/90 w-[210px] sm:w-[230px] text-left transition-transform hover:scale-105 duration-300">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100 text-[11px] font-bold text-[#001965] font-['Outfit',sans-serif]">
                  <span className="truncate pr-1">28 Days SEO Challenge</span>
                  <div className="flex items-center gap-1 text-slate-400 shrink-0">
                    <Minus className="w-2.5 h-2.5 hover:text-slate-600" />
                    <Square className="w-2.5 h-2.5 hover:text-slate-600" />
                    <X className="w-2.5 h-2.5 hover:text-slate-600" />
                  </div>
                </div>

                {/* Graphic Visual Inside: Lightbulb, Target, Rising Bar Charts & Coins */}
                <div className="flex items-end justify-between gap-1 pt-1">
                  
                  {/* Lightbulb & Target Icons */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center shadow-xs">
                      <Lightbulb className="w-4 h-4 fill-amber-400 stroke-amber-600" />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-600 flex items-center justify-center text-[9px] font-bold">
                      $
                    </div>
                  </div>

                  {/* Target Symbol */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#009656] flex items-center justify-center">
                      <Target className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Rising Growth Bar Charts in Brand Colors */}
                  <div className="flex items-end gap-1 h-9 pb-0.5">
                    <div className="w-2 h-3 bg-slate-200 rounded-t-xs" />
                    <div className="w-2 h-5 bg-[#001965]/40 rounded-t-xs" />
                    <div className="w-2 h-7 bg-[#001965] rounded-t-xs" />
                    <div className="w-2 h-9 bg-[#009656] rounded-t-xs" />
                  </div>

                  {/* Coin Badge */}
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                      $
                    </div>
                  </div>

                </div>
              </div>

              {/* 6. Orbit Badge Top Right: Search / Analytics in Brand Emerald */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#009656] shadow-lg flex items-center justify-center text-[#009656] hover:scale-110 transition-transform">
                <BarChart2 className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* 7. Orbit Badge Bottom Left: Location Pin with SEO Label in Brand Emerald */}
              <div className="absolute bottom-6 left-0 sm:bottom-8 sm:-left-2 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border-2 border-[#009656] shadow-lg text-[#009656] text-xs font-bold hover:scale-110 transition-transform font-['Outfit',sans-serif]">
                <MapPin className="w-4 h-4 fill-[#009656] stroke-white" />
                <span>SEO</span>
              </div>

              {/* 8. Orbit Badge Bottom Right: WWW Globe in Brand Navy */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border-2 border-[#001965] shadow-lg text-[#001965] text-xs font-bold hover:scale-110 transition-transform font-['Outfit',sans-serif]">
                <Globe className="w-4 h-4 stroke-[2]" />
                <span>WWW</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
