class ProductAPIService {
    productURL: string = "http://localhost:3000/products/";
    cartURL: string = "http://localhost:3000/cart/";

    //fech all products
    async fetchAllProducts() {
        const res = await fetch(this.productURL);
        const data = await res.json();
        // console.log("productapiservice", data);
        return data;
    }

    //add product data
    async addNewProduct(body: any) {
        const res = await fetch(this.productURL, {
            method: "POST",
            body: JSON.stringify(body),
        });

        return res.ok;
    }

    //delete product data
    async deleteproduct(id: string) {
        const res = await fetch(this.productURL + id, {
            method: "DELETE",
        });
        return res.ok;
    }

    //fetch single product data for update
    async fetchSingleProduct(id: string) {
        const res = await fetch(this.productURL + id);
        return await res.json();
    }

    async updateProduct(id: string, body: any) {
        const res = await fetch(this.productURL + id, {
            method: "PATCH",
            body: JSON.stringify(body),
        })
        return res.ok;
    }

    //fetch single product data
    async fetchProductById(id: string) {
        const res = await fetch(this.productURL + id);
        const data = await res.json();
        return data;
    }

    // Fetch Cart
    async fetchCart() {
        const res = await fetch(this.cartURL);
        return await res.json();
    }

    // Add item to cart
    async addToCart(item: any) {
        const res = await fetch(this.cartURL, {
            method: "POST",
            body: JSON.stringify(item),
        });
        return res.ok;
    }

    // Update cart item (like quantity)
    async updateCartItem(id: string, body: any) {
        const res = await fetch(this.cartURL + id, {
            method: "PATCH",
            body: JSON.stringify(body),
        });
        return res.ok;
    }

    // Remove cart item
    async removeCartItem(id: string) {
        const res = await fetch(this.cartURL + id, { method: "DELETE" });
        return res.ok;
    }
}

export interface ProductType {
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
    stock: number;
    description: string;
}

export interface CartType {
    id: string;
    productId: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}


export const productAPIServices = new ProductAPIService();