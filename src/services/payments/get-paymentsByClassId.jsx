import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getPaymentsByClassId = async (id) => {
  const paymentsByClassID = await http.get(`${API_ENDPOINT.PAYMENTS}/${id}`);
  return paymentsByClassID;
};