import { useLoaderData } from "react-router";
import { productAPIServices, type ProductType } from "../../Service/ProductAPIService";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useState } from "react";
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Check, Zap, Clock, MapPin, ArrowLeft } from "lucide-react";

export default function ProductDetailsPage() {
  const product: ProductType = useLoaderData() || [];
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showMoreDescription, setShowMoreDescription] = useState(false);

  // Mock product images for gallery
  const productImages = [
    product.image,
    product.image, // In real app, these would be different images
    product.image,
    product.image
  ];

  // Mock features and specifications
  const features = [
    { icon: <Shield size={18} />, text: "1 Year Warranty" },
    { icon: <Truck size={18} />, text: "Free Shipping" },
    { icon: <RotateCcw size={18} />, text: "7 Day Returns" },
    { icon: <Zap size={18} />, text: "Fast Delivery" }
  ];

  const specifications = [
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category },
    { label: "Warranty", value: product.warranty || "1 Year Manufacturer" },
    { label: "Stock", value: `${product.stock} units available` },
    { label: "Material", value: "Premium Quality" },
    { label: "Color", value: "Various Colors" }
  ];

  const offers = [
    "Bank Offer: 10% off on ICICI Credit Cards",
    "Special Price: Get extra 5% off (price inclusive of discount)",
    "No Cost EMI available on select cards",
    "Partner Offer: Sign up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000"
  ];

  const handleAddToCart = async () => {
    const cartItem = {
      id: String(Date.now()),
      productId: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: quantity,
    };

    if (await productAPIServices.addToCart(cartItem)) {
      Swal.fire({
        icon: "success",
        title: "Added to Cart!",
        text: `${product.name} has been added to your cart.`,
        showConfirmButton: false,
        timer: 1500,
        background: "#1f2937",
        color: "#f9fafb",
        customClass: {
          popup: "rounded-2xl"
        }
      });
      navigate("/addToCart");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add to cart",
        background: "#1f2937",
        color: "#f9fafb",
        confirmButtonColor: "#ef4444"
      });
    }
  };

  const handleBuyNow = () => {
    Swal.fire({
      icon: "info",
      title: "Proceed to Checkout",
      text: "Redirecting to checkout page...",
      showConfirmButton: false,
      timer: 1000,
      background: "#1f2937",
      color: "#f9fafb"
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <div className="w-10 h-10 bg-red-500 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-bold text-red-600 mb-4">Product Not Found</h1>
          <p className="text-slate-600 mb-6">The product you are looking for does not exist.</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left - Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200/60">
              <div className="aspect-square flex items-center justify-center bg-slate-50 rounded-2xl p-4">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain max-h-96 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-4 justify-center">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-xl border-2 transition-all duration-200 ${selectedImage === index
                    ? 'border-blue-500 shadow-lg scale-105'
                    : 'border-slate-200 hover:border-slate-300'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-200/60">
                  <div className="text-blue-600 flex justify-center mb-2">
                    {feature.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-700">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200/60">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-slate-600 mt-2">{product.brand}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-xl transition-all duration-200 ${isWishlisted
                      ? 'bg-red-50 text-red-500'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                  >
                    <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
                  </button>
                  <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
                  <span className="font-semibold">{product.rating || "4.2"} ★</span>
                  <Star size={16} className="fill-current" />
                </div>
                <span className="text-slate-600">{(product.reviews || "12,341")} Ratings</span>
                <span className="text-slate-600">{(product.reviews || "1,243")} Reviews</span>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-200/50">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-slate-800">₹{product.price}</span>
                  <span className="text-xl text-slate-500 line-through">₹{Number(product.price) + 500}</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹500
                  </span>
                </div>
                <p className="text-green-600 font-semibold">20% off • Inclusive of all taxes</p>
                <p className="text-slate-500 text-sm mt-1">+ ₹40 Secured Packaging Fee</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 h-12 flex items-center justify-center font-semibold text-slate-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-slate-600 text-sm">
                    {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-slate-200/60">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-blue-600" size={20} />
                <h3 className="font-semibold text-slate-800">Delivery Options</h3>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={6}
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Check
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3 text-green-600">
                <Check size={16} />
                <span className="text-sm">Free delivery available for this location</span>
              </div>
            </div>

            {/* Offers */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-slate-200/60">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-orange-500" size={20} />
                <h3 className="font-semibold text-slate-800">Available Offers</h3>
              </div>
              <div className="space-y-3">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <p className="text-sm text-slate-700">{offer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200/60">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Product Description</h3>
            <div className={`text-slate-600 leading-relaxed ${!showMoreDescription && 'line-clamp-3'}`}>
              {product.description || "This premium product offers exceptional quality and performance. Designed with cutting-edge technology and built to last, it provides the perfect balance of functionality and style. Ideal for both professional and personal use."}
              {product.features && (
                <div className="mt-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.split(',').map((feature, index) => (
                      <li key={index} className="text-slate-600">{feature.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={() => setShowMoreDescription(!showMoreDescription)}
              className="text-blue-600 font-semibold mt-3 hover:text-blue-700 transition-colors"
            >
              {showMoreDescription ? 'Show Less' : 'Read More'}
            </button>
          </div>

          {/* Specifications */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200/60">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Specifications</h3>
            <div className="space-y-3">
              {specifications.map((spec, index) => (
                <div key={index} className="flex border-b border-slate-100 pb-3 last:border-b-0">
                  <span className="flex-1 text-slate-600 font-medium">{spec.label}</span>
                  <span className="flex-1 text-slate-800">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}