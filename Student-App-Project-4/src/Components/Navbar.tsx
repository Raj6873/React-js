import { useState, useEffect } from "react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importing icons for a cleaner look

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // New state for scroll-based styling

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" }
    ];

    // Effect to handle scroll-based header styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                       ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-white dark:bg-gray-900'}
                       border-b ${isScrolled ? 'border-gray-100 dark:border-gray-800' : 'border-gray-200 dark:border-gray-700'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2 lg:space-x-3 group" aria-label="Student Portal App Home">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjmnPP5ngv8_ekO3nTlWNUNYE_SGfDVznGw&s"
                            className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
                            alt="Student Portal App Logo"
                        />
                        <span className="text-xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            Student<span className="text-blue-600 dark:text-blue-400">Portel</span>App
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="relative group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                                           font-medium text-base transition-all duration-200 py-1"
                                aria-current={window.location.hash === item.href ? "page" : undefined}
                            >
                                {item.name}
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2.5 rounded-lg
                                           hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300
                                           shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                                           text-base font-semibold">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300
                                       hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {/* {menuOpen ? (
                                // <XMarkIcon className="w-6 h-6" />
                            ) : (
                                // <Bars3Icon className="w-6 h-6" />
                            )} */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-16 left-0 w-full transition-all duration-300 ease-in-out transform
                           ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                           bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700`}
            >
                <nav className="px-4 py-4 space-y-3">
                    {navItems.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            onClick={() => setMenuOpen(false)} // Close menu on item click
                            className="block text-lg font-medium text-gray-800 dark:text-gray-200
                                       hover:text-blue-600 dark:hover:text-blue-400
                                       py-2 px-3 rounded-md transition-colors duration-200
                                       hover:bg-gray-50 dark:hover:bg-gray-800"
                            aria-current={window.location.hash === item.href ? "page" : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4">
                        <button
                            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg
                                       hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300
                                       shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                                       text-base font-semibold"
                        >
                            Get Started
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;