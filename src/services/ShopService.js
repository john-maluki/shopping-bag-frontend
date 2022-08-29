import { http } from "./httpService";
import config from "../config.json";

export const getShopsService = async () => {
  const apiEndpoint = `${config.apiEndpointV1}/shops`;
  const response = await http.get(apiEndpoint);
  return response.data;
};

export const getShopDetailService = async (shopId) => {
  const apiEndpoint = `${config.apiEndpointV1}/shops/${shopId}`;
  const response = await http.get(apiEndpoint);
  return response.data;
};

export const getShopProductsService = async (shopId) => {
  const apiEndpoint = `${config.apiEndpointV1}/shop_products/${shopId}`;
  const response = await http.get(apiEndpoint);
  return response.data;
};
