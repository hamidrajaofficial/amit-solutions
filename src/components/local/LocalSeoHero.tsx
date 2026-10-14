import React from 'react';
import { 
  Headset, 
  ArrowRight, 
  ChevronRight, 
  MapPin, 
  Star, 
  Phone, 
  Navigation, 
  Search, 
  CheckCircle2, 
  Info,
  Clock,
  Sparkles
} from 'lucide-react';
import clinicImg from '../../assets/images/why_choose_us_team_1791387295917.jpg';

interface LocalSeoHeroProps {
  onOpenConsultation?: () => void;
  onExploreServices?: () => void;
}

export const LocalSeoHero: React.FC<LocalSeoHeroProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  const handlePrimaryClick = (e: React.MouseEvent) => {
    if (onOpenConsultation) {
      e.preventDefault();
      onOpenConsultation();
    }
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    if (onExploreServices) {
      e.preventDefault();
      onExploreServices();
    } else if (onOpenConsultation) {
      e.preventDefault();
      onOpenConsultation();
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#EBF5FF] via-[#F4F9FF] to-white overflow-hidden pt-[30px] pb-16 sm:pb-20 lg:pb-24 border-b border-slate-200/80 hero-section-top-spacing">
      
      {/* Background Graphic Watermark (Subtle Local Maps & Growth Coordinates) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center opacity-[0.035]"
      >
        <span 
          className="text-[#001965] font-black text-[100px] sm:text-[160px] lg:text-[220px] tracking-widest uppercase font-['Outfit',sans-serif]"
        >
          MAP PACK
        </span>
      </div>

      {/* Subtle Ambient Brand Glows (Navy #001965 & Emerald #009656) */}
      <div 
        aria-hidden="true"
        className="absolute -top-32 right-10 w-96 h-96 bg-[#001965]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true"
        className="absolute -bottom-32 left-10 w-96 h-96 bg-[#009656]/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Subtitle & Dual Action Buttons (7 Cols on LG) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">

            {/* H1 Heading in Brand Navy #001965 & Emerald #009656 */}
            <h1 
              className="font-['Outfit',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.14] tracking-tight"
            >
              <span className="text-[#001965]">All In One </span>
              <span className="text-[#009656]">Affordable Local SEO Services</span>
            </h1>

            {/* Description Paragraph */}
            <p className="font-sans text-neutral-600 text-base sm:text-[17px] leading-relaxed max-w-xl">
              Data driven local SEO services, ensuring online visibility to targeted audiences. Make a digital change in your business growth with our expert strategies. Get local marketing services for your business to rank-out your competitor in the map pack.
            </p>

            {/* Dual CTAs (Matching Screenshot with AMIT Brand Colors) */}
            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start w-full">
              
              {/* Button 1: Solid Primary Button (#001965 to #009656) */}
              <button 
                type="button"
                onClick={handlePrimaryClick}
                className="inline-block cursor-pointer group"
              >
                <div className="flex items-center justify-center h-[52px] px-6 rounded-[8px] border-2 border-[#001965] bg-[#001965] hover:bg-[#009656] hover:border-[#009656] text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <Headset 
                    size={20} 
                    className="mr-2.5 transition-colors duration-300 stroke-white" 
                  />
                  <span className="font-['Outfit',sans-serif] font-bold text-[16px] sm:text-[17px] whitespace-nowrap tracking-tight">
                    Get Free Consultation
                  </span>
                  <ArrowRight 
                    size={20} 
                    className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1 stroke-white" 
                  />
                </div>
              </button>

              {/* Button 2: Secondary Pill with Emerald Badge */}
              <button 
                type="button"
                onClick={handleSecondaryClick}
                className="inline-block cursor-pointer group"
              >
                <div className="inline-flex items-center h-[52px] bg-white border-2 border-[#001965] hover:border-[#009656] rounded-full p-1 pl-6 pr-1.5 shadow-sm transition-all hover:shadow-md whitespace-nowrap">
                  <span className="text-[#001965] group-hover:text-[#009656] font-['Outfit',sans-serif] font-bold text-[15px] sm:text-[16px] tracking-tight mr-4 select-none transition-colors">
                    Let's Get Started
                  </span>
                  <div className="bg-[#009656] group-hover:bg-[#007f49] w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                    <ChevronRight 
                      stroke="white" 
                      strokeWidth={3} 
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" 
                    />
                  </div>
                </div>
              </button>

            </div>

          </div>

          {/* Right Column: High-Fidelity Smartphone Google Maps 3-Pack Showcase (5 Cols on LG) */}
          <div className="lg:col-span-5 flex justify-center items-start relative">
            
            {/* Ambient Shadow Pod */}
            <div 
              aria-hidden="true" 
              className="absolute -bottom-6 w-[280px] h-8 bg-slate-400/20 rounded-full blur-xl pointer-events-none" 
            />

            {/* Smartphone Frame Container */}
            <div className="relative w-[300px] sm:w-[330px] rounded-[44px] bg-[#0F172A] p-3 shadow-2xl ring-1 ring-slate-800/60 border-4 border-slate-800/80 select-none">
              
              {/* Speaker Notch & Camera Pin */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0F172A] rounded-full z-40 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-700 rounded-full" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800 ml-2.5 ring-1 ring-slate-700" />
              </div>

              {/* Inner Smartphone Screen */}
              <div className="relative w-full h-[540px] sm:h-[580px] bg-[#E8F0F8] rounded-[34px] overflow-hidden flex flex-col justify-between border border-slate-200">
                
                {/* 1. Google Maps Styled Vector Map Canvas */}
                <div className="absolute inset-0 z-0 bg-[#E5ECF6]">
                  {/* Styled Map Arterials & Highway Routes */}
                  <svg className="w-full h-full opacity-60" viewBox="0 0 320 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Water Feature */}
                    <path d="M 0 60 Q 60 90 140 70 T 320 110 L 320 0 L 0 0 Z" fill="#C5DAF7" />
                    {/* Parks */}
                    <rect x="20" y="110" width="70" height="60" rx="12" fill="#D2EBD4" />
                    <rect x="220" y="80" width="80" height="90" rx="14" fill="#D2EBD4" />
                    {/* Primary Road Arterials */}
                    <path d="M -10 180 C 80 180 160 140 240 210 S 330 200 330 200" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
                    <path d="M -10 180 C 80 180 160 140 240 210 S 330 200 330 200" stroke="#FDE293" strokeWidth="6" strokeLinecap="round" />
                    <path d="M 120 0 L 120 540" stroke="#FFFFFF" strokeWidth="10" />
                    <path d="M 120 0 L 120 540" stroke="#FEEFC3" strokeWidth="5" />
                    <path d="M 0 340 L 320 340" stroke="#FFFFFF" strokeWidth="8" />
                    <path d="M 230 180 L 230 540" stroke="#FFFFFF" strokeWidth="7" />
                    <path d="M 40 260 L 320 260" stroke="#FFFFFF" strokeWidth="5" />
                  </svg>

                  {/* Neighborhood Location Labels */}
                  <span className="absolute top-20 left-6 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Central Park
                  </span>
                  <span className="absolute top-28 right-8 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Midtown
                  </span>
                  <span className="absolute top-44 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded shadow-2xs">
                    Downtown Metro
                  </span>

                  {/* Red Competitor Pins & Green Dominance Pin */}
                  <div className="absolute top-28 left-20 -translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-slate-600/30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    </div>
                  </div>

                  <div className="absolute top-24 right-16 -translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-[#001965]/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#001965]" />
                    </div>
                  </div>

                  {/* Main Featured Center Pin (Prominent Red Brand Marker) */}
                  <div className="absolute top-36 left-1/2 -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center animate-bounce duration-1000">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg ring-4 ring-white">
                      <MapPin className="w-7 h-7 fill-white stroke-red-600" />
                    </div>
                    <div className="w-3 h-1.5 bg-black/30 rounded-full blur-[1px] mt-0.5" />
                  </div>
                </div>

                {/* 2. Top Search Floating Bar */}
                <div className="relative z-20 pt-7 px-3">
                  <div className="w-full bg-white rounded-full px-3.5 py-2 shadow-md flex items-center justify-between border border-slate-200/90 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold text-slate-800">Local Business Near Me</span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-[#009656] text-white flex items-center justify-center text-[10px] font-bold">
                      G
                    </div>
                  </div>
                </div>

                {/* 3. Bottom Listings & Featured 3-Pack Pop-out Card */}
                <div className="relative z-30 px-3 pb-3 space-y-2.5">
                  
                  {/* Top Competitor Listing 1 */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-sm border border-slate-200/80 text-left">
                    <div className="text-[11px] font-bold text-slate-800">
                      Metro Health &amp; Dental Clinic
                    </div>
                    <div className="flex items-center gap-1 mt-0.5 text-[10px] text-slate-500">
                      <span className="font-bold text-amber-500">4.9</span>
                      <div className="flex text-amber-400">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <Star className="w-2.5 h-2.5 fill-current" />
                      </div>
                      <span>(300) &bull; 0.6 mi away</span>
                    </div>
                  </div>

                  {/* POP-OUT HERO CARD (Matching Screenshot with High-Converting Badge) */}
                  <div className="relative bg-white rounded-xl p-3 shadow-xl border-2 border-[#009656] ring-4 ring-[#009656]/15 -mx-1 text-left transform -translate-y-1">
                    
                    {/* Top Pop-out Pill Tag */}
                    <div className="absolute -top-3 right-3 bg-[#009656] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Rank #1 Local</span>
                    </div>

                    <div className="flex items-start justify-between gap-2.5">
                      {/* Left: Listing Details */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <h4 
                            className="text-xs sm:text-[13px] font-bold text-[#001965] tracking-tight"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            Your Business Here
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#009656] fill-[#009656]/10 shrink-0" />
                        </div>

                        {/* Star Rating & Review Count */}
                        <div className="flex items-center gap-1 text-[10px]">
                          <span className="font-bold text-amber-600">4.9</span>
                          <div className="flex text-amber-400">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <Star className="w-2.5 h-2.5 fill-current" />
                          </div>
                          <span className="text-slate-500 font-medium">(1,305 reviews)</span>
                        </div>

                        {/* Address & Service Details */}
                        <p className="text-[9px] sm:text-[10px] text-slate-500 leading-tight">
                          Top-Rated Specialist &bull; Suite 500, Central Plaza
                        </p>

                        {/* Open Status */}
                        <div className="flex items-center gap-1 text-[9px] font-semibold text-[#009656]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
                          <span>Open &bull; Closes 8:00 PM</span>
                        </div>
                      </div>

                      {/* Right: Business Thumbnail */}
                      <div className="w-14 h-14 rounded-lg overflow-hidden border border-slate-200 shrink-0 shadow-2xs">
                        <img 
                          src={clinicImg} 
                          alt="Local business practice interior" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Competitor Listing 2 with Action Buttons */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-sm border border-slate-200/80 text-left">
                    <div className="text-[11px] font-bold text-slate-800">
                      Downtown Professional Group
                    </div>
                    <div className="flex items-center gap-1 mt-0.5 text-[10px] text-slate-500 mb-2">
                      <span className="font-bold text-amber-500">4.6</span>
                      <div className="flex text-amber-400">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <Star className="w-2.5 h-2.5 fill-current" />
                      </div>
                      <span>(160) &bull; 1.3 mi away</span>
                    </div>

                    {/* Interactive Call & Directions Mini Buttons */}
                    <div className="flex items-center gap-2">
                      <button 
                        type="button"
                        onClick={handlePrimaryClick}
                        className="flex-1 py-1 px-2 rounded-md bg-slate-100 hover:bg-[#001965] hover:text-white text-slate-700 text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <Phone className="w-2.5 h-2.5" />
                        <span>Call</span>
                      </button>
                      <button 
                        type="button"
                        onClick={handlePrimaryClick}
                        className="flex-1 py-1 px-2 rounded-md bg-[#009656]/10 hover:bg-[#009656] hover:text-white text-[#009656] text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <Navigation className="w-2.5 h-2.5" />
                        <span>Directions</span>
                      </button>
                    </div>
                  </div>

                </div>

                {/* 4. Bottom Native Phone Navigation Bar */}
                <div className="relative z-20 bg-white border-t border-slate-200/80 px-6 py-2 flex items-center justify-between text-slate-400">
                  <div className="w-3.5 h-3.5 rounded-sm border border-slate-400" />
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-400" />
                  <div className="w-3 h-3 border-l-2 border-b-2 border-slate-400 -rotate-45" />
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LocalSeoHero;
