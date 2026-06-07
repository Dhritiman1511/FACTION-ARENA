import api from "./axios";
import { tokenManager } from "./tokenManager";

let isRefreshing = false;

let queue = [];

const processQueue = (token) => {
  queue.forEach((cb) => cb(token));
  queue = [];
};

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          queue.push((token) => {
            original.headers.Authorization = `Bearer ${token}`;

            resolve(api(original));
          });
        });
      }

      isRefreshing = true;

      try {
        const refresh = tokenManager.getRefreshToken();

        const res = await api.post("/auth/refresh", {
          refresh_token: refresh,
        });

        tokenManager.setTokens(res.data);

        processQueue(res.data.access_token);

        original.headers.Authorization = `Bearer ${res.data.access_token}`;

        return api(original);
      } catch {
        tokenManager.clear();

        window.location.href = "/login";
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
