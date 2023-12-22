import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const postPayments = async (input) => {
  const createPayments = await http.post(API_ENDPOINT.PAYMENTS, input);
  return createPayments;
};