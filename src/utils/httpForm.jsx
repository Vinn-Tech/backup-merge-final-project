import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";

const httpForm = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 30000,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  },
});

httpForm.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${
      CookieStorage.get(CookieKeys.AuthToken)
        ? CookieStorage.get(CookieKeys.AuthToken)
        : ""
    }`,
  };
  return config;
});
export default httpForm;
