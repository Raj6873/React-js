import { NavLink } from "react-router-dom";

// Standard classes for all NavLinks (Clean, elegant, no active state highlight)
const simpleNavLinkClass =
  "text-gray-800 font-medium transition duration-300 ease-in-out relative group before:content-[''] before:absolute before:bottom-[-4px] before:left-1/2 before:w-0 before:h-[2px] before:bg-pink-700 before:transition-all before:duration-300 before:-translate-x-1/2 hover:text-pink-700 hover:before:w-full";

export default function Home() {
  return (
    <div className="w-full">
      {/* Navbar - Fixed, Ultra-light background, with strong shadow/blur for depth */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-[#fdfaf6] backdrop-blur-md bg-opacity-95 shadow-xl border-b border-gray-100"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          
          {/* Logo - Elegant and distinct */}
          <NavLink
            to="/"
            className="text-4xl font-serif italic tracking-wider text-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300"
          >
            Lipsa
            <span className="text-xl font-sans font-light ml-1">Cosmetics</span>
          </NavLink>

          {/* Nav Links - Center-aligned and modern spacing (No 'isActive' logic) */}
          <nav className="hidden lg:flex items-center space-x-12">
            <NavLink to="/" className={simpleNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={simpleNavLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={simpleNavLinkClass}>
              Contact
            </NavLink>
            <NavLink to="/services" className={simpleNavLinkClass}>
              Services
            </NavLink>
          </nav>

          {/* Shop Button - Premium appearance */}
          <NavLink
            to="/shop"
            className="hidden md:flex items-center px-8 py-2.5 bg-pink-700 hover:bg-pink-800 text-white font-semibold uppercase text-sm tracking-widest rounded-lg transition duration-300 ease-in-out shadow-lg shadow-pink-200 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50"
          >
            Shop Now
          </NavLink>
          
          {/* Mobile Menu Icon (Placeholder) */}
          <button className="md:hidden text-2xl text-pink-900 focus:outline-none">
            &#9776;
          </button>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding behind the fixed header */}
      <div className="h-[76px] lg:h-[80px]" aria-hidden="true"></div>
      
      {/* Rest of your page content */}
    </div>
  );
}