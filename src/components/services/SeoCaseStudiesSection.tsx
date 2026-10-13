import React from 'react';
import { ArrowRight } from 'lucide-react';
import travelLeadsImg from '../../assets/images/travel_leads_case_study_1791464286067.jpg';
import luxuryBrandImg from '../../assets/images/luxury_brand_mockup_1791464307387.jpg';
import ecommerceAdsImg from '../../assets/images/ecommerce_ads_mockup_1791464411197.jpg';
import packagingDesignImg from '../../assets/images/packaging_design_mockup_1791464338142.jpg';
import beverageMerchImg from '../../assets/images/beverage_merch_mockup_1791464371766.jpg';
import socialGrowthImg from '../../assets/images/social_growth_mockup_1791464460372.jpg';

interface SeoCaseStudiesSectionProps {
  onOpenConsultation?: () => void;
}

interface CaseStudyItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export const SeoCaseStudiesSection: React.FC<SeoCaseStudiesSectionProps> = ({ 
  onOpenConsultation 
}) => {
  const caseStudies: CaseStudyItem[] = [
    {
      id: 1,
      title: 'WELL INSPIRED TRAVELS',
      subtitle: 'Capturing Organic Search Leads (+340%)',
      image: travelLeadsImg,
    },
    {
      id: 2,
      title: 'ENRICO MELEO',
      subtitle: 'High-Ticket Keyword Visibility & Brand Authority',
      image: luxuryBrandImg,
    },
    {
      id: 3,
      title: 'ACE INDUSTRIAL SCREWS',
      subtitle: 'Technical SEO & B2B Pipeline Growth',
      image: ecommerceAdsImg,
    },
    {
      id: 4,
      title: 'ROCABELLA LABELS',
      subtitle: 'E-Commerce Core Web Vitals & Search Indexing',
      image: packagingDesignImg,
    },
    {
      id: 5,
      title: 'KAMOTI BEVERAGE',
      subtitle: 'Local & National Organic Revenue (+210%)',
      image: beverageMerchImg,
    },
    {
      id: 6,
      title: 'STACEY FROELICH',
      subtitle: 'Search Authority & AI Citation Lead Generation',
      image: socialGrowthImg,
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative, 360 Experience, Contribution Bars & Action Button */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-6">
            
            {/* Eyebrow Style in Title Case */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide w-fit">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Proven Case Studies</span>
            </div>

            {/* Main Headline in Primary and Secondary Colors */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.18]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Creating a </span>
              <span className="text-[#009656]">360° </span>
              <span className="text-[#001965]">Experience</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center gap-1.5 py-0.5">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Subtext Paragraph with Brand Emerald Left Border Line */}
            <div className="border-l-2 border-[#009656] pl-4 sm:pl-5 py-0.5">
              <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal">
                When you work with AMIT Solutions for SEO, you have a group of dedicated search experts behind you every step of the way. But we need your help in the process. With your contribution to this partnership, we become a full, 360-degree organic growth partner with you and your business, driving top rankings, qualified leads, and measurable ROI.
              </p>
            </div>

            {/* Contribution / Capability Progress Bars */}
            <div className="space-y-3 pt-2">
              
              {/* Bar 1: SEO Strategists 100% */}
              <div className="relative overflow-hidden rounded-xs shadow-xs">
                <div className="w-full bg-[#009656] text-white px-4 py-2.5 flex items-center justify-between text-xs sm:text-[13px] font-bold tracking-wide">
                  <span>SEO Strategists</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Bar 2: Technical Architects 100% */}
              <div className="relative overflow-hidden rounded-xs shadow-xs">
                <div className="w-full bg-[#009656] text-white px-4 py-2.5 flex items-center justify-between text-xs sm:text-[13px] font-bold tracking-wide">
                  <span>Technical Architects</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Bar 3: Content & PR Specialists 100% */}
              <div className="relative overflow-hidden rounded-xs shadow-xs">
                <div className="w-full bg-[#009656] text-white px-4 py-2.5 flex items-center justify-between text-xs sm:text-[13px] font-bold tracking-wide">
                  <span>Content & PR Specialists</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Bar 4: Your Contribution 60% */}
              <div className="relative overflow-hidden rounded-xs bg-slate-100 border border-slate-200 shadow-xs h-[38px]">
                {/* 60% fill in Brand Navy */}
                <div className="absolute top-0 left-0 bottom-0 w-[60%] bg-[#001965] flex items-center px-4">
                  <span className="text-white text-xs sm:text-[13px] font-bold tracking-wide whitespace-nowrap">
                    Your Contribution
                  </span>
                </div>
                <div className="absolute top-0 right-0 bottom-0 flex items-center pr-4">
                  <span className="text-slate-700 text-xs sm:text-[13px] font-bold tracking-wide">
                    60%
                  </span>
                </div>
              </div>

            </div>

            {/* Start a project Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-6 border-2 border-[#001965] text-[#001965] hover:bg-[#001965] hover:text-white font-bold text-sm tracking-wide rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group shadow-xs hover:shadow-md"
              >
                <span>Start an SEO project.</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#009656] group-hover:text-white" />
              </button>
            </div>

          </div>

          {/* Right Area: 6 Case Study Tiles (3 Columns x 2 Rows) with Corner Brackets */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  onClick={onOpenConsultation}
                  className="group relative aspect-[4/3] rounded-xs overflow-hidden shadow-lg bg-neutral-900 cursor-pointer transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Background Showcase Image */}
                  <img
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />

                  {/* Dark Vignette Overlay to match home page and make text crisp */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/75 group-hover:via-black/45 transition-colors duration-300" />

                  {/* Top-Left Corner Bracket */}
                  <div 
                    aria-hidden="true"
                    className="absolute top-3 left-3 w-7 h-7 sm:w-8 sm:h-8 border-t-[2.5px] border-l-[2.5px] border-white pointer-events-none z-10 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" 
                  />

                  {/* Bottom-Right Corner Bracket */}
                  <div 
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 w-7 h-7 sm:w-8 sm:h-8 border-b-[2.5px] border-r-[2.5px] border-white pointer-events-none z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" 
                  />

                  {/* Centered Case Study Title & Subtitle */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <h3 
                      className="text-sm sm:text-base font-extrabold tracking-wider text-white uppercase drop-shadow-md leading-tight group-hover:text-emerald-300 transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {study.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-medium text-slate-200 mt-1 tracking-normal drop-shadow-sm line-clamp-2">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Subtle Brand Emerald Hover Border Glow */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#009656]/60 transition-colors pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
