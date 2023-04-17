import { LocalStorageService } from "./base/local-storage.service";
import { JwtService } from "@/services/local/jwt.service";
import { AxiosService } from "@/services/axios.service";

const WISHLIST_KEY = 'wishlist';


export const WishlistService = {

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
    // addItem(product) {
    //     console.log("prod", product)
    //     console.log("prod", LocalStorageService.get(WISHLIST_KEY))
    //     let cartItems = JSON.parse(LocalStorageService.get(WISHLIST_KEY)) || [];

    //     if (cartItems.length == 0){
    //         cartItems.push(product);
    //     }else{
    //         let cartItem = cartItems.find(ci => ci.id === product.id);
    //         // If it will be a change then proceed to save and notify the observers
    //         if (!cartItem) {
    //             cartItems.push(cartItem);
    //         }
    //     }
    //     localStorage.setItem(WISHLIST_KEY, JSON.stringify(cartItems));

    //     return cartItems;
    // },
    async addItem(product) {
        const isAuth = JwtService.checkTokens();
        if (isAuth) {
            // send data to backend
            const body = { productId: product };
            const response = await AxiosService.authPost(`${process.env.BACKEND_URL}wishlist/add`, body);
            const { result } = response.data;
            return result
        } else {
            let wishlistItems = JSON.parse(LocalStorageService.get(WISHLIST_KEY)) || [];
            if (wishlistItems.length == 0) {
                wishlistItems.push(product);
            } else {
                let wishlistItem = wishlistItems.find(ci => ci === product);
                // If it will be a change then proceed to save and notify the observers
                if (!wishlistItem) {
                    wishlistItems.push(wishlistItem);
                }
            }
            localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistItems));
            // return wishlistItems;
            const response = AxiosService.authGet(`${process.env.BACKEND_URL}wishlist/public?productIds=${wishlistItems}`);
            const { result } = response.data;
            return result
        }
    },

    async getWishlist() {
        if (typeof window !== "undefined") {
            const isAuth = JwtService.checkTokens();
            if (isAuth) {
                const response = await AxiosService.authGet(`${process.env.BACKEND_URL}wishlist/`);
                const { result } = response.data;
                return result
            } else {
                if (LocalStorageService.get(WISHLIST_KEY)) {
                    const cart = JSON.parse(LocalStorageService.get(WISHLIST_KEY));
                    // return cart;
                    return AxiosService.authGet(`${process.env.BACKEND_URL}wishlist/public?productIds=${cart}`);
                }
            }
        }
        return []
    },
    async removeItem(product) {
        const isAuth = JwtService.checkTokens();
        if (isAuth) {
            // send data to backend
            const response = await AxiosService.delete(`${process.env.BACKEND_URL}wishlist/removeProduct/${product}`);
            const { result } = response.data;
            return result
        } else {
            if (LocalStorageService.get(WISHLIST_KEY)) {
                let wishlistItems = JSON.parse(LocalStorageService.get(WISHLIST_KEY));
                /*
                const index = cartItems.findIndex(ci => ci.id === product.id);
                cartItems.splice(index, 1);
                */
                // or even better:
                wishlistItems = wishlistItems.filter(ci => ci !== product);
                LocalStorageService.set(WISHLIST_KEY, JSON.stringify(wishlistItems));
                // return wishlistItems;
                return AxiosService.authGet(`${process.env.BACKEND_URL}wishlist/public?productIds=${wishlistItems}`);
            }
        }
        // this should never happen actually
        // return [];
    },
    emptyWishlist() {
        if (typeof window !== 'undefined') {
            const isAuth = JwtService.checkTokens();
            if (isAuth) {
                // send data to backend
                return AxiosService.delete(`${process.env.BACKEND_URL}wishlist/empty`);
            } else {
                LocalStorageService.remove(WISHLIST_KEY);
            }
        }
    },
};
