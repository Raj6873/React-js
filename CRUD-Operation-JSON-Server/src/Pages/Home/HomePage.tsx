import { NavLink, useLoaderData } from "react-router";
import type { ProductType } from "../../Service/ProductAPIService";
import { productAPIServices } from "../../Service/ProductAPIService";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export default function HomePage() {
  const allProducts: ProductType[] = useLoaderData() || [];
  const navigate = useNavigate();

  // Add to Cart handler
  const handleAddToCart = async (product: ProductType) => {
    const cartItem = {
      id: String(Date.now()), 
      productId: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    };

    if (await productAPIServices.addToCart(cartItem)) {
      toast.success(`${product.name} added to cart`);
      navigate("/addToCart");
    } else {
      toast.error("Failed to add to cart");
    }
  };

  return (
    <div className="relative w-full max-w-[1600px] mx-auto">
      {/* Carousel */}
      <div className="w-full h-[420px] relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/400/image/ce75b75d19c39b98.jpg?q=50"
          alt="Big Sale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end px-12 pb-12 text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            The Big Billion Days
          </h2>
          <p className="text-lg md:text-xl mt-3 opacity-90">
            Starts 23rd Sep • Early Access for Plus Members
          </p>
          <button className="mt-6 bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-semibold shadow hover:bg-yellow-300 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="px-6 py-12 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Best of Electronics
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative w-full h-52 flex items-center justify-center bg-white/20 backdrop-blur-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                    20% OFF
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col">
                  <h3 className="text-base font-semibold text-gray-900 truncate group-hover:text-indigo-600 transition">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600">{product.category}</p>

                  {/* Price Row */}
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
                    <p className="text-sm text-gray-400 line-through">₹{Number(product.price + 500)}</p>
                  </div>

                  <span
                    className={`text-xs mt-1 font-medium ${
                      product.stock > 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {product.stock > 0 ? "In stock" : "Out of stock"}
                  </span>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-5">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-emerald-500/90 text-white py-2 text-sm rounded-lg font-medium shadow-sm hover:bg-emerald-600 transition"
                    >
                      Add to Cart
                    </button>
                    <NavLink
                      to={`/view-productDetail/${product.id}`}
                      className="flex-1 bg-indigo-500/90 text-white py-2 text-sm text-center rounded-lg font-medium shadow-sm hover:bg-indigo-600 transition"
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4 py-10">No products available</p>
          )}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
