import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAbout";
import HomeServicesSection from "@/components/HomeServicesSection";
import MenuCarousel from "@/components/MenuCarousel";
import Testimonials from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeAboutSection />
      <HomeServicesSection />
      <WhyChooseUs />
      <MenuCarousel />
      <Testimonials />
    </div>
  );
}
