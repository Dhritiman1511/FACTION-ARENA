import api from "./axios";

export const createCRUDService = (basePath) => ({

    getAll(params = {}) {
        return api.get(basePath, { params });
    },

    getById(id) {
        return api.get(`${basePath}/${id}`);
    },

    create(data, config = {}) {
        return api.post(basePath, data, config);
    },

    update(id, data, config = {}) {
        return api.put(`${basePath}/${id}`, data, config);
    },

    patch(id, data, config = {}) {
        return api.patch(`${basePath}/${id}`, data, config);
    },

    remove(id) {
        return api.delete(`${basePath}/${id}`);
    }

});