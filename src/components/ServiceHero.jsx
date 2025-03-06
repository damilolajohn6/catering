import Image from "next/image";

const ServiceHero = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-gradient-to-r from-gray-100 to-[#C4ACB4AA] py-10 md:py-1">
      <div className="container mx-auto  flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
          <Image
            src="/assets/servicehero.jpg"
            alt="Catering Service"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900">
            Everything You Need <br /> in Catering
          </h1>
          <p className="text-lg italic text-gray-700 mt-4">
            "Savor the flavors of perfection with customized menus and
            impeccable service."
          </p>
          <button className="mt-6 px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-800 transition">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
