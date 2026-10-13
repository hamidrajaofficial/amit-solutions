import React, { useState } from 'react';
import { 
  Play, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X,
  ExternalLink,
  Award,
  TrendingUp,
  ShieldCheck,
  Clock
} from 'lucide-react';

// Import images from assets
import creativeTeamImg from '../../assets/images/creative_agency_team_1791463693997.jpg';
import teamMeetingImg from '../../assets/images/team_meeting_wooden_table_1791463753863.jpg';
import consultantImg from '../../assets/images/hero_consultant_1791297648941.jpg';
import womanPresentingImg from '../../assets/images/woman_presenting_green_1791369754241.jpg';

interface SeoWhyClientsSaySectionProps {
  onOpenConsultation?: () => void;
}

interface VideoTestimonial {
  id: string;
  thumbnail: string;
  videoDuration: string;
  category: string;
  metricBadge: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  avatarUrl: string;
  quote: string;
  fullStory: string;
  stats: { label: string; value: string }[];
}

interface GoogleReview {
  id: string;
  authorName: string;
  authorRole: string;
  company: string;
  avatarInitial: string;
  avatarBg: string;
  rating: number;
  timeAgo: string;
  reviewText: string;
  verified: boolean;
  highlightStat: string;
}

export const SeoWhyClientsSaySection: React.FC<SeoWhyClientsSaySectionProps> = ({ 
  onOpenConsultation 
}) => {
  // Active video modal state
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Active Google Review index
  const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);

  // Video Testimonials Data (SEO-specific)
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 'video-1',
      thumbnail: creativeTeamImg,
      videoDuration: '01:42',
      category: 'Enterprise SEO & Authority',
      metricBadge: '+380% Organic Pipeline in 6 Months',
      clientName: 'Marcus Vance',
      clientRole: 'Founder & CEO',
      companyName: 'Aura Living Brand',
      avatarUrl: consultantImg,
      quote: 'AMIT Solutions rebuilt our entire technical search architecture and content clusters. Organic search became our #1 profitable acquisition channel, generating over $380,000 monthly.',
      fullStory: 'Prior to partnering with AMIT Solutions, we were struggling with stagnant organic rankings and indexing penalties. The AMIT technical SEO team resolved 140+ crawl errors, rebuilt our internal linking structure, and deployed semantic topic clusters. Within 6 months, our primary commercial search terms ranked in the top 3 spots of Google, resulting in a sustainable 380% lift in inbound pipeline.',
      stats: [
        { label: 'Organic Revenue Lift', value: '+380%' },
        { label: 'Page 1 Keywords', value: '140+ Terms' },
        { label: 'Scale Horizon', value: '6 Months' }
      ]
    },
    {
      id: 'video-2',
      thumbnail: teamMeetingImg,
      videoDuration: '02:15',
      category: 'Local SEO & Maps Dominance',
      metricBadge: '+280% Qualified Local Inquiries',
      clientName: 'Dr. Rachel Foster',
      clientRole: 'Executive Director',
      companyName: 'NovaCare Wellness Centers',
      avatarUrl: womanPresentingImg,
      quote: 'We went from page 3 obscurity to dominating the Google Local 3-Pack across 14 high-value search terms. Inbound qualified patient inquiries nearly tripled in 90 days.',
      fullStory: 'Expanding our wellness centers across three regional districts required reliable geographic search dominance. AMIT Solutions conducted geo-targeted schema markup, local citation audits, and Google Business Profile optimization. We now hold the #1 spot across all local target clusters, producing unmatched organic ROI without relying solely on PPC spend.',
      stats: [
        { label: 'Inbound Inquiries', value: '+280%' },
        { label: 'Google Rank', value: '#1 Local Pack' },
        { label: 'Locations Scaled', value: '3 Centers' }
      ]
    }
  ];

  // Google Verified Reviews (SEO-specific)
  const googleReviews: GoogleReview[] = [
    {
      id: 'gr-1',
      authorName: 'David Sterling',
      authorRole: 'Chief Marketing Officer',
      company: 'Apex Global Logistics',
      avatarInitial: 'D',
      avatarBg: 'bg-emerald-600',
      rating: 5,
      timeAgo: '1 week ago',
      reviewText: 'AMIT Solutions is easily the highest-performing search agency we have ever hired. They audited our enterprise architecture and solved complex canonical loops within 3 weeks. In 6 months, they scaled our inbound organic commercial inquiries from 45 to over 190 monthly while cutting cost per qualified lead by 38%. Weekly transparent reporting via Slack makes them a true growth department.',
      verified: true,
      highlightStat: '+310% Organic Pipeline Lift'
    },
    {
      id: 'gr-2',
      authorName: 'Elena Rostova',
      authorRole: 'Head of Growth',
      company: 'Kinetix Software Inc.',
      avatarInitial: 'E',
      avatarBg: 'bg-indigo-600',
      rating: 5,
      timeAgo: '3 weeks ago',
      reviewText: 'From day one, their data-driven SEO methodology stood out. Zero fluff, zero vanity metrics—just laser focus on pipeline revenue and first-page search rankings. Our organic search traffic jumped 420% and qualified demo bookings doubled. Best white-hat search engineers in the industry.',
      verified: true,
      highlightStat: '4.2x Organic Traffic Growth'
    },
    {
      id: 'gr-3',
      authorName: 'Michael Chen',
      authorRole: 'Managing Partner',
      company: 'UrbanBites Hospitality Group',
      avatarInitial: 'M',
      avatarBg: 'bg-amber-600',
      rating: 5,
      timeAgo: '1 month ago',
      reviewText: 'Their multi-location local SEO and Google Maps optimization put all four of our dining concepts at the very top of New York searches. Reservations broke all-time company records within 60 days of partnering with AMIT Solutions. Honest, skilled, and relentlessly proactive.',
      verified: true,
      highlightStat: 'Record All-Time Reservations'
    }
  ];

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % googleReviews.length);
  };

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  const currentReview = googleReviews[activeReviewIndex];

  return (
    <section 
      id="testimonials"
      className="relative w-full bg-slate-50 py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/2" 
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="w-full max-w-4xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
          {/* Eyebrow Style in Title Case */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Real Client Stories</span>
            </div>
          </div>

          {/* Main Headline */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.2] w-full text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-[#001965]">What Our </span>
            <span className="text-[#009656]">Clients </span>
            <span className="text-[#001965]">Say</span>
          </h2>

          {/* Decorative Divider with 3 dots */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
            <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
          </div>

          {/* Description */}
          <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal w-full text-center max-w-3xl mx-auto">
            Real founders, enterprise directors, and marketing leaders share how our technical SEO and organic search campaigns multiplied their organic revenue and outperformed competition.
          </p>
        </div>

        {/* 3-Column Testimonial Layout: 2 Video Cards + 1 Google Reviews Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1 & 2: Video Testimonials */}
          {videoTestimonials.map((video) => (
            <div 
              key={video.id}
              className="group relative bg-white rounded-xs border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-0.5"
            >
              {/* Video Thumbnail Area */}
              <div 
                className="relative aspect-16/10 w-full overflow-hidden bg-slate-900 cursor-pointer rounded-t-xs"
                onClick={() => {
                  setActiveVideo(video);
                  setIsVideoPlaying(true);
                }}
              >
                <img 
                  src={video.thumbnail} 
                  alt={`${video.clientName} testimonial`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Video category tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[11px] font-bold tracking-wider uppercase bg-[#001965]/80 text-white backdrop-blur-md border border-white/10 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
                    {video.category}
                  </span>
                </div>

                {/* Duration badge */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs text-[11px] font-semibold bg-black/60 text-white backdrop-blur-md">
                    <Clock className="w-3 h-3 text-slate-300" />
                    {video.videoDuration}
                  </span>
                </div>

                {/* Animated Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <div className="absolute w-16 h-16 rounded-full bg-white/20 animate-ping group-hover:bg-[#009656]/30 pointer-events-none" />
                    <div className="w-14 h-14 rounded-full bg-white text-[#001965] group-hover:text-white group-hover:bg-[#009656] shadow-lg flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Metric pill overlay at bottom of thumbnail */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="bg-[#009656] text-white px-2.5 py-1 rounded-xs shadow-xs text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {video.metricBadge}
                  </span>
                  <span className="text-slate-200 text-[11px] opacity-90 group-hover:opacity-100 flex items-center gap-1">
                    Click to play <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Body & Quote */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                {/* Quote snippet */}
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-normal italic">
                    &ldquo;{video.quote}&rdquo;
                  </p>
                </div>

                {/* Client bio & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={video.avatarUrl} 
                      alt={video.clientName} 
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 ring-2 ring-[#009656]/20"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#001965] leading-tight">
                        {video.clientName}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {video.clientRole}, <span className="text-slate-700 font-semibold">{video.companyName}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveVideo(video);
                      setIsVideoPlaying(true);
                    }}
                    className="p-2 rounded-xs bg-blue-50 text-[#001965] hover:bg-[#001965] hover:text-white transition-colors cursor-pointer"
                    title="Watch Story"
                    aria-label={`Watch story of ${video.clientName}`}
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Card 3: Interactive Google Reviews Showcase */}
          <div className="relative bg-white rounded-xs border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-0.5">
            
            {/* Header: Google Rating Badge & Official Branding */}
            <div className="p-6 pb-4 bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/50 border-b border-slate-100">
              <div className="flex items-center justify-between mb-3">
                {/* Official Google Brand Logo & Review Text */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center p-1.5">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 tracking-wide block">
                      Google Reviews
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Verified Client Rating
                    </span>
                  </div>
                </div>

                {/* 5.0 Star Badge */}
                <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 px-2.5 py-1 rounded-xs border border-amber-500/20">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="text-xs font-extrabold tracking-wide">5.0 / 5.0</span>
                </div>
              </div>

              {/* Total review counter & Trust quote */}
              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5 text-[#009656] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#009656]" />
                  <span>100% Authentic Feedback</span>
                </div>
                <span className="text-slate-400 font-medium">128+ verified reviews</span>
              </div>
            </div>

            {/* Review Slider Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Highlight badge for the active review */}
                <div className="mb-3.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[11px] font-bold text-[#009656] bg-emerald-50 border border-emerald-200">
                    <Sparkles className="w-3 h-3" />
                    {currentReview.highlightStat}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {currentReview.timeAgo}
                  </span>
                </div>

                {/* Stars for active review */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed font-normal">
                  &ldquo;{currentReview.reviewText}&rdquo;
                </p>
              </div>

              {/* Review Author & Slider Pagination Controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${currentReview.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-xs`}>
                    {currentReview.avatarInitial}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-[#001965] leading-tight">
                        {currentReview.authorName}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#009656] fill-emerald-100" />
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {currentReview.authorRole}, <span className="text-slate-700 font-semibold">{currentReview.company}</span>
                    </p>
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrevReview}
                    className="p-1.5 rounded-xs border border-slate-200 hover:border-[#009656] hover:text-[#009656] text-slate-600 transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextReview}
                    className="p-1.5 rounded-xs border border-slate-200 hover:border-[#009656] hover:text-[#009656] text-slate-600 transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">
                Review {activeReviewIndex + 1} of {googleReviews.length}
              </span>
              <button 
                onClick={onOpenConsultation}
                className="text-[#001965] hover:text-[#009656] font-bold inline-flex items-center gap-1 transition-colors group cursor-pointer"
              >
                <span>Read all reviews</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-slate-900 rounded-xs overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-slate-950/80 border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#009656] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
                  Client Case Study • {activeVideo.category}
                </span>
              </div>
              <button 
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-xs hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative aspect-16/9 w-full bg-black overflow-hidden group">
              <img 
                src={activeVideo.thumbnail} 
                alt={activeVideo.clientName} 
                className="w-full h-full object-cover opacity-85"
              />

              {/* Simulation Player Controls overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 flex flex-col justify-between p-6">
                {/* Top Info inside player */}
                <div className="flex items-center justify-between text-white text-xs">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md font-semibold">
                    {activeVideo.clientName} — {activeVideo.companyName}
                  </span>
                  <span className="bg-[#009656] text-white px-2.5 py-1 rounded-md font-bold">
                    {activeVideo.metricBadge}
                  </span>
                </div>

                {/* Center play button */}
                <div className="flex items-center justify-center">
                  <button 
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="w-16 h-16 rounded-full bg-white/90 hover:bg-[#009656] text-[#001965] hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  >
                    {isVideoPlaying ? (
                      <div className="flex gap-1">
                        <div className="w-1.5 h-6 bg-current rounded-xs" />
                        <div className="w-1.5 h-6 bg-current rounded-xs" />
                      </div>
                    ) : (
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    )}
                  </button>
                </div>

                {/* Bottom Scrub bar */}
                <div className="space-y-2">
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
                    <div className="bg-[#009656] h-full w-2/3 rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white text-xs font-medium">
                    <div className="flex items-center gap-3">
                      <span>01:12 / {activeVideo.videoDuration}</span>
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-[#009656] transition-colors cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span>1080p HD</span>
                      <Maximize2 className="w-4 h-4 cursor-pointer hover:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body & Full Story */}
            <div className="p-6 bg-slate-900 text-white space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src={activeVideo.avatarUrl} 
                  alt={activeVideo.clientName} 
                  className="w-12 h-12 rounded-full object-cover border border-[#009656]/50"
                />
                <div>
                  <h4 className="text-base font-bold text-white">
                    {activeVideo.clientName}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {activeVideo.clientRole}, <span className="text-emerald-400 font-semibold">{activeVideo.companyName}</span>
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeVideo.fullStory}
              </p>

              {/* Result Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {activeVideo.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xs bg-white/5 border border-white/10 text-center">
                    <div className="text-base sm:text-lg font-black text-[#009656]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveVideo(null);
                    onOpenConsultation?.();
                  }}
                  className="w-full py-3 px-6 rounded-xs bg-[#009656] hover:bg-[#007f49] text-white font-bold text-xs sm:text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Award className="w-4 h-4" />
                  <span>Build A Similar Ranking Blueprint For Your Brand</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
