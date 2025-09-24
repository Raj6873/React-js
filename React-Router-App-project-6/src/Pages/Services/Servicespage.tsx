import React from "react";

export default function ServicesPage() {
  const services = [
    {
      title: "Makeup Consultation",
      desc: "Personalized beauty sessions with expert advice to find the perfect look for you.",
      img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Skincare Routine",
      desc: "Tailored skincare solutions designed to rejuvenate, hydrate, and protect your skin.",
      img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Luxury Products",
      desc: "Premium cosmetics made with high-quality ingredients to enhance your natural beauty.",
      img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const highlights = [
    {
      title: "100% Organic Ingredients",
      img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Dermatologist Tested",
      img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Cruelty-Free Products",
      img: "https://images.pexels.com/photos/4273436/pexels-photo-4273436.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="font-sans bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <div className="text-center py-20 px-6 bg-orange-50">
        <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-4 tracking-tight leading-tight">
          Redefining Beauty
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          At <span className="text-orange-400 font-semibold">Lipsa Cosmetics</span>, we blend cutting-edge <span className="text-orange-400 font-semibold">skincare science</span> with <span className="text-orange-400 font-semibold">premium cosmetics</span> to enhance your natural radiance.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-sm shadow-xl rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-orange-800 transition-colors duration-300 group-hover:text-orange-500">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {service.desc}
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-400 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-orange-500 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Highlight Section */}
      <div className="bg-orange-100 py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-orange-800">
            Why Choose Us?
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover object-top rounded-2xl mb-6 shadow-md"
              />
              <h3 className="text-xl font-bold text-orange-600">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-orange-50 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
            What Our Customers Say
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform transition-transform duration-500 hover:scale-105">
            <p className="text-gray-600 italic leading-relaxed">
              “Lipsa Cosmetics completely changed my skincare game. My skin feels so fresh and glowing!”
            </p>
            <h4 className="mt-4 font-semibold text-orange-500">
              – Anjali Mehta
            </h4>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform transition-transform duration-500 hover:scale-105">
            <p className="text-gray-600 italic leading-relaxed">
              “The luxury products are worth every penny. I feel confident and beautiful every day.”
            </p>
            <h4 className="mt-4 font-semibold text-orange-500">
              – Riya Sharma
            </h4>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-400 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
          Ready to Elevate Your Beauty Routine?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Sign up today to receive exclusive offers and personalized tips.
        </p>
        <button className="px-10 py-4 bg-white text-orange-500 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
          Join Our Community
        </button>
      </div>
    </section>
  );
}