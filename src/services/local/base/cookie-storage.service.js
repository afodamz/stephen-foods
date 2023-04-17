import Cookies from 'js-cookie';

export const CookieStorageService = {
    get(key) {
        return Cookies.get(key);
    },
    set(key, value) {
        Cookies.set(key, value);
    },
    remove(key) {
        Cookies.remove(key);
    },
    clear(key) {
        Cookies.remove(key);
    },
    delete(key) {
        Cookies.remove(key);
    },
    removeItem(key) {
        Cookies.remove(key);
    },
    deleteItem(key) {
        Cookies.remove(key);
    },
};
