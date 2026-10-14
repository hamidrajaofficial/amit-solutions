import React, { useState } from 'react';
import { ChevronRight, X, Plus } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  questions: FaqItem[];
}

interface FaqSectionProps {
  eyebrow?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  description?: string;
  categories: FaqCategory[];
  id?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  eyebrow = 'HELP & INFORMATION',
  titlePrefix = 'Frequently Asked ',
  titleHighlight = 'Questions',
  description = 'Everything you need to know about partnering with AMIT Solutions, our transparent pricing, custom deliverables, and growth performance.',
  categories,
  id = 'faq',
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    categories[0]?.id || ''
  );
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(0);

  const currentCategory =
    categories.find((c) => c.id === activeCategoryId) || categories[0];

  if (!currentCategory) return null;

  return (
    <section id={id} className="w-full bg-[#FAFCFF] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
          {/* Eyebrow Pill Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          </div>

          {/* Main Headline in Brand Navy and Emerald */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-center leading-[1.2]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#001965]">{titlePrefix}</span>
            <span className="text-[#009656]">{titleHighlight}</span>
          </h2>

          {/* Decorative Brand Divider */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
          </div>

          {/* Description */}
          <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto text-center">
            {description}
          </p>
        </div>

        {/* 2-Column FAQ Layout: Category Selector + Questions Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Category Selector */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 px-1">
              SELECT CATEGORY
            </div>

            <div className="space-y-2.5">
              {categories.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      setActiveQuestionIndex(0); // open first question of newly selected category
                    }}
                    className={`w-full p-4 sm:p-4.5 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer group ${
                      isActive
                        ? 'bg-white border-2 border-[#001965] shadow-md shadow-slate-200/60 ring-2 ring-[#001965]/5'
                        : 'bg-white border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/50 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Status Dot */}
                      <span 
                        className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                          isActive 
                            ? 'bg-[#009656] ring-4 ring-[#009656]/20' 
                            : 'bg-slate-300'
                        }`} 
                      />
                      <div>
                        <div className={`text-sm sm:text-[15px] font-bold transition-colors ${
                          isActive ? 'text-[#001965]' : 'text-slate-800 group-hover:text-[#001965]'
                        }`}>
                          {cat.name}
                        </div>
                        <div className="text-xs text-slate-500 font-normal mt-0.5">
                          {cat.questions.length} Questions
                        </div>
                      </div>
                    </div>
                    
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#001965] translate-x-0.5' : 'text-slate-400 group-hover:text-slate-600'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Questions Accordion List */}
          <div className="lg:col-span-8 space-y-3.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#001965] mb-2 px-1">
              {currentCategory.name}
            </div>

            <div className="space-y-3.5">
              {currentCategory.questions.map((faq, qIdx) => {
                const isOpen = activeQuestionIndex === qIdx;
                return (
                  <div 
                    key={qIdx}
                    className={`rounded-2xl transition-all overflow-hidden ${
                      isOpen
                        ? 'border-2 border-[#001965] bg-white shadow-lg shadow-slate-200/50'
                        : 'border border-slate-200/90 bg-white hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {isOpen ? (
                      <div>
                        {/* Active Dark Blue Header Bar */}
                        <div 
                          onClick={() => setActiveQuestionIndex(null)}
                          className="bg-[#001965] p-5 sm:p-6 text-white flex items-center justify-between gap-4 cursor-pointer select-none"
                        >
                          <h3 
                            className="text-base sm:text-[17px] font-bold tracking-tight text-white leading-snug"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            {faq.q}
                          </h3>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveQuestionIndex(null);
                            }}
                            aria-label="Collapse question"
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                          >
                            <X className="w-4 h-4 stroke-[2.5]" />
                          </button>
                        </div>

                        {/* Expanded Answer Body */}
                        <div className="p-6 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal bg-white">
                          {faq.a}
                        </div>
                      </div>
                    ) : (
                      /* Closed Item with Plus Icon */
                      <button
                        type="button"
                        onClick={() => setActiveQuestionIndex(qIdx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors group"
                      >
                        <span className="text-base sm:text-[17px] font-bold text-[#001965] group-hover:text-[#009656] transition-colors leading-snug">
                          {faq.q}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#009656]/10 text-slate-500 group-hover:text-[#009656] flex items-center justify-center shrink-0 transition-colors">
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
