import { useState } from "react";
import { productAPIServices } from "../../Service/ProductAPIService";
import { useLoaderData, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import {
  ArrowLeft,
  Save,
  RotateCcw,
  Image,
  Package,
  Tag,
  Star,
  Shield,
  FileText,
  BarChart3,
  CheckCircle2
} from "lucide-react";

export default function EditProductPage() {
  const productData = useLoaderData();
  const navigator = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  const [addProductData, setAddProductData] = useState({
    id: productData.id,
    name: productData.name,
    price: productData.price,
    image: productData.image,
    category: productData.category,
    stock: productData.stock,
    brand: productData.brand,
    rating: productData.rating,
    reviews: productData.reviews,
    warranty: productData.warranty,
    features: productData.features,
    description: productData.description,
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAddProductData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (await productAPIServices.updateProduct(addProductData.id, addProductData)) {
        toast.success("🎉 Product updated successfully!");
        setTimeout(() => {
          navigator("/view-product");
        }, 1500);
      } else {
        toast.error("❌ Failed to update product");
      }
    } catch (error) {
      toast.error("❌ An error occurred while updating the product");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setAddProductData({
      id: productData.id,
      name: productData.name,
      price: productData.price,
      image: productData.image,
      category: productData.category,
      stock: productData.stock,
      brand: productData.brand,
      rating: productData.rating,
      reviews: productData.reviews,
      warranty: productData.warranty,
      features: productData.features,
      description: productData.description,
    });
    toast.info("🔄 Form reset to original values");
  };

  const tabs = [
    { id: "basic", label: "Basic Info", icon: <Package size={18} /> },
    { id: "pricing", label: "Pricing & Stock", icon: <Tag size={18} /> },
    { id: "media", label: "Media", icon: <Image size={18} /> },
    { id: "details", label: "Details", icon: <FileText size={18} /> },
  ];

  const FormInput = ({ label, name, type = "text", placeholder, icon, ...props }: any) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        {icon}
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={addProductData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          rows={props.rows || 4}
          {...props}
        />
      ) : type === "select" ? (
        <select
          name={name}
          value={addProductData[name]}
          onChange={handleChange}
          className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
          {...props}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {props.options?.map((option: string) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={addProductData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          {...props}
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigator(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors p-2 hover:bg-white rounded-xl"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Edit Product
            </h1>
            <p className="text-slate-600 mt-1">Update product information and details</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200/60 overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-slate-200/60">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap ${activeTab === tab.id
                        ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                        : "text-slate-600 hover:text-slate-800 hover:bg-slate-50/50"
                        }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                <div className="space-y-6">
                  {/* Basic Info Tab */}
                  {activeTab === "basic" && (
                    <div className="space-y-6">
                      <FormInput
                        label="Product Name"
                        name="name"
                        placeholder="Enter product name"
                        icon={<Package size={16} />}
                        required
                      />
                      <FormInput
                        label="Brand"
                        name="brand"
                        placeholder="Enter brand name"
                        icon={<Tag size={16} />}
                        required
                      />
                      <FormInput
                        label="Category"
                        name="category"
                        type="select"
                        icon={<BarChart3 size={16} />}
                        options={["Electronics", "Fashion", "Home & Kitchen", "Books", "Sports", "Health & Beauty", "Automotive", "Others"]}
                        required
                      />
                      <FormInput
                        label="Description"
                        name="description"
                        type="textarea"
                        placeholder="Enter detailed product description..."
                        icon={<FileText size={16} />}
                        rows={5}
                      />
                    </div>
                  )}

                  {/* Pricing & Stock Tab */}
                  {activeTab === "pricing" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput
                          label="Price (₹)"
                          name="price"
                          type="number"
                          placeholder="0.00"
                          icon={<Tag size={16} />}
                          min="0"
                          step="0.01"
                          required
                        />
                        <FormInput
                          label="Stock Quantity"
                          name="stock"
                          type="number"
                          placeholder="0"
                          icon={<Package size={16} />}
                          min="0"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput
                          label="Rating (0-5)"
                          name="rating"
                          type="number"
                          placeholder="4.5"
                          icon={<Star size={16} />}
                          min="0"
                          max="5"
                          step="0.1"
                        />
                        <FormInput
                          label="Number of Reviews"
                          name="reviews"
                          type="number"
                          placeholder="125"
                          icon={<BarChart3 size={16} />}
                          min="0"
                        />
                      </div>
                    </div>
                  )}

                  {/* Media Tab */}
                  {activeTab === "media" && (
                    <div className="space-y-6">
                      <FormInput
                        label="Product Image URL"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        icon={<Image size={16} />}
                        required
                      />
                      {addProductData.image && (
                        <div className="flex flex-col items-center">
                          <div className="bg-slate-100 rounded-2xl p-4 border-2 border-dashed border-slate-200">
                            <img
                              src={addProductData.image}
                              alt="Product preview"
                              className="max-w-48 max-h-48 object-contain rounded-lg"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                          <p className="text-sm text-slate-500 mt-2">Image Preview</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Details Tab */}
                  {activeTab === "details" && (
                    <div className="space-y-6">
                      <FormInput
                        label="Warranty Information"
                        name="warranty"
                        placeholder="e.g., 2 years manufacturer warranty"
                        icon={<Shield size={16} />}
                      />
                      <FormInput
                        label="Key Features"
                        name="features"
                        type="textarea"
                        placeholder="Enter key features separated by commas..."
                        icon={<CheckCircle2 size={16} />}
                        rows={4}
                      />
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t border-slate-200/60">
                  <button
                    type="button"
                    onClick={handleReset}
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <RotateCcw size={18} />
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save size={18} />
                        Update Product
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar - Product Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200/60 p-6 sticky top-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Eye size={18} />
                Quick Preview
              </h3>

              <div className="space-y-4">
                {addProductData.image && (
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                    <img
                      src={addProductData.image}
                      alt="Product preview"
                      className="w-full h-40 object-contain rounded-lg"
                    />
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg line-clamp-2">
                      {addProductData.name || "Product Name"}
                    </h4>
                    <p className="text-slate-600 text-sm">{addProductData.brand || "Brand"}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-800">
                      ₹{addProductData.price || "0"}
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                      In Stock: {addProductData.stock || "0"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span>⭐ {addProductData.rating || "0"}/5</span>
                    <span>•</span>
                    <span>{addProductData.reviews || "0"} reviews</span>
                  </div>

                  <div className="text-xs text-slate-500 line-clamp-2">
                    {addProductData.description || "Product description will appear here..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

// Add Eye icon component
const Eye = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);