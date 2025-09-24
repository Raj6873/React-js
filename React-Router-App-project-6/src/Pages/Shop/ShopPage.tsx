import { Link } from "react-router-dom";

export default function Shop() {
  // Array of product data
  const products = [
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      price: "$24.99",
      img: "https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Velvet matte lipstick",
    },
    {
      id: 2,
      name: "Hydra Glow Foundation",
      price: "$35.50",
      img: "https://images.pexels.com/photos/7437346/pexels-photo-7437346.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Hydra glow foundation",
    },
    {
      id: 3,
      name: "Natural Skincare Kit",
      price: "$59.00",
      img: "https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Natural skincare kit",
    },
    {
      id: 4,
      name: "Luminous Highlighter Palette",
      price: "$29.00",
      img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Luminous highlighter palette",
    },
    {
      id: 5,
      name: "Smoky Eye Shadow",
      price: "$19.99",
      img: "https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Smoky eyeshadow",
    },
    {
      id: 6,
      name: "Rosehip Face Serum",
      price: "$45.00",
      img: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Rosehip face serum",
    },
    {
      id: 7,
      name: "Classic Mascara",
      price: "$15.00",
      img: "https://images.pexels.com/photos/7437370/pexels-photo-7437370.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Classic mascara",
    },
    {
      id: 8,
      name: "Sheer Lip Gloss",
      price: "$12.50",
      img: "https://images.pexels.com/photos/5923832/pexels-photo-5923832.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Sheer lip gloss",
    },
  ];

  return (
    <section className="w-full bg-[#FDF9F6] py-20">
      {/* Heading */}
      <div className="text-center mb-16 w-full">
        <p className="text-sm uppercase tracking-widest text-[#B8860B] font-semibold mt-10">
          Our Collection
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-[#4A4A4A] mt-3">
          Explore Our Products
        </h2>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-500 hover:scale-105"
          >
            <img
              src={product.img}
              alt={product.alt}
              className="w-full h-72 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 font-medium text-lg mb-4">
                {product.price}
              </p>
              <Link
                to="/cart"
                className="w-full inline-block px-6 py-3 bg-[#B8860B] text-white font-semibold rounded-full hover:bg-[#A67D0A] transition-colors duration-300"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}