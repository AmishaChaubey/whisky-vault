// AboutPage.jsx - Page that uses the reusable AboutSection component

import React from 'react';
import AboutSection from '../common-component/About';
import { aboutData } from './data';
import CTASection from '../common-component/Cta';
import { ctaData } from './data';
import TestimonialCarousel from '../common-component/Customer';
import { testimonials } from './data';
import InteractiveMarquee from '../common-component/Product';
import { topRowCards, bottomRowCards } from './data';
import BenefitsShowcase from '../common-component/YouGet';
import { benefits } from './data';

export default function AboutPage() {
  return (
    <div>
      <AboutSection data={aboutData} />
           
      <BenefitsShowcase 
        benefits={benefits}
      />
          <InteractiveMarquee 
        topRowCards={topRowCards}
        bottomRowCards={bottomRowCards}
        title="Regal & Sophisticated"
        subtitle="symbol of refined craftsmanship — where each bottle carries the legacy of mastery, elegance"
      />
         
         <CTASection data={ctaData} />
       <TestimonialCarousel 
        testimonials={testimonials}
      
      />


    </div>
  );
}