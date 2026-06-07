import axios from "axios";
import { tokenManager } from "./tokenManager";
import { requestManager, createRequestKey } from "./requestManager";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Existing auth logic
    const token = tokenManager.getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // NEW: Duplicate request prevention
    const controller = new AbortController();

    const key = createRequestKey({
      method: config.method,
      url: config.url,
      params: config.params,
      data: config.data,
    });

    requestManager.cancel(key);
    requestManager.add(key, controller);

    config.signal = controller.signal;
    config.requestKey = key;

    return config;
  },

  (error) => Promise.reject(error),
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    requestManager.clear(response.config.requestKey);

    return response;
  },

  (error) => {
    if (error.config) {
      requestManager.clear(error.config.requestKey);
    }

    return Promise.reject(error);
  },
);

export default api;
