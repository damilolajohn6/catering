
const WhyChooseUs = () => {
  const features = [
    {
      title: "Tailored Experiences",
      description:
        "We customize every detail to suit your preferences, ensuring your event reflects your unique style.",
    },
    {
      title: "Expert Planning",
      description:
        "From concept to execution, our experienced team manages everything with precision and creativity.",
    },
    {
      title: "Seamless Coordination",
      description:
        "We handle logistics, so you can focus on enjoying your special day stress-free.",
    },
    {
      title: "Gourmet Catering",
      description:
        "Our chefs craft exquisite menus using the freshest ingredients, tailored to your tastes and dietary needs.",
    },
    {
      title: "Elegant Decor",
      description:
        "Transform your venue with stunning decor that matches your theme and vision, creating a memorable atmosphere.",
    },
    {
      title: "Personalized Service",
      description:
        "Our dedicated team provides attentive, personalized service to ensure every guest feels special.",
    },
  ];

  return (
    <section className="py-16 container bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-800">Why Choose Us</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            
            <h3 className="mt-4 text-lg font-semibold text-red-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
