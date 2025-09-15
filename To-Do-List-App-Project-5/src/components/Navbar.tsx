import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["Dashboard", "Tasks", "Settings"];

  return (
    <nav
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 shadow-xl"
      role="navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl font-extrabold text-indigo-400 tracking-tight transition-colors duration-300 hover:text-indigo-300"
          >
            AdminNexus
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          ))}
          <a
            href="#"
            className="px-5 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out font-semibold transform hover:-translate-y-0.5"
          >
            Log Out
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-indigo-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-8 h-8"
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
        className={`md:hidden bg-gray-800 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="mt-4 block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            Log Out
          </a>
        </div>
      </div>
    </nav>
  );
}
