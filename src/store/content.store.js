import { create } from "zustand";

import {
  classService,
  subjectService,
  topicService,
  youtubeVideoService,
} from "../services";

const CACHE_TTL = 300000;

export const useContentStore = create((set, get) => ({
  classes: null,
  classesTime: null,
  subjects: {},
  chapters: {},
  topics: {},
  youtubeChapters: {},
  fetchPromises: {},

  fetchClasses: async (force = false) => {
    const state = get();

    if (
      !force &&
      state.classes &&
      state.classesTime &&
      Date.now() - state.classesTime < CACHE_TTL
    ) {
      return state.classes;
    }

    const key = "classes";

    if (!force && state.fetchPromises[key]) {
      return state.fetchPromises[key];
    }

    const promise = classService
      .getAll()
      .then((res) => {
        set({
          classes: res.data,
          classesTime: Date.now(),
        });

        return res.data;
      })
      .finally(() => {
        set((state) => {
          const next = { ...state.fetchPromises };

          delete next[key];

          return {
            fetchPromises: next,
          };
        });
      });

    set((state) => ({
      fetchPromises: {
        ...state.fetchPromises,
        [key]: promise,
      },
    }));

    return promise;
  },

  fetchSubjects: async (classId, force = false) => {
    const state = get();

    const cached = state.subjects[classId];

    if (!force && cached && Date.now() - cached.time < CACHE_TTL) {
      return cached.data;
    }

    const key = `subjects-${classId}`;

    if (!force && state.fetchPromises[key]) {
      return state.fetchPromises[key];
    }

    const promise = classService
      .subjects(classId)
      .then((res) => {
        set((state) => ({
          subjects: {
            ...state.subjects,

            [classId]: {
              data: res.data,

              time: Date.now(),
            },
          },
        }));

        return res.data;
      })
      .finally(() => {
        set((state) => {
          const next = { ...state.fetchPromises };

          delete next[key];

          return {
            fetchPromises: next,
          };
        });
      });

    set((state) => ({
      fetchPromises: {
        ...state.fetchPromises,
        [key]: promise,
      },
    }));

    return promise;
  },

  fetchChapters: async (subjectId, force = false) => {
    const state = get();

    const cached = state.chapters[subjectId];

    if (!force && cached && Date.now() - cached.time < CACHE_TTL) {
      return cached.data;
    }

    const key = `chapters-${subjectId}`;

    if (!force && state.fetchPromises[key]) {
      return state.fetchPromises[key];
    }

    const promise = subjectService
      .chapters(subjectId)
      .then((res) => {
        set((state) => ({
          chapters: {
            ...state.chapters,

            [subjectId]: {
              data: res.data,

              time: Date.now(),
            },
          },
        }));

        return res.data;
      })
      .finally(() => {
        set((state) => {
          const next = { ...state.fetchPromises };

          delete next[key];

          return {
            fetchPromises: next,
          };
        });
      });

    set((state) => ({
      fetchPromises: {
        ...state.fetchPromises,
        [key]: promise,
      },
    }));

    return promise;
  },

  fetchTopics: async (chapterId, force = false) => {
    const state = get();

    const cached = state.topics[chapterId];

    if (!force && cached && Date.now() - cached.time < CACHE_TTL) {
      return cached.data;
    }

    const key = `topics-${chapterId}`;

    if (!force && state.fetchPromises[key]) {
      return state.fetchPromises[key];
    }

    const promise = topicService
      .all({
        chapter_id: chapterId,
      })
      .then((res) => {
        set((state) => ({
          topics: {
            ...state.topics,

            [chapterId]: {
              data: res.data,

              time: Date.now(),
            },
          },
        }));

        return res.data;
      })
      .finally(() => {
        set((state) => {
          const next = { ...state.fetchPromises };

          delete next[key];

          return {
            fetchPromises: next,
          };
        });
      });

    set((state) => ({
      fetchPromises: {
        ...state.fetchPromises,
        [key]: promise,
      },
    }));

    return promise;
  },

  fetchYoutubeChapters: async (classId, force = false) => {
    const state = get();

    const cached = state.youtubeChapters[classId];

    if (!force && cached && Date.now() - cached.time < CACHE_TTL) {
      return cached.data;
    }

    const key = `youtube-chapters-${classId}`;

    if (!force && state.fetchPromises[key]) {
      return state.fetchPromises[key];
    }

    const promise = youtubeVideoService
      .chapters(classId)
      .then((res) => {
        set((state) => ({
          youtubeChapters: {
            ...state.youtubeChapters,

            [classId]: {
              data: res.data,

              time: Date.now(),
            },
          },
        }));

        return res.data;
      })
      .finally(() => {
        set((state) => {
          const next = { ...state.fetchPromises };

          delete next[key];

          return {
            fetchPromises: next,
          };
        });
      });

    set((state) => ({
      fetchPromises: {
        ...state.fetchPromises,
        [key]: promise,
      },
    }));

    return promise;
  },

  refreshClasses() {
    return get().fetchClasses(true);
  },

  refreshSubjects(id) {
    return get().fetchSubjects(id, true);
  },

  refreshChapters(id) {
    return get().fetchChapters(id, true);
  },

  refreshTopics(id) {
    return get().fetchTopics(id, true);
  },

  refreshYoutubeChapters(id) {
    return get().fetchYoutubeChapters(id, true);
  },

  getSubjects(classId) {
    return get().subjects[classId]?.data ?? [];
  },

  getChapters(subjectId) {
    return get().chapters[subjectId]?.data ?? [];
  },

  getTopics(chapterId) {
    return get().topics[chapterId]?.data ?? [];
  },

  getYoutubeChapters(classId) {
    return get().youtubeChapters[classId]?.data ?? [];
  },

  getClasses() {
    return get().classes ?? [];
  },

  clear() {
    set({
      classes: null,
      classesTime: null,
      subjects: {},
      chapters: {},
      topics: {},
      youtubeChapters: {},
      fetchPromises: {},
    });
  },
}));
