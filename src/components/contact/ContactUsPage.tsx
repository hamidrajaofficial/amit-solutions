import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  ChevronDown,
  QrCode,
  Maximize2
} from 'lucide-react';
import { WhyClientsSaySection } from '../WhyClientsSaySection';
import { FaqSection } from '../common/FaqSection';
import { PreFooterCTASection } from '../PreFooterCTASection';
import { homeFaqCategories } from '../../data/faqData';

interface ContactUsPageProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({
  onOpenConsultation,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'Select a service',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      
      {/* 1. Main Hero & Contact Section */}
      <section className="relative pt-[30px] pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-[#F0F6FC]/80 via-[#F7FAFD]/50 to-white overflow-hidden hero-section-top-spacing border-b border-slate-200/60">
        
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#001965]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#009656]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Page Header (Matching Screenshot) */}
          <div className="w-full max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
            
            {/* Eyebrow Style in Title Case */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-xs sm:text-sm font-bold text-[#009656] tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
                <span>LET'S CONNECT</span>
              </div>
            </div>

            {/* Main Headline in Dual Colors (Matching Screenshot) */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.18] text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Let's Talk About </span>
              <span className="text-[#009656]">Your Digital Growth</span>
            </h1>

            {/* Decorative Brand Divider */}
            <div className="flex items-center justify-center gap-1.5 py-1">
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#009656]" />
              <div className="w-8 h-0.5 bg-[#009656]/50 rounded-full" />
            </div>

            {/* Subtitle from Screenshot */}
            <p className="text-[1.05rem] text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto text-center">
              Have a project in mind? Our experts are ready to help you outrank competitors and scale your revenue.
            </p>

          </div>

          {/* 2-Column Content Grid: Direct Communication & Form Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Direct Communication & Map Card */}
            <div className="lg:col-span-6 space-y-8 text-left">
              
              <div>
                <h2 
                  className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-2.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span className="text-[#001965]">Direct </span>
                  <span className="text-[#009656]">Communication</span>
                </h2>
                <p className="text-neutral-600 text-[1rem] leading-relaxed font-normal max-w-lg">
                  Choose the most convenient way to reach us. We typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Channels List */}
              <div className="space-y-5">
                
                {/* 1. Email Us */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#009656]/10 text-[#009656] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#009656] group-hover:text-white transition-all shadow-2xs">
                    <Mail className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 
                      className="text-base font-bold text-[#001965] tracking-tight"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Email Us
                    </h3>
                    <a 
                      href="mailto:info@searchenginesphere.com"
                      className="text-sm sm:text-[15px] text-neutral-600 hover:text-[#009656] hover:underline transition-colors block mt-0.5"
                    >
                      info@searchenginesphere.com
                    </a>
                    <a 
                      href="mailto:hamidraja.info@gmail.com"
                      className="text-xs text-neutral-500 hover:text-[#009656] transition-colors block mt-0.5"
                    >
                      hamidraja.info@gmail.com
                    </a>
                  </div>
                </div>

                {/* 2. Call Us */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#009656]/10 text-[#009656] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#009656] group-hover:text-white transition-all shadow-2xs">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 
                      className="text-base font-bold text-[#001965] tracking-tight"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Call Us
                    </h3>
                    <div className="space-y-0.5 mt-0.5">
                      <a 
                        href="tel:+14126843034"
                        className="text-sm sm:text-[15px] text-neutral-700 font-semibold hover:text-[#009656] transition-colors block"
                      >
                        +1 (412) 684 3034 <span className="text-xs text-neutral-400 font-normal">(USA / Global)</span>
                      </a>
                      <a 
                        href="tel:+923234823324"
                        className="text-sm sm:text-[15px] text-neutral-700 font-semibold hover:text-[#009656] transition-colors block"
                      >
                        +92 323 4823324 <span className="text-xs text-neutral-400 font-normal">(Direct Line)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Global Presence */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#009656]/10 text-[#009656] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#009656] group-hover:text-white transition-all shadow-2xs">
                    <MapPin className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 
                      className="text-base font-bold text-[#001965] tracking-tight"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Global Presence
                    </h3>
                    <p className="text-sm sm:text-[15px] text-neutral-600 mt-0.5">
                      USA, UK, Canada &amp; Pakistan
                    </p>
                  </div>
                </div>

              </div>

              {/* Map Card (Styled Exactly like Screenshot) */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 sm:p-5 relative overflow-hidden">
                
                {/* Map Header Info with Open in Maps action */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-100 mb-3">
                  <div>
                    <h4 
                      className="text-sm font-bold text-[#001965] leading-tight"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      100 N Brand Blvd Ste 522
                    </h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      100 N Brand Blvd Ste 522, Glendale, CA 91203 &middot; USA
                    </p>
                  </div>

                  <a 
                    href="https://maps.google.com/?q=100+N+Brand+Blvd+Ste+522+Glendale+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#001965] hover:bg-[#009656] text-white text-xs font-semibold transition-all shadow-2xs"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Simulated Interactive Map Display */}
                <div className="w-full h-52 sm:h-56 bg-slate-100 rounded-xl relative overflow-hidden border border-slate-200 flex items-center justify-center">
                  
                  {/* Subtle Grid Map Canvas Background */}
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #cbd5e1 1px, transparent 1px),
                        linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
                      `,
                      backgroundSize: '36px 36px'
                    }}
                  />

                  {/* Road Paths Simulation */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                    <line x1="0" y1="60" x2="100%" y2="60" stroke="#94a3b8" strokeWidth="4" />
                    <line x1="0" y1="130" x2="100%" y2="130" stroke="#cbd5e1" strokeWidth="3" />
                    <line x1="0" y1="180" x2="100%" y2="180" stroke="#94a3b8" strokeWidth="3" />
                    <line x1="120" y1="0" x2="120" y2="100%" stroke="#94a3b8" strokeWidth="4" />
                    <line x1="280" y1="0" x2="280" y2="100%" stroke="#cbd5e1" strokeWidth="3" />
                    <line x1="420" y1="0" x2="420" y2="100%" stroke="#94a3b8" strokeWidth="4" />
                    <text x="20" y="52" fill="#64748b" fontSize="10" fontWeight="bold">E Wilson Ave</text>
                    <text x="20" y="122" fill="#64748b" fontSize="10" fontWeight="bold">E Broadway</text>
                    <text x="20" y="172" fill="#64748b" fontSize="10" fontWeight="bold">E Harvard St</text>
                    <text x="126" y="25" fill="#64748b" fontSize="10" fontWeight="bold">N Brand Blvd</text>
                  </svg>

                  {/* Location Pin with Tooltip */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                    <div className="bg-[#001965] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                      <MapPin className="w-3.5 h-3.5 text-[#009656]" />
                      <span>Suite 522 &middot; AMIT Solutions</span>
                    </div>
                    <div className="w-3 h-3 bg-[#001965] rotate-45 -mt-1.5" />
                    <div className="w-4 h-4 rounded-full bg-[#009656] ring-4 ring-[#009656]/30 animate-pulse mt-0.5" />
                  </div>

                  {/* Bottom Map Corner Controls */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2 py-1 rounded shadow-2xs text-[10px] text-slate-600 font-mono">
                    <QrCode className="w-3.5 h-3.5 text-[#001965]" />
                    <span>Scan for directions</span>
                  </div>

                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/90 backdrop-blur-xs p-1 rounded shadow-2xs text-slate-600">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                </div>

              </div>

            </div>

            {/* Right Column: Request A Consultation Card (Matching Screenshot) */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 overflow-hidden">
                
                {/* Top Banner (Navy with Emerald Text / Contrast matching screenshot) */}
                <div className="bg-[#001965] py-4.5 px-6 text-center">
                  <h3 
                    className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Request a consultation
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Fast response &middot; Customized digital roadmap &middot; Free audit
                  </p>
                </div>

                {/* Card Content & Form */}
                <div className="p-6 sm:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                      <div className="w-16 h-16 rounded-full bg-[#009656]/15 text-[#009656] mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                      </div>
                      <h4 
                        className="text-2xl font-bold text-[#001965]"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        Thank You, {formData.firstName || 'Partner'}!
                      </h4>
                      <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                        Your request has been received. Our senior strategy consultant will review your business requirements and contact you within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 px-6 py-2.5 rounded-lg bg-[#001965] hover:bg-[#009656] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Row 1: First Name + Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-neutral-100/70 border border-slate-200/60 hover:border-slate-300 focus:border-[#009656] focus:bg-white text-sm font-medium text-neutral-800 placeholder-neutral-500 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-neutral-100/70 border border-slate-200/60 hover:border-slate-300 focus:border-[#009656] focus:bg-white text-sm font-medium text-neutral-800 placeholder-neutral-500 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone Number */}
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-neutral-100/70 border border-slate-200/60 hover:border-slate-300 focus:border-[#009656] focus:bg-white text-sm font-medium text-neutral-800 placeholder-neutral-500 outline-none transition-all"
                        />
                      </div>

                      {/* Row 3: Email Address */}
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-neutral-100/70 border border-slate-200/60 hover:border-slate-300 focus:border-[#009656] focus:bg-white text-sm font-medium text-neutral-800 placeholder-neutral-500 outline-none transition-all"
                        />
                      </div>

                      {/* Row 4: Select a service Dropdown */}
                      <div className="relative">
                        <select
                          aria-label="Select a service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-neutral-100/70 border border-slate-200/60 hover:border-slate-300 focus:border-[#009656] focus:bg-white text-sm font-medium text-neutral-700 outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="Select a service">Select a service</option>
                          <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                          <option value="Local SEO & Google Maps 3-Pack">Local SEO & Google Maps 3-Pack</option>
                          <option value="Paid Media & Google Ads (PPC)">Paid Media & Google Ads (PPC)</option>
                          <option value="Full-Funnel Lead Generation">Full-Funnel Lead Generation</option>
                          <option value="Custom Web Design & Conversion CRO">Custom Web Design & Conversion CRO</option>
                          <option value="Comprehensive Digital Marketing Retainer">Comprehensive Digital Retainer</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Row 5: Your Business description Textarea */}
                      <div>
                        <textarea
                          rows={3}
                          placeholder="Your Business description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-neutral-100/70 border border-slate-200/60 hover:border-slate-300 focus:border-[#009656] focus:bg-white text-sm font-medium text-neutral-800 placeholder-neutral-500 outline-none transition-all resize-none"
                        />
                      </div>

                      {/* Submit Button (Matching Screenshot: » Let's Get Digital Now «) */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#001965] to-[#009656] hover:from-[#009656] hover:to-[#001965] text-white font-['Outfit',sans-serif] font-bold text-base sm:text-[17px] tracking-wide transition-all duration-300 shadow-lg shadow-[#001965]/20 hover:shadow-xl hover:shadow-[#009656]/30 cursor-pointer active:scale-[0.99]"
                        >
                          &raquo; Let's Get Digital Now &laquo;
                        </button>
                      </div>

                      {/* Social Media Connect Row (Matching Screenshot) */}
                      <div className="pt-6 border-t border-slate-100 text-center">
                        <p className="text-xs text-neutral-500 mb-3 font-medium">
                          Connect with us through your favourite social media
                        </p>
                        
                        <div className="flex items-center justify-center gap-3">
                          {/* Facebook */}
                          <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 hover:text-[#009656] hover:border-[#009656] hover:bg-[#009656]/5 transition-all flex items-center justify-center text-xs font-bold"
                          >
                            f
                          </a>

                          {/* Twitter / X */}
                          <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 hover:text-[#009656] hover:border-[#009656] hover:bg-[#009656]/5 transition-all flex items-center justify-center text-xs font-bold"
                          >
                            X
                          </a>

                          {/* Instagram */}
                          <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 hover:text-[#009656] hover:border-[#009656] hover:bg-[#009656]/5 transition-all flex items-center justify-center text-xs font-bold"
                          >
                            in
                          </a>

                          {/* LinkedIn */}
                          <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 hover:text-[#009656] hover:border-[#009656] hover:bg-[#009656]/5 transition-all flex items-center justify-center text-xs font-bold"
                          >
                            ln
                          </a>
                        </div>
                      </div>

                    </form>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. What Our Clients Say (Video Testimonials & Reviews) */}
      <WhyClientsSaySection onOpenConsultation={onOpenConsultation} />

      {/* 3. Frequently Asked Questions */}
      <FaqSection 
        eyebrow="HELP & INFORMATION"
        titlePrefix="Frequently Asked "
        titleHighlight="Questions"
        description="Everything you need to know about contacting AMIT Solutions, onboarding processes, timelines, and response expectations."
        categories={homeFaqCategories}
        id="contact-faq"
      />

      {/* 4. Pre-Footer Call to Action */}
      <PreFooterCTASection onOpenConsultation={onOpenConsultation} />

    </div>
  );
};
