import http from '../../utils/http'
import { API_ENDPOINT } from '../../utils/api-endpoint'

export const login = async (input) => {
    const loginUser = await http.post(API_ENDPOINT.LOGIN_USER, input);
  return loginUser;
}
