"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const events = [
  {
    title: "Birthday Event",
    description:
      "Make your birthday celebration truly unforgettable with our exceptional catering services. Whether it’s an intimate gathering or a grand party, we bring delicious flavors, stunning presentations, and personalized menus to match your theme and preferences.",
    image: "/assets/s1.jpg",
  },
  {
    title: "Private Event",
    description:
      "Our private event catering ensures that every detail is crafted to perfection, from gourmet dishes to custom cakes. Enjoy a seamless experience tailored to your theme and preferences.",
    image: "/assets/s2.jpg",
  },
  {
    title: "Get-together Event",
    description:
      "Create unforgettable memories at your get-together event with our expertly curated menu and professional catering services, designed for comfort and indulgence.",
    image: "/assets/s3.jpg",
  },
  {
    title: "Corporate Event",
    description:
      "Elevate your corporate events with our premium catering services, ensuring a professional yet delightful dining experience that suits your brand and team.",
    image: "/assets/s2.jpg",
  },
  {
    title: "Wedding Event",
    description:
      "Celebrate love with a luxurious wedding catering experience, featuring elegant presentations, gourmet dishes, and a service that leaves lasting impressions.",
    image: "/assets/s3.jpg",
  },
];

const CateringCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - visibleSlides : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= events.length - visibleSlides ? 0 : prev + 1));
  };

  return (
    <section className="py-12 px-4 bg-white container">
      <div className="container mx-auto">
        <div className="w-full lg:w-1/3">
          <h2 className="text-xl font-bold text-red-800">
            Our Catering Philosophy: Crafted with Care, Inspired by You
          </h2>
          <p className="mt-4 text-gray-700">
            At Qwik Catering, our philosophy is simple: every dish is a blend of quality, creativity, and a commitment to your satisfaction.
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-8 overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-red-700 text-white rounded-full shadow-md hover:bg-red-800 z-10"
        >
          <FaChevronLeft />
        </button>

        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-full md:w-1/2 lg:w-1/3 p-4 bg-white rounded-lg"
            >
              <div className="relative w-full h-60">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold text-red-800 mt-4">{event.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{event.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-red-700 text-white rounded-full shadow-md hover:bg-red-800 z-10"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="mt-6 text-center flex justify-end">
        <button className="px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-800 transition">
          See Our Menu
        </button>
      </div>
    </section>
  );
};

export default CateringCarousel;
