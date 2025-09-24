import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cart() {
  // Dummy data for the cart items. 
  const initialCartItems = [
    {
      id: 1,
      name: "Hydra Glow Foundation",
      price: 35.50,
      quantity: 1,
      img: "https://images.pexels.com/photos/7437346/pexels-photo-7437346.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      price: 24.99,
      quantity: 2,
      img: "https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Natural Skincare Kit",
      price: 59.00,
      quantity: 1,
      img: "https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Functions to handle item quantity and removal (for a more interactive UI)
  const handleQuantityChange = (id, delta) => {
    setCartItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5.00 : 0; 
  const total = subtotal + shipping;

  return (
    <section className="bg-[#fdfaf6] py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-[#b78a6e] text-center mb-12">
          Your Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 font-medium">Your cart is empty.</p>
            <Link to="/shop" className="mt-6 inline-block text-lg px-8 py-3 bg-[#b78a6e] text-white font-semibold rounded-full hover:bg-[#a6725b] transition-all duration-300">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items Section */}
            <div className="lg:w-2/3 bg-white p-6 md:p-10 rounded-3xl shadow-2xl">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 py-6 last:border-b-0"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-28 h-28 object-cover rounded-xl shadow-md"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-xl font-medium text-[#4A4A4A]">{item.name}</h4>
                      <p className="text-gray-500 mt-1">Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 mt-6 sm:mt-0">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                      <button 
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-lg font-medium text-[#4A4A4A]">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    {/* Remove Button */}
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary Section */}
            <div className="lg:w-1/3 bg-white p-6 md:p-10 rounded-3xl shadow-2xl h-fit">
              <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-8">
                Order Summary
              </h3>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#4A4A4A]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#4A4A4A]">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl text-[#b78a6e] pt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="mt-10 w-full py-4 bg-[#b78a6e] text-white font-bold rounded-full text-lg shadow-lg hover:bg-[#a6725b] transition-colors duration-300 transform hover:scale-105">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}