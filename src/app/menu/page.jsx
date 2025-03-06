import MenuHero from "@/components/MenuHero";
import PlaitedChicken from "@/components/PlaitedChicken";
import PlaitedMenu from "@/components/PlaitedMenu";
import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div>
      <MenuHero />
      <div className="py-10">
        <div className="container ">
          <div className="text-start md:text-center px-4 md:px-0 mx-auto">
            <h3 className="text-4xl font-bold text-[#783A3A] mt-4">
              Discover Our Special Menu
            </h3>
            <p className="text-md text-[#783A3A] mt-5">
              Discover a selection of our finest dishes, thoughtfully crafted to
              delight every palate. From timeless classics to innovative
              creations, our special menu showcases the best of our culinary
              expertise. Each dish can be tailored to suit your event's theme,
              style, and guest preferences, ensuring a personalized dining
              experience that’s as unique as your celebration. Let us turn your
              vision into a feast to remember!
            </p>
          </div>
        </div>
        <PlaitedMenu />
        <PlaitedChicken />
        <PlaitedChicken />
        <div className="container flex items-center mx-auto justify-center ">
          <Link href="/contact">
            <Button className="bg-[#8A2823] text-white font-bold py-4 px-6 rounded-lg">
              Book Us Now
            </Button>
          </Link>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default MenuPage;
