import api from "../api/axios";
import { API } from "../api/endpoints";

export const classService = {
  getAll() {
    return api.get(API.CLASS.ALL);
  },

  get(id) {
    return api.get(API.CLASS.DETAIL(id));
  },

  create(data) {
    return api.post(API.CLASS.ALL, data);
  },

  delete(id) {
    return api.delete(API.CLASS.DETAIL(id));
  },

  subjects(id) {
    return api.get(API.CLASS.SUBJECTS(id));
  },
};