import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import http from "../../utils/http";

export const postUbahPassword = async (input) => {
  const resetPasswordUser = await http.post(
    `${API_ENDPOINT.RESET_PASSWORD}?token=${CookieStorage.get(
      CookieKeys.AuthToken
    )}`,
    input
  );
  return resetPasswordUser;
};
