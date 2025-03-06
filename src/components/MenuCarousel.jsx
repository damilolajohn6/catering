"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";

const menuItems = [
  {
    title: "Savory Minted Lamb Chops",
    description:
      "Tender, succulent lamb chops grilled to perfection and infused with a fresh mint glaze, delivering a harmonious balance of savory and refreshing flavors.",
    image: "/assets/menu.jpg",
  },
  {
    title: "Grilled Salmon Delight",
    description:
      "Perfectly grilled salmon fillet with a lemon butter sauce, served with roasted asparagus and garlic mashed potatoes.",
    image: "/assets/menu.jpg",
  },
  {
    title: "Classic Spaghetti Bolognese",
    description:
      "Authentic Italian-style spaghetti in a rich and hearty Bolognese sauce, topped with freshly grated Parmesan cheese.",
    image: "/assets/menu.jpg",
  },
];

const MenuCarousel = () => {
  return (
    <section className="bg-[#C4A6A6] py-16 px-6 relative">
      <div className=" container  mx-auto">
        <h2 className="text-3xl font-bold text-[#752626] text-center">
          Our Menu
        </h2>
        <div className="mt-10 container flex flex-col md:flex-row  gap-8">
          <div className="w-full md:w-1/3 flex justify-center h-[450px]">
            <Image
              src="/assets/menu.jpg"
              alt="menu"
              width={400}
              height={450}
              className="rounded-lg shadow-lg object-cover h-full w-auto"
            />
          </div>
          {/* Carousel Section */}
          <div className="w-full md:w-2/3 relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
            >
              {menuItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className=" rounded-lg overflow-hidden h-[300px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#752626]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-700 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="md:flex hidden px-10 justify-center items-center gap-6 mt-6">
          <Button className="swiper-button-prev bg-[#C4A6A6] p-3 rounded-full  text-[#752626]">
            <FaChevronLeft />
          </Button>
          <Button className="swiper-button-next bg-[#C4A6A6] p-3 rounded-full  text-[#752626]">
            <FaChevronRight />
          </Button>
        </div>
        <div className="text-center mt-8">
          <Button className="bg-[#752626] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#5a1c1c] transition">
            Get A Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuCarousel;
