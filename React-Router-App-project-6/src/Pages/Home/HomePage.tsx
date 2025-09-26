import { Link } from "react-router-dom";
import React from "react"; 

export default function Home() {
  // Define new primary text color variables for clarity
  const PRIMARY_TEXT = "#2D2D2D"; // Deep Charcoal for Headings and main text
  const SECONDARY_TEXT = "#686868"; // Softer Gray for descriptions
  const ACCENT_GOLD = "#B8860B"; // Dark Goldenrod

  const featuredProducts = [
    {
      img: "https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Velvet Matte Lipstick",
      price: "$24.99",
      link: "/product/lipstick",
    },
    {
      img: "https://images.pexels.com/photos/7437346/pexels-photo-7437346.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hydra Glow Foundation",
      price: "$35.50",
      link: "/product/foundation",
    },
    {
      img: "https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Natural Skincare Kit",
      price: "$59.00",
      link: "/product/skincare-kit",
    },
  ];

  const blogPosts = [
    {
      img: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "5 Tips for a Flawless Skincare Routine",
      desc: "Learn how to transform your skin with our expert-approved daily routine.",
      link: "/blog/flawless-skincare",
    },
    {
      img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Discover Your Perfect Shade",
      desc: "Our guide to finding the ideal foundation and lipstick colors for your skin tone.",
      link: "/blog/perfect-shade",
    },
    {
      img: "https://images.pexels.com/photos/4273436/pexels-photo-4273436.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Power of Organic Ingredients",
      desc: "Explore the benefits of our cruelty-free, organic products and their impact on your skin.",
      link: "/blog/organic-power",
    },
  ];

  return (
    // Base text color changed to deep charcoal
    <div className="w-full font-sans bg-[#FDF9F6]" style={{ color: PRIMARY_TEXT }}>
      
      {/* Hero Section */}
      <section
        className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-20">
          <h1 className="text-4xl md:text-8xl font-serif text-white mb-6 leading-snug tracking-tighter drop-shadow-xl">
            Timeless Elegance.<br />
            {/* Accent color remains gold */}
            <span style={{ color: ACCENT_GOLD }} className="font-bold">Natural Radiance.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            Experience the luxury of premium, cruelty-free cosmetics crafted for your unique glow.
          </p>
          <Link
            to="/shop"
            style={{ backgroundColor: ACCENT_GOLD }}
            className="inline-block px-12 py-4 text-white text-xl font-semibold rounded-full shadow-2xl hover:bg-[#A67D0A] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-3xl"
          >
            Shop the New Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Text color applied to heading */}
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: PRIMARY_TEXT }}>
            Discover Our Best Sellers
          </h2>
          {/* Text color applied to subheading */}
          <p className="text-lg mb-16" style={{ color: SECONDARY_TEXT }}>Loved by experts and beauty enthusiasts worldwide.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="group block bg-[#FDF9F6] shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:border-2 hover:border-[#B8860B]/50"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button 
                      style={{ color: ACCENT_GOLD }}
                      className="px-6 py-2 bg-white font-semibold rounded-full shadow-xl text-sm uppercase tracking-wider">
                      Quick View
                    </button>
                  </div>
                </div>

                <div className="p-6 text-center">
                  {/* Text color applied to product name */}
                  <h3 className="text-xl font-semibold mb-1" style={{ color: PRIMARY_TEXT }}>
                    {item.name}
                  </h3>
                  {/* Accent color for price */}
                  <p style={{ color: ACCENT_GOLD }} className="text-2xl font-serif">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Banner (No change needed, text is white) */}
      <section style={{ backgroundColor: ACCENT_GOLD }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-serif mb-2">
            Committed to Conscious Beauty
          </h3>
          <p className="text-xl font-light mb-8">
            100% Cruelty-Free & Dermatologist-Tested Formulas.
          </p>
          <Link
            to="/shop"
            className="inline-block text-white border-b-2 border-white/50 hover:border-white transition-colors duration-300"
          >
            Discover Our shop
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#FDF9F6]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.pexels.com/photos/10368310/pexels-photo-10368310.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="About Lipsa"
            className="rounded-3xl shadow-2xl w-full h-full object-cover"
          />
          <div className="p-4">
            {/* Text color applied to heading */}
            <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: PRIMARY_TEXT }}>
              Our Story, Your Glow
            </h2>
            {/* Text color applied to description */}
            <p className="mb-8 leading-relaxed text-lg" style={{ color: SECONDARY_TEXT }}>
              At **Lipsa Cosmetics**, we believe beauty is about confidence and self-expression. Our products are meticulously crafted with **premium ingredients**, are **cruelty-free**, and designed to harmonise with your natural beauty. Join us on a journey to flawless skin and vibrant colour.
            </p>
            <Link
              to="/about"
              // Button color changed for contrast and modern look
              style={{ backgroundColor: PRIMARY_TEXT }}
              className="inline-block px-8 py-3 text-white font-semibold rounded-full hover:bg-black transition-colors duration-300 shadow-md"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Lifestyle Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Text color applied to heading */}
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: PRIMARY_TEXT }}>
            Inspiration & Guides
          </h2>
          {/* Text color applied to subheading */}
          <p className="text-lg mb-16" style={{ color: SECONDARY_TEXT }}>Stay updated with our latest beauty insights.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Link to={post.link} key={index} className="group block bg-[#FDF9F6] rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-t-2xl shadow-md transition-transform duration-500 group-hover:brightness-90"
                />
                <div className="p-6 text-left">
                  {/* Text and hover color applied */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#B8860B] transition-colors duration-300" style={{ color: PRIMARY_TEXT }}>{post.title}</h3>
                  {/* Text color applied to description */}
                  <p className="mb-4 text-sm" style={{ color: SECONDARY_TEXT }}>{post.desc}</p>
                  {/* Accent color applied to Read More link */}
                  <span style={{ color: ACCENT_GOLD }} className="font-medium border-b border-[#B8860B]/50 group-hover:border-[#B8860B] transition-colors duration-300">
                    Read Article
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action (No change needed, text is white) */}
      <section
        className="relative py-20 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/10368305/pexels-photo-10368305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-stone-900/60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Join the Lipsa Inner Circle
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Subscribe for exclusive offers, styling secrets, and first look at new arrivals.
          </p>
          <div className="flex justify-center">
            <Link
              to="/shop"
              style={{ backgroundColor: ACCENT_GOLD }}
              className="inline-block px-12 py-4 text-white font-bold text-lg rounded-full shadow-2xl hover:bg-[#A67D0A] transition-colors duration-300 transform hover:scale-105"
            >
              Shop All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}