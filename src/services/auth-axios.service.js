import {AxiosService} from "@/services/remote/base/axios.service";

function login(loginDto) {
    return AxiosService.post(`${process.env.BACKEND_URL}auth/user/login`, loginDto);
}

function register(user) {
    return AxiosService.post('/users', user);
}

export const AuthAxiosService = {
    login,
    register,
};
