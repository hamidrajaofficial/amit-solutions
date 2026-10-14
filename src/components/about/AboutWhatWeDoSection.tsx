import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutWhatWeDoSectionProps {
  onOpenConsultation?: () => void;
}

export const AboutWhatWeDoSection: React.FC<AboutWhatWeDoSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Subtle Ambient Brand Accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#009656]/5 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#001965]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-stretch">
          
          {/* Left Column (5 Cols on LG) */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-12 text-left space-y-5">
            
            {/* Eyebrow Badge in Brand Emerald #009656 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-[#009656] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>WHAT WE DO</span>
            </div>

            {/* H2 Headline in Two-Tone (Brand Navy #001965 + Brand Emerald #009656) */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">We Help Your Business To </span>
              <span className="text-[#009656] block mt-1">Reach New Heights</span>
            </h2>

            {/* Decorative Brand Divider Dots */}
            <div className="flex items-center gap-1.5 py-1">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Subtitle / Paragraph */}
            <p className="font-sans text-neutral-600 text-base sm:text-[17px] leading-relaxed max-w-lg font-normal">
              Utilising digital marketing prowess to give you a competitive edge. Ready to raise your game?
            </p>

            {/* Feature Checkpoints */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#001965]">
                <CheckCircle2 className="w-4 h-4 text-[#009656] shrink-0" />
                <span>Custom-tailored ROI growth architectures</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#001965]">
                <CheckCircle2 className="w-4 h-4 text-[#009656] shrink-0" />
                <span>Transparent deliverables with real attribution</span>
              </div>
            </div>

          </div>

          {/* Center Brand Emerald Vertical Divider Line (Hidden on mobile, visible on LG) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-stretch py-2">
            <div className="w-[3px] bg-gradient-to-b from-[#001965] via-[#009656] to-[#009656] rounded-full self-stretch min-h-[340px]" />
          </div>

          {/* Mobile Divider (visible only below LG) */}
          <div className="block lg:hidden w-20 h-[3px] bg-[#009656] rounded-full my-2" />

          {/* Right Column (6 Cols on LG) */}
          <div className="lg:col-span-6 flex flex-col justify-center pl-0 lg:pl-8 text-left space-y-5">
            
            {/* Greeting / Sub-headline in Brand Navy */}
            <h3 
              className="text-xl sm:text-2xl font-bold text-[#001965] tracking-tight leading-snug"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Hello! We&apos;re AMIT Solutions.
            </h3>

            {/* Paragraph 1 with Brand Accent Left Border Line */}
            <div className="border-l-2 border-[#009656] pl-4 sm:pl-5 py-0.5">
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                Is it just us, or does everything feel so impersonal these days? We get it. Finding someone who genuinely cares about your business can be tough.
              </p>
            </div>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              That&apos;s where we come in. As a boutique full-service digital marketing agency, we believe in building real connections and driving real results. Whether you&apos;re a small but mighty start-up finding your feet or an established industry leader, we become a true extension of your team, invested in your success every step of the way.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              We help ambitious businesses grow – and we&apos;re not your typical agency. See for yourself!
            </p>

            {/* Brand Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#001965] hover:bg-[#009656] text-white font-['Outfit',sans-serif] font-bold text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Get Started with AMIT Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhatWeDoSection;
