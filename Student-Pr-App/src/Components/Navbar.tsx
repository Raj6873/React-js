import { useState } from "react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = ["Home", "About", "Services", "Contact"];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-3">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjmnPP5ngv8_ekO3nTlWNUNYE_SGfDVznGw&s"
                            className="h-8 w-auto"
                            alt="Logo"
                        />
                        <span className="text-xl font-bold text-gray-800 dark:text-white">Student</span>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="relative group text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition-colors duration-200"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="text-gray-600 dark:text-gray-300 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
                    <nav className="px-4 py-4 space-y-2">
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white font-medium transition"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                            Get Started
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default NavBar;
