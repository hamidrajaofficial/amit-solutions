import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  Cpu, 
  Palette, 
  Rocket, 
  BarChart3, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import glassDashboardImg from '../assets/images/process_glass_dashboard_1791393856714.jpg';

interface HowWeWorkSectionProps {
  onOpenConsultation: () => void;
}

interface StepItem {
  id: number;
  stepNumber: string;
  name: string;
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  timeline: string;
  desc: string;
  deliverables: string[];
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ 
  onOpenConsultation 
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps: StepItem[] = [
    {
      id: 0,
      stepNumber: '01',
      name: 'Audit & Discovery',
      title: 'Audit & Discovery',
      icon: Search,
      timeline: 'Week 1',
      desc: 'Before launching any campaign, we conduct an exhaustive audit of your existing marketing infrastructure, search performance, conversion bottlenecks, and competitor ad strategies to identify untapped growth opportunities.',
      deliverables: [
        'Complete website architecture & conversion funnel audit',
        'Competitor ad spend, keyword positioning & market gap analysis',
        'Historical ad account audit & audience data review',
        'Customer journey mapping & baseline benchmark report',
      ],
    },
    {
      id: 1,
      stepNumber: '02',
      name: 'Strategy & Growth Roadmap',
      title: 'Strategy & Growth Roadmap',
      icon: Compass,
      timeline: 'Week 1 - 2',
      desc: 'We build a tailored omnichannel blueprint aligned directly with your revenue targets. We define customer acquisition targets, channel mix (Search, Meta, LinkedIn, SEO), budget allocations, and aggressive unit economics.',
      deliverables: [
        'Omnichannel media plan & multi-channel budget allocation',
        'Ideal Customer Profile (ICP) & buyer persona targeting models',
        'Unit economics modeling (Target CAC, LTV & ROAS thresholds)',
        'Quarterly 90-day campaign rollout schedule & KPI milestones',
      ],
    },
    {
      id: 2,
      stepNumber: '03',
      name: 'Technical Setup & Infrastructure',
      title: 'Technical Setup & Infrastructure',
      icon: Cpu,
      timeline: 'Week 2',
      desc: 'Flawless execution requires airtight tracking. We implement server-side conversion APIs, Google Analytics 4, Tag Manager, CRM integrations, and custom live dashboards so every single ad dollar is transparently accounted for.',
      deliverables: [
        'Server-side Conversion API setup (Meta CAPI & Google Enhanced Conversions)',
        'GA4 & Google Tag Manager custom event conversion tagging',
        'CRM lead routing, automated lead alerts & attribution mapping',
        'Real-time live ROI reporting & client dashboard configuration',
      ],
    },
    {
      id: 3,
      stepNumber: '04',
      name: 'Creative Production & Asset Building',
      title: 'Creative Production & Asset Building',
      icon: Palette,
      timeline: 'Week 2 - 3',
      desc: 'Creative is the primary driver of performance. Our creative team designs psychology-backed ad sets, high-converting dedicated landing pages, compelling hooks, and video assets engineered to stop the scroll and convert visitors into qualified buyers.',
      deliverables: [
        'Custom high-converting landing pages & responsive funnel pages',
        'Static, carousel & motion graphic performance ad creative suites',
        'Direct-response conversion copywriting & value proposition hooks',
        'Multi-variant creative testing matrix across audience segments',
      ],
    },
    {
      id: 4,
      stepNumber: '05',
      name: 'Campaign Launch & Execution',
      title: 'Campaign Launch & Execution',
      icon: Rocket,
      timeline: 'Week 3',
      desc: 'We launch precision campaigns across Google Search, Performance Max, Meta, and relevant ad networks. We configure algorithmic bidding, negative keyword walls, dayparting, and audience layering to capture high-intent buyers immediately.',
      deliverables: [
        'High-intent Google Search & Performance Max campaign deployment',
        'Meta (Facebook & Instagram) prospecting & dynamic retargeting funnels',
        'Negative keyword exclusions & budget pacing safeguards',
        'Immediate lead qualification flow & sales team notification sync',
      ],
    },
    {
      id: 5,
      stepNumber: '06',
      name: 'Data Optimization & Revenue Scaling',
      title: 'Data Optimization & Revenue Scaling',
      icon: BarChart3,
      timeline: 'Ongoing / Month 1+',
      desc: 'Launch is just the baseline. We ruthlessly prune underperforming ads, double down on winning creative angles, test landing page variations, and scale ad budgets systematically to maximize revenue while protecting target acquisition costs.',
      deliverables: [
        'Weekly algorithmic budget scaling on validated winning campaigns',
        'Continuous landing page CRO & multivariate A/B testing',
        'Audience lookalike expansion, retargeting & customer LTV maximization',
        'Weekly executive performance syncs & transparent analytics reporting',
      ],
    },
  ];

