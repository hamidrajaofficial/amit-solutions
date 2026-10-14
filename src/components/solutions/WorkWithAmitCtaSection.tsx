import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WorkWithAmitCtaSectionProps {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onOpenConsultation?: () => void;
  onExploreServices?: () => void;
}

export const WorkWithAmitCtaSection: React.FC<WorkWithAmitCtaSectionProps> = ({
  eyebrow = 'WORK WITH AMIT SOLUTIONS',
  title = 'Ready to grow your business or unlock your next ',
  titleHighlight = 'growth opportunity?',
  description = "Tell us about your business, your current marketing, or the digital revenue opportunity you're exploring next.",
  primaryButtonText = 'Talk to Our Team',
  secondaryButtonText = 'Explore Our Services',
  onOpenConsultation,
  onExploreServices,
}) => {
  return (
    <section className="relative w-full bg-[#001040] overflow-hidden py-16 sm:py-20 lg:py-24 border-y border-slate-800">
      
      {/* Background Architectural Vector Lines (matching the subtle diagonal geometry on the left in the screenshot) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        <svg 
          className="absolute -left-10 top-0 h-full w-[360px] text-white/[0.04]" 
          viewBox="0 0 360 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0 0 L 220 400 M 50 0 L 270 400 M 120 0 L 340 400" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 0 400 L 300 0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Ambient Brand Glows (Navy #001965 & Emerald #009656) */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#009656]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#001965]/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow with Cyan/Emerald Horizontal Indicator Line */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-[2px] bg-[#009656] rounded-full" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#009656]">
            {eyebrow}
          </span>
        </div>

        {/* Main Headline (Outfit font, white with emerald highlight) */}
        <h2 
          className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto mb-4"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <span>{title}</span>
          <span className="text-[#009656]">{titleHighlight}</span>
        </h2>

        {/* Decorative Brand Divider */}
        <div className="flex items-center justify-center gap-1.5 py-1 mb-4">
          <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
          <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
        </div>

        {/* Subtitle / Description Paragraph */}
        <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          {description}
        </p>

        {/* Dual CTA Buttons (Matching Screenshot) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          
          {/* Button 1: Primary Vibrant Pill Button with Glow & Arrow */}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#009656] hover:bg-[#00ab62] text-white font-['Outfit',sans-serif] font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#009656]/30 hover:shadow-[#009656]/50 transition-all duration-300 cursor-pointer group hover:-translate-y-0.5"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Button 2: Secondary Dark Translucent Pill with Thin Border */}
          <button
            type="button"
            onClick={onExploreServices || onOpenConsultation}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/20 hover:border-white/50 text-white font-['Outfit',sans-serif] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
          >
            <span>{secondaryButtonText}</span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default WorkWithAmitCtaSection;
