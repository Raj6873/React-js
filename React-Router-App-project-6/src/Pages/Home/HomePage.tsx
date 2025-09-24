import { Link } from "react-router-dom";

export default function Home() {
  const featuredProducts = [
    {
      img: "https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Velvet Matte Lipstick",
      price: "$24.99",
    },
    {
      img: "https://images.pexels.com/photos/7437346/pexels-photo-7437346.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hydra Glow Foundation",
      price: "$35.50",
    },
    {
      img: "https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Natural Skincare Kit",
      price: "$59.00",
    },
  ];

  const blogPosts = [
    {
      img: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "5 Tips for a Flawless Skincare Routine",
      desc: "Learn how to transform your skin with our expert-approved daily routine.",
    },
    {
      img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Discover Your Perfect Shade",
      desc: "Our guide to finding the ideal foundation and lipstick colors for your skin tone.",
    },
    {
      img: "https://images.pexels.com/photos/4273436/pexels-photo-4273436.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Power of Organic Ingredients",
      desc: "Explore the benefits of our cruelty-free, organic products and their impact on your skin.",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#FDF9F6]">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=900")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-20">
          <h1 className="text-4xl md:text-7xl font-serif text-white drop-shadow-lg mb-4 leading-tight">
            Redefining Beauty
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md mb-8 max-w-2xl mx-auto">
            Experience elegance with our premium skincare and cosmetics, crafted to bring out your natural radiance.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-[#B8860B] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#A67D0A] transition-colors duration-300 transform hover:scale-105"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-[#4A4A4A]">
            Best Sellers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((item, index) => (
              <div
                key={index}
                className="bg-[#FDF9F6] shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">{item.price}</p>
                  <Link
                    to="/shop"
                    className="inline-block px-6 py-2 bg-[#B8860B] text-white font-medium rounded-full hover:bg-[#A67D0A] transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#FDF9F6]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="About Lipsa"
            className="rounded-3xl shadow-2xl"
          />
          <div>
            <h2 className="text-4xl font-serif text-[#4A4A4A] mb-4">
              About Lipsa Cosmetics
            </h2>
            <p className="text-[#6A6A6A] mb-6 leading-relaxed text-lg">
              At Lipsa Cosmetics, we believe beauty is about confidence and self-expression. Our products are crafted with **premium ingredients**, are **cruelty-free**, and designed to bring out your natural glow. From lipsticks to skincare, we’ve got your beauty essentials covered.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-[#B8860B] text-white font-semibold rounded-full hover:bg-[#A67D0A] transition-colors duration-300"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Lifestyle Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-[#4A4A4A]">
            From Our Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-[#FDF9F6] rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-xl mb-6 shadow-md"
                />
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.desc}</p>
                <Link
                  to="/blog"
                  className="text-[#B8860B] font-medium hover:underline transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (Updated with Image) */}
      <section
        className="relative py-20 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/10368305/pexels-photo-10368305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
            Discover Your Unique Glow
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Ready to elevate your beauty routine? Shop our luxurious collection and find products that are perfect for you.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-white text-[#B8860B] font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  );
}