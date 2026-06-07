import api from "../api/axios";
import { API } from "../api/endpoints";
import { buildQuery } from "../utils/queryBuilder";
import { createCRUDService } from "../api/baseService";

const base = createCRUDService(API.YOUTUBE.BASE);

export const youtubeVideoService = {
  ...base,

  getAll(filters = {}) {
    return api.get(
      API.YOUTUBE.BASE,

      {
        params: buildQuery(filters),
      },
    );
  },

  getById(id) {
    return api.get(API.YOUTUBE.DETAIL(id));
  },

  create(data) {
    return api.post(API.YOUTUBE.BASE, data);
  },

  update(id, data) {
    return api.put(API.YOUTUBE.DETAIL(id), data);
  },

  remove(id) {
    return api.delete(API.YOUTUBE.DETAIL(id));
  },

  latest() {
    return api.get(API.YOUTUBE.LATEST);
  },

  suggestion() {
    return api.get(API.YOUTUBE.SUGGESTION);
  },

  filter(filters = {}) {
    return api.get(
      API.YOUTUBE.FILTER,

      {
        params: buildQuery(filters),
      },
    );
  },

  chapters(classId) {
    return api.get(
      API.YOUTUBE.CHAPTERS,

      {
        params: {
          class_id: classId,
        },
      },
    );
  },

  embedUrl(videoId) {
    return `${import.meta.env.VITE_API_URL}${API.YOUTUBE.EMBED(videoId)}`;
  },
};
