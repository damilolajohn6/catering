import Image from "next/image";
import { Button } from "./ui/button";



const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Catering event"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        {/* Hero Content */}
        <div className="relative container z-10 flex flex-col items-start justify-center h-full  text-white">
          <h1 className="text-5xl font-bold leading-tight text-[#8A2823]">
            Savor Every <br /> Occasion with <br /> Exquisite Catering
          </h1>
          <p className="mt-4 text-lg italic max-w-xl">
            Specializing in weddings, corporate events, and private gatherings,
            we create memorable dining experiences tailored to your vision.
          </p>
          <Button className="px-6 py-3 mt-6 text-lg font-semibold text-white bg-[#8A2823] rounded-lg hover:bg-[#541410]">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
