import React from 'react';
import brandLogo from '../assets/images/AMIT Transparent logo.png';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigateToSeo?: () => void;
  onNavigateToFullFunnelLeadGen?: () => void;
  onNavigateToLocal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenConsultation,
  onNavigateToSeo,
  onNavigateToFullFunnelLeadGen,
  onNavigateToLocal,
}) => {
  return (
    <footer className="w-full bg-[#001040] text-slate-300 border-t border-slate-800">
      
      {/* Main Footer Navigation & Details */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Brand Info & Mission (Cols 1 & 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/10 shadow-sm flex items-center justify-center">
                <img 
                  src={brandLogo} 
                  alt="AMIT Logo" 
                  className="h-[55px] w-auto max-h-[55px] object-contain" 
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-sm">
              We engineer revenue-driven digital marketing architectures, hyper-targeted acquisition campaigns, and high-converting web applications for modern businesses looking to dominate their markets.
            </p>

            <div className="space-y-3 pt-2">
              <a 
                href="tel:+14126843034"
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 hover:text-[#009656] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#009656]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+1 (412) 684 3034</span>
              </a>

              <a 
                href="mailto:info@amitsolutions.com"
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 hover:text-[#009656] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#009656]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>info@amitsolutions.com</span>
              </a>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300/80">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#009656] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>100 N Brand Blvd Suite 522 Glendale, CA 91203</span>
              </div>
            </div>
          </div>

          {/* Quick Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300/80">
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateToSeo) {
                      onNavigateToSeo();
                    } else {
                      onOpenConsultation();
                    }
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Search Engine Optimization
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer text-left">
                  Paid Search &amp; PPC Ads
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer text-left">
                  Social Media Advertising
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer text-left">
                  Conversion Rate Optimization
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer text-left">
                  Custom Web Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Strategic Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300/80">
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateToFullFunnelLeadGen) {
                      onNavigateToFullFunnelLeadGen();
                    } else {
                      onOpenConsultation();
                    }
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Full-Funnel Lead Generation
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer text-left">
                  E-Commerce Revenue Scale
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateToLocal) {
                      onNavigateToLocal();
                    } else {
                      onOpenConsultation();
                    }
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Local SEO &amp; Maps Domination
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer text-left">
                  Brand Positioning Strategy
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer text-left">
                  Marketing Data &amp; Attribution
                </button>
              </li>
            </ul>
          </div>

          {/* Growth Consultation Box */}
          <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#009656]/20 text-[#009656] text-[11px] font-bold">
                <CheckCircle2 className="w-3 h-3" />
                <span>Complimentary Audit</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                Ready for More Revenue?
              </h4>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                Receive our comprehensive digital audit report covering your competitors, SEO, and ad funnel bottlenecks.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#009656] hover:bg-[#00ab62] text-white text-xs font-bold transition-all shadow-md cursor-pointer mt-3"
            >
              <span>Get Free Analysis</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Copyright Sub-Footer */}
      <div className="border-t border-slate-800/80 py-6 px-4 sm:px-8 lg:px-12 text-xs text-slate-400">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} AMIT Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer">
              Security
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
