import CateringCarousel from '@/components/CateringCarousel'
import ServiceHero from '@/components/ServiceHero'
import Specials from '@/components/Specials'
import Testimonials from '@/components/Testimonial'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
      <ServiceHero />
      <CateringCarousel />
      <Specials />
      <Testimonials />
    </div>
  )
}

export default ServicePage