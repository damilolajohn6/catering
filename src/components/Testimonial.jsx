"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Jessica M.",
    text: `"Absolutely fantastic! The team made planning my event so easy, and everything was perfect—from the décor to the food. My guests are still talking about it!"`,
    image: "/assets/avatar.jpg",
  },
  {
    name: "Jessica M.",
    text: `"Absolutely fantastic! The team made planning my event so easy, and everything was perfect—from the décor to the food. My guests are still talking about it!"`,
    image: "/assets/avatar.jpg",
  },
  {
    name: "Jessica M.",
    text: `"Absolutely fantastic! The team made planning my event so easy, and everything was perfect—from the décor to the food. My guests are still talking about it!"`,
    image: "/assets/avatar.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#752626]">
          What Our Client Says
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#c4a6a6]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="mt-4 text-[#752626] text-sm leading-relaxed">
                {testimonial.text}
              </p>

              <h3 className="mt-4 font-bold text-[#752626]">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
