import axios from "axios";
// import { CookieKeys, CookieStorage } from "./cookies";

// ${
//       CookieStorage.get(CookieKeys.AuthToken)
//         ? CookieStorage.get(CookieKeys.AuthToken)
//         : ""
//     }
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlODk3ODgwLWRiNmMtNGU5MC1hYjY3LWU3ODMwOTk1M2IzNCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzMjE5NjYyfQ.WVPma5PuGuVnKrzrVfb8LhwrVVkAzWFC8-YJuDsAL0o`,
  };
  return config;
});
export default http;
