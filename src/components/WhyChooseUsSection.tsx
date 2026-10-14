import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import whyChooseUsTeamImg from '../assets/images/why_choose_us_team_1791387295917.jpg';

interface WhyChooseUsSectionProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ 
  onOpenConsultation 
}) => {
  const benefits = [
    'Cost-effective marketing solutions designed to maximize budget efficiency and business growth',
    'Consistent brand visibility across all digital distribution channels for stronger recognition',
    'Customized strategies aligned with your business goals and target audience insights',
    'Proactive communication with weekly reporting and transparent analytics tracking',
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stacked Geometric Shapes & Framed Card Composition matching screenshot */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-8">
            <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-[4/3.2]">
              
              {/* Back Top-Left Primary Brand Navy Shape */}
              <div 
                aria-hidden="true"
                className="absolute -top-5 -left-5 sm:-top-7 sm:-left-7 w-40 h-40 sm:w-52 sm:h-52 bg-[#001965] rounded-3xl shadow-lg z-0" 
              />

              {/* Back Bottom-Right Secondary Brand Emerald Shape */}
              <div 
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 w-36 h-36 sm:w-48 sm:h-48 bg-[#009656] rounded-3xl shadow-md z-0" 
              />

              {/* Front Center Card with photo inside */}
              <div className="relative z-10 w-full h-full bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-100 flex flex-col justify-center overflow-hidden">
                <img
                  src={whyChooseUsTeamImg}
                  alt="AMIT Solutions specialists reviewing growth strategy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Benefits & Checklist with Brand Typography & Colors */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Eyebrow Style in Title Case (3 words) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide w-fit">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Proven Agency Advantage</span>
            </div>

            {/* Main Headline in Primary and Secondary Colors (No Black) */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2] text-balance"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Why Partner With a Leading Agency for </span>
              <span className="text-[#009656]">Measurable Growth, </span>
              <span className="text-[#001965]">Strategy &amp; Performance</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center gap-1.5 py-0.5">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Narrative text */}
            <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal">
              Choosing AMIT Solutions means partnering with a leading digital marketing agency that focuses on strategy, performance, and real business outcomes. When hiring a digital marketing agency, businesses need more than execution—they need a structured digital marketing strategy that improves visibility, generates qualified leads, and supports scalable growth. Choosing a digital marketing agency with a reliable growth framework ensures better efficiency, consistency, and measurable ROI instead of fragmented marketing efforts.
            </p>

            {/* Benefits Subtitle */}
            <div className="pt-2">
              <h3 
                className="text-sm sm:text-base font-bold text-[#001965] mb-3.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Benefits Of Hiring A Digital Marketing Agency:
              </h3>

              {/* Bullet Points with brand emerald checkmarks */}
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-[0.941rem] text-neutral-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-[#009656] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive CTA Link */}
            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#001965] hover:text-[#009656] transition-colors cursor-pointer border-b-2 border-[#001965] hover:border-[#009656] pb-0.5"
              >
                <span>Partner with our senior strategists</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#009656]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
