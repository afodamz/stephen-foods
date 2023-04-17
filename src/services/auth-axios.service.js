import {AxiosService} from "@/services/axios.service";

function login(loginDto) {
    return AxiosService.post(`${process.env.BACKEND_URL}auth/user/login`, loginDto);
}

function register(user) {
    return AxiosService.post(`${process.env.BACKEND_URL}auth/user/register`, user);
}

function profile() {
    return AxiosService.authGet(`${process.env.BACKEND_URL}auth/user/profile`);
}

export const AuthAxiosService = {
    login,
    register,
    profile
};
