import React from 'react';
import { AboutHeroSection } from './AboutHeroSection';
import { AboutWhatWeDoSection } from './AboutWhatWeDoSection';
import { AboutCompanySection } from '../AboutCompanySection';
import { WhyChooseUsSection } from '../WhyChooseUsSection';
import { WhyClientsSaySection } from '../WhyClientsSaySection';
import { FaqSection } from '../common/FaqSection';
import { PreFooterCTASection } from '../PreFooterCTASection';
import { homeFaqCategories } from '../../data/faqData';

interface AboutUsPageProps {
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onOpenConsultation,
  onNavigateHome,
}) => {
  return (
    <div className="w-full bg-white flex flex-col">
      {/* 1. Hero Section for About Us Page (Matching Screenshot) */}
      <AboutHeroSection 
        onOpenConsultation={onOpenConsultation}
        onExploreServices={onOpenConsultation}
      />

      {/* 2. Trusted Digital Marketing Company in New York - Company Story, Core Pillars & Team */}
      <AboutCompanySection onOpenConsultation={onOpenConsultation} />

      {/* 3. We Help Your Business To Reach New Heights - What We Do Section */}
      <AboutWhatWeDoSection onOpenConsultation={onOpenConsultation} />

      {/* 3. Why Clients Choose Search Engine Sphere / AMIT Solutions */}
      <WhyChooseUsSection onOpenConsultation={onOpenConsultation} />

      {/* 4. Client Testimonials & Video Stories */}
      <WhyClientsSaySection onOpenConsultation={onOpenConsultation} />

      {/* 6. Frequently Asked Questions */}
      <FaqSection 
        eyebrow="HELP & INFORMATION"
        titlePrefix="Frequently Asked "
        titleHighlight="Questions"
        description="Everything you need to know about partnering with Search Engine Sphere & AMIT Solutions, our transparent process, and growth performance."
        categories={homeFaqCategories}
        id="about-faq"
      />

      {/* 7. Pre-Footer Call to Action */}
      <PreFooterCTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default AboutUsPage;
