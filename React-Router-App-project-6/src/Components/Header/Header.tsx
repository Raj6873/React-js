import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#fdfaf6] bg-opacity-90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-3xl font-serif font-bold tracking-wide text-gray-900">
              Lipsa Cosmetics
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-black font-medium transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black font-medium transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black font-medium transition">
              Contact
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-black font-medium transition">
              Services
            </Link>
          </nav>

          {/* Button */}
          <Link to="/shop" className="px-6 py-2 bg-[#f4e6da] hover:bg-[#e9d7c8] text-gray-800 font-medium rounded-md transition">Shop
          </Link>
        </div>
      </header>

      
    </div>
  );
}