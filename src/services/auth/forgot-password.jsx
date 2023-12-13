import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const postForgotPassword = async (input) => {
  const forgotPassword = await http.post(API_ENDPOINT.FORGOT_PASSWORD, input);
  return forgotPassword;
};