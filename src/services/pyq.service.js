import api from "../api/axios";
import { API } from "../constants/api";

export const pyqService = {
  years() {
    return api.get(API.PYQ.YEARS);
  },

  getAll(params) {
    return api.get(API.PYQ.ALL, { params });
  },

  create(data) {
    return api.post(API.PYQ.ALL, data);
  },

  getById(id) {
    return api.get(API.PYQ.DETAIL(id));
  },

  update(id, data) {
    return api.put(API.PYQ.DETAIL(id), data);
  },

  remove(id) {
    return api.delete(API.PYQ.DETAIL(id));
  },

  question(id) {
    return api.get(API.PYQ.QUESTION(id));
  },
};
