import { EyeIcon, PlusIcon, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { productAPIServices } from "../Service/ProductAPIService";

export default function Navbar() {
    const [cartCount, setCartCount] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const fetchCartCount = async () => {
            const cartItems = await productAPIServices.fetchCart();
            setCartCount(cartItems.length);
        };

        fetchCartCount();

        const interval = setInterval(fetchCartCount, 3000);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [cartCount]);

    return (
        <div className="w-full sticky top-0 z-50">
            {/* Main Navbar */}
            <nav className={`bg-white shadow-2xl transition-all duration-500 ${isScrolled ? 'py-2 shadow-2xl' : 'py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">

                        {/* Logo Section */}
                        <div className="flex items-center">
                            <NavLink to="/" className="flex items-center space-x-3 group">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-lg">LC</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                                        LIPSA
                                    </span>
                                    <span className="text-xs text-gray-500 -mt-1">COSMETICS</span>
                                </div>
                            </NavLink>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-2xl mx-8">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                                <div className="relative bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 overflow-hidden">
                                    <input
                                        type="text"
                                        placeholder="Search for products, brands and more..."
                                        className="w-full h-12 px-6 pr-14 text-sm text-gray-700 bg-transparent border-0 focus:outline-none focus:ring-0 placeholder-gray-500"
                                    />
                                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-200 group/btn shadow-lg">
                                        <Search size={16} className="text-white group-hover/btn:scale-110 transition-transform duration-200" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-2">

                            {/* Add Product */}
                            <NavLink
                                to="/add-product"
                                className={({ isActive }) =>
                                    `flex items-center font-medium px-4 py-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden ${isActive
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                                    }`
                                }
                            >
                                <div className={`p-1.5 rounded-lg mr-2 ${window.location.pathname === '/add-product'
                                    ? 'bg-white/20'
                                    : 'bg-purple-100 group-hover:bg-purple-200'
                                    }`}>
                                    <PlusIcon size={16} className={
                                        window.location.pathname === '/add-product' ? 'text-white' : 'text-purple-600'
                                    } />
                                </div>
                                Add Product
                            </NavLink>

                            {/* View Product */}
                            <NavLink
                                to="/view-product"
                                className={({ isActive }) =>
                                    `flex items-center font-medium px-4 py-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden ${isActive
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                                    }`
                                }
                            >
                                <div className={`p-1.5 rounded-lg mr-2 ${window.location.pathname === '/view-product'
                                    ? 'bg-white/20'
                                    : 'bg-purple-100 group-hover:bg-purple-200'
                                    }`}>
                                    <EyeIcon size={16} className={
                                        window.location.pathname === '/view-product' ? 'text-white' : 'text-purple-600'
                                    } />
                                </div>
                                View Product
                            </NavLink>

                            {/* User Account */}
                            <button className="flex items-center text-gray-700 font-medium hover:text-purple-600 px-3 py-2.5 rounded-xl transition-all duration-200 group">
                                <div className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-purple-100 mr-2 transition-colors duration-200">
                                    <User size={16} />
                                </div>
                                Login
                            </button>

                            {/* Cart */}
                            <NavLink
                                to="/addToCart"
                                className={({ isActive }) =>
                                    `relative flex items-center font-medium px-4 py-2.5 rounded-xl transition-all duration-200 group ${isActive
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                                    }`
                                }
                            >
                                <div className={`p-1.5 rounded-lg mr-2 ${window.location.pathname === '/addToCart'
                                    ? 'bg-white/20'
                                    : 'bg-purple-100 group-hover:bg-purple-200'
                                    }`}>
                                    <ShoppingCart size={16} className={
                                        window.location.pathname === '/addToCart' ? 'text-white' : 'text-purple-600'
                                    } />
                                </div>
                                Cart
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                                        {cartCount}
                                    </span>
                                )}
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Bottom Border Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
            </nav>
        </div>
    );
}