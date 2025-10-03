import { EyeIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { productAPIServices } from "../Service/ProductAPIService";

export default function Navbar() {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const fetchCartCount = async () => {
            const cartItems = await productAPIServices.fetchCart();
            setCartCount(cartItems.length);
        };

        fetchCartCount();

        const interval = setInterval(fetchCartCount, 3000);
        return () => clearInterval(interval);

    }, [cartCount]);

    return (
        <div className="w-full">
            {/* Main Navbar */}
            <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-xl relative overflow-hidden">
                {/* Background Pattern */}


                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Top Row */}
                        <div className="flex items-center justify-between h-16">
                            {/* Logo Section */}
                            <div className="flex items-center space-x-8">
                                <div className="flex items-center group cursor-pointer">
                                    <div className="relative">
                                        <div className="text-white font-bold text-2xl italic tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                                            <span className="text-transparent">LIPSA COSMETICS</span>
                                        </div>
                                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                    </div>
                                </div>
                            </div>

                        {/* Search Bar */} 
                         <div className="flex-1 max-w-2xl mx-8">
                            <div className="relative group">
                                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                                 <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                 <input
                                        type="text"
                                         placeholder="Search for products, brands and more"
                                         className="w-full h-12 px-4 pr-14 text-sm text-gray-700 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500"
                                     />
                                    <button className="absolute right-0 top-0 h-12 px-4 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 flex items-center justify-center group">
                                         <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                  </svg>
                                    </button>
                                 </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center space-x-4">
                            {/* Login Button */}
                            <div>
                                <NavLink to={"/add-product"}
                                    className="flex items-center text-white shadow-xl font-semibold hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200"
                                >
                                    <PlusIcon size={16} className="text-white mr-2" /> Add Product
                                </NavLink>
                            </div>

                            <div>
                                <NavLink to={"/view-product"}
                                    className="flex items-center text-white shadow-xl font-semibold hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200"
                                >
                                    <EyeIcon size={16} className="mr-2" /> View Product
                                </NavLink>
                            </div>

                            {/* Cart */}
                            <NavLink to={"/addToCart"} className="group relative flex items-center text-white font-semibold hover:bg-white/10 px-4 py-2.5 rounded-lg transition-all duration-200 border border-transparent hover:border-white/20">
                                <div className="relative">
                                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293a1 1 0 00-.293.707V17h1M13 17a2 2 0 100 4 2 2 0 000-4zm-6 0a2 2 0 100 4 2 2 0 000-4z"></path>
                                    </svg>
                                    {cartCount > 0 && (
                                        <span className="absolute -top-2 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                                Cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
}