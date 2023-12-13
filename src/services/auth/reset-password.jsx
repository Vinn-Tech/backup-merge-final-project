import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import http from "../../utils/http";

export const postReset = async (input) => {
  const resetPasswordUser = await http.post(`${API_ENDPOINT.RESET_PASSWORD}?token=${CookieStorage.get(CookieKeys.ForgotPasswordToken)}`, input);
  return resetPasswordUser;
};
