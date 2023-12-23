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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVmZDNjMWMzLTBlN2YtNDg2OS05NWRmLTJhZTBjM2ZmYzdhOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzMjc5OTgyfQ.kO6fZjvvU-Wr761Z_QBOD4Vqp3M8uch_boSuhoGpe9w`,
  };
  return config;
});
export default http;
