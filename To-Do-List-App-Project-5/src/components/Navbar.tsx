import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["Dashboard", "Tasks", "Settings"];

  return (
    <nav
      className="bg-gray-900 shadow-xl border-b border-gray-800" // Softer shadow and a subtle bottom border
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 tracking-tight transform hover:scale-105 transition-all duration-300 ease-in-out" // Larger, bolder, with hover effect
          >
            AdminNexus
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-white font-semibold relative group transition-all duration-300 ease-in-out text-lg" // Slightly larger text, semi-bold
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span> {/* Adjusted underline position */}
            </a>
          ))}
          <a
            href="#"
            className="px-7 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out font-bold transform hover:-translate-y-0.5 hover:scale-105 text-lg" // Pill shape, bolder text, more pronounced hover
          >
            Log Out
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-400 hover:text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300 transform hover:scale-110" // Rounded button, hover scale
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-9 h-9" // Slightly larger icon
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 border-t border-gray-700 transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${ // Added border-t for separation
          isMobileMenuOpen ? "max-h-screen opacity-100 py-3" : "max-h-0 opacity-0" // Use max-h-screen for smoother transition
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:translate-x-1" // Slightly larger text, hover effect
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 block w-full text-center px-4 py-2.5 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" // Pill shape, bolder, shadow, hover effect
          >
            Log Out
          </a>
        </div>
      </div>
    </nav>
  );
}