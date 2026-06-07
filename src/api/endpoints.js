export const API = {
  AUTH: {
    SIGNUP: "/auth/signup",
    VERIFY: "/auth/verify-signup",
    LOGIN: "/auth/login",
    REFRESH: "/auth/refresh",
    SESSION: "/auth/session-check",
    PUSH: "/auth/register-push-token",
    LOGOUT: "/auth/logout",
    FORGOT: "/auth/forgot-password",
    RESET: "/auth/reset-password",
  },

  USERS: {
    ME: "/users/me",
    CURRENT_DEVICE: "/users/current-device",
  },

  QUESTIONS: {
    ALL: "/questions",
    DETAIL: (id) => `/questions/${id}`,
    SUBMIT: (id) => `/questions/${id}/submit`,
    QOTD: "/questions/qotd",
    FILTER: "/question/filter",
    FILTER_STATS: "/question/filter/stats",
    SEED: "/questions/seed",
  },

  ATTEMPTS: {
    ALL: "/attempts",
    STATS: "/attempts/stats",
  },

  STREAKS: {
    ME: "/streaks/me",
    CALENDAR: "/streaks/me/calendar",
    STATS: "/streaks/me/stats",
  },

  YOUTUBE: {
    BASE: "/youtube-videos",
    DETAIL: (id) => `/youtube-videos/${id}`,
    LATEST: "/youtube-videos/latest",
    SUGGESTION: "/youtube-videos/suggestion",
    FILTER: "/youtube-videos/filter",
    CHAPTERS: "/youtube-videos/chapters",
    EMBED: (id) => `/video/embed/${id}`,
  },

  DOUBT: {
    POSTS: "/doubt-forum/posts",
    DETAIL: (id) => `/doubt-forum/posts/${id}`,
    FILTER: "/doubt-forum/posts/filter",
    LIKE: (id) => `/doubt-forum/posts/${id}/like`,
    DISLIKE: (id) => `/doubt-forum/posts/${id}/dislike`,
    BOOKMARK: (id) => `/doubt-forum/posts/${id}/bookmark`,
    SOLVE: (id) => `/doubt-forum/posts/${id}/solve`,
    COMMENTS: "/doubt-forum/comments",
    COMMENT: (id) => `/doubt-forum/comments/${id}`,
  },

  CLASS: {
    ALL: "/class",
    DETAIL: (id) => `/class/${id}`,
    SUBJECTS: (id) => `/class/${id}/subjects`,
  },

  SUBJECT: {
    ALL: "/subjects",
    DETAIL: (id) => `/subjects/${id}`,
    CHAPTERS: (id) => `/subjects/${id}/chapters`,
  },

  CHAPTER: {
    ALL: "/chapters",
    DETAIL: (id) => `/chapters/${id}`,
  },

  TOPIC: {
    ALL: "/topics",
    DETAIL: (id) => `/topics/${id}`,
    QUESTIONS: (id) => `/topics/${id}/questions`,
  },

  BOOKMARK: {
    ALL: "/bookmarks",
    DETAIL: (id) => `/bookmarks/${id}`,
    QUESTION: (id) => `/bookmarks/question/${id}`,
  },

  PYQ: {
    ALL: "/pyq",
    YEARS: "/pyq/years",
    DETAIL: (id) => `/pyq/${id}`,
    QUESTION: (id) => `/pyq/question/${id}`,
  },

  LEADERBOARD: {
    TOP_PERFORMERS: "/leaderboard/top-performers",
    BEST_RATING: "/leaderboard/best-rating",
    TOP_RATING: "/leaderboard/top-rating",
    BEST_DELTA: "/leaderboard/best-delta",
    TOP_DELTA: "/leaderboard/top-delta",
    BEST_QUESTIONS: "/leaderboard/best-questions",
    TOP_QUESTIONS: "/leaderboard/top-questions",
    BEST_STREAK: "/leaderboard/best-streak",
  },

  RANKING: {
    ARENA: "/arena-ranking",
    STREAK: "/streak-ranking",
    CONTEST: "/contest-ranking",
    CONTEST_DETAIL: (id) => `/contest-ranking/${id}`,
    RATING: "/rating-ranking",
  },

  CONTEST: {
    ALL: "/contests",
    SUBMIT: "/contests/submit",
    QUESTIONS: (id) => `/contests/${id}/questions`,
    LEADERBOARD: (contestId, userId) =>
      `/contests/${contestId}/leaderboard/${userId}`,
    HAS_ATTEMPTED: (id) => `/contests/${id}/has-attempted`,
  },
};

// CUSTOM_TEST
