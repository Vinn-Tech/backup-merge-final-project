export const API_ENDPOINT = {
  REGISTER_PAGE: "api/auth/register",
  CREATE_CLASS: "/api/classes",
  GET_CLASS: "api/classes",
  EDIT_CLASS: "api/classes/",
  DELETE_CLASS: "api/classes/",
  ALL_USER: "api/users",
  CREATE_CHAPTERS: "api/classes/chapters",
  EDIT_CHAPTERS: "api/classes/chapters/",
  LOGIN_USER: "api/auth/login",
  LOGIN_ADMIN: "api/auth/login",
  FORGOT_PASSWORD: "api/auth/forgot-password",
  RESET_PASSWORD: "api/auth/reset-password",
  NOTIFICATIONS: "api/users/notifications",
  GET_USER: "api/users",
  GET_ME: "/api/auth/authenticated",
  UPDATE_PROFILE: "api/profiles",
  SEARCH: (query) => {
    return `/api/classes?search=${query}`;
  },
  AUTHENTICATED: "api/auth/authenticated",
  CLASSES: "api/classes",
  PAYMENTS: "api/payments",
  UPDATE_PAYMENTS: "api/payments/paid",
  WATCHED_VIDEOS: "api/users/videos/watched",
  KATEGORI: "/api/general/categories",
  ALL_CLASS: "/api/classes",
  FREE_CLASS: (id) => {
    return `/api/users/class/access/free/${id}`;
  },
  CLASS_CATEGORY: (id) => {
    return `/api/classes?category=${id}`;
  },
  ALL_PAYMENT: "api/payments",
  DELETE_CHAPTER: "api/classes/chapters/",
  VIDEOS:"api/classes/chapters/videos/",
  SEARCH_MYCLASS : (query) => { return `/api/auth/authenticated?search=${query}`},
};
