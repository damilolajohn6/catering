"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = ["/assets/ab2.jpg", "/assets/ab1.jpg", "/assets/menu.jpg"];

const HomeServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#C4A1A1] text-center py-12 px-6">
      <div className="container">
        <h2 className="text-3xl font-bold text-[#7A2525]">Our Services</h2>
        <p className="text-[#7A2525] mt-4 max-w-2xl mx-auto">
          At [Your Company Name], we believe every birthday is a story waiting
          to be told. From intimate gatherings to grand celebrations, we handle
          every detail with care and creativity.
        </p>

        {/* Image Carousel */}
        <div className="relative mt-8 flex justify-center items-center">
          <Button
            onClick={prevSlide}
            className="absolute left-0 bg-white rounded-full p-2 shadow-md"
          >
            <FaArrowLeft className="text-black" />
          </Button>
          <div className="w-full md:w-3/4">
            <Image
              src={images[currentIndex]}
              alt="Birthday Celebration"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <Button
            onClick={nextSlide}
            className="absolute right-0 bg-white rounded-full p-2 shadow-md"
          >
            <FaArrowRight className="text-black" />
          </Button>
        </div>

        {/* Description Section */}
        <div className="mt-8 max-w-3xl mx-auto text-[#5A1A1A]">
          <p className="leading-relaxed">
            Every birthday tells a unique story, and we’re here to bring yours
            to life. From the moment you share your vision with us, we tailor
            every detail—theme, décor, and activities—to reflect your
            personality and preferences. Imagine indulging in a custom-designed
            menu and a cake that’s not just a treat but a masterpiece crafted to
            your taste.
          </p>
          <p className="mt-4 leading-relaxed">
            As the day unfolds, the perfect ambiance sets the tone, and every
            smile, laugh, and moment of joy is captured beautifully through our
            photography. Meanwhile, you can relax and soak in the celebration
            while we handle everything seamlessly—from setup to cleanup. Your
            special day deserves to be nothing less than extraordinary. Let us
            make it magical, just for you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
