import { CookieStorageService } from "@/services/local/base/cookie-storage.service";
import { LocalStorageService } from "@/services/local/base/local-storage.service";
import { get } from '@/services/axios.service';


import jwt_decode from 'jwt-decode';
const USER_KEY = 'user';

export class JwtService {

    static getCacheValue(val) {
        // const user = CookieStorageService.get(val);
        // let userObject = JSON.parse(user);
        // return userObject ? userObject.accessToken : null;
        return CookieStorageService.get(val);
    }

    static checkTokens() {
        try {
            const token = this.getCacheValue('token');
            const refreshToken = this.getCacheValue('refreshToken');

            if (!token || !refreshToken) return false;

            const parsedToken = jwt_decode(token);
            const parsedRefreshToken = jwt_decode(refreshToken);

            if ((parsedToken.exp * 1000 <= Date.now())) {
                // redirect user to Login if token is expired
                if ((parsedRefreshToken.exp * 1000 <= Date.now())) {
                    this.clearSession('token')
                    this.clearSession('refreshToken')
                    return false
                } else {
                    // get refresh token
                    get(`/auth/refreshtoken?token=${refreshToken}`)
                        .then(res => {
                            console.log("token refresh response", res);
                            const token = res.data.token;
                            this.saveCacheValue("token", token);
                        })
                        .catch(err => {
                            console.log('err', err)
                            return false;
                        });
                }
            } else {
                return true;
            }
        } catch (error) {
            console.log("get token error", error)
        }

    }

    static saveCacheValue(key, val) {
        CookieStorageService.set(key, val);
    }

    static saveLocalStorage(key, val) {
        // LocalStorageService.set(key, JSON.stringify(user));
        LocalStorageService.set(key, JSON.stringify(val));
    }

    static getLocalStorage(key) {
        return JSON.parse(LocalStorageService.get(key));
    }

    static clearSession(key) {
        CookieStorageService.clear(key);
    }

    static isAuthenticated() {
        return this.getUser() != null;
    }

    static isNotAuthenticated() {
        return !this.isAuthenticated();
    }
}
