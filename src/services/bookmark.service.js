import api from "../api/axios";
import { API } from "../constants/api";

export const bookmarkService = {
  getAll() {
    return api.get(API.BOOKMARK.ALL);
  },

  create(data) {
    return api.post(API.BOOKMARK.ALL, data);
  },

  getById(id) {
    return api.get(API.BOOKMARK.DETAIL(id));
  },

  remove(id) {
    return api.delete(API.BOOKMARK.DETAIL(id));
  },

  removeByQuestion(id) {
    return api.delete(API.BOOKMARK.QUESTION(id));
  },
};