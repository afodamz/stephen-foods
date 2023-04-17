import { AuthAction, NotificationAction } from '../types.actions'
import { JwtService } from "@/services/local/jwt.service";
import { UsersService } from "@/services/local/users.service";
import router from '../../router';

const state = {
    isLoggedIn: !!JwtService.getCacheValue('token'),
    isRegistering: false,
    isRegistered: false,
    isLoggingIn: false,
    user: {},
    profile: {},
    errors: {}
};

const mutations = {
    //[AuthAction.SET_USER](state, user) {
    'SET_USER'(state, user) {
        JwtService.saveLocalStorage('user', user);
        state.isLoggedIn = true;
        state.user = user;
        state.errors = {};
    },
    'SET_PROFILE'(state, profile) {
        state.profile = profile;
    },
    'LOGOUT'(state) {
        JwtService.clearSession();
        state.isLoggedIn = false;
        state.user = {};
        state.errors = {};
    },
    'IS_REGISTERING'(state, boolean) {
        state.isRegistering = boolean;
    },
    'IS_REGISTERED'(state, boolean) {
        state.isRegistered = boolean;
    },
    [AuthAction.IS_LOGGING_IN](state, boolean) {
        state.isLoggingIn = boolean;
    },
    [AuthAction.IS_LOGGED_IN](state, boolean) {
        state.isLoggedIn = boolean;
    }
};

const actions = {
    async login({ commit }, loginDto) {
        commit('IS_LOGGING_IN', true);
        UsersService.login(loginDto)
            .then(({ data }) => {
                console.log(data)
                if (!data.error) {
                    // commit(`notification/${NotificationAction.SHOW_TOAST_SUCCESS}`, 'Logged in successfully', {root: true});
                    commit('IS_LOGGED_IN', true);
                    commit(`notification/${NotificationAction.SHOW_TOAST_SUCCESS}`, 'Logged in successfully');
                    // let {accessToken, refreshToken} = data
                    // data.token = data.token;
                    const { tokens, user } = data
                    const { accessToken, refreshToken } = tokens;
                    commit('SET_USER', user);
                    JwtService.saveCacheValue('token', accessToken);
                    JwtService.saveCacheValue('refreshToken', refreshToken);
                    router.push("/");
                } else {
                    commit('IS_LOGGING_IN', false);
                    commit(`notification/${NotificationAction.SHOW_TOAST_ERROR}`, 'Unable to login');
                }
            })
            .catch(error => {
                console.log("error", error)
                commit(`notification/${NotificationAction.SHOW_TOAST_ERROR}`, 'Error with login credentials');
                // commit(AuthAction.LOGIN_FAILURE, error.message);
            });
    },
    async getProfile({ commit }) {
        UsersService.profile()
            .then(({ data }) => {
                console.log(data)
                if (data.error) {
                    commit(`notification/${NotificationAction.SHOW_TOAST_ERROR}`, 'Unable to login');
                } else {
                    commit('SET_PROFILE', data.result);
                }
            })
            .catch(error => {
                console.log("error", error)
                commit(`notification/${NotificationAction.SHOW_TOAST_ERROR}`, 'Error with login credentials');
                // commit(AuthAction.LOGIN_FAILURE, error.message);
            });
    },
    async logout({ commit }) {
        commit('LOGOUT');
        // commit(`notifications/${NotificationAction.SHOW_ALERT_SUCCESS}`, 'Logged out successfully \n we will be awaiting your comeback', {root: true});
        commit(`notifications/${NotificationAction.SHOW_ALERT_SUCCESS}`, 'Logged out successfully. \n We will be awaiting your comeback');
        router.push("/login");
    },

    async register({ commit }, registerDto) {
        commit(AuthAction.IS_REGISTERING, true);
        UsersService.register(registerDto)
            .then(({ data, status }) => {
                console.log("response", data)
                if (data.msg === 'User successfully created' && status === 201) {
                    commit('IS_REGISTERED', true);
                    commit(`notification/${NotificationAction.SHOW_TOAST_SUCCESS}`, 'User Created in successfully \n Please login with credentials');
                } else {
                    commit(`notification/${NotificationAction.SHOW_TOAST_ERROR}`, 'Unable to register user');
                }
            })
            .catch(({ error }) => {
                console.log("error", error)
                commit(`notification/${NotificationAction.SHOW_TOAST_ERROR}`, 'Error with login credentials');
            });
    },
};

const getters = {
    isLoggedIn: (state) => {
        return state.isLoggedIn;
    },
    currentUser: (state) => {
        if (state && state.user) {
            return state.user;
        } else {
            return {};
        }
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
