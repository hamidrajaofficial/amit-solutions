import React from 'react';
import { 
  Search, 
  BarChart3, 
  Compass, 
  Calendar, 
  TrendingUp 
} from 'lucide-react';

export interface ProcessStep {
  name: string;
  stepNumber?: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

interface ServiceHowWeWorkSectionProps {
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

export const ServiceHowWeWorkSection: React.FC<ServiceHowWeWorkSectionProps> = ({
  titlePrefix = "Here's Exactly ",
  titleHighlight = "What Happens Next",
  subtitle = "That's why we take a different approach — we listen carefully, guide you step-by-step, and create a clear, personalized SEO ranking roadmap.",
  steps,
}) => {
  const defaultSteps: ProcessStep[] = [
    {
      stepNumber: '01',
      name: 'SEO Audit',
      icon: Search,
      description: 'We perform an in-depth audit of your technical architecture, indexation blockers, and Core Web Vitals to uncover ranking bottlenecks.',
    },
    {
      stepNumber: '02',
      name: 'Competitor Analysis',
      icon: BarChart3,
      description: 'We reverse-engineer rival ranking advantages, backlink acquisitions, and content gaps to claim organic market share.',
    },
    {
      stepNumber: '03',
      name: 'Keyword & Strategy',
      icon: Compass,
      description: 'We map high-intent commercial queries, semantic topic clusters, and buyer journeys tailored to your target audience.',
    },
    {
      stepNumber: '04',
      name: 'Strategy Walkthrough',
      icon: Calendar,
      description: 'We present the execution blueprint, prioritize ranking sprints, and align milestone expectations before rollout.',
    },
    {
      stepNumber: '05',
      name: 'Continuous Optimization',
      icon: TrendingUp,
      description: 'We execute technical fixes, earn authoritative backlinks, and continuously optimize for sustainable Page 1 dominance.',
    },
  ];

  const displaySteps = steps || defaultSteps;

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header - Perfectly Center-Aligned */}
        <div className="w-full max-w-4xl mx-auto space-y-3.5 text-center flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide w-fit">
            <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
            <span>Systematic 5-Step Roadmap</span>
          </div>

          {/* Main Headline (h2) in Brand Dual Colors (Navy & Emerald) */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2] text-center w-full"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#001965]">{titlePrefix}</span>
            <span className="text-[#009656]">{titleHighlight}</span>
          </h2>

          {/* Decorative Brand Divider */}
          <div className="flex items-center justify-center gap-1.5 py-0.5">
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
          </div>

          {/* p tag of h2 */}
          <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal max-w-3xl text-center mx-auto">
            {subtitle}
          </p>

        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full border-b border-slate-200/80 my-10 sm:my-12" />

        {/* 5-Step Process Timeline with Step Names */}
        <div className="relative">
          {/* Dashed Connecting Line for Desktop */}
          <div 
            aria-hidden="true" 
            className="hidden md:block absolute top-7 sm:top-8 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#009656]/30 pointer-events-none z-0" 
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-6 relative z-10 items-start">
            {displaySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Icon Card Box */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 flex items-center justify-center text-[#001965] group-hover:border-[#009656] group-hover:text-[#009656] group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                  </div>

                  {/* Step Name (Replacing Step 1, 2, 3 with Step Name) */}
                  <h3 
                    className="text-sm sm:text-base font-bold text-[#001965] group-hover:text-[#009656] tracking-tight leading-snug mt-4 mb-2 transition-colors text-center"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {step.name}
                  </h3>

                  {/* Step Description - Center Aligned */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed max-w-[210px] mx-auto text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
