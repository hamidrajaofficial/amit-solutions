import React, { useState } from 'react';
import { 
  CheckCircle, 
  Globe,
  ChevronDown,
  Send
} from 'lucide-react';
import marketingChallengesBg from '../../assets/images/marketing_challenges_bg.jpg';

interface SeoConsultationRoadmapSectionProps {
  onOpenConsultation?: () => void;
}

export const SeoConsultationRoadmapSection: React.FC<SeoConsultationRoadmapSectionProps> = ({ 
  onOpenConsultation 
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    workEmail: '',
    growthService: 'Search Engine Optimization (SEO)',
    timeWindow: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { [key: string]: string } = {};
    if (!formData.companyName.trim()) errs.companyName = 'Company name required';
    if (!formData.contactName.trim()) errs.contactName = 'Contact name required';
    if (!formData.phone.trim()) errs.phone = 'Phone number required';
    if (!formData.workEmail.trim()) errs.workEmail = 'Work email required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-[#F4F7FB]">
      
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={marketingChallengesBg}
          alt="SEO Growth background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Soft brand overlay ensuring high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7FB]/92 via-[#F4F7FB]/85 to-[#F4F7FB]/95 backdrop-blur-[0.5px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Pain Points, and Approach */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Style in Title Case */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#009656]/10 text-xs sm:text-sm font-bold text-[#009656] tracking-wide w-fit">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span>Strategic SEO Roadmap</span>
            </div>

            {/* Main Headline in Primary and Secondary Colors */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Ready to Take the </span>
              <span className="text-[#001965]">Next Step in </span> <br />
              <span className="text-[#009656]">Your Digital Growth?</span>
            </h2>

            {/* Intro Narrative */}
            <p className="text-[1rem] text-neutral-600 leading-relaxed font-normal max-w-xl">
              Whether you&apos;re struggling with stagnant organic traffic, algorithm volatility, or looking to scale your revenue pipeline, our search architects are ready to guide you. We remove the technical SEO complexity so you can focus on{' '}
              <span className="text-[#001965] font-semibold underline decoration-[#009656] decoration-2 underline-offset-4">
                running your business.
              </span>
            </p>

            {/* Pain Points Subheading */}
            <div className="pt-1">
              <h3 className="text-base sm:text-lg font-bold text-[#001965] mb-3">
                Do any of these sound like your business?
              </h3>

              {/* Bullet Points with brand emerald checkmarks */}
              <ul className="space-y-3 max-w-xl">
                {[
                  'Struggling to crack Google\'s Page 1 for high-value transactional search terms',
                  'Frustrated by unpredictable algorithm updates and declining organic rankings',
                  'Need a predictable system for capturing organic leads without paying for every click',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[0.941rem] text-neutral-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#009656] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach */}
            <div className="pt-2 space-y-2 max-w-xl">
              <h3 
                className="text-lg sm:text-xl font-bold text-[#001965]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Our Engineering-Driven Approach
              </h3>
              <p className="text-[1rem] text-neutral-600 leading-relaxed">
                That&apos;s why we take an engineering approach to search — we audit your site architecture, eliminate indexation bottlenecks, and deliver an actionable keyword dominance blueprint.
              </p>
            </div>

          </div>

          {/* Right Column: Lead Form Card styled exactly as home page */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/90 p-6 sm:p-8">
              
              {/* Header inside card matching digital marketing agency */}
              <div className="space-y-1 mb-5">
                <span className="text-[12px] sm:text-[13px] font-bold text-[#7CB342] uppercase tracking-wider block">
                  FREE SEO CONSULTATION
                </span>
                <h3 
                  className="text-2xl sm:text-[26px] font-bold text-[#0c3c66] tracking-tight leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Get Your SEO Growth Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed pt-0.5">
                  Connect with a senior search strategist specialized in your industry vertical.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#009656] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-[#001965]">
                    SEO Roadmap Requested!
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                    Thank you, <strong className="text-black">{formData.contactName || 'Partner'}</strong>. A senior SEO director specialized in <strong className="text-[#001965]">{formData.growthService || 'Search Engine Optimization'}</strong> will audit your website and reach out during your preferred time window.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        companyName: '',
                        contactName: '',
                        phone: '',
                        workEmail: '',
                        growthService: 'Search Engine Optimization (SEO)',
                        timeWindow: '',
                      });
                    }}
                    className="px-5 py-2 text-xs font-bold text-[#001965] border border-[#001965] rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Field 1: COMPANY / WEBSITE NAME * */}
                  <div>
                    <label className="text-[11px] font-bold text-[#0e3a61] tracking-wider uppercase block mb-1">
                      COMPANY / WEBSITE NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Brands or apexbrands.com"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0c3c66] focus:ring-1 focus:ring-[#0c3c66] transition-colors"
                    />
                    {errors.companyName && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.companyName}</span>
                    )}
                  </div>

                  {/* Row 2: YOUR FULL NAME * & DIRECT PHONE * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-bold text-[#0e3a61] tracking-wider uppercase block mb-1">
                        YOUR FULL NAME *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0c3c66] focus:ring-1 focus:ring-[#0c3c66] transition-colors"
                      />
                      {errors.contactName && (
                        <span className="text-[11px] text-red-500 mt-0.5 block">{errors.contactName}</span>
                      )}
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#0e3a61] tracking-wider uppercase block mb-1">
                        DIRECT PHONE *
                      </label>
                      <div className="flex rounded-lg border border-slate-300 overflow-hidden focus-within:border-[#0c3c66] focus-within:ring-1 focus-within:ring-[#0c3c66] transition-colors bg-white">
                        <div className="px-3 py-2.5 sm:py-3 border-r border-slate-300 bg-white text-slate-400 flex items-center justify-center shrink-0">
                          <Globe className="w-4 h-4 text-slate-400" />
                        </div>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none bg-white"
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: WORK EMAIL * & PRIMARY SERVICE NEEDED * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-bold text-[#0e3a61] tracking-wider uppercase block mb-1">
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0c3c66] focus:ring-1 focus:ring-[#0c3c66] transition-colors"
                      />
                      {errors.workEmail && (
                        <span className="text-[11px] text-red-500 mt-0.5 block">{errors.workEmail}</span>
                      )}
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#0e3a61] tracking-wider uppercase block mb-1">
                        PRIMARY SERVICE NEEDED *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.growthService}
                          onChange={(e) => setFormData({ ...formData, growthService: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-700 appearance-none focus:outline-none focus:border-[#0c3c66] focus:ring-1 focus:ring-[#0c3c66] transition-colors cursor-pointer"
                        >
                          <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                          <option value="Technical SEO & Core Web Vitals">Technical SEO &amp; Core Web Vitals</option>
                          <option value="Enterprise Keyword Clustering">Enterprise Keyword Clustering</option>
                          <option value="High-Authority Digital PR & Backlinks">High-Authority Digital PR &amp; Backlinks</option>
                          <option value="Local SEO & Google Maps 3-Pack">Local SEO &amp; Google Maps 3-Pack</option>
                          <option value="E-Commerce Organic Scaling">E-Commerce Organic Scaling</option>
                          <option value="Full-Funnel Organic Strategy">Full-Funnel Organic Strategy</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Field 4: PREFERRED CALL TIME WINDOW */}
                  <div>
                    <label className="text-[11px] font-bold text-[#0e3a61] tracking-wider uppercase block mb-1">
                      PREFERRED CALL TIME WINDOW
                    </label>
                    <div className="relative">
                      <select
                        value={formData.timeWindow}
                        onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-700 appearance-none focus:outline-none focus:border-[#0c3c66] focus:ring-1 focus:ring-[#0c3c66] transition-colors cursor-pointer"
                      >
                        <option value="">Select convenient time window</option>
                        <option value="Morning (9:00 AM - 12:00 PM EST)">Morning (9:00 AM - 12:00 PM EST)</option>
                        <option value="Afternoon (12:00 PM - 3:00 PM EST)">Afternoon (12:00 PM - 3:00 PM EST)</option>
                        <option value="Late Afternoon (3:00 PM - 6:00 PM EST)">Late Afternoon (3:00 PM - 6:00 PM EST)</option>
                        <option value="Flexible / Anytime">Flexible / Anytime</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-[#0e3860] hover:bg-[#001965] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-slate-900/10 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Request Free SEO Roadmap</span>
                      <Send className="w-4 h-4 rotate-45 transform" />
                    </button>
                  </div>

                  {/* Bottom Disclaimer */}
                  <p className="text-[11px] sm:text-xs text-slate-400 text-center font-normal pt-1">
                    100% Confidential Growth Strategy Audit. Zero spam or shared data.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
