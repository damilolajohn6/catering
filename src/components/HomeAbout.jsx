import Image from "next/image";

const HomeAboutSection = () => {
  return (
    <div className="w-full mt-[-5%] relative">
      <div className="container bg-[#E6C6C1] px-4 sm:px-8 py-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <Image
              src="/assets/ab1.jpg"
              alt="Cooking together"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />

            {/* Statistics */}
            <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-20 text-[#8A2823] font-bold text-center">
              <div className="text-2xl sm:text-3xl">
                5
                <span className="block text-base sm:text-lg font-normal">
                  years <br /> of Experience
                </span>
              </div>
              <div className="text-2xl sm:text-3xl">
                80%
                <span className="block text-base sm:text-lg font-normal">
                  Regular <br /> Customers
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#8A2823]">
              Crafting memorable dining experiences with exceptional quality and
              care.
            </h2>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              [Our Business Name] was founded by [Your Name], a chef with [X
              years] of culinary experience and a dream of bringing people
              together through extraordinary food. What started as a small
              catering service for friends and family has grown into a trusted
              name in the industry, known for our dedication, innovation, and
              passion.
            </p>

            {/* Mission Section */}
            <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-[#8A2823]">
              Our Mission:
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Our mission is simple: to deliver exquisite dishes, tailored
              menus, and seamless service that exceed expectations and leave
              lasting impressions. We take pride in crafting unique culinary
              experiences that reflect your taste, style, and occasion.
            </p>

            {/* Values Section */}
            <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-[#8A2823]">
              Our Values:
            </h3>
            <ul className="text-gray-700 text-base sm:text-lg list-disc list-inside">
              <li>
                <strong>Quality First:</strong> We use only the freshest
                ingredients, sourced locally whenever possible, to ensure every
                dish is of the highest standard.
              </li>
              <li>
                <strong>Creativity:</strong> From classic favorites to modern
                twists, our menus are designed to delight your palate and wow
                your guests.
              </li>
              <li>
                <strong>Customer-Centric Approach:</strong> Your satisfaction is
                our top priority. We listen, adapt, and personalize every detail
                to suit your needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
