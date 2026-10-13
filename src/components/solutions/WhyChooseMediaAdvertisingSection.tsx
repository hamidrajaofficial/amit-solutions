import React from 'react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import mediaMarketerImg from '../../assets/images/media_marketer_working_1791909926891.jpg';

interface WhyChooseMediaAdvertisingSectionProps {
  onOpenConsultation?: () => void;
}

export const WhyChooseMediaAdvertisingSection: React.FC<WhyChooseMediaAdvertisingSectionProps> = ({
  onOpenConsultation,
}) => {
  const bulletPoints = [
    'Proprietary programmatic bidding algorithms',
    'Omnichannel reach across premium networks',
    'Fully transparent placement and spend reports',
    'Advanced attribution mapping for accurate ROI',
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute -top-32 left-1/4 w-96 h-96 bg-[#001965]/5 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#009656]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Multi-Layer Graphic Composition with Image & Curved Vector (5 Cols on LG) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px]">
              
              {/* Layer 1: Dark Navy Top-Left Offset Card (Brand Navy #001965) */}
              <div 
                aria-hidden="true"
                className="absolute -top-5 -left-5 sm:-top-7 sm:-left-7 w-[82%] h-[80%] bg-[#001965] rounded-[32px] sm:rounded-[42px] shadow-lg pointer-events-none"
              />

              {/* Layer 2: Brand Emerald Bottom-Right Offset Card (#009656) */}
              <div 
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-[50%] h-[45%] bg-[#009656] rounded-[32px] sm:rounded-[42px] shadow-lg pointer-events-none"
              />

              {/* Layer 3: Main Foreground Card (White, Crisp, Rounded-3xl with Soft Inner Shadow) */}
              <div className="relative z-10 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-2xl border border-slate-100 flex items-center justify-center overflow-hidden min-h-[460px] sm:min-h-[500px]">
                
                {/* SVG Artistic Swooping Line Loop Vector with Gradient */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-20" 
                  viewBox="0 0 420 480" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="mediaLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#001965" />
                      <stop offset="50%" stopColor="#009656" />
                      <stop offset="100%" stopColor="#00ab62" />
                    </linearGradient>
                  </defs>
                  {/* Graceful looping vector path around the inner card */}
                  <path 
                    d="M 370 30 C 330 110 260 170 160 140 C 90 120 70 170 95 210 C 130 250 160 210 160 180 C 160 140 100 130 60 200 C 20 270 40 370 70 380 C 110 390 160 360 200 350" 
                    stroke="url(#mediaLineGrad)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    fill="none"
                    className="opacity-95 drop-shadow-sm"
                  />
                </svg>

                {/* Marker Node at Bottom of Vector Line */}
                <div 
                  aria-hidden="true"
                  className="absolute bottom-12 left-8 z-30 flex items-center justify-center bg-white p-1 rounded-full shadow-md border border-slate-100"
                >
                  <div className="w-7 h-7 rounded-full bg-[#009656]/15 flex items-center justify-center text-[#009656]">
                    <MapPin className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Inner Subject Photo Card */}
                <div className="relative z-10 w-[230px] sm:w-[260px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                  <img 
                    src={mediaMarketerImg} 
                    alt="Digital Media Marketing Specialist analyzing campaign performance" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001965]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Copywriting & Content (7 Cols on LG) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-[#009656] text-xs sm:text-sm font-bold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Why Partner With Us?</span>
            </div>

            {/* H2 Heading in Brand Dual Tones: Navy #001965 + Emerald #009656 */}
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.18]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Why Choose </span>
              <span className="text-[#009656]">Our Media Advertising?</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[1rem] sm:text-[17px] text-neutral-600 leading-relaxed font-normal max-w-2xl">
              We don't just buy ads; we engineer high-performance media ecosystems. Our approach combines programmatic technology with human creative intuition to ensure your brand dominates every screen.
            </p>

            {/* Sub-heading */}
            <div className="pt-1">
              <h3 
                className="text-lg sm:text-xl font-bold text-[#001965] tracking-tight flex items-center gap-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span>What Sets Us Apart:</span>
              </h3>
            </div>

            {/* Bullet Points List with Brand Emerald Bullets */}
            <ul className="space-y-3.5 w-full max-w-xl">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#009656] shrink-0 mt-2 ring-4 ring-[#009656]/20" />
                  <span className="text-neutral-700 text-sm sm:text-base font-medium leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Primary Action Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#001965] hover:bg-[#009656] text-white font-['Outfit',sans-serif] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <Phone className="w-4 h-4 text-[#009656] group-hover:text-white transition-colors" />
                <span>Let's get on a discovery call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseMediaAdvertisingSection;
