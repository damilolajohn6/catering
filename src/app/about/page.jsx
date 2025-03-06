import AboutHero from '@/components/AboutHero'
import TraditionalModern from '@/components/AboutModern'
import HomeAboutSection from '@/components/HomeAbout'
import HomeServicesSection from '@/components/HomeServicesSection'
import Testimonials from '@/components/Testimonial'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <HomeAboutSection />
      <TraditionalModern />
      <HomeServicesSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  )
}

export default AboutPage