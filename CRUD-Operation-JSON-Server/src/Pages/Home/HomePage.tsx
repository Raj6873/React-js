import { NavLink, useLoaderData } from "react-router";
import type { ProductType } from "../../Service/ProductAPIService";
import { productAPIServices } from "../../Service/ProductAPIService";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Star,
  Shield,
  Truck,
  ArrowRight,
  Eye,
  Sparkles,
  Zap,
  Clock,
  TrendingUp,
  ArrowLeft,
  ArrowRight as RightArrow,
  Play,
  Pause,
  Mail,
  Crown,
  BadgeCheck,
  ShoppingCart
} from "lucide-react";

export default function HomePage() {
  const allProducts: ProductType[] = useLoaderData() || [];
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<ProductType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter products based on search
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Set featured and trending products
  useEffect(() => {
    setFeaturedProducts(allProducts.slice(0, 6));
    setTrendingProducts(allProducts.slice(2, 8));
  }, [allProducts]);

  // Carousel auto-slide with pause/play
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying]);

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
      toast.success(
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <ShoppingCart className="text-green-600" size={20} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Added to cart!</p>
            <p className="text-sm text-gray-600">{product.name}</p>
          </div>
        </div>
      );
    } else {
      toast.error("Failed to add to cart");
    }
  };

  const handleQuickView = (product: ProductType) => {
    navigate(`/view-productDetail/${product.id}`);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
        toast.info("Removed from favorites");
      } else {
        newFavorites.add(productId);
        toast.success("Added to favorites!");
      }
      return newFavorites;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const carouselSlides = [
    {
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Summer Tech Sale",
      subtitle: "Up to 50% off on latest gadgets and electronics",
      buttonText: "Shop Now",
      gradient: "from-blue-600/80 to-purple-600/80"
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "New Arrivals",
      subtitle: "Discover the latest trends in fashion and lifestyle",
      buttonText: "Explore Collection",
      gradient: "from-emerald-600/80 to-cyan-600/80"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Free Shipping",
      subtitle: "On all orders over ₹999. Limited time offer!",
      buttonText: "Learn More",
      gradient: "from-orange-500/80 to-red-500/80"
    },
    {
      image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Premium Collection",
      subtitle: "Luxury products at affordable prices",
      buttonText: "View Premium",
      gradient: "from-purple-600/80 to-pink-600/80"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over ₹999",
      color: "blue",
      delay: "0"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure & safe",
      color: "green",
      delay: "100"
    },
    {
      icon: Crown,
      title: "Premium Quality",
      description: "Quality guaranteed",
      color: "purple",
      delay: "200"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here to help",
      color: "orange",
      delay: "300"
    },
    {
      icon: BadgeCheck,
      title: "Authentic Products",
      description: "100% genuine items",
      color: "emerald",
      delay: "400"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Same day shipping",
      color: "yellow",
      delay: "500"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      emerald: "bg-emerald-100 text-emerald-600",
      yellow: "bg-yellow-100 text-yellow-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Enhanced Header Search Bar */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Sparkles className="text-purple-500" size={24} />
              <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                TRENDING NOW
              </span>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-transparent border-0 focus:outline-none focus:ring-0 text-lg placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Carousel */}
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div
          ref={carouselRef}
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-7000"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} via-black/40 to-transparent`}>
                <div className="absolute left-20 bottom-20 text-white max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
                    <span className="font-semibold text-yellow-200">NEW COLLECTION</span>
                  </div>
                  <h1 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 opacity-90 leading-relaxed">{slide.subtitle}</p>
                  <div className="flex items-center gap-4">
                    <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3">
                      {slide.buttonText}
                      <ArrowRight size={20} />
                    </button>
                    <button className="border-2 border-white/50 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
          >
            <RightArrow size={24} />
          </button>

          {/* Enhanced Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide
                  ? 'bg-white w-12 scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/80'
                  }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-100 ease-linear"
              style={{
                width: `${((currentSlide + 1) / carouselSlides.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the best in class shopping with our premium services and features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent hover:scale-105"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={28} />
              </div>
              <h3 className="font-bold text-slate-800 mb-3 text-center text-lg">{feature.title}</h3>
              <p className="text-slate-600 text-sm text-center leading-relaxed">{feature.description}</p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-20 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Featured Products */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <span className="font-semibold text-blue-600 uppercase tracking-wider text-sm">Featured Collection</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl">
              Discover our handpicked selection of premium products that redefine excellence
            </p>
          </div>
          <button className="hidden lg:flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            View All Products <ArrowRight size={20} />
          </button>
        </div>

        {/* Enhanced Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-slate-100 overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Premium Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-2 rounded-full shadow-2xl flex items-center gap-1">
                    <Crown size={12} />
                    PREMIUM
                  </div>
                </div>

                {/* Product Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-3xl">
                    <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`w-12 h-12 backdrop-blur-md rounded-xl flex items-center justify-center shadow-2xl transition-all duration-300 ${favorites.has(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/90 text-slate-600 hover:bg-red-500 hover:text-white'
                          }`}
                      >
                        <Heart size={18} className={favorites.has(product.id) ? 'fill-current' : ''} />
                      </button>
                      <button
                        onClick={() => handleQuickView(product)}
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl text-slate-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
                      >
                        <Eye size={18} />
                      </button>
                    </div>

                    {/* Add to Cart Button Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-gradient-to-r from-slate-900 to-blue-900 text-white py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                      >
                        <ShoppingBag size={20} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-800 text-xl mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {product.name}
                  </h3>

                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className={`${star <= Math.floor(Number(product.rating) || 4)
                              ? 'text-yellow-400 fill-current drop-shadow-sm'
                              : 'text-slate-300'
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {product.rating || '4.5'}
                      </span>
                    </div>
                    <span className="text-sm text-slate-500 font-medium">
                      ({product.reviews || '125'} reviews)
                    </span>
                  </div>

                  {/* Price and Discount */}
                  <div className="flex items-center gap-4 mb-6">
                    <p className="text-3xl font-bold text-slate-900">₹{product.price}</p>
                    <p className="text-lg text-slate-400 line-through">₹{Number(product.price) + 500}</p>
                    <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                      Save ₹500
                    </span>
                  </div>

                  {/* Stock and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className={`text-sm font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'
                      }`}>
                      {product.stock > 0 ? `🟢 ${product.stock} in stock` : '🔴 Out of stock'}
                    </span>

                    {/* Mobile Add to Cart */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="lg:hidden w-14 h-14 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <ShoppingBag size={22} />
                    </button>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-[2px] rounded-3xl bg-white z-10"></div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Search size={48} className="text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">No products found</h3>
              <p className="text-slate-600 mb-8 text-lg max-w-md mx-auto">
                We couldn't find any products matching your search. Try different keywords or browse our categories.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Clear Search & Show All
              </button>
            </div>
          )}
        </div>

        {/* Enhanced View All Button */}
        <div className="flex justify-center mt-16">
          <button className="lg:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3 text-lg">
            View All Products
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Enhanced Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-3xl p-16 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Stay in the Loop
            </h3>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and be the first to know about exclusive deals, new arrivals, and special promotions. No spam, just premium content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                Subscribe
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              ✨ Join 50,000+ subscribers who get exclusive access
            </p>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="rounded-2xl shadow-2xl"
        progressClassName="bg-gradient-to-r from-blue-500 to-purple-500"
      />
    </div>
  );
}

// Add to your global CSS
const globalStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;