  const activeStep = steps[activeStepIndex];

  return (
    <section className="w-full bg-[#F0F6FD]/70 py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative">
      {/* SVG linear gradient definitions for primary (#001965) to secondary (#009656) icons */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <linearGradient id="primarySecondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#001965" />
            <stop offset="100%" stopColor="#009656" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header - Styled Exactly like Screenshot */}
        <div className="w-full max-w-4xl mx-auto text-center space-y-3.5 pb-10 sm:pb-12">
          
          {/* Eyebrow Style in Title Case (3 words) */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Our Working Process</span>
            </div>
          </div>
          
          {/* Main Headline in Primary and Secondary Colors (No Black) */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2] w-full text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#001965]">How Our </span>
            <span className="text-[#009656]">Digital Marketing Agency </span>
            <span className="text-[#001965]">Operates</span>
          </h2>

          {/* Decorative Divider with 3 dots */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
          </div>

          {/* Paragraph directly under decorative divider */}
          <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal w-full text-center max-w-3xl mx-auto">
            We execute a battle-tested, data-driven framework designed to eliminate guesswork, capture in-market customer demand, and scale predictable revenue from day one.
          </p>

        </div>

        {/* 6 Flow Steps Navigation Bar (Click or Tap to view content below) */}
        <div className="relative pt-6 pb-6 px-2 overflow-x-auto scrollbar-none">
          <div className="min-w-[820px] lg:min-w-0 px-2">
            
            {/* Horizontal Flow Steps with Connectors */}
            <div className="flex items-start justify-between relative w-full">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStepIndex === idx;

                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setActiveStepIndex(idx)}
                      className="relative z-10 flex flex-col items-center text-center cursor-pointer group focus:outline-none transition-all w-24 sm:w-28 lg:w-32 flex-shrink-0 py-1"
                      aria-label={`Step ${step.stepNumber}: ${step.name}`}
                    >
                      {/* Transparent Icon Container with Primary / Secondary Border */}
                      <div 
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-transparent flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'border-2 border-[#009656] ring-4 ring-[#009656]/20 shadow-md shadow-[#009656]/15 scale-105' 
                            : 'border-2 border-[#001965]/40 hover:border-[#009656] hover:scale-105'
                        }`}
                      >
                        <IconComponent 
                          className="w-8 h-8 sm:w-9 sm:h-9 transition-transform group-hover:scale-110" 
                          style={{ stroke: 'url(#primarySecondaryGrad)' }}
                        />
                      </div>

                      {/* Step Name */}
                      <div className="mt-4 px-1 w-full">
                        <span 
                          className={`block text-xs sm:text-[13px] lg:text-sm font-bold transition-colors leading-tight ${
                            isActive 
                              ? 'text-[#001965]' 
                              : 'text-neutral-600 group-hover:text-[#001965]'
                          }`}
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {step.name}
                        </span>
                      </div>
                    </button>

                    {/* Connector line between steps with light secondary color */}
                    {idx < steps.length - 1 && (
                      <div 
                        aria-hidden="true"
                        className="flex-1 mx-1.5 sm:mx-3 h-[2px] bg-[#009656]/40 rounded-full self-start mt-9 sm:mt-11 -translate-y-1/2 transition-colors"
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

          </div>
        </div>

        {/* Dynamic Content Area for the selected step - No Card Box, Clean Direct Content */}
        <div className="pt-8 sm:pt-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Active Step Details, Deliverables & CTA */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Active Step Heading */}
              <div>
                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001965] tracking-tight leading-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {activeStep.title}
                </h3>
                <p className="mt-3 text-[1rem] text-neutral-700 leading-relaxed font-normal">
                  {activeStep.desc}
                </p>
              </div>

              {/* Key Deliverables in this step */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#009656]">
                  Key Deliverables in This Phase:
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#009656] shrink-0 mt-0.5" />
                      <span className="text-[0.941rem] text-neutral-800 font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#001965] hover:bg-[#002899] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-[#001965]/20 hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Discuss Your Growth Plan</span>
                  <ArrowRight className="w-4 h-4 text-[#009656] transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Right Column: Simple Image with just a border */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src={glassDashboardImg}
                alt="Digital marketing strategy and analytics workflow"
                referrerPolicy="no-referrer"
                className="w-full max-w-[520px] h-auto object-cover rounded-2xl border border-slate-300 shadow-md"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
