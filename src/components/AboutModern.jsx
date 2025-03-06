"use client";
import Image from "next/image";

export default function TraditionalModern() {
  return (
    <div className="container">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-0 flex flex-col md:flex-row items-center gap-6">
        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/assets/burg.jpg"
            alt="Burger"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="w-full md:w-1/3 text-center bg-white p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#752626]">
            Traditional <br /> & <br /> Modern
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            "Behind Every Dish Lies a Story of Passion, Flavor, and
            Craftsmanship."
          </p>
          <button className="mt-6 bg-[#752626] text-white px-6 py-3 rounded-lg font-semibold">
            Book for consultation
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/assets/spag.jpg"
            alt="Spaghetti"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
