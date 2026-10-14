import React from 'react';
import { 
  Target, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import localStoreImg from '../../assets/images/mangia_brick_oven_pizza_1791462702076.jpg';

interface TargetedLocalReachSectionProps {
  onOpenConsultation?: () => void;
}

export const TargetedLocalReachSection: React.FC<TargetedLocalReachSectionProps> = ({
  onOpenConsultation,
}) => {
  const features = [
    {
      title: '3-Pack Guaranteed Strategy',
      description: 'We position your brand into the top-3 Google Maps pack where 78% of local search clicks occur.',
    },
    {
      title: 'Geo-Grid Proximity Targeting',
      description: 'Isolate customers within 1 to 15 miles of your front doors searching for immediate solutions.',
    },
    {
      title: 'Call & Direction Conversion Funnel',
      description: 'Convert mobile searches into real-world foot traffic, direct phone calls, and booked appointments.',
    },
    {
      title: 'Review Acceleration System',
      description: 'Automated post-service SMS and email workflows to capture verified 5-star Google testimonials.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Subtle Ambient Brand Glows */}
      <div 
        aria-hidden="true" 
        className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-[#001965]/5 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-[#009656]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Photo, Floating Stats & Map Badges (5 Cols on LG) */}
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px]">
              
              {/* Backing Card 1: Navy Accent Shape */}
              <div 
                aria-hidden="true"
                className="absolute -top-5 -left-5 sm:-top-7 sm:-left-7 w-[85%] h-[85%] bg-[#001965] rounded-[32px] sm:rounded-[40px] shadow-lg pointer-events-none"
              />

              {/* Backing Card 2: Emerald Accent Shape */}
              <div 
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-[55%] h-[50%] bg-[#009656] rounded-[32px] sm:rounded-[40px] shadow-lg pointer-events-none"
              />

              {/* Main Visual Foreground Container */}
              <div className="relative z-10 bg-white rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-2xl border border-slate-100 overflow-hidden">
                
                {/* Local Business Photographic Showcase */}
                <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-inner border border-slate-200 group">
                  <img 
                    src={localStoreImg} 
                    alt="Active local business store front generating customers"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001965]/70 via-[#001965]/20 to-transparent" />
                  
                  {/* Floating Google Guaranteed Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md text-slate-800 text-xs font-bold border border-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#009656]" />
                    <span>Google Guaranteed</span>
                  </div>

                  {/* Bottom Map Pin Coordinates Banner */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#009656] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <MapPin className="w-4 h-4 fill-white stroke-[#009656]" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-[#001965]">Downtown Commercial Hub</div>
                        <div className="text-[10px] text-slate-500 font-medium">Rank #1 in 5-Mile Geo-Grid</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#009656]/10 px-2 py-1 rounded-md text-[11px] font-bold text-[#009656]">
                      <Navigation className="w-3 h-3" />
                      <span>0.4 mi</span>
                    </div>
                  </div>
                </div>

                {/* Lower Floating Metric Cards Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
                  
                  {/* Metric Card 1: Review Velocity */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-200/80 text-left">
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold text-slate-800 ml-1">4.9/5</span>
                    </div>
                    <div className="text-[11px] font-bold text-[#001965]">320+ Verified Reviews</div>
                    <div className="text-[10px] text-slate-500">Active Review Velocity</div>
                  </div>

                  {/* Metric Card 2: Growth Metrics */}
                  <div className="bg-[#F0FDF4] rounded-2xl p-3.5 border border-[#009656]/30 text-left">
                    <div className="flex items-center gap-1 text-[#009656] font-extrabold text-base mb-0.5">
                      <TrendingUp className="w-4 h-4" />
                      <span>+310%</span>
                    </div>
                    <div className="text-[11px] font-bold text-[#001965]">Inbound Phone Calls</div>
                    <div className="text-[10px] text-slate-600">High-intent regional buyers</div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Copywriting & Actions (7 Cols on LG) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 order-1 lg:order-2 text-left">
            
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-[#009656] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TARGETED LOCAL REACH</span>
            </div>

            {/* H2 Headline in Dual Colors */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Targeted </span>
              <span className="text-[#009656]">Local Reach</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center gap-1.5 py-0.5">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Exact Paragraphs matching screenshot */}
            <div className="space-y-4 text-base sm:text-[17px] text-neutral-600 leading-relaxed font-normal max-w-2xl">
              <p>
                We bridge the gap between your local business and the people searching for you. Stop losing local customers to competitors.
              </p>
              <p>
                Experience the power of local digital marketing that brings customers through your doors 24/7.
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70">
                  <div className="mt-0.5 bg-[#009656]/10 rounded-full p-1 shrink-0 text-[#009656]">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#001965]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 w-full">
              
              {/* Primary Button: Boost My Local Reach */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#001965] hover:bg-[#009656] text-white font-['Outfit',sans-serif] font-bold text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group hover:-translate-y-0.5"
              >
                <span>Boost My Local Reach</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Discovery Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border-2 border-[#001965] text-[#001965] font-['Outfit',sans-serif] font-bold text-base tracking-wide transition-all duration-300 shadow-xs cursor-pointer hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#009656]" />
                <span>Schedule Local Call</span>
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetedLocalReachSection;
