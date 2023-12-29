import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const postLoginAdmin = async (input) => {
  const loginAdmin = await http.post(API_ENDPOINT.LOGIN_ADMIN, input);
  return loginAdmin;
};
