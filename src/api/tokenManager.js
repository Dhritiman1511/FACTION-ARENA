import { STORAGE_KEYS } from "../constants/storageKeys";

export const tokenManager = {
    getAccessToken() {
        return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    },

    getRefreshToken() {
        return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    },

    getSessionId() {
        return localStorage.getItem(STORAGE_KEYS.SESSION_ID);
    },

    setTokens(data) {
        localStorage.setItem(
            STORAGE_KEYS.ACCESS_TOKEN,
            data.access_token
        );

        localStorage.setItem(
            STORAGE_KEYS.REFRESH_TOKEN,
            data.refresh_token
        );

        localStorage.setItem(
            STORAGE_KEYS.SESSION_ID,
            data.session_id
        );
    },

    clear() {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
    },
};