import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import heroPersonImg from '../assets/images/hero_person_transparent.png';
import serverRoomBgImg from '../assets/images/server_room_bg_1791306076893.jpg';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure background video plays, muted, and starts after first 3-4 seconds
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.currentTime < 3.5) {
        video.currentTime = 4;
      }
      video.play().catch(() => {});
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    // If metadata already loaded
    if (video.readyState >= 1 && video.currentTime < 3.5) {
      video.currentTime = 4;
      video.play().catch(() => {});
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const rotatingValues = [
    'Maximized Conversions & Qualified Leads',
    'Better ROI and Sustainable Growth',
    'Data-Backed Scalable Revenue Growth',
  ];

  // Rotate value proposition phrase every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % rotatingValues.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const bulletPoints = [
    'Engage, Influence, and Attract the Right Audience',
    'Maximize ROI with Targeted Campaigns',
    'Drive Result-Oriented Organic Traffic',
    '24/7 Support and Free Consultation',
  ];

  return (
    <section className="w-full relative overflow-hidden pt-[30px] border-b border-slate-200/90 bg-[#ebf3fb] hero-section-top-spacing">
      
      {/* 1. Background Video with User's Ice-Blue to White Gradient Overlay with Transparency */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Background Video (Trimmed first 4 seconds, starts after 3-4s, muted background loop) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={serverRoomBgImg}
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        >
          <source src="/videos/hero-bg-trimmed.mp4" type="video/mp4" />
          <source src="https://cms.ridgemarketing.com/wp-content/uploads/2026/05/Ridge-Home-Hero-2026_V3.mp4#t=4" type="video/mp4" />
        </video>

        {/* Soft Ice-Blue to White Linear Gradient matching screenshot with transparency to reveal video motion */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#e8f1fb]/88 via-[#f8fbfe]/82 to-[#eaf3fc]/88" 
        />

        {/* Smooth Bottom Transition Fade to Stats Bar */}
        <div 
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-200/50 to-transparent" 
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* Left Column: Headings, paragraph, checklist, CTA (Expanded width to the right) */}
          <div className="lg:col-span-8 z-10 space-y-3.5 pt-1">
            
            {/* H1 Heading */}
            <h1 
              className="tracking-tight leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {/* Row 1: Professional */}
              <span className="block text-3xl sm:text-4xl lg:text-[46px] font-bold uppercase tracking-tight text-[#001965] leading-none">
                Professional
              </span>

              {/* Row 2: Digital Marketing Agency */}
              <span className="block text-3xl sm:text-4xl lg:text-[46px] font-bold uppercase tracking-tight text-[#009656] leading-none mt-1.5 sm:mt-2">
                Digital Marketing Agency
              </span>

              {/* Row 3: Delivering animated line strictly in 1 single row */}
              <span className="block text-base sm:text-lg md:text-xl lg:text-[23px] font-semibold leading-normal mt-2.5 whitespace-nowrap">
                <span className="text-[#009656] font-semibold">Delivering </span>
                <span className="text-[#001965] font-bold tracking-tight">
                  {rotatingValues[activeWordIndex]}
                </span>
              </span>
            </h1>

            {/* Paragraph with justified alignment and 1rem (17px) font size */}
            <p className="text-[1rem] leading-relaxed text-neutral-700 font-normal text-justify [text-align-last:left] max-w-2xl lg:max-w-[720px]">
              Affordable digital marketing agency services providing online marketing strategies for your business. To bring together quality, experience and affordability that organically grow your business. High-impact digital marketing shouldn&apos;t require an enterprise-level budget. Our full-service digital marketing agency combines years of hands-on industry experience, strategic creativity, and transparent pricing to help businesses of all sizes thrive online.
            </p>

            {/* Bullet Points with 0.941rem (16px) font size */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-2xl lg:max-w-[720px]">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 text-[0.941rem] font-semibold text-neutral-800 leading-snug">
                  <CheckCircle2 className="w-5 h-5 text-[#009656] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-wider text-[#001965] border-b-2 border-[#001965] pb-1 hover:text-[#009656] hover:border-[#009656] transition-colors cursor-pointer"
              >
                <span>GET STARTED &amp; FREE CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#009656]" />
              </button>
            </div>

          </div>

          {/* Right Column: Hero Executive in Armchair on Laptop */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end items-end z-10 pointer-events-none">
            {/* Bottom tucks cleanly behind stats bar */}
            <div className="relative -mb-6 sm:-mb-10 lg:-mb-12 translate-x-2 sm:translate-x-4 lg:translate-x-6">
              <img
                src={heroPersonImg}
                alt="Digital marketing executive working on laptop"
                referrerPolicy="no-referrer"
                className="h-[430px] sm:h-[480px] lg:h-[515px] w-auto max-w-none object-contain drop-shadow-2xl transition-transform"
                style={{ height: '515px', width: 'auto' }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* 3. Bottom Full-Width Stats Bar (Balanced White, Emerald & Navy Combination with Aligned Heights) */}
      <div className="w-full border-t border-slate-200 mt-5 sm:mt-7 relative z-20 bg-slate-100 shadow-md">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-stretch">
          
          {/* 1. 94% Client Retention Rate (Crisp White Card) */}
          <div className="bg-white px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[200px] border-r border-slate-200 text-neutral-900 group hover:bg-slate-50 transition-colors">
            {/* Equal Tag Slot */}
            <div className="h-6 flex items-center mb-2">
              <span className="inline-block border border-[#001965] text-[#001965] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                RETENTION
              </span>
            </div>
            {/* Equal Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-[#001965] tracking-tight leading-none font-mono"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                94%
              </span>
            </div>
            {/* Equal Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009656] leading-snug">
                Client Retention Rate
              </span>
            </div>
            {/* Description starting at exact same height */}
            <p className="text-[11px] text-neutral-600 leading-snug">
              Consistent ROI-driven partnerships and performance marketing.
            </p>
          </div>

          {/* 2. 180% Average Traffic Growth (Solid Brand Emerald Accent) */}
          <div className="bg-[#009656] text-white px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[200px] border-r border-white/20 shadow-inner group hover:bg-[#00824a] transition-colors">
            {/* Equal Tag Slot */}
            <div className="h-6 flex items-center mb-2">
              <span className="inline-block border border-white text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                TRAFFIC
              </span>
            </div>
            {/* Equal Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none font-mono"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                180%
              </span>
            </div>
            {/* Equal Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white leading-snug">
                Average Traffic Growth
              </span>
            </div>
            {/* Description starting at exact same height */}
            <p className="text-[11px] text-white/95 leading-snug">
              Driving qualified audience interest and search visibility.
            </p>
          </div>

          {/* 3. 100% Customized Campaigns (Deep Navy) */}
          <div className="bg-[#00144f] px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[200px] border-r border-white/10 text-white group hover:bg-[#00185c] transition-colors">
            {/* Equal Tag Slot */}
            <div className="h-6 flex items-center mb-2">
              <span className="inline-block border border-white/40 text-white/90 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                STRATEGY
              </span>
            </div>
            {/* Equal Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none font-mono"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                100%
              </span>
            </div>
            {/* Equal Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009656] leading-snug">
                Customized Campaigns
              </span>
            </div>
            {/* Description starting at exact same height */}
            <p className="text-[11px] text-slate-300 leading-snug">
              Tailored strategies aligned with your specific business goals.
            </p>
          </div>

          {/* 4. 12+ Years Industry Expertise (Crisp White Card) */}
          <div className="bg-white px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[200px] border-r border-slate-200 text-neutral-900 group hover:bg-slate-50 transition-colors">
            {/* Equal Tag Slot */}
            <div className="h-6 flex items-center mb-2">
              <span className="inline-block border border-[#001965] text-[#001965] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                EXPERIENCE
              </span>
            </div>
            {/* Equal Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-[#001965] tracking-tight leading-none font-mono"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                12+ Years
              </span>
            </div>
            {/* Equal Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009656] leading-snug">
                Industry Expertise
              </span>
            </div>
            {/* Description starting at exact same height */}
            <p className="text-[11px] text-neutral-600 leading-snug">
              Supporting startups, local businesses, and corporate brands.
            </p>
          </div>

          {/* 5. PARTNERS 2K+ (Solid Brand Emerald Accent) */}
          <div className="bg-[#009656] text-white px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[200px] border-r border-white/20 shadow-inner group hover:bg-[#00824a] transition-colors">
            {/* Equal Tag Slot */}
            <div className="h-6 flex items-center mb-2">
              <span className="inline-block border border-white text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                PARTNERS
              </span>
            </div>
            {/* Equal Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none font-mono"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                2K+
              </span>
            </div>
            {/* Equal Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white leading-snug">
                Global Stakeholders
              </span>
            </div>
            {/* Description starting at exact same height */}
            <p className="text-[11px] text-white/95 leading-snug">
              Enterprise brands, B2B companies, and ambitious founders.
            </p>
          </div>

          {/* 6. AWARDS 25% (Deep Navy) */}
          <div className="bg-[#00144f] px-4 sm:px-6 py-6 flex flex-col justify-start h-full min-h-[200px] text-white group hover:bg-[#00185c] transition-colors">
            {/* Equal Tag Slot */}
            <div className="h-6 flex items-center mb-2">
              <span className="inline-block border border-white/40 text-white/90 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                AWARDS
              </span>
            </div>
            {/* Equal Number Slot */}
            <div className="h-12 flex items-center mb-1">
              <span 
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none font-mono"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                25%
              </span>
            </div>
            {/* Equal Title Slot */}
            <div className="min-h-[34px] flex items-center mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009656] leading-snug">
                Industry Benchmark
              </span>
            </div>
            {/* Description starting at exact same height */}
            <p className="text-[11px] text-slate-300 leading-snug">
              Top 25% performance percentile in campaign efficiency.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
