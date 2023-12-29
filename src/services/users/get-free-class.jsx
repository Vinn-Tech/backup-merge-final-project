import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getFreeClasses = async (id) => {
  const freeClasses = await http.get(`${API_ENDPOINT.FREE_CLASS}/${id}`);
  return freeClasses;
};