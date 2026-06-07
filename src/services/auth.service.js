import api from "../api/axios";
import { API } from "../api/endpoints";
import { tokenManager } from "../api/tokenManager";

export const authService = {

    signup(data) {
        return api.post(
            API.AUTH.SIGNUP,
            data
        );
    },

    verifySignup(data) {
        return api.post(
            API.AUTH.VERIFY,
            data
        );
    },

    async login(data) {

        const res = await api.post(
            API.AUTH.LOGIN,
            data
        );

        tokenManager.setTokens(
            res.data
        );

        return res;
    },

    refresh(refresh_token) {

        return api.post(
            API.AUTH.REFRESH,
            {
                refresh_token
            }
        );

    },

    sessionCheck() {

        return api.get(
            API.AUTH.SESSION
        );

    },

    registerPushToken(data) {

        return api.post(
            API.AUTH.PUSH,
            data
        );

    },

    async logout() {

        const res = await api.post(
            API.AUTH.LOGOUT
        );

        tokenManager.clear();

        return res;

    },

    forgotPassword(data) {

        return api.post(
            API.AUTH.FORGOT,
            data
        );

    },

    resetPassword(data) {

        return api.post(
            API.AUTH.RESET,
            data
        );

    }

};