import React from 'react';
import { NearYouHeroSection } from './NearYouHeroSection';
import { GlobalDigitalPresenceSection } from './GlobalDigitalPresenceSection';
import { ConsultationRoadmapSection } from '../ConsultationRoadmapSection';
import { WhyClientsSaySection } from '../WhyClientsSaySection';
import { FaqSection } from '../common/FaqSection';
import { PreFooterCTASection } from '../PreFooterCTASection';
import { homeFaqCategories } from '../../data/faqData';

interface NearYouPageProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export const NearYouPage: React.FC<NearYouPageProps> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section matching Screenshot 1 with Book An Appointment Form */}
      <NearYouHeroSection onOpenConsultation={onOpenConsultation} />

      {/* 2. Global Digital Presence Location Section with 9 Country Flags & Hubs */}
      <GlobalDigitalPresenceSection onOpenConsultation={onOpenConsultation} />

      {/* 3. Ready to Take the Next Step in Your Digital Growth? Form Section */}
      <ConsultationRoadmapSection onOpenConsultation={onOpenConsultation} />

      {/* 4. What Our Clients Say (Video Testimonials & Reviews) */}
      <WhyClientsSaySection onOpenConsultation={onOpenConsultation} />

      {/* 5. Frequently Asked Questions */}
      <FaqSection 
        eyebrow="HELP & INFORMATION"
        titlePrefix="Frequently Asked "
        titleHighlight="Questions"
        description="Everything you need to know about partnering with AMIT Solutions, localized agency services, and our international growth infrastructure."
        categories={homeFaqCategories}
        id="nearyou-faq"
      />

      {/* 6. Scale Your Business with AMIT Solutions (Pre-Footer CTA) */}
      <PreFooterCTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
