import React, { useState } from 'react';
import brandLogo from '../assets/images/AMIT Transparent logo.png';
import { 
  Laptop, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  Headphones, 
  ArrowRight 
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onNavigateToSeo?: () => void;
  onNavigateToFullFunnelLeadGen?: () => void;
  onNavigateToLocal?: () => void;
  onNavigateToNearYou?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateHome?: () => void;
  currentView?: 'home' | 'seo' | 'lead-gen' | 'local' | 'about' | 'near-you' | 'contact' | 'blogs';
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenConsultation,
  onNavigateToSeo,
  onNavigateToFullFunnelLeadGen,
  onNavigateToLocal,
  onNavigateToNearYou,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToBlogs,
  onNavigateHome,
  currentView = 'home'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { 
      name: 'Services', 
      href: '#services', 
      hasDropdown: true,
      subItems: [
        'Search Engine Optimization (SEO)',
        'Paid Media & PPC Advertising',
        'Conversion Rate Optimization (CRO)',
        'Content Strategy & Social Media',
        'Website Architecture & Development',
      ]
    },
    { 
      name: 'Solutions', 
      href: '#solutions', 
      hasDropdown: true,
      subItems: [
        'Full-Funnel Lead Generation',
        'E-Commerce Revenue Growth',
        'B2B SaaS Growth Systems',
        'Enterprise Local Visibility',
      ]
    },
    { 
      name: 'Local', 
      href: '#local', 
      hasDropdown: false,
      subItems: null
    },
    { 
      name: 'Near You', 
      href: '#near-you', 
      hasDropdown: false,
      subItems: null
    },
    { 
      name: 'Industries', 
      href: '#industries', 
      hasDropdown: true,
      subItems: [
        'Healthcare & Medical Practices',
        'Legal & Professional Services',
        'Technology & Cloud SaaS',
        'Finance & Business Consulting',
      ]
    },
    { 
      name: 'About Us', 
      href: '#about-us', 
      hasDropdown: false,
      subItems: null
    },
    { 
      name: 'Blogs', 
      href: '#blogs', 
      hasDropdown: false,
      subItems: null
    },
  ];

  return (
    <header className="w-full bg-white z-40 sticky top-0 shadow-sm border-b border-slate-100">
      
      {/* 1. Top Utility Bar - Brand Navy #001965 */}
      <div className="w-full bg-[#001965] text-white text-xs py-2 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Items: Marketing Tech, Phone, Mail, Location */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-medium text-white">
            
            {/* Marketing Tech */}
            <a 
              href="#services" 
              className="flex items-center gap-2 hover:text-[#009656] transition-colors"
            >
              <Laptop className="w-3.5 h-3.5 text-[#009656]" />
              <span>Marketing Tech</span>
            </a>

            {/* Phone */}
            <a 
              href="tel:+14126843034" 
              className="flex items-center gap-2 hover:text-[#009656] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#009656]" />
              <span>+1 (412) 684 3034</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@amitsolutions.com" 
              className="flex items-center gap-2 hover:text-[#009656] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#009656]" />
              <span>info@amitsolutions.com</span>
            </a>

            {/* Location */}
            <div className="hidden md:flex items-center gap-2 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#009656]" />
              <span>100 N Brand Blvd Suite 522 Glendale, CA 91203</span>
            </div>

          </div>

          {/* Quick Support Badge */}
          <div className="hidden xl:flex items-center gap-2 text-[11px] text-white/90">
            <span className="w-2 h-2 rounded-full bg-[#009656] animate-pulse" />
            <span>24/7 Support Desk</span>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar with height accommodating enlarged logo */}
      <div className="w-full bg-white h-[80px] px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
          
          {/* Brand Logo - Enlarged Size */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateHome) {
                  onNavigateHome();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center group py-1 cursor-pointer"
            >
              <img 
                src={brandLogo} 
                alt="AMIT Logo" 
                className="h-[68px] sm:h-[72px] w-auto max-h-[74px] object-contain transition-transform duration-200 group-hover:scale-105" 
              />
            </a>
          </div>

          {/* Navigation Links with Brand Green (#009656) on Hover */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[15px] font-semibold text-neutral-800 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.name === 'Local' && onNavigateToLocal) {
                      e.preventDefault();
                      onNavigateToLocal();
                      return;
                    }
                    if (link.name === 'Near You' && onNavigateToNearYou) {
                      e.preventDefault();
                      onNavigateToNearYou();
                      return;
                    }
                    if (link.name === 'About Us' && onNavigateToAbout) {
                      e.preventDefault();
                      onNavigateToAbout();
                      return;
                    }
                    if (link.name === 'Blogs' && onNavigateToBlogs) {
                      e.preventDefault();
                      onNavigateToBlogs();
                      return;
                    }
                    if (currentView !== 'home' && onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                      setTimeout(() => {
                        const target = document.querySelector(link.href);
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      const target = document.querySelector(link.href);
                      if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`flex items-center gap-1 transition-colors hover:text-[#009656] py-2 cursor-pointer font-medium ${
                    (link.name === 'Near You' && currentView === 'near-you') ||
                    (link.name === 'Local' && currentView === 'local') ||
                    (link.name === 'About Us' && currentView === 'about') ||
                    (link.name === 'Blogs' && currentView === 'blogs')
                      ? 'text-[#009656] font-bold'
                      : 'text-neutral-800'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#009656] transition-transform group-hover:rotate-180" />
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.name && link.subItems && (
                  <div className="absolute top-[75px] left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {link.subItems.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => {
                          setActiveDropdown(null);
                          if (sub === 'Search Engine Optimization (SEO)' && onNavigateToSeo) {
                            onNavigateToSeo();
                          } else if (sub === 'Full-Funnel Lead Generation' && onNavigateToFullFunnelLeadGen) {
                            onNavigateToFullFunnelLeadGen();
                          } else if (sub === 'Enterprise Local Visibility' && onNavigateToLocal) {
                            onNavigateToLocal();
                          } else if (currentView !== 'home' && onNavigateHome) {
                            onNavigateHome();
                            setTimeout(() => {
                              const target = document.querySelector(link.href);
                              if (target) target.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          } else {
                            const target = document.querySelector(link.href);
                            if (target) {
                              target.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              onOpenConsultation();
                            }
                          }
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-[#F4F7FB] hover:text-[#009656] transition-colors block cursor-pointer"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTA Button: Talk to an Expert -> Links to Contact Us */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => {
                if (onNavigateToContact) {
                  onNavigateToContact();
                } else {
                  onOpenConsultation();
                }
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#009656] hover:bg-[#007f49] transition-all shadow-md shadow-[#009656]/20 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-white" />
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => {
                if (onNavigateToContact) {
                  onNavigateToContact();
                } else {
                  onOpenConsultation();
                }
              }}
              className="sm:hidden px-3 py-1.5 rounded text-xs font-bold text-white bg-[#009656]"
            >
              Talk to Expert
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:text-[#009656]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-xl">
          <div className="flex items-center pb-3 border-b border-slate-100">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onNavigateHome) {
                  onNavigateHome();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="cursor-pointer"
            >
              <img 
                src={brandLogo} 
                alt="AMIT Logo" 
                className="h-[62px] w-auto max-h-[64px] object-contain"
              />
            </a>
          </div>
          <div className="space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                <a
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.name === 'Local' && onNavigateToLocal) {
                      e.preventDefault();
                      onNavigateToLocal();
                      return;
                    }
                    if (link.name === 'Near You' && onNavigateToNearYou) {
                      e.preventDefault();
                      onNavigateToNearYou();
                      return;
                    }
                    if (link.name === 'About Us' && onNavigateToAbout) {
                      e.preventDefault();
                      onNavigateToAbout();
                      return;
                    }
                    if (link.name === 'Blogs' && onNavigateToBlogs) {
                      e.preventDefault();
                      onNavigateToBlogs();
                      return;
                    }
                    if (currentView !== 'home' && onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                      setTimeout(() => {
                        const target = document.querySelector(link.href);
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      const target = document.querySelector(link.href);
                      if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="block py-1.5 text-sm font-bold text-neutral-800 hover:text-[#009656] transition-colors"
                >
                  {link.name}
                </a>
                {link.name === 'Services' && (
                  <div className="pl-3 py-1 space-y-1">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onNavigateToSeo) onNavigateToSeo();
                      }}
                      className="block text-xs font-semibold text-[#009656] hover:underline py-1 text-left"
                    >
                      &bull; Search Engine Optimization (SEO) &rarr;
                    </button>
                  </div>
                )}
                {link.name === 'Solutions' && (
                  <div className="pl-3 py-1 space-y-1">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onNavigateToFullFunnelLeadGen) onNavigateToFullFunnelLeadGen();
                      }}
                      className="block text-xs font-semibold text-[#001965] hover:text-[#009656] hover:underline py-1 text-left"
                    >
                      &bull; Full-Funnel Lead Generation &rarr;
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onNavigateToLocal) onNavigateToLocal();
                      }}
                      className="block text-xs font-semibold text-[#009656] hover:underline py-1 text-left"
                    >
                      &bull; Enterprise Local Visibility &rarr;
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToContact) {
                  onNavigateToContact();
                } else {
                  onOpenConsultation();
                }
              }}
              className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#009656] hover:bg-[#007f49] flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Headphones className="w-4 h-4" />
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
