import React from 'react';
import { Headphones, ArrowRight, ChevronRight } from 'lucide-react';

export interface ServiceHeroSectionProps {
  badge?: string;
  titlePrefix?: string;
  highlightedTitle: string;
  description: string;
  highlightedCalloutPrefix?: string;
  highlightedCalloutSuffix?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;
  breadcrumbs?: Array<{ label: string; onClick?: () => void }>;
  /**
   * Background image relevant to this service child page
   */
  backgroundImage?: string;
  /**
   * Optional custom overlay class or opacity
   */
  overlayClassName?: string;
}

export const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  badge,
  titlePrefix = 'The #1',
  highlightedTitle = 'Search Engine Optimization Agency',
  description = "Affordable search engine optimization agency empowering businesses with proven, results-driven strategies. Our local and international SEO services from capturing high-value leads to maintaining visibility in a changing search landscape. We provide the strategy that turns your goals into results. You know what your business needs grow online, the right strategy makes them achievable, and we're here to provide it.",
  highlightedCalloutPrefix = "Don't waste your Budget on amateurs SEOs.",
  highlightedCalloutSuffix = 'We help you in improving your website online visibility.',
  primaryCtaText = 'Get Free Consultation',
  secondaryCtaText = "Let's Get Started",
  onPrimaryCta,
  onSecondaryCta,
  breadcrumbs = [],
  backgroundImage,
  overlayClassName,
}) => {
  return (
    <section className="relative w-full overflow-hidden pt-[30px] pb-14 sm:pb-20 lg:pb-24 border-b border-slate-200/80 bg-slate-900 hero-section-top-spacing">
      {/* 1. Background image (when provided) */}
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      )}

      {/* 2. Background gradient overlay (layered on top of the image or stand-alone) */}
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity ${
          overlayClassName
            ? overlayClassName
            : backgroundImage
            ? 'bg-gradient-to-b from-[#EBF5FF]/92 via-[#F4F9FF]/90 to-white/95 backdrop-blur-[2px]'
            : 'bg-gradient-to-b from-[#EBF5FF] via-[#F4F9FF] to-white'
        }`}
        aria-hidden="true"
      />

      {/* 3. Subtle Atmospheric Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#009656]/10 via-[#001965]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 left-10 w-72 h-72 bg-[#009656]/12 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-[#001965]/12 blur-3xl rounded-full pointer-events-none" />

      {/* 4. Foreground Content */}
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 z-10">
        
        {/* Breadcrumb Navigation (if passed) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-6 font-medium">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                {crumb.onClick ? (
                  <button
                    onClick={crumb.onClick}
                    className="hover:text-[#001965] hover:underline transition-colors cursor-pointer"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className={idx === breadcrumbs.length - 1 ? 'text-[#001965] font-semibold' : ''}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow Badge (if passed) */}
        {badge && (
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>{badge}</span>
            </div>
          </div>
        )}

        {/* Main Hero Headline Container */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          {/* 
            h1 Requirement:
            "this is h1 The #1 Search Engine Optimization Agency, keep h1 in 1 row if there is space issue then go for next line"
            - max-w-5xl / max-w-none on large screens
            - lg:whitespace-nowrap to guarantee single row on desktop/large screens
            - Breaks naturally to next line on smaller screens without overflow
          */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-bold tracking-tight leading-[1.2] lg:leading-[1.15] text-[#001965] lg:whitespace-nowrap"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {titlePrefix && (
              <span className="text-[#001965]">{titlePrefix} </span>
            )}
            <span className="text-[#009656]">{highlightedTitle}</span>
          </h1>

          {/* Description Paragraph (17px / 1rem font size) */}
          <p className="text-[17px] leading-relaxed text-neutral-700 font-normal max-w-3xl mx-auto pt-2 sm:pt-3">
            {description}
          </p>

          {/* Highlighted Value Line */}
          {(highlightedCalloutPrefix || highlightedCalloutSuffix) && (
            <div className="pt-2 sm:pt-3">
              <p className="text-sm sm:text-base md:text-[17px] font-semibold leading-relaxed">
                {highlightedCalloutPrefix && (
                  <span className="text-[#009656] font-bold">
                    {highlightedCalloutPrefix}{' '}
                  </span>
                )}
                {highlightedCalloutSuffix && (
                  <span className="text-[#001965]">
                    {highlightedCalloutSuffix}
                  </span>
                )}
              </p>
            </div>
          )}

          {/* Two CTA Buttons matching site branding */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            
            {/* Primary Action Button: [Headphones] Get Free Consultation -> */}
            <button
              onClick={onPrimaryCta}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-[#009656] hover:bg-[#007f49] text-white font-bold text-sm tracking-wide shadow-md shadow-[#009656]/20 hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer group"
            >
              <Headphones className="w-4 h-4 text-white" />
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary Action Button: Let's Get Started [> in circle] */}
            <button
              onClick={onSecondaryCta}
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white hover:bg-slate-50 text-[#001965] border border-slate-300 font-bold text-sm shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer group"
            >
              <span>{secondaryCtaText}</span>
              <span className="w-7 h-7 rounded-full bg-[#009656] text-white flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:translate-x-0.5">
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
