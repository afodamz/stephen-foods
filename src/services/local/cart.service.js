import { LocalStorageService } from "./base/local-storage.service";
import { JwtService } from "@/services/local/jwt.service";
import { AxiosService } from "@/services/axios.service";

const CART_KEY = 'cart';


export const CartService = {

    itemTotal() {
        if (typeof window !== 'undefined') {
            if (LocalStorageService.get()) {
                return JSON.parse(LocalStorageService.get('cart')).length
            }
        }
        return 0
    },

    /**
     * Adds an item or updates the quantity, if the cart item is in the cart, the new quantity will be
     * set to the given quantity param.
     * @param product
     * @param quantity
     * @returns {Array}
     */
    async addItem(product) {
        const isAuth = JwtService.checkTokens();
        if (isAuth) {
            // send data to backend
            const body = product;
            const response = await AxiosService.authPost(`${process.env.BACKEND_URL}cart/add`, body);
            const { result } = response.data;
            return result
        } else {
            let cartItems = JSON.parse(LocalStorageService.get(CART_KEY)) || [];
            if (cartItems.length == 0) {
                cartItems.push(product);
            } else {
                let cartItem = cartItems.find(ci => ci.id === product.id);
                // If it will be a change then proceed to save and notify the observers
                if ((cartItem && cartItem.quantity !== product.quantity) || !cartItem) {
                    if (cartItem) {
                        cartItem.quantity = product.quantity;
                        cartItem.totalPrice = Number(product.quantity) * (cartItem.price);
                    } else {
                        /* Clone the product, then trip out what we do not need
                        cartItem = Object.assign({}, product);
                        delete cartItem.stock;
                        delete cartItem.comments;
                        delete cartItem.tags;
                        delete cartItem.categories;
                        */
                        // or take what we need and build a new object
                        // const {id, name, slug, price, image_urls} = product;
                        cartItem = {
                            ...product, quantity: product.quantity, totalPrice: product.price
                        };

                        cartItems.push(cartItem);
                    }
                    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
                }
                const response = AxiosService.authGet(`${process.env.BACKEND_URL}cart/`);
                const { result } = response.data;
                return result
            }
            return cartItems;
        }

    },

    async getCart() {
        if (typeof window !== "undefined") {
            const isAuth = JwtService.checkTokens();
            if (isAuth) {
                const response = await AxiosService.authGet(`${process.env.BACKEND_URL}cart/`);
                const { result } = response.data;
                return result
            } else {
                if (LocalStorageService.get(CART_KEY)) {
                    const carts = JSON.parse(LocalStorageService.get(CART_KEY));
                    // return cart;
                    let cartItems = carts.map(cart => cart.id)
                    return AxiosService.authGet(`${process.env.BACKEND_URL}wishlist/public?productIds=${cartItems}`);
                }
            }
        }
        return []
    },

    async getOrders() {
        if (typeof window !== "undefined") {
            const isAuth = JwtService.checkTokens();
            if (isAuth) {
                const response = await AxiosService.authGet(`${process.env.BACKEND_URL}cart/orders`);
                const { result } = response.data;
                return result
            } else {
                return
            }
        }
        return []
    },

    async removeItem(product) {
        const isAuth = JwtService.checkTokens();
        if (isAuth) {
            const id = product.id;
            // send data to backend
            const response = await AxiosService.delete(`${process.env.BACKEND_URL}cart/removeProduct/${id}`);
            const { result } = response.data;
            return result
        } else {
            if (LocalStorageService.get(CART_KEY)) {
                let cartItems = JSON.parse(LocalStorageService.get(CART_KEY));

                /*
                const index = cartItems.findIndex(ci => ci.id === product.id);
                cartItems.splice(index, 1);
                */
                // or even better:
                cartItems = cartItems.filter(ci => ci.id !== product.id);
                LocalStorageService.set(CART_KEY, JSON.stringify(cartItems));
                return cartItems

            }
            // this should never happen actually
            // return [];
        }
    },

    emptyCart() {
        if (typeof window !== 'undefined') {
            LocalStorageService.remove(CART_KEY);
        }
    },
};
