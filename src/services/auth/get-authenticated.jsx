import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getAuthenticated = async () => {
  const getMe = await http.get(API_ENDPOINT.AUTHENTICATED);
  return getMe;
};