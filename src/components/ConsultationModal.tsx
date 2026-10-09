import React, { useState } from 'react';
import brandLogo from '../assets/images/AMIT Transparent logo.png';
import { X, CheckCircle, ArrowRight, ShieldCheck, Calendar } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  accentColor?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  accentColor = '#009656',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Organic SEO & Search Dominance');
  const [budget, setBudget] = useState('$5,000 - $15,000 / mo');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid business email address';
    }
    if (!company.trim()) newErrors.company = 'Please enter your company name or website';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setCompany('');
    setDetails('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl text-left overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-5">
            <div className="flex justify-center mb-1">
              <img 
                src={brandLogo} 
                alt="AMIT Logo" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <div 
              className="w-14 h-14 rounded-full text-white flex items-center justify-center mx-auto shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              <CheckCircle className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-2xl font-black text-[#001965] tracking-tight uppercase">
              Application Received!
            </h3>

            <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-black">{fullName}</strong>. An AMIT Solutions Growth Director has been assigned to audit <strong className="text-black">{company}</strong>.
            </p>

            <div className="bg-[#FDF6F0] border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                <Calendar className="w-4 h-4 text-neutral-700" />
                <span>Next Step: Free Organic Ranking & Audit Review</span>
              </div>
              <p className="text-xs text-neutral-600 leading-normal">
                Check your inbox at <span className="text-black font-mono font-semibold">{email}</span> within 2 hours for our detailed growth breakdown.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                style={{ backgroundColor: accentColor }}
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={brandLogo} 
                  alt="AMIT Logo" 
                  className="h-9 w-auto object-contain" 
                />
                <span className="inline-block border border-black text-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                  AMIT SOLUTIONS AUDIT
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#001965] tracking-tight uppercase">
                Claim Your Digital Marketing Audit
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                We analyze your organic search rankings, keyword gaps, and conversion opportunities with zero obligations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                  {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="alex@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Company Name & Website *
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    if (errors.company) setErrors({ ...errors, company: '' });
                  }}
                  placeholder="Acme Corp / https://acme.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
                {errors.company && <p className="text-red-500 text-[11px] mt-1">{errors.company}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="Organic SEO & Search Dominance">Organic SEO & Search Dominance</option>
                    <option value="Performance PPC & Paid Advertising">Performance PPC & Paid Advertising</option>
                    <option value="Lead Conversion Rate Optimization">Lead Conversion Rate Optimization</option>
                    <option value="IT & Cloud Solutions">IT & Cloud Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Monthly Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="< $5,000 / mo">&lt; $5,000 / mo</option>
                    <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                    <option value="$15,000 - $35,000 / mo">$15,000 - $35,000 / mo</option>
                    <option value="$35,000+ / mo">$35,000+ / mo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Specific Ranking or Conversion Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us what keywords, search rankings, or lead targets you want to conquer..."
                  className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded text-white font-extrabold text-xs uppercase tracking-widest transition-opacity shadow-md flex items-center justify-center gap-2 cursor-pointer hover:opacity-90"
                style={{ backgroundColor: accentColor }}
              >
                <span>GET FREE AUDIT PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
              <span>Strict NDA Protected · 100% Confidential</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
