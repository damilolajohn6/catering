import Image from "next/image";

const specials = [
  {
    title: "Savory Minted Lamb Chops",
    description:
      "Tender, succulent lamb chops grilled to perfection and infused with a fresh mint glaze, delivering a harmonious balance of savory and refreshing flavors. Served with a side of herb-roasted vegetables for a truly delightful dining experience.",
    image: "/assets/menu.jpg",
  },
  {
    title: "Savory Minted Lamb Chops",
    description:
      "Tender, succulent lamb chops grilled to perfection and infused with a fresh mint glaze, delivering a harmonious balance of savory and refreshing flavors. Served with a side of herb-roasted vegetables for a truly delightful dining experience.",
    image: "/assets/spe1.jpg",
  },
  {
    title: "Savory Minted Lamb Chops",
    description:
      "Juicy, flame-grilled lamb chops infused with a refreshing mint glaze—crafted to melt in your mouth and leave you craving more. A perfect choice for those seeking bold, unforgettable flavor.",
    image: "/assets/spe2.jpg",
  },
];

export default function Specials() {
  return (
    <section className="bg-[#d1b0b0] py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#783A3A] mb-6">Our Specials</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {specials.map((special, index) => (
            <div key={index} className="bg-transparant rounded-lg p-4">
              <Image
                src={special.image}
                alt={special.title}
                width={400}
                height={250}
                className="rounded-md w-full h-48 object-cover"
              />
              <div className="text-start">
                <h3 className="text-lg font-bold text-[#783A3A] mt-4">
                    {special.title}
                </h3>
                <p className="text-sm text-[#783A3A] italic mt-2">
                    {special.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
