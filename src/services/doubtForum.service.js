import api from "../api/axios";
import { API } from "../api/endpoints";
import { buildQuery } from "../utils/queryBuilder";
import { toFormData } from "../utils/uploadHelper";

export const doubtForumService = {
  getAll(filters = {}) {
    return api.get(
      API.DOUBT.POSTS,

      {
        params: buildQuery(filters),
      },
    );
  },

  filter(filters = {}) {
    return api.get(
      API.DOUBT.FILTER,

      {
        params: buildQuery(filters),
      },
    );
  },

  getById(id) {
    return api.get(API.DOUBT.DETAIL(id));
  },

  create(data) {
    return api.post(
      API.DOUBT.POSTS,

      toFormData(data),

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },

  remove(id) {
    return api.delete(API.DOUBT.DETAIL(id));
  },

  like(id) {
    return api.post(API.DOUBT.LIKE(id));
  },

  dislike(id) {
    return api.post(API.DOUBT.DISLIKE(id));
  },

  bookmark(id) {
    return api.post(API.DOUBT.BOOKMARK(id));
  },

  solve(id) {
    return api.patch(API.DOUBT.SOLVE(id));
  },

  createComment(data) {
    return api.post(
      API.DOUBT.COMMENTS,

      toFormData(data),

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },

  deleteComment(id) {
    return api.delete(API.DOUBT.COMMENT(id));
  },
};
