import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cart() {
    // Define color variables for cleaner theme management
    const ACCENT_COLOR = "#B8860B"; // Dark Goldenrod (Gold-Copper accent)
    const PRIMARY_TEXT = "#2D2D2D"; // Deep Charcoal
    const BACKGROUND_COLOR = "#FDF9F6"; // Soft Beige

    // Dummy data for the cart items. 
    const initialCartItems = [
        {
            id: 1,
            name: "Hydra Glow Foundation",
            shade: "Nude Beige",
            price: 35.50,
            quantity: 1,
            img: "https://images.pexels.com/photos/7437346/pexels-photo-7437346.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            name: "Velvet Matte Lipstick",
            shade: "Crimson Red",
            price: 24.99,
            quantity: 2,
            img: "https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            name: "Natural Skincare Kit",
            shade: "Full Set",
            price: 59.00,
            quantity: 1,
            img: "https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    // 💥 FIX 1: Add the missing state for coupon feedback
    const [couponMessage, setCouponMessage] = useState(""); 

    // Calculate totals first (These run on every render)
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    // Free shipping over $100
    const shipping = subtotal > 100 || subtotal === 0 ? 0.00 : 5.00; 
    
    const total = subtotal - discount + shipping;
    // --- End of Calculation ---

    // Functions to handle item quantity and removal
    const handleQuantityChange = (id, delta) => {
    setCartItems(currentItems => 
        currentItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
    );
    
    setDiscount(0);
    setCouponMessage("");
};

const handleRemoveItem = (id) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
    
    setDiscount(0);
    setCouponMessage("");
};

    // 💥 FIX 2: Implement the proper state-based coupon logic
    const applyCoupon = () => {
        const code = couponCode.toUpperCase().trim();
        
        if (code === "LIPSA10" && subtotal > 0) {
            const newDiscount = subtotal * 0.10; // 10% discount
            setDiscount(newDiscount);
            setCouponMessage(`🎉 Coupon applied! You saved $${newDiscount.toFixed(2)}.`);
        } else if (subtotal === 0) {
            setDiscount(0);
            setCouponMessage("❌ Your cart is empty. Add items before applying a coupon.");
        } 
        else {
            setDiscount(0);
            setCouponMessage("❌ Invalid or expired coupon code.");
        }
    };


    return (
        <section className="py-20 min-h-screen" style={{ backgroundColor: BACKGROUND_COLOR }}>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-center mb-12" style={{ color: ACCENT_COLOR }}>
                    Your Shopping Cart
                </h2>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl font-medium" style={{ color: PRIMARY_TEXT }}>Your cart is empty. Time to discover your next glow! ✨</p>
                        <Link 
                            to="/shop" 
                            className="mt-8 inline-block text-lg px-10 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                            style={{ backgroundColor: ACCENT_COLOR, color: 'white', boxShadow: `0 4px 6px -1px rgba(184, 134, 11, 0.4)` }}
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        {/* Cart Items Section */}
                        <div className="lg:w-2/3">
                            {/* Header Row for large screens */}
                            <div className="hidden sm:grid grid-cols-5 gap-4 py-3 mb-4 font-semibold text-sm uppercase border-b border-gray-300" style={{ color: PRIMARY_TEXT }}>
                                <div className="col-span-2">Product</div>
                                <div>Price</div>
                                <div>Quantity</div>
                                <div className="text-right">Total</div>
                            </div>

                            {/* Individual Cart Items */}
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-4 items-center border-b border-gray-100 py-6 last:border-b-0"
                                    >
                                        {/* Product Info */}
                                        <div className="flex items-center space-x-4 col-span-2">
                                            <Link to={`/product/${item.id}`}>
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-24 h-24 object-cover rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg"
                                                />
                                            </Link>
                                            <div className="flex flex-col">
                                                <h4 className="text-lg font-medium" style={{ color: PRIMARY_TEXT }}>{item.name}</h4>
                                                <p className="text-sm text-gray-500 mt-1">Shade: {item.shade}</p>
                                                <button 
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="text-sm text-gray-400 hover:text-red-500 mt-2 text-left w-fit transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        
                                        {/* Price (Visible on all screens) */}
                                        <div className="text-md sm:text-lg font-medium sm:block" style={{ color: PRIMARY_TEXT }}>
                                            <span className="sm:hidden text-gray-500">Price: </span>${item.price.toFixed(2)}
                                        </div>
                                        
                                        {/* Quantity Controls */}
                                        <div className="flex items-center w-full sm:w-auto">
                                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                                <button 
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                    className="w-8 h-8 flex items-center justify-center text-lg text-gray-600 hover:bg-gray-100 transition-colors"
                                                >
                                                    −
                                                </button>
                                                <span className="px-3 text-lg font-medium" style={{ color: PRIMARY_TEXT }}>
                                                    {item.quantity}
                                                </span>
                                                <button 
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-lg text-gray-600 hover:bg-gray-100 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Item Total */}
                                        <div className="text-right text-lg font-semibold" style={{ color: ACCENT_COLOR }}>
                                            <span className="sm:hidden text-gray-500">Total: </span>${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cart Summary Section */}
                        <div className="lg:w-1/3 p-6 md:p-8 rounded-3xl shadow-2xl h-fit border border-gray-100" style={{ backgroundColor: 'white' }}>
                            <h3 className="text-2xl font-serif mb-8 border-b pb-4" style={{ color: PRIMARY_TEXT, borderColor: ACCENT_COLOR + '30' }}>
                                Summary
                            </h3>
                            
                            {/* Totals Breakdown */}
                            <div className="space-y-4 text-lg text-gray-700">
                                <div className="flex justify-between items-center">
                                    <span>Subtotal</span>
                                    <span className="font-semibold" style={{ color: PRIMARY_TEXT }}>${subtotal.toFixed(2)}</span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span>Shipping</span>
                                    {shipping === 0.00 ? (
                                        <span className="font-semibold text-green-600">FREE</span>
                                    ) : (
                                        <span className="font-semibold" style={{ color: PRIMARY_TEXT }}>${shipping.toFixed(2)}</span>
                                    )}
                                </div>

                                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                    <span>Discount 
                                        {discount > 0 && 
                                            <span className='font-normal text-sm ml-1'>({couponCode.toUpperCase()})
                                            </span>
                                        }
                                    </span>
                                    <span className="font-semibold text-red-500">-${discount.toFixed(2)}</span>
                                </div>
                            </div>
                            
                            {/* Coupon Input */}
                            <div className="mt-8 pt-4 border-t border-gray-200">
                                <h4 className="text-md font-semibold mb-3" style={{ color: PRIMARY_TEXT }}>Have a Coupon?</h4>
                                <div className="flex space-x-2">
                                    <input 
                                        type="text" 
                                        placeholder="Enter code"
                                        value={couponCode}
                                        onChange={(e) => {
                                            setCouponCode(e.target.value);
                                            setCouponMessage(""); // Clear message on input
                                        }}
                                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-inset focus:ring-gray-400"
                                        style={{ color: PRIMARY_TEXT }}
                                    />
                                    <button 
                                        onClick={applyCoupon}
                                        className="px-4 py-3 text-sm font-semibold rounded-lg text-white transition-colors duration-300"
                                        style={{ backgroundColor: PRIMARY_TEXT }}
                                    >
                                        Apply
                                    </button>
                                </div>
                                {/* 💥 FIX 3: Display coupon feedback message */}
                                {couponMessage && (
                                    <p className={`mt-2 text-sm font-medium ${couponMessage.startsWith('🎉') ? 'text-green-600' : 'text-red-500'}`}>
                                        {couponMessage}
                                    </p>
                                )}
                            </div>
                            
                            {/* Final Total */}
                            <div className="mt-10 pt-6 border-t border-gray-300">
                                <div className="flex justify-between items-center font-bold text-2xl" style={{ color: ACCENT_COLOR }}>
                                    <span>Grand Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button 
                                className="mt-8 w-full py-4 font-bold rounded-full text-lg shadow-xl transition-colors duration-300 transform hover:scale-[1.01]"
                                style={{ backgroundColor: ACCENT_COLOR, color: 'white' }}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}