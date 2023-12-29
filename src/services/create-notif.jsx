import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const postNotif = async (input) => {
  const createNotif = await http.post(API_ENDPOINT.NOTIFICATIONS, input);
  return createNotif;
};
