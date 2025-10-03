import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/Home/HomePage";
import AddProductForm from "../Pages/Add Products/AddProductForm";
import AdminViewProducts from "../Pages/View Products/ViewProductPage";
import ContactPage from "../Pages/Contacts/ContactPage";
import EditProductPage from "../Pages/Edit Products/EditProductPage";
import ProductDetailsPage from "../Pages/View Products/ProductDetailPage";
import { productAPIServices } from "../Service/ProductAPIService";
import AddToCartPage from "../Pages/Add To Cart/AddToCartPage";

export const myRoutes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children:[
            {
                index: true,
                loader:async () => {
                    return await productAPIServices.fetchAllProducts();
                },
                Component: HomePage
            },
            {
                path: 'add-product',
                Component:AddProductForm
            },
            {
                path: 'view-product',
                loader:async () => {
                    return await productAPIServices.fetchAllProducts();
                },
                Component: AdminViewProducts
            },
            {
                path: 'edit-product/:id',
                loader:async ({params}) => {
                    return await productAPIServices.fetchSingleProduct(params.id as string);
                },
                Component: EditProductPage
            },
            {
                path:'view-productDetail/:id',
                loader:async ({params}) => {
                    const id = params.id || "";
                    return await productAPIServices.fetchProductById(id);
                },
                Component: ProductDetailsPage
            },
            {
                path: 'contact',
                Component: ContactPage
            },
            {
                path: 'addToCart',
                loader: async () => {
                    return await productAPIServices.fetchCart();
                },
                Component: AddToCartPage
            }
        ]
    }
]);