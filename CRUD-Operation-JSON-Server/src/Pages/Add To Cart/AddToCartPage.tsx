import { useEffect, useState } from "react";
import { productAPIServices } from "../../Service/ProductAPIService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function AddToCartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const navigator = useNavigate();

  useEffect(() => {
    (async () => {
      setCart(await productAPIServices.fetchCart());
    })();
  }, []);

  // Increase quantity
  const increaseQty = async (item: any) => {
    await productAPIServices.updateCartItem(item.id, { quantity: item.quantity + 1 });
    setCart(await productAPIServices.fetchCart());
  };

  // Decrease quantity
  const decreaseQty = async (item: any) => {
    if (item.quantity > 1) {
      await productAPIServices.updateCartItem(item.id, { quantity: item.quantity - 1 });
      setCart(await productAPIServices.fetchCart());
    }
  };

  // delete item
  const removeItem = async (id: string) => {
    await productAPIServices.removeCartItem(id);
    setCart(await productAPIServices.fetchCart());
  };

  // Price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.floor(totalPrice * 0.20);
  const platformFee = 7;
  const finalAmount = totalPrice - discount + platformFee;

  // Place Order
  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    Swal.fire({
      title: "Order Placed Successfully 🎉",
      html: `
        <div style="text-align:left;font-size:14px;">
          <p><b>Delivery Address:</b> 395010, A-146 Samrat Soc, near Bhulka Sagar Vidhyabhavan, Surat</p>
          <p><b>Items:</b> ${cart.length}</p>
          <p><b>Total Price:</b> ₹${totalPrice}</p>
          <p><b>Discount:</b> -₹${discount}</p>
          <p><b>Platform Fee:</b> ₹${platformFee}</p>
          <hr />
          <p><b>Final Amount:</b> ₹${finalAmount}</p>
          <p style="color:green;margin-top:6px;"><b>Estimated Delivery:</b> 3–5 Business Days</p>
        </div>
      `,
      icon: "success",
      confirmButtonText: "Continue Shopping",
      confirmButtonColor: "#f97316",
    });
    setCart([]);
    navigator("/")
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Delivery Address */}
        <div className="lg:col-span-2 mb-4">
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-700">
                Deliver to: <span className="font-bold">Nensi Kukadia, 395011</span>
              </h2>
              <p className="text-gray-600 text-sm">
                15 Rajvansh Villa, Savaliya Circle, opp. Vanmali Soc, near Meriton Plaza, Mansarovar Society, Varachha, Surat, Gujarat
              </p>
            </div>
            <button className="text-blue-600 font-medium hover:underline">Change</button>
          </div>
        </div>

        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex gap-4 hover:shadow-lg transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-800">₹{item.price}</span>
                    <span className="line-through text-sm text-gray-500">₹{item.price + 500}</span>
                    <span className="text-green-600 text-sm">20% off</span>
                  </div>

                  {/* Qty + Actions */}
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center border rounded overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item)}
                        className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                      >
                        –
                      </button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item)}
                        className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm font-medium text-red-500 hover:underline"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-600">
              Your cart is empty 🛒
            </div>
          )}

          {/* Place Order Button */}
          {cart.length > 0 && (
            <div className="bg-white rounded-lg shadow p-4 flex justify-end">
              <button
                onClick={handlePlaceOrder}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition"
              >
                PLACE ORDER
              </button>
            </div>
          )}
        </div>

        {/* Right Side - Price Details */}
        {cart.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-20">
            <h2 className="font-semibold text-gray-700 mb-4 text-lg">PRICE DETAILS</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Price ({cart.length} items)</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- ₹{discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹{platformFee}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-gray-800">
                <span>Total Amount</span>
                <span>₹{finalAmount}</span>
              </div>
              <p className="text-green-600 text-sm mt-2">
                You will save ₹{discount} on this order 🎉
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
