import axios from "axios";
import { JwtService } from "@/services/local/jwt.service";

let cachedUser = {};
export const setUser = (user) => {
    cachedUser = user;
};

// return an axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    responseType: 'json',
    responseEncoding: 'utf8'
});

axiosInstance.interceptors.request.use((config) => {

    if (cachedUser.username)
        config.headers.authorization = "Bearer " + cachedUser.token;

    return config;
}, function (error) {
    return Promise.reject(error);
});


function fetchPage(path, query = { page: 1, page_size: 12 }) {
    return axios.get(`${path}?page=${query.page}&page_size=${query.page_size}`)
}

function get(path) {
    return axios.get(path)
}

function authGet(url) {
    const AuthStr = 'Bearer '.concat(JwtService.getCacheValue('token'));
    return axios.get(url, { headers: { Authorization: AuthStr } })
}

function post(path, data) {
    return axios.post(path, data);
}

function authPost(url, payload) {
    console.log('payload',payload)
    const AuthStr = 'Bearer '.concat(JwtService.getCacheValue('token'));
    return axios.post(url, payload, { headers: { Authorization: AuthStr } })
}

function put(formData, url) {
    const AuthStr = 'Bearer '.concat(JwtService.getCacheValue('token'));
    return axios.put(url, formData, { headers: { Authorization: AuthStr } })
    // .then((res) => res) //! the then and catch is done insdie actionFunction
}

function _delete(url) {
    const AuthStr = 'Bearer '.concat(JwtService.getCacheValue('token'));
    return axios.delete(url, { headers: { Authorization: AuthStr } })
    //.then((res) => res)
}

export const AxiosService = {
    axiosInstance, get, authGet, post, authPost, put, delete: _delete, setUser, fetchPage
};
