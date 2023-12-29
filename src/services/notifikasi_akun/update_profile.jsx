import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import httpForm from "../../utils/httpForm";

export const putUpdateProfile = async (input) => {
  const updateProfile = await httpForm.put(
    `${API_ENDPOINT.UPDATE_PROFILE}?token=${CookieStorage.get(
      CookieKeys.AuthToken
    )}`,
    input
  );
  return updateProfile;
};
