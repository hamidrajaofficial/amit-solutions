import React from 'react';
import { LocalSeoHero } from './LocalSeoHero';
import { LocalChoiceServicesSection } from './LocalChoiceServicesSection';
import { GeoGridSearchSection } from './GeoGridSearchSection';
import { ChallengeSolutionSection } from '../ChallengeSolutionSection';
import { ServiceHowWeWorkSection } from '../services/ServiceHowWeWorkSection';
import { ConsultationRoadmapSection } from '../ConsultationRoadmapSection';
import { WhyClientsSaySection } from '../WhyClientsSaySection';
import { FaqSection } from '../common/FaqSection';
import { PreFooterCTASection } from '../PreFooterCTASection';
import { localFaqCategories } from '../../data/faqData';
import { MapPin, Search, Star, Share2, Award } from 'lucide-react';

interface LocalSeoPageProps {
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
}

export const LocalSeoPage: React.FC<LocalSeoPageProps> = ({
  onOpenConsultation,
  onNavigateHome,
}) => {
  const localSteps = [
    {
      name: 'Local Audit & Geo-Grid Mapping',
      icon: Search,
      description: 'We run high-density geo-grid scans across your operating radius to pinpoint exact ranking drop-offs and competitor 3-Pack advantages.',
    },
    {
      name: 'Google Business Profile Optimization',
      icon: MapPin,
      description: 'We audit categories, optimize secondary services, add geo-tagged photos, write keyword-rich FAQs, and establish Google Guaranteed eligibility.',
    },
    {
      name: 'Local Citations & NAP Consistency',
      icon: Share2,
      description: 'We clean up duplicate listings and build verified, authoritative NAP citations across 100+ tier-1 business directories and local chamber maps.',
    },
    {
      name: 'Review Velocity & Reputation Engine',
      icon: Star,
      description: 'We implement automated SMS and email review collection funnels that consistently generate authentic 5-star customer ratings on Google.',
    },
    {
      name: 'Google Maps 3-Pack Dominance',
      icon: Award,
      description: 'We build local schema markup and regional service area pages (SAPs) to guarantee lasting top-3 placement and high-converting inbound calls.',
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col">
      {/* 1. Hero Section for Local Page */}
      <LocalSeoHero 
        onOpenConsultation={onOpenConsultation}
        onExploreServices={onOpenConsultation}
      />

      {/* 2. The Right Choice for Local Digital Marketing (Matching Screenshot) */}
      <LocalChoiceServicesSection 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 3. GeoGrid Search - Precision Tracking for Local SEO Success */}
      <GeoGridSearchSection 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 4. Proven Case Studies - Creating a 360° Experience */}
      <ChallengeSolutionSection onOpenConsultation={onOpenConsultation} />

      {/* 3. Systematic 5-Step Local Ranking Process */}
      <ServiceHowWeWorkSection 
        titlePrefix="Here's Exactly "
        titleHighlight="What Happens Next"
        subtitle="That's why we take a different approach — we listen carefully, guide you step-by-step, and create a clear, personalized Google Maps 3-Pack ranking roadmap."
        steps={localSteps}
      />

      {/* 4. Consultation & Growth Roadmap */}
      <ConsultationRoadmapSection onOpenConsultation={onOpenConsultation} />

      {/* 5. What Our Clients Say (Video Stories & Reviews) */}
      <WhyClientsSaySection onOpenConsultation={onOpenConsultation} />

      {/* 6. Frequently Asked Questions Section */}
      <FaqSection 
        eyebrow="HELP & INFORMATION"
        titlePrefix="Frequently Asked "
        titleHighlight="Questions"
        description="Everything you need to know about our Google Maps 3-Pack ranking strategies, NAP citation cleanup, review generation, and local lead dominance."
        categories={localFaqCategories}
        id="faq"
      />

      {/* 7. Pre-Footer Call to Action Section */}
      <PreFooterCTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default LocalSeoPage;
