import { LocalStorageService } from "./base/local-storage.service";

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
    addItem(product) {
        console.log("prod", product)
        console.log("prod", LocalStorageService.get(WISHLIST_KEY))
        let cartItems = JSON.parse(LocalStorageService.get(WISHLIST_KEY)) || [];
        
        if (cartItems.length == 0){
            cartItems.push(product);
        }else{
            let cartItem = cartItems.find(ci => ci.id === product.id);
            // If it will be a change then proceed to save and notify the observers
            if (!cartItem) {
                cartItems.push(cartItem);
            }
        }
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(cartItems));

        return cartItems;
    },

    getCart() {
        if (typeof window !== "undefined") {
            if (LocalStorageService.get(WISHLIST_KEY)) {
                const cart = JSON.parse(LocalStorageService.get(WISHLIST_KEY));
                return cart;
            }
        }
        return []
    },
    removeItem(product) {
        if (LocalStorageService.get(WISHLIST_KEY)) {
            let cartItems = JSON.parse(LocalStorageService.get(WISHLIST_KEY));

            /*
            const index = cartItems.findIndex(ci => ci.id === product.id);
            cartItems.splice(index, 1);
            */
            // or even better:
            cartItems = cartItems.filter(ci => ci.id !== product.id);
            LocalStorageService.set(WISHLIST_KEY, JSON.stringify(cartItems));
            return cartItems
        }
        // this should never happen actually
        debugger;
        return [];
    },
    emptyCart() {
        if (typeof window !== 'undefined') {
            LocalStorageService.remove(WISHLIST_KEY);
        }
    },
};
