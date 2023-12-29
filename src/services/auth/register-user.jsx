import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const postRegister = async (input) => {
  const registerUser = await http.post(API_ENDPOINT.REGISTER_PAGE, input);
  return registerUser;
};

