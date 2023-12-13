import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getClasses = async (id) => {
  const getClassByID = await http.get(`${API_ENDPOINT.CLASSES}/${id}`);
  return getClassByID;
};