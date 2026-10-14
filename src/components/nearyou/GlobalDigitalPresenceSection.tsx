import React, { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp, ArrowRight, Globe } from 'lucide-react';

interface CountryItem {
  id: string;
  name: string;
  code: string;
  flagSvg: React.ReactNode;
  cities: string[];
}

interface GlobalDigitalPresenceSectionProps {
  onOpenConsultation?: () => void;
}

export const GlobalDigitalPresenceSection: React.FC<GlobalDigitalPresenceSectionProps> = ({ onOpenConsultation }) => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const countries: CountryItem[] = [
    {
      id: 'usa',
      name: 'USA',
      code: 'US',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <g fillRule="evenodd">
            <path fill="#bd3d44" d="M0 0h640v480H0z" />
            <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203.1h640M0 277h640M0 350.8h640M0 424.6h640" />
            <path fill="#192f5d" d="M0 0h256v258.5H0z" />
            <circle fill="#fff" cx="128" cy="129" r="10" />
            <circle fill="#fff" cx="64" cy="65" r="8" />
            <circle fill="#fff" cx="192" cy="65" r="8" />
            <circle fill="#fff" cx="64" cy="193" r="8" />
            <circle fill="#fff" cx="192" cy="193" r="8" />
          </g>
        </svg>
      ),
      cities: ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Miami, FL', 'Dallas, TX']
    },
    {
      id: 'uk',
      name: 'UK',
      code: 'GB',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 64V0z" />
          <path fill="#C8102E" d="m424 288 216 153v39h-40L368 300zm-208-96L0 39V0h40l232 173zM640 0v12L440 160h-56L616 0zM0 480v-12l200-148h56L24 480z" />
          <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
          <path fill="#C8102E" d="M272 0h96v480h-96zM0 192h640v96H0z" />
        </svg>
      ),
      cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Edinburgh']
    },
    {
      id: 'canada',
      name: 'Canada',
      code: 'CA',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <path fill="#ff0000" d="M0 0h160v480H0zm480 0h160v480H480z" />
          <path fill="#fff" d="M160 0h320v480H160z" />
          <path fill="#ff0000" d="m320 115 15 48 40-18-12 40 45 10-38 30 18 42-45-12-23 45-23-45-45 12 18-42-38-30 45-10-12-40 40 18z" />
        </svg>
      ),
      cities: ['Toronto, ON', 'Vancouver, BC', 'Montreal, QC', 'Calgary, AB', 'Ottawa, ON']
    },
    {
      id: 'uae',
      name: 'UAE',
      code: 'AE',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <path fill="#00732f" d="M0 0h640v160H0z" />
          <path fill="#fff" d="M0 160h640v160H0z" />
          <path fill="#000" d="M0 320h640v160H0z" />
          <path fill="#f00" d="M0 0h160v480H0z" />
        </svg>
      ),
      cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman']
    },
    {
      id: 'australia',
      name: 'Australia',
      code: 'AU',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <path fill="#00008b" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h320v240H0z" />
          <path fill="#c8102e" d="M130 0h60v240h-60zM0 90h320v60H0z" />
          <circle fill="#fff" cx="480" cy="120" r="16" />
          <circle fill="#fff" cx="540" cy="200" r="14" />
          <circle fill="#fff" cx="420" cy="220" r="14" />
          <circle fill="#fff" cx="480" cy="340" r="20" />
          <circle fill="#fff" cx="160" cy="360" r="30" />
        </svg>
      ),
      cities: ['Sydney, NSW', 'Melbourne, VIC', 'Brisbane, QLD', 'Perth, WA']
    },
    {
      id: 'bahrain',
      name: 'Bahrain',
      code: 'BH',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <path fill="#ce1126" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h160l80 48-80 48 80 48-80 48 80 48-80 48 80 48-80 48 80 48-80 48H0z" />
        </svg>
      ),
      cities: ['Manama', 'Riffa', 'Muharraq', 'Seef District']
    },
    {
      id: 'qatar',
      name: 'Qatar',
      code: 'QA',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <path fill="#8a1538" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h180l60 26.6-60 26.7 60 26.7-60 26.6 60 26.7-60 26.7 60 26.7-60 26.6 60 26.7-60 26.7 60 26.7-60 26.6 60 26.7-60 26.7 60 26.7-60 26.6 60 26.7-60 26.7 60 26.7-60 26.6H0z" />
        </svg>
      ),
      cities: ['Doha', 'Al Rayyan', 'Lusail', 'West Bay']
    },
    {
      id: 'india',
      name: 'India',
      code: 'IN',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <path fill="#f93" d="M0 0h640v160H0z" />
          <path fill="#fff" d="M0 160h640v160H0z" />
          <path fill="#128807" d="M0 320h640v160H0z" />
          <circle fill="#008" cx="320" cy="240" r="32" />
          <circle fill="#fff" cx="320" cy="240" r="26" />
          <circle fill="#008" cx="320" cy="240" r="8" />
        </svg>
      ),
      cities: ['Mumbai', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Pune']
    },
    {
      id: 'pakistan',
      name: 'Pakistan',
      code: 'PK',
      flagSvg: (
        <svg viewBox="0 0 640 480" className="w-9 h-6.5 rounded shadow-2xs shrink-0 object-cover">
          <path fill="#01411c" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h160v480H0z" />
          <circle fill="#fff" cx="410" cy="240" r="90" />
          <circle fill="#01411c" cx="440" cy="220" r="82" />
          <polygon fill="#fff" points="430,175 440,205 470,205 445,225 455,255 430,235 405,255 415,225 390,205 420,205" />
        </svg>
      ),
      cities: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad']
    }
  ];

  const toggleCountry = (id: string) => {
    setActiveCountry(activeCountry === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F2F7FC]/70 border-y border-slate-200/70 relative overflow-hidden">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#009656]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#001965]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Divider & Rich Narrative (Matching Screenshot) */}
          <div className="lg:col-span-6 space-y-5 text-left">
            
            {/* Eyebrow Style in Title Case */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-xs sm:text-sm font-bold text-[#009656] tracking-wide w-fit shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Global Digital Presence</span>
            </div>

            {/* Main Headline in Brand Dual Colors (Navy #001965 & Emerald #009656) */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Searching for the Best Local </span> <br className="hidden sm:inline" />
              <span className="text-[#001965]">Internet Marketing Agency </span> <br className="hidden sm:inline" />
              <span className="text-[#009656]">to Grow Your Business Digitally?</span>
            </h2>

            {/* Decorative Brand Divider */}
            <div className="flex items-center gap-1.5 py-0.5">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Narrative Paragraph 1 from Screenshot */}
            <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal">
              Search Engine Sphere operates as an international growth marketing agency focused on building scalable acquisition systems powered by ROI-driven strategy, AI-powered intelligence, and strategic execution. We deliver our digital marketing services across SEO, paid media, and web development to improve visibility, performance, and long-term business growth.
            </p>

            {/* Narrative Paragraph 2 from Screenshot */}
            <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal">
              As a local internet marketing agency, we combine international standards with localized insights to help businesses scale effectively across competitive markets. Recognized as an award-winning digital marketing agency, we serve clients across the United States, United Kingdom, Canada, United Arab Emirates, Australia, India, Pakistan, Bahrain, and Qatar. We also operate as a global Google Ads agency.
            </p>

            {/* Global Reach Counter Card */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#009656]/10 text-[#009656] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#001965] font-['Outfit',sans-serif]">
                    9+ Countries &middot; 45+ Active Metro Areas
                  </div>
                  <div className="text-xs text-neutral-500 font-medium">
                    Worldwide localized search and media campaign management
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3x3 Grid of Country Cards + "Find Us Near You" Button (Matching Screenshot) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end w-full">
            
            {/* 3x3 Country Grid (9 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full mb-6">
              {countries.map((country) => {
                const isExpanded = activeCountry === country.id;

                return (
                  <div 
                    key={country.id}
                    className={`bg-white rounded-2xl p-4 sm:p-4.5 border transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between ${
                      isExpanded ? 'border-[#009656] ring-2 ring-[#009656]/20' : 'border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    {/* Top Row: Flag + Country Name */}
                    <div className="flex items-center gap-3 mb-3">
                      {country.flagSvg}
                      <span 
                        className="text-base sm:text-[17px] font-bold text-neutral-800 tracking-tight"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {country.name}
                      </span>
                    </div>

                    {/* Near You Trigger */}
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleCountry(country.id)}
                        className="w-full flex items-center justify-between py-1 text-xs sm:text-[13px] font-semibold text-[#007AFF] hover:text-[#009656] transition-colors cursor-pointer group"
                      >
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#007AFF] group-hover:text-[#009656] shrink-0" />
                          <span>Near you</span>
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#009656]" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#009656]" />
                        )}
                      </button>

                      {/* Expandable City List */}
                      {isExpanded && (
                        <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1 animate-in fade-in duration-150">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                            Metro Hubs:
                          </div>
                          {country.cities.map((city, cIdx) => (
                            <button
                              key={cIdx}
                              onClick={onOpenConsultation}
                              className="w-full text-left text-[11px] font-medium text-neutral-600 hover:text-[#009656] hover:bg-neutral-50 px-1.5 py-0.5 rounded transition-colors block truncate cursor-pointer"
                            >
                              &bull; {city}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* "Find Us Near You" Pill Button (Matching Screenshot) */}
            <div className="w-full flex justify-center sm:justify-end">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-white via-white to-[#007AFF] hover:to-[#009656] border border-[#007AFF]/30 p-1 pr-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-full bg-[#007AFF]/10 text-[#007AFF] group-hover:bg-[#009656]/15 group-hover:text-[#009656] flex items-center justify-center mr-3 transition-colors">
                  <MapPin className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span 
                  className="font-['Outfit',sans-serif] font-bold text-sm sm:text-base text-neutral-800 group-hover:text-[#001965] tracking-tight mr-4 transition-colors"
                >
                  Find Us Near You
                </span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
