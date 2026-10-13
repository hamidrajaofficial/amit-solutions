import React from 'react';
import { MediaAdvertisingHero } from './MediaAdvertisingHero';
import { CustomizedSolutionsTabsSection } from './CustomizedSolutionsTabsSection';
import { IntegratedDigitalStrategySection } from './IntegratedDigitalStrategySection';
import { WhyChooseMediaAdvertisingSection } from './WhyChooseMediaAdvertisingSection';
import { WorkWithAmitCtaSection } from './WorkWithAmitCtaSection';
import { ServiceHowWeWorkSection } from '../services/ServiceHowWeWorkSection';
import { ConsultationRoadmapSection } from '../ConsultationRoadmapSection';
import { WhyClientsSaySection } from '../WhyClientsSaySection';
import { FaqSection } from '../common/FaqSection';
import { PreFooterCTASection } from '../PreFooterCTASection';
import { ChallengeSolutionSection } from '../ChallengeSolutionSection';
import { leadGenFaqCategories } from '../../data/faqData';
import { Target, Users, Zap, Layers, BarChart3 } from 'lucide-react';

interface FullFunnelLeadGenPageProps {
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
}

export const FullFunnelLeadGenPage: React.FC<FullFunnelLeadGenPageProps> = ({
  onOpenConsultation,
  onNavigateHome,
}) => {
  const leadGenSteps = [
    {
      name: 'Audience & Intent Mapping',
      icon: Users,
      description: 'We identify in-market buyers, isolate high-intent search queries, and segment ideal customer profiles (ICPs) across programmatic and social networks.',
    },
    {
      name: 'Omnichannel Media Architecture',
      icon: Layers,
      description: 'We configure precision ad campaigns across Google, Meta, LinkedIn, and programmatic DSPs with strict budget protection and algorithmic bidding.',
    },
    {
      name: 'Conversion-Engineered Landing Pages',
      icon: Zap,
      description: 'We build fast, friction-free landing funnels with high-converting value propositions, interactive calculators, and automated lead validation.',
    },
    {
      name: 'Automated Lead Nurturing',
      icon: Target,
      description: 'We connect multi-touch SMS, email sequences, and CRM integrations that turn raw clicks into qualified sales appointments and booked demos.',
    },
    {
      name: 'Closed-Loop Revenue Scaling',
      icon: BarChart3,
      description: 'We track end-to-end attribution from initial ad impression to signed contract, eliminating waste and doubling down on top-performing channels.',
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col">
      {/* 1. Hero Section (MediaAdvertisingHero as designed) */}
      <MediaAdvertisingHero 
        onOpenConsultation={onOpenConsultation}
        onExploreServices={onOpenConsultation}
      />

      {/* 2. What We Do - Customized Solutions & 8 Services Tabs */}
      <CustomizedSolutionsTabsSection onOpenConsultation={onOpenConsultation} />

      {/* 3. How We Help You Grow - Integrated Digital Strategy Section */}
      <IntegratedDigitalStrategySection 
        onOpenConsultation={onOpenConsultation}
        onExploreServices={onOpenConsultation}
      />

      {/* 3. Why Choose Our Media Advertising Section (Before Creating a 360° Experience) */}
      <WhyChooseMediaAdvertisingSection onOpenConsultation={onOpenConsultation} />

      {/* 4. Proven Case Studies - Creating a 360° Experience */}
      <ChallengeSolutionSection onOpenConsultation={onOpenConsultation} />

      {/* 4. Work With AMIT Solutions CTA Section (Matching Screenshot) */}
      <WorkWithAmitCtaSection 
        onOpenConsultation={onOpenConsultation}
        onExploreServices={onOpenConsultation}
      />

      {/* 5. Systematic 5-Step Process Roadmap */}
      <ServiceHowWeWorkSection 
        titlePrefix="Here's Exactly "
        titleHighlight="What Happens Next"
        subtitle="That's why we take a different approach — we listen carefully, guide you step-by-step, and create a clear, personalized full-funnel customer acquisition roadmap."
        steps={leadGenSteps}
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
        description="Everything you need to know about our programmatic media buying, lead validation, transparent pricing, and predictable pipeline growth."
        categories={leadGenFaqCategories}
        id="faq"
      />

      {/* 7. Pre-Footer Call to Action Section */}
      <PreFooterCTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default FullFunnelLeadGenPage;
