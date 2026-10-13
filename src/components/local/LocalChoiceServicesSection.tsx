import React from 'react';
import { 
  UserCheck,
  Store, 
  Star, 
  Contact, 
  Smartphone, 
  Building2, 
  ScanFace
} from 'lucide-react';

interface LocalChoiceServicesSectionProps {
  onOpenConsultation?: () => void;
}

export const LocalChoiceServicesSection: React.FC<LocalChoiceServicesSectionProps> = ({
  onOpenConsultation,
}) => {
  const serviceCards = [
    {
      icon: UserCheck,
      title: 'Hyper-Local SEO',
      description: 'We target customers in your exact neighborhood, ensuring your business appears at the top when people search for services near them.',
    },
    {
      icon: Store,
      title: 'GMB Map Dominance',
      description: 'From profile setup to daily optimization, we keep your Google Business Profile active and visible in the high-converting "Map Pack."',
    },
    {
      icon: Star,
      title: 'Reputation Management',
      description: 'We help you build and maintain a 5-star reputation by managing local reviews and encouraging customer feedback across platforms.',
    },
    {
      icon: Contact,
      title: 'Citation Building (NAP)',
      description: 'We ensure your business Name, Address, and Phone number are consistent across all local directories to boost search engine trust.',
    },
    {
      icon: Smartphone,
      title: 'Localized Paid Ads',
      description: 'Our geo-targeted ad campaigns capture local leads precisely when they are ready to buy, maximizing your local advertising ROI.',
    },
    {
      icon: Building2,
      title: 'Multi-Location Scaling',
      description: 'Whether you have one shop or fifty, our systems are built to scale your local visibility across multiple service areas seamlessly.',
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-18 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching screenshot */}
        <div className="max-w-4xl text-left mb-10 sm:mb-12">
          
          {/* Eyebrow Pill Outline Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-[#007AFF] text-[#007AFF] text-xs font-bold tracking-wider uppercase mb-5">
            LOCAL DOMINATION
          </div>

          {/* H2 Headline: Two-tone matching screenshot */}
          <h2 
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#007AFF]">The Right Choice </span>
            <span>for Local Digital Marketing</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
            We don't just optimize listings; we architect local digital presence that drives walk-in traffic and high-intent leads. Experience search engine dominance in your specific area.
          </p>

        </div>

        {/* Main Grid: 2 Columns of 3 Cards on Left (total 6) + 1 Tall Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Side: 2 Columns x 3 Rows = 6 Cards (Spans 8 columns on large screens) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {serviceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#D4E6FC] shadow-[0_2px_10px_rgba(0,122,255,0.03)] hover:shadow-md hover:border-[#007AFF]/60 transition-all duration-300 flex flex-col justify-start"
                >
                  {/* Top Row: Icon Container + Title inline */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-11 h-11 rounded-[10px] border border-[#007AFF] text-[#007AFF] bg-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 
                      className="text-[17px] sm:text-[18px] font-bold text-[#007AFF] tracking-tight leading-snug"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side: 1 Tall Card (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 h-full">
            <div className="h-full bg-white rounded-[20px] p-6 sm:p-8 border border-[#D4E6FC] shadow-[0_2px_10px_rgba(0,122,255,0.03)] hover:shadow-md hover:border-[#007AFF]/60 transition-all duration-300 flex flex-col justify-between items-center text-center">
              
              <div className="flex flex-col items-center pt-2">
                {/* Centered Top Icon Container */}
                <div className="w-12 h-12 rounded-[12px] border border-[#007AFF] text-[#007AFF] bg-white flex items-center justify-center mb-5">
                  <ScanFace className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Centered Title */}
                <h3 
                  className="text-xl sm:text-[22px] font-bold text-[#007AFF] tracking-tight mb-5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Targeted Local Reach
                </h3>

                {/* Centered Description Paragraphs */}
                <div className="space-y-4 text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed max-w-xs font-normal">
                  <p>
                    We bridge the gap between your local business and the people searching for you. Stop losing local customers to competitors.
                  </p>
                  <p>
                    Experience the power of local digital marketing that brings customers through your doors 24/7.
                  </p>
                </div>
              </div>

              {/* Bottom Centered Button matching screenshot */}
              <div className="w-full pt-8 pb-1 flex justify-center">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#007AFF] hover:bg-[#0062CC] text-white font-['Outfit',sans-serif] font-bold text-sm tracking-wide shadow-xs hover:shadow transition-all duration-200 cursor-pointer text-center"
                >
                  Boost My Local Reach
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocalChoiceServicesSection;
