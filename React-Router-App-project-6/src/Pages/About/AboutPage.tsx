export default function About() {
  return (
    <section className="w-full bg-[#fffaf8] py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-wider text-[#d99177] font-semibold mb-2">
            Discover Lipsa Cosmetics
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            Beauty That Empowers You
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            At <span className="font-semibold text-[#d99177]">Lipsa Cosmetics</span>, 
            we believe beauty is more than skin deep. 
            Our mission is to create premium, cruelty-free, and skin-friendly products 
            that enhance your natural glow. From everyday essentials to luxury makeup, 
            we bring you formulas that are safe, long-lasting, and crafted with care.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Join thousands of confident women who choose Lipsa to express themselves 
            with elegance, grace, and power. Because your beauty deserves nothing less 
            than extraordinary.
          </p>
          <button className="bg-[#d99177] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#b86d56] transition">
            Explore Our Products
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="w-[90%] md:w-[400px] h-[400px] rounded-[30px] overflow-hidden shadow-2xl relative group">
            <img
              src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Lipsa Cosmetics"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#d99177]/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
