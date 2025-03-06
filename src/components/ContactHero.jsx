"use client";
import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/assets/menu-hero.jpg" // Replace with your actual image path
        alt="Our Menu"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#ffffff]">
          We’d Love to Hear From You!
        </h1>
        <p className="mt-2 text-sm md:text-lg font-medium max-w-2xl mx-auto">
          "Behind Every Dish Lies a Story of Passion, Flavor, and
          Craftsmanship."
        </p>
      </div>
    </div>
  );
}
