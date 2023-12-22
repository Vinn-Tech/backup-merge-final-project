import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getAllClass = async (input) => {

  const allClasses = await http.get(API_ENDPOINT.CLASSES, input);
  return allClasses;
};
