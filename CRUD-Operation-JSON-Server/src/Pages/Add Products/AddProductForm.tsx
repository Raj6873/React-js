import { useState } from "react";
import { productAPIServices } from "../../Service/ProductAPIService";

export default function AddProductForm() {
  const [addProductData, setAddProductData] = useState({
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "",
    price: "",
    image: "",
    category: "",
    stock: "",
    brand: "",
    rating: "",
    reviews: "",
    warranty: "",
    features: "",
    description: "",
  });

  const handleChange = (event: any) => {

    const { name, value } = event.target;
    setAddProductData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // console.log(addProductData);
    const status = await productAPIServices.addNewProduct(addProductData);

    if (status) {
      console.log("Add product Successful");

      setAddProductData({
        id: Math.floor(Math.random() * 1000000).toString(),
        name: "",
        price: "",
        image: "",
        category: "",
        stock: "",
        brand: "",
        rating: "",
        reviews: "",
        warranty: "",
        features: "",
        description: "",
      })
    }
    else {
      console.log("Failed to add product")
    }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Add New Product
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Product Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">Product Name</label>
            <input
              type="text"
              name="name"
              value={addProductData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={addProductData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">Product Image</label>
            <input
              type="text"
              name="image"
              value={addProductData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category & Stock */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-800">Category</label>
              <select
                name="category"
                value={addProductData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select category</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Kitchen</option>
                <option>Books</option>
                <option>Others</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-800">Stock</label>
              <input
                type="number"
                name="stock"
                value={addProductData.stock}
                onChange={handleChange}
                placeholder="Enter stock quantity"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Brand & Rating */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-800">Brand</label>
              <input
                type="text"
                name="brand"
                value={addProductData.brand}
                onChange={handleChange}
                placeholder="Enter brand"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-800">Rating</label>
              <input
                type="number"
                name="rating"
                value={addProductData.rating}
                onChange={handleChange}
                placeholder="Enter rating"
                step="0.1"
                min="0"
                max="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Reviews & Warranty */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-800">Reviews</label>
              <input
                type="number"
                name="reviews"
                value={addProductData.reviews}
                onChange={handleChange}
                placeholder="Number of reviews"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-800">Warranty</label>
              <input
                type="text"
                name="warranty"
                value={addProductData.warranty}
                onChange={handleChange}
                placeholder="Enter warranty info"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">Features</label>
            <textarea
              name="features"
              value={addProductData.features}
              onChange={handleChange}
              placeholder="Enter features separated by commas"
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">Description</label>
            <textarea
              name="description"
              value={addProductData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
