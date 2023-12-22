import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getAllClass = async ({ limit, page, search }) => {
  const params = {
    limit,
    page,
    search,
  };

  const allClasses = await http.get(API_ENDPOINT.CLASSES, { params });
  return allClasses;
};
