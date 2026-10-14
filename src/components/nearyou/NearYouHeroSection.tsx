import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

interface NearYouHeroSectionProps {
  onOpenConsultation?: () => void;
}

export const NearYouHeroSection: React.FC<NearYouHeroSectionProps> = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    provider: 'Search Engine Optimization (SEO)',
    fullName: '',
    phone: '',
    email: '',
    communication: 'Email',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative pt-[30px] pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-[#F4F7FB]/70 via-white to-white overflow-hidden hero-section-top-spacing">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#001965]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#009656]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Subtitle & Action */}
          <div className="lg:col-span-7 text-left flex flex-col items-start pt-2">
            
            {/* Eyebrow Style in Title Case */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009656]/10 border border-[#009656]/25 text-xs sm:text-sm font-bold text-[#009656] tracking-wide mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
              <span className="uppercase tracking-wider">QUALITY FIRST</span>
            </div>

            {/* Main H1 Headline in Brand Dual Colors (Navy #001965 & Emerald #009656) */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold tracking-tight leading-[1.15] mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#001965]">Trustworthy Digital Marketing </span> <br className="hidden sm:inline" />
              <span className="text-[#009656]">Services Across America</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-[1.05rem] sm:text-[1.125rem] text-neutral-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Maximize Your Revenue while Minimizing Acquisition Woes, No Matter Where You Are with AMIT Solutions Preferred Digital Marketing Services.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              {[
                'Local & National Search Dominance',
                'Dedicated Senior Strategy Team',
                'Targeted Google & Meta Media Buying',
                'Transparent Real-Time ROI Analytics'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-neutral-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#009656] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button: Talk To An Expert Now */}
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#001965] hover:bg-[#009656] text-white font-['Outfit',sans-serif] font-bold text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 stroke-[2.2] group-hover:rotate-12 transition-transform" />
                <span>Talk To An Expert Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Book An Appointment Form Card (Matching Screenshot) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
              
              {/* Form Title */}
              <div className="text-center mb-6">
                <h3 
                  className="text-2xl sm:text-[26px] font-bold text-[#001965] tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Book An Appointment
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Schedule your tailored 1-on-1 growth strategy session
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#009656]/10 text-[#009656] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h4 
                    className="text-xl font-bold text-[#001965]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Appointment Requested!
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-xs mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-neutral-800">{formData.fullName || 'there'}</span>. Our senior growth advisor will confirm your {formData.preferredTime} time slot shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 text-xs font-bold text-[#009656] hover:underline cursor-pointer"
                  >
                    Book another appointment &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Row 1: Choose Provider + Full Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative">
                      <select
                        aria-label="Choose Provider"
                        value={formData.provider}
                        onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-neutral-100/80 border border-transparent hover:border-slate-300 focus:border-[#009656] focus:bg-white text-xs sm:text-sm font-medium text-neutral-700 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="Search Engine Optimization (SEO)">Choose Provider</option>
                        <option value="Full-Service SEO">SEO & Search Dominance</option>
                        <option value="Local Maps SEO">Local Google 3-Pack</option>
                        <option value="Paid Media / Google Ads">Targeted Google & Meta Ads</option>
                        <option value="Web Design & CRO">Web Architecture & CRO</option>
                        <option value="Medical & Healthcare Practice">Medical Practice Marketing</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-neutral-100/80 border border-transparent hover:border-slate-300 focus:border-[#009656] focus:bg-white text-xs sm:text-sm font-medium text-neutral-800 placeholder-neutral-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number + Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-neutral-100/80 border border-transparent hover:border-slate-300 focus:border-[#009656] focus:bg-white text-xs sm:text-sm font-medium text-neutral-800 placeholder-neutral-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-neutral-100/80 border border-transparent hover:border-slate-300 focus:border-[#009656] focus:bg-white text-xs sm:text-sm font-medium text-neutral-800 placeholder-neutral-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Communication Preferences + Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative">
                      <select
                        aria-label="Communication Preferences"
                        value={formData.communication}
                        onChange={(e) => setFormData({ ...formData, communication: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-neutral-100/80 border border-transparent hover:border-slate-300 focus:border-[#009656] focus:bg-white text-xs sm:text-sm font-medium text-neutral-700 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="Communication Preferences">Communication Preferences</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Email">Email Communication</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Google Meet / Zoom">Google Meet / Zoom Video</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <div className="relative">
                      <select
                        aria-label="Preferred Time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-neutral-100/80 border border-transparent hover:border-slate-300 focus:border-[#009656] focus:bg-white text-xs sm:text-sm font-medium text-neutral-700 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="Preferred Time">Preferred Time</option>
                        <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                        <option value="Flexible / Anytime">Flexible / Anytime</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-[#001965] hover:bg-[#009656] text-white font-['Outfit',sans-serif] font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
                    >
                      Get Started
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-400 text-center pt-1">
                    🔒 We respect your privacy. No spam guaranteed.
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
