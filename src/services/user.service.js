import api from "../api/axios";
import { API } from "../api/endpoints";

export const userService = {
  me() {
    return api.get(API.USERS.ME);
  },

  update(data) {
    return api.patch(API.USERS.ME, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  delete() {
    return api.delete(API.USERS.ME);
  },

  getUser(id) {
    return api.get(`/users/${id}`);
  },

  getRating() {
    return api.get("/users/me/rating");
  },

  getRatingGraph() {
    return api.get("/users/me/rating/graph");
  },
  
  list(params) {
    return api.get("/users", {
      params,
    });
  },

  // eslint-disable-next-line no-dupe-keys
  getRating(id) {
    return api.get(`/users/${id}/rating`);
  },

  updateRating(id, data) {
    return api.patch(`/users/${id}/rating`, data);
  },

  ratingGraph(id) {
    return api.get(`/users/${id}/rating/graph`);
  },

  adminDelete(mobile) {
    return api.delete(`/users/delete/${mobile}`);
  },
};
