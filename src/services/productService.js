import { http } from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiEndpointV1 + "/products";

export const getProductsService = async () => {
  const response = await http.get(apiEndpoint);
  return response.data;
};
