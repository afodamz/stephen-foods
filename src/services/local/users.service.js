import {AxiosService} from "@/services/axios.service";
import {AuthAxiosService} from "@/services/auth-axios.service";
import {JwtService} from "@/services/local/jwt.service";


const login = (loginDto) => {
    return AuthAxiosService.login(loginDto)
};

const register = (userObject) => {
    return AuthAxiosService.register(userObject);
};

const profile = (userObject) => {
    return AuthAxiosService.profile(userObject);
};

const logout = () => {
    JwtService.clearSession();
};

const init = () => {
    const user = JwtService.checkTokens();
    if (user) {
        AxiosService.setUser(user);
    }
};
const getUser = () => {
    return JwtService.checkTokens();
};
export const UsersService = {
    register, login, logout, init, getUser, profile
};
