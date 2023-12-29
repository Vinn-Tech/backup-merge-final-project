import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const getAllPayment = async () => {
  const allPayment = await http.get(API_ENDPOINT.ALL_PAYMENT);
  console.log(allPayment, "dari getAllusers");
  return allPayment;
};
