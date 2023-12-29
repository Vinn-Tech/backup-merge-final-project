import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const getUserById = async (authToken) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const { data } = await http.get(API_ENDPOINT.GET_ME, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export { getUserById };

// export const getUserById = async (id) => {
//   const getUser = await http.get(`${API_ENDPOINT.GET_USER}${id}`);
//   return getUser;
// };
