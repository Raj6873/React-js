import { NavLink, useLoaderData } from "react-router";
import { useNavigate } from "react-router";
import { productAPIServices, type ProductType } from "../../Service/ProductAPIService";
import { Pencil, Trash2, Plus, PenBox } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AdminViewProducts() {
  const showProduct: ProductType[] = useLoaderData() || [];
  const [allProducts, setAllProducts] = useState(showProduct);
  const navigator = useNavigate();

  const deleteProduct = async (id: string) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (await productAPIServices.deleteproduct(id)) {
        setAllProducts(await productAPIServices.fetchAllProducts());
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      } else {
        Swal.fire("Failed!", "Could not delete product.", "error");
      }
    }
  });
};


  return (
    <div className="bg-gradient-to-br from-gray-100 via-indigo-50 to-gray-200 min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r bg-blue-600 bg-clip-text text-transparent">
            Admin – Manage Products
          </h1>
          <NavLink
            to={"/add-product"}
            className="flex items-center gap-2 bg-gradient-to-r bg-blue-600 text-white px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            <Plus size={18} /> Add Product
          </NavLink>
        </div>

        {/* Responsive Layout: Table on large screens, Cards on small */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-lg bg-white/70 backdrop-blur-xl">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-700 text-xs uppercase sticky top-0">
              <tr>
                <th className="px-5 py-3 text-left">#</th>
                <th className="px-5 py-3 text-left">Product</th>
                <th className="px-5 py-3 text-left">Category</th>
                <th className="px-5 py-3 text-left">Stock</th>
                <th className="px-5 py-3 text-left">Price</th>
                <th className="px-5 py-3 text-left">Old Price</th>
                <th className="px-5 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allProducts.length > 0 ? (
                allProducts.map((product, index) => (
                  <tr
                    key={product.id}
                    className="hover:bg-indigo-50/70 transition"
                  >
                    <td className="px-5 py-4 text-gray-600">{index + 1}</td>

                    {/* Product Column */}
                    <td className="px-5 py-4 flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 rounded-xl object-cover shadow-md"
                      />
                      <span className="font-semibold text-gray-900">
                        {product.name}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="px-5 py-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-medium shadow-sm">
                        {product.category}
                      </span>
                    </td>

                    {/* Stock */}
                    <td className="px-5 py-4">
                      {product.stock > 0 ? (
                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium shadow-sm">
                          {product.stock} in stock
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium shadow-sm">
                          Out of stock
                        </span>
                      )}
                    </td>

                    {/* Prices */}
                    <td className="px-5 py-4 font-semibold text-green-600">
                      ₹{product.price}
                    </td>
                    <td className="px-5 py-4 line-through text-gray-400">
                      ₹{Number(product.price) + 500}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4 flex items-center justify-center gap-3">
                      <button
                        onClick={() => navigator(`/edit-product/${product.id}`)}
                        className="w-9 h-9 flex items-center justify-center bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition shadow"
                      >
                        <PenBox size={16} />
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="w-9 h-9 flex items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-8 text-gray-500 font-medium"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-5 hover:scale-[1.02] transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl mb-4 shadow"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <p className="font-semibold text-green-600">
                ₹{product.price}{" "}
                <span className="line-through text-gray-400 text-sm ml-2">
                  ₹{Number(product.price) + 500}
                </span>
              </p>
              <p
                className={`mt-2 text-xs font-medium px-3 py-1 inline-block rounded-full shadow-sm ${product.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}
              >
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => navigator(`/edit-product/${product.id}`)}
                  className="flex-1 flex items-center justify-center gap-1 bg-yellow-400 text-white px-3 py-2 rounded-lg hover:bg-yellow-500 transition text-sm shadow"
                >
                  <Pencil size={15} />
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="flex-1 flex items-center justify-center gap-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition text-sm shadow"
                >
                  <Trash2 size={15} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}
