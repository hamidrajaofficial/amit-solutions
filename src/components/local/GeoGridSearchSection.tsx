import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  Crosshair, 
  ArrowRight, 
  RefreshCw,
  Layers,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface GeoGridSearchSectionProps {
  onOpenConsultation?: () => void;
}

export const GeoGridSearchSection: React.FC<GeoGridSearchSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedRadius, setSelectedRadius] = useState<'3mi' | '5mi' | '10mi'>('5mi');
  const [activeKeyword, setActiveKeyword] = useState('Local SEO Services Near Me');

  // 5x5 Geo-Grid Simulated Ranking Nodes for Map Pack Dominance
  const gridNodes = [
    { rank: 1, lat: '40.71', lng: '-74.00', status: 'top1' },
    { rank: 1, lat: '40.72', lng: '-73.99', status: 'top1' },
    { rank: 2, lat: '40.73', lng: '-73.98', status: 'top3' },
    { rank: 1, lat: '40.74', lng: '-73.97', status: 'top1' },
    { rank: 2, lat: '40.75', lng: '-73.96', status: 'top3' },

    { rank: 1, lat: '40.70', lng: '-74.01', status: 'top1' },
    { rank: 1, lat: '40.71', lng: '-74.00', status: 'top1' },
    { rank: 1, lat: '40.72', lng: '-73.99', status: 'top1' },
    { rank: 1, lat: '40.73', lng: '-73.98', status: 'top1' },
    { rank: 3, lat: '40.74', lng: '-73.97', status: 'top3' },

    { rank: 2, lat: '40.69', lng: '-74.02', status: 'top3' },
    { rank: 1, lat: '40.70', lng: '-74.01', status: 'top1' },
    { rank: 1, lat: '40.71', lng: '-74.00', status: 'center' }, // Center Business Location
    { rank: 1, lat: '40.72', lng: '-73.99', status: 'top1' },
    { rank: 2, lat: '40.73', lng: '-73.98', status: 'top3' },

    { rank: 3, lat: '40.68', lng: '-74.03', status: 'top3' },
    { rank: 1, lat: '40.69', lng: '-74.02', status: 'top1' },
    { rank: 1, lat: '40.70', lng: '-74.01', status: 'top1' },
    { rank: 2, lat: '40.71', lng: '-74.00', status: 'top3' },
    { rank: 3, lat: '40.72', lng: '-73.99', status: 'top3' },

    { rank: 2, lat: '40.67', lng: '-74.04', status: 'top3' },
    { rank: 3, lat: '40.68', lng: '-74.03', status: 'top3' },
    { rank: 2, lat: '40.69', lng: '-74.02', status: 'top3' },
    { rank: 4, lat: '40.70', lng: '-74.01', status: 'out' },
    { rank: 3, lat: '40.71', lng: '-74.00', status: 'top3' },
  ];

  const keywords = [
    'Local SEO Services Near Me',
    'Emergency Digital Marketing',
    'Top Rated Local Agency',
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200/90 relative overflow-hidden">
      
      {/* Background Decorative Ambient Radial Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#007AFF]/5 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#009656]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-4xl text-left space-y-4 mb-12 sm:mb-16">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-[#009656] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
            <Crosshair className="w-4 h-4" />
            <span>GEO-GRID LOCAL RANKING TECHNOLOGY</span>
          </div>

          {/* H2 Two-Tone Headline in Brand Dual Colors */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#001965]">GeoGrid Search: </span>
            <span className="text-[#009656]">Precision Tracking for Local SEO Success</span>
          </h2>

          {/* Decorative Brand Divider */}
          <div className="flex items-center gap-1.5 py-0.5">
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-neutral-600 text-[1rem] leading-relaxed max-w-3xl font-normal">
            Track your exact Google Maps rankings block-by-block, street-by-street. Stop guessing where your local business ranks and see real-time proximity visibility across your entire service territory.
          </p>

        </div>

        {/* Interactive Showcase: 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual GeoGrid Heatmap Simulator (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden">
              
              {/* Top Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Live Scan Engine Active
                  </span>
                </div>

                {/* Radius Filter Pills */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold">
                  {(['3mi', '5mi', '10mi'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setSelectedRadius(r)}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                        selectedRadius === r 
                          ? 'bg-[#007AFF] text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {r} Radius
                    </button>
                  ))}
                </div>
              </div>

              {/* Keyword Selection Bar */}
              <div className="py-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                  <Search className="w-3.5 h-3.5 text-[#007AFF]" />
                  Keyword:
                </span>
                {keywords.map((kw) => (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => setActiveKeyword(kw)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                      activeKeyword === kw
                        ? 'bg-[#007AFF]/10 border-[#007AFF] text-[#007AFF] font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {kw}
                  </button>
                ))}
              </div>

              {/* Map Canvas Visual with 5x5 Geo Nodes */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#E8F0F8] rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center p-4">
                
                {/* Simulated Street Grid Vectors */}
                <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 500 350" fill="none">
                  {/* Water feature */}
                  <path d="M 0 40 Q 150 100 300 60 T 500 90 L 500 0 L 0 0 Z" fill="#C7DCF8" />
                  {/* Highways */}
                  <path d="M 0 160 C 140 160 220 120 380 200 S 500 180 500 180" stroke="#FFF" strokeWidth="10" />
                  <path d="M 0 160 C 140 160 220 120 380 200 S 500 180 500 180" stroke="#FEEFC3" strokeWidth="5" />
                  <path d="M 200 0 L 200 350" stroke="#FFF" strokeWidth="8" />
                  <path d="M 360 0 L 360 350" stroke="#FFF" strokeWidth="6" />
                  <path d="M 0 260 L 500 260" stroke="#FFF" strokeWidth="6" />
                </svg>

                {/* 5x5 Ranking Grid */}
                <div className="grid grid-cols-5 gap-3 sm:gap-5 relative z-10 w-full max-w-[420px]">
                  {gridNodes.map((node, i) => (
                    <div 
                      key={i}
                      className="flex flex-col items-center justify-center group/node cursor-pointer"
                    >
                      <div 
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-md transition-transform duration-200 group-hover/node:scale-125 ${
                          node.status === 'center'
                            ? 'bg-[#007AFF] text-white ring-4 ring-[#007AFF]/30 animate-pulse'
                            : node.status === 'top1'
                            ? 'bg-[#009656] text-white ring-2 ring-white'
                            : node.status === 'top3'
                            ? 'bg-[#38BDF8] text-white ring-2 ring-white'
                            : 'bg-amber-500 text-white ring-2 ring-white'
                        }`}
                      >
                        #{node.rank}
                      </div>
                      <span className="text-[9px] font-bold text-slate-600 mt-1 opacity-0 group-hover/node:opacity-100 transition-opacity bg-white/90 px-1 rounded shadow-2xs">
                        Pos #{node.rank}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Center Business Callout Marker */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200 shadow-md text-left z-20">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                    <MapPin className="w-3.5 h-3.5 text-[#007AFF] fill-[#007AFF]" />
                    <span>Your Business HQ</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold block">
                    88.4% Top-3 Geo Coverage
                  </span>
                </div>

                {/* Bottom Legend */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-3 text-[10px] font-bold text-slate-600 z-20">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#009656]" /> Rank #1
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" /> Rank #2-3
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Rank #4+
                  </span>
                </div>

              </div>

              {/* Real-time stats footer */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-100 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#009656] font-['Outfit',sans-serif]">
                    #1.3
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Average Map Rank
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#007AFF] font-['Outfit',sans-serif]">
                    88.4%
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    3-Pack Proximity Share
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-['Outfit',sans-serif]">
                    25 / 25
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Geo Nodes Scanned
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Pillars & Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 text-left">
            
            <div className="space-y-3">
              <h3 
                className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight leading-snug"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Why Block-by-Block Geo-Grid Tracking Wins
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rankings change every 500 feet. Standard rank trackers only check from a single postal code or IP. Our GeoGrid technology scans your target radius at dozens of GPS coordinate nodes simultaneously.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="space-y-3.5 w-full">
              {[
                {
                  title: 'Micro-Radius Proximity Analysis',
                  desc: 'Pinpoint exactly which intersections you rank #1 for and where competitors take the lead.',
                },
                {
                  title: 'Competitor Displacement Strategy',
                  desc: 'Deploy targeted hyper-local schema and citations to overtake neighboring rivals in the map pack.',
                },
                {
                  title: 'Phone Call & Route Direction Tracking',
                  desc: 'Direct correlation between top-3 grid dominance and explosive inbound telephone leads.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] font-['Outfit',sans-serif]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 w-full">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#009656] hover:bg-[#00ab62] text-white font-['Outfit',sans-serif] font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Run Your Free GeoGrid Scan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GeoGridSearchSection;
