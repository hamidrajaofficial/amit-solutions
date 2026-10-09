import React from 'react';
import brandLogo from '../assets/images/AMIT Transparent logo.png';
import { Check, ArrowRight } from 'lucide-react';
import teamMeetingImg from '../assets/images/team_meeting_wooden_table_1791463753863.jpg';

interface AboutCompanySectionProps {
  onOpenConsultation: () => void;
}

export const AboutCompanySection: React.FC<AboutCompanySectionProps> = ({ onOpenConsultation }) => {
  const valuesLeft = [
    'Positive Mindset',
    'Hunger + Hustle',
    'Client Obsession',
    'Integrity',
  ];

  const valuesRight = [
    'Ownership',
    'Communication',
    'Creativity + Quality',
    'Egoless',
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Team Photo with Brand Accent Bracket, Floating Card & Google Partner Badge */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Wrapper with padding for corner bracket and overlapping floating card */}
            <div className="relative pt-6 pl-6 pb-14 sm:pb-16 pr-4 sm:pr-8">
              
              {/* Top-Left Corner Outline Bracket (Brand Emerald #009656 Accent) */}
              <div 
                aria-hidden="true"
                className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 border-t-[3px] border-l-[3px] border-[#009656] pointer-events-none z-10" 
              />

              {/* Main Team Photo */}
              <div className="relative overflow-hidden shadow-xl rounded-lg bg-slate-100">
                <img
                  src={teamMeetingImg}
                  alt="Creative marketing agency team collaborating around a wooden table in New York"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-center"
                />
              </div>

              {/* Overlapping Floating Brand Card: "A Creative Agency" (Brand Navy #001965) */}
              <div className="absolute bottom-0 right-0 sm:right-2 z-20 bg-[#001965] text-white p-5 sm:p-6 max-w-[280px] sm:max-w-[320px] rounded-lg shadow-2xl border border-white/10">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#009656]">
                      AMIT Solutions
                    </span>
                  </div>
                  <div className="bg-white/15 backdrop-blur-xs px-1.5 py-0.5 rounded-md border border-white/10">
                    <img 
                      src={brandLogo} 
                      alt="AMIT Logo" 
                      className="h-5 w-auto object-contain" 
                    />
                  </div>
                </div>
                <h4 
                  className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  A Creative Agency
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2 font-normal">
                  Where creativity brings the results you need to scale your revenue and team.
                </p>
              </div>

              {/* Google Partner Badge on Bottom-Left */}
              <div className="mt-5 flex items-center gap-3 bg-slate-50 border border-slate-200/70 w-fit px-3 py-1.5 rounded-md">
                <div className="flex items-center gap-1 font-bold text-xs tracking-tight">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <span className="w-px h-4 bg-slate-300" />
                <span className="text-xs font-semibold text-slate-700 tracking-wide">
                  Partner
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Brand Headings, Narrative, Core Pillars & Brand CTA */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            
            {/* Eyebrow Style in Title Case (3 words) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide w-fit">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Dedicated Growth Agency</span>
            </div>

            {/* Main Headline in Primary and Secondary Colors (No Black) */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Trusted </span>
              <span className="text-[#009656]">Digital Marketing Company </span>
              <span className="text-[#001965]">in New York</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center gap-1.5 py-0.5">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Sub-headline: A Creative Team Driving Results and Income */}
            <h3 
              className="text-lg sm:text-xl font-bold text-[#001965] tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              A creative team driving results and revenue.
            </h3>

            {/* Narrative text with Brand Emerald Left Border Line */}
            <div className="border-l-2 border-[#009656] pl-4 sm:pl-5 py-0.5">
              <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal">
                Our team of design and marketing experts urgently implement our strategies for you so you can focus on your business, while we focus on building a brand your target market will remember.
              </p>
            </div>

            {/* 8 Values Checkmark Grid (2 Columns of 4 with Brand Emerald #009656 check boxes) */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-3.5 pt-2">
              
              {/* Left Column of 4 values */}
              <div className="space-y-3.5">
                {valuesLeft.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-[#009656] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span className="text-[0.941rem] font-semibold text-slate-800">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column of 4 values */}
              <div className="space-y-3.5">
                {valuesRight.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-[#009656] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span className="text-[0.941rem] font-semibold text-slate-800">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Brand Action Button: Navy with Emerald Hover & Arrow */}
            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#001965] hover:bg-[#009656] text-white font-bold text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
