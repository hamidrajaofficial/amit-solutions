/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesCarouselSection } from './components/ServicesCarouselSection';
import { OnlineVisibilityShowcaseSection } from './components/OnlineVisibilityShowcaseSection';
import { AboutCompanySection } from './components/AboutCompanySection';
import { ChallengeSolutionSection } from './components/ChallengeSolutionSection';
import { ConsultationRoadmapSection } from './components/ConsultationRoadmapSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { WhyClientsSaySection } from './components/WhyClientsSaySection';
import { PreFooterCTASection } from './components/PreFooterCTASection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#009656] selection:text-white">
      {/* Top Header */}
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="w-full">
        {/* 1. Hero Section */}
        <section id="home">
          <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />
        </section>

        {/* 2. About Company Section */}
        <section id="about-us">
          <AboutCompanySection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </section>

        {/* 3. What We Do - Full-Service Digital Marketing Agency Carousel Section */}
        <section id="services">
          <ServicesCarouselSection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </section>

        {/* 4. Get Your Business Visible Online With Us - Featured Growth Showcase & Case Study */}
        <section id="solutions">
          <OnlineVisibilityShowcaseSection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </section>

        {/* 5. Creating a 360° Experience - Case Studies Showcase */}
        <section id="resources">
          <ChallengeSolutionSection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </section>

        {/* 6. Consultation & 5-Step Process Roadmap Section */}
        <section id="consultation">
          <ConsultationRoadmapSection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </section>

        {/* 7. Why Choose Us Section */}
        <section id="why-choose-us">
          <div id="local" className="contents">
            <div id="near-you" className="contents">
              <WhyChooseUsSection onOpenConsultation={() => setIsConsultationOpen(true)} />
            </div>
          </div>
        </section>

        {/* 8. How We Work - Our Web Design & Growth Process */}
        <section id="how-it-works">
          <HowWeWorkSection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </section>

        {/* 9. Why Our Clients Say: Testimonials & Video Stories & Google Reviews */}
        <section id="reviews">
          <div id="industries" className="contents">
            <WhyClientsSaySection onOpenConsultation={() => setIsConsultationOpen(true)} />
          </div>
        </section>

        {/* 10. Pre-Footer Call to Action Section */}
        <section id="contact">
          <PreFooterCTASection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </section>
      </main>

      {/* Main Agency Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Interactive Free Audit / Consultation / Demo Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        accentColor="#001965"
      />
    </div>
  );
}
