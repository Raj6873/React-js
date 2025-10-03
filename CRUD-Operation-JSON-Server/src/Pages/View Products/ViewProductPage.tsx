import { NavLink, useLoaderData } from "react-router";
import { useNavigate } from "react-router";
import { productAPIServices, type ProductType } from "../../Service/ProductAPIService";
import { Pencil, Trash2, Plus, Search, Filter, MoreVertical, Eye, Download, Upload, BarChart3, TrendingUp, Package, AlertTriangle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useState, useMemo } from "react";
import Swal from "sweetalert2";

export default function AdminViewProducts() {
  const showProduct: ProductType[] = useLoaderData() || [];
  const [allProducts, setAllProducts] = useState(showProduct);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const navigator = useNavigate();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-high":
          return Number(b.price) - Number(a.price);
        case "price-low":
          return Number(a.price) - Number(b.price);
        case "stock-high":
          return b.stock - a.stock;
        case "stock-low":
          return a.stock - b.stock;
        default:
          return 0;
      }
    });

    return filtered;
  }, [allProducts, searchTerm, selectedCategory, sortBy]);

  // Get unique categories for filter
  const categories = ["all", ...new Set(allProducts.map(p => p.category))];

  // Analytics data
  const analytics = useMemo(() => ({
    totalProducts: allProducts.length,
    outOfStock: allProducts.filter(p => p.stock === 0).length,
    lowStock: allProducts.filter(p => p.stock > 0 && p.stock < 10).length,
    totalCategories: new Set(allProducts.map(p => p.category)).size,
    totalValue: allProducts.reduce((sum, p) => sum + (Number(p.price) * p.stock), 0),
    averageRating: allProducts.reduce((sum, p) => sum + Number(p.rating || 0), 0) / allProducts.length || 0
  }), [allProducts]);

  const deleteProduct = async (id: string) => {
    Swal.fire({
      title: "Delete Product?",
      text: "This action cannot be undone. The product will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      background: "#1f2937",
      color: "#f9fafb",
      customClass: {
        confirmButton: "px-6 py-3 rounded-xl font-semibold",
        cancelButton: "px-6 py-3 rounded-xl font-semibold"
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (await productAPIServices.deleteproduct(id)) {
          setAllProducts(await productAPIServices.fetchAllProducts());
          Swal.fire({
            title: "Deleted!",
            text: "Product has been successfully deleted.",
            icon: "success",
            background: "#1f2937",
            color: "#f9fafb",
            confirmButtonColor: "#10b981"
          });
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Could not delete product. Please try again.",
            icon: "error",
            background: "#1f2937",
            color: "#f9fafb",
            confirmButtonColor: "#ef4444"
          });
        }
      }
    });
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return {
      text: "Out of Stock",
      class: "bg-red-500/10 text-red-600 border-red-200",
      icon: <AlertTriangle size={14} />
    };
    if (stock < 10) return {
      text: "Low Stock",
      class: "bg-orange-500/10 text-orange-600 border-orange-200",
      icon: <AlertTriangle size={14} />
    };
    return {
      text: "In Stock",
      class: "bg-green-500/10 text-green-600 border-green-200",
      icon: <Package size={14} />
    };
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-green-600 bg-green-50";
    if (rating >= 4) return "text-blue-600 bg-blue-50";
    if (rating >= 3) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Package className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Product Dashboard
                </h1>
                <p className="text-slate-600 text-sm lg:text-base">
                  Manage your product catalog and inventory efficiently
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center gap-2 bg-white text-slate-700 px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 transition-all font-medium shadow-sm hover:shadow-md">
              <Download size={18} />
              Export
            </button>
            <NavLink
              to={"/add-product"}
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Plus size={20} className="transition-transform group-hover:scale-110" />
              Add Product
            </NavLink>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Products</p>
                <p className="text-2xl lg:text-3xl font-bold text-slate-800 mt-2">{analytics.totalProducts}</p>
                <p className="text-slate-500 text-xs mt-1">Across {analytics.totalCategories} categories</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Inventory Value</p>
                <p className="text-2xl lg:text-3xl font-bold text-slate-800 mt-2">₹{(analytics.totalValue / 1000).toFixed(1)}K</p>
                <p className="text-slate-500 text-xs mt-1">Total stock value</p>
              </div>
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Stock Alerts</p>
                <p className="text-2xl lg:text-3xl font-bold text-slate-800 mt-2">{analytics.lowStock + analytics.outOfStock}</p>
                <p className="text-slate-500 text-xs mt-1">Need attention</p>
              </div>
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="text-orange-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Avg Rating</p>
                <p className="text-2xl lg:text-3xl font-bold text-slate-800 mt-2">{analytics.averageRating.toFixed(1)}</p>
                <p className="text-slate-500 text-xs mt-1">Across all products</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
              <div className="flex-1 relative min-w-[200px]">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products, brands, categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-400"
                />
              </div>

              <div className="flex gap-3 flex-wrap">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700"
                >
                  <option value="all">All Categories</option>
                  {categories.filter(cat => cat !== "all").map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="stock-high">Stock: High to Low</option>
                  <option value="stock-low">Stock: Low to High</option>
                </select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${viewMode === "grid"
                  ? "bg-white text-slate-800 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${viewMode === "list"
                  ? "bg-white text-slate-800 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                <div className="w-4 h-4 flex flex-col gap-0.5">
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const stockStatus = getStockStatus(product.stock);
              return (
                <div
                  key={product.id}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-xl transition-all duration-300 hover:border-blue-200/50 overflow-hidden"
                >
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-200"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white shadow-sm"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-500">{product.brand}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${stockStatus.class}`}>
                      {stockStatus.icon}
                      {stockStatus.text}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                        {product.category}
                      </span>
                      <div className="text-right">
                        <p className="font-bold text-green-600 text-xl">₹{product.price}</p>
                        <p className="text-sm text-slate-400 line-through">₹{Number(product.price) + 500}</p>
                      </div>
                    </div>

                    {/* Rating and Stock */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-lg font-medium ${getRatingColor(Number(product.rating || 0))}`}>
                          ⭐ {product.rating || "4.5"}
                        </span>
                        <span className="text-slate-500">({product.reviews || "125"})</span>
                      </div>
                      <span className="font-semibold text-slate-700">{product.stock} units</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4 border-t border-slate-200/60">
                      <button
                        onClick={() => navigator(`/edit-product/${product.id}`)}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2.5 rounded-xl font-medium hover:bg-blue-100 transition-colors group/edit"
                      >
                        <Pencil size={16} className="group-hover/edit:scale-110 transition-transform" />
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2.5 rounded-xl font-medium hover:bg-red-100 transition-colors group/delete"
                      >
                        <Trash2 size={16} className="group-hover/delete:scale-110 transition-transform" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Products List View */}
        {viewMode === "list" && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-blue-50/30 border-b border-slate-200/60">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">PRODUCT</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">CATEGORY</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">PRICE</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">STOCK</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">RATING</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60">
                  {filteredProducts.map((product) => {
                    const stockStatus = getStockStatus(product.stock);
                    return (
                      <tr
                        key={product.id}
                        className="hover:bg-slate-50/30 transition-colors duration-200 group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 rounded-xl object-cover shadow-sm border border-slate-200"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {product.name}
                              </p>
                              <p className="text-sm text-slate-500">{product.brand}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-bold text-green-600 text-lg">₹{product.price}</p>
                            <p className="text-sm text-slate-400 line-through">₹{Number(product.price) + 500}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${stockStatus.class}`}>
                              {stockStatus.icon}
                              {stockStatus.text}
                            </span>
                            <span className="font-semibold text-slate-700">{product.stock}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-lg font-medium text-sm ${getRatingColor(Number(product.rating || 0))}`}>
                            ⭐ {product.rating || "4.5"} ({product.reviews || "125"})
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => navigator(`/edit-product/${product.id}`)}
                              className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group/edit"
                              title="Edit Product"
                            >
                              <Pencil size={18} className="group-hover/edit:scale-110 transition-transform" />
                            </button>
                            <button
                              onClick={() => deleteProduct(product.id)}
                              className="p-2.5 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group/delete"
                              title="Delete Product"
                            >
                              <Trash2 size={18} className="group-hover/delete:scale-110 transition-transform" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-sm border border-slate-200/60">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package size={32} className="text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No products found</h3>
              <p className="text-slate-600 mb-6">
                {allProducts.length === 0
                  ? "Get started by adding your first product to the catalog"
                  : "Try adjusting your search or filter criteria"
                }
              </p>
              {allProducts.length === 0 && (
                <NavLink
                  to={"/add-product"}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  <Plus size={20} />
                  Add Your First Product
                </NavLink>
              )}
            </div>
          </div>
        )}

        {/* Results Count */}
        {filteredProducts.length > 0 && (
          <div className="text-center text-slate-500 text-sm">
            Showing {filteredProducts.length} of {allProducts.length} products
          </div>
        )}

        <ToastContainer
          position="bottom-right"
          theme="light"
          toastClassName="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}