"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const specials = [
  {
    id: 1,
    title: "Platted Minced Chicken",
    image: "/assets/menu.jpg",
    description: "",
    highlight: true,
  },
  {
    id: 2,
    title: "Savory Minted Lamb Chops",
    image: "/assets/spe1.jpg",
    description:
      "Tender, succulent lamb chops grilled to perfection and infused with a fresh mint glaze, delivering a harmonious balance of savory and refreshing flavors.",
  },
  {
    id: 3,
    title: "Juicy Flame-Grilled Lamb Chops",
    image: "/assets/spe1.jpg",
    description:
      "Juicy, flame-grilled lamb chops infused with a refreshing mint glaze—crafted to melt in your mouth and leave you craving more.",
  },
];

export default function PlaitedMenu() {
  const scrollRef = useRef(null);
  const [showButtons, setShowButtons] = useState(true);

  // Track screen width and hide buttons if screen is large
  useEffect(() => {
    const handleResize = () => {
      setShowButtons(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white  p-6">
      <div className="mt-10 container flex flex-col md:flex-row gap-8">
        {/* Highlighted Special (Centered) */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={specials[0].image}
              alt={specials[0].title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 bg-[#752626] text-white flex justify-center items-center w-full py-2 text-sm font-bold">
              {specials[0].title}
            </div>
          </div>
        </div>

        {/* Scrollable Specials Section */}
        <div className="w-full md:w-2/3 relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x scroll-smooth"
          >
            {specials.slice(1).map((item, index) => (
              <div
                key={index}
                className="snap-start min-w-[300px] rounded-lg overflow-hidden "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#752626]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#752626] text-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Hidden on Larger Screens */}
          {showButtons && (
            <div className="">
              <button
                onClick={() => scroll("left")}
                className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-[#752626] text-white p-2 rounded-full"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-[#752626] text-white p-2 rounded-full"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
