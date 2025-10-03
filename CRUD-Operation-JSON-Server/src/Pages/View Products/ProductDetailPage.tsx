import { useLoaderData } from "react-router";
import { productAPIServices, type ProductType } from "../../Service/ProductAPIService";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function ProductDetailsPage() {

  const product: ProductType = useLoaderData() || [];
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    const cartItem = {
      id: String(Date.now()), 
      productId: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    };

    if (await productAPIServices.addToCart(cartItem)) {
      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `${product.name} has been added to your cart.`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/addToCart");
    } else {
      Swal.fire("Error", "Failed to add to cart", "error");
    }

  };

  if (!product) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left - Product Images */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-contain"
          />
          <div className="flex gap-3 mt-4">
            {[...Array(3)].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt=""
                className="w-20 h-20 border rounded p-1 cursor-pointer hover:border-blue-500"
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 w-full">
            <button onClick={handleAddToCart} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold shadow">
              ADD TO CART
            </button>
            <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow">
              BUY NOW
            </button>
          </div>
        </div>

        {/* Right - Product Details */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{product.description}</p>

          {/* Ratings (example) */}
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
              4.2 ★
            </span>
            <span className="text-sm text-gray-500">12,341 Ratings & 1,243 Reviews</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-800">
              ₹{product.price}
            </span>
            <span className="line-through text-gray-500">
              ₹{Number(product.price + 500)}
            </span>
            <span className="text-green-600 font-medium">20% off</span>
          </div>

          <p className="text-sm text-gray-600 mt-1">+ ₹40 Secured Packaging Fee</p>

          {/* Offers */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Available offers</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Bank Offer: 10% off on ICICI Credit Cards</li>
              <li>Special Price: Get extra 5% off (price inclusive of discount)</li>
              <li>No Cost EMI available on select cards</li>
            </ul>
          </div>

          {/* Delivery */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">Delivery</h3>
            <p className="text-sm text-gray-600">Enter pincode to check delivery date</p>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="mt-2 border rounded px-3 py-2 w-40 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Made of: Steel</li>
              <li>Capacity: 1200 ml</li>
              <li>Color: Pink</li>
              <li>BPA Free, Rust Resistant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
