import { http } from "./httpService";
import { jwtInterceptor, obtainUser } from "./userService";
import config from "../config.json";

const userId = obtainUser()?.id;

export const getMyShoppingBagsService = async () => {
  jwtInterceptor();
  const apiEndpoint = `${config.apiEndpointV1}/shopping_bag/user_shopping_bags/${userId}`;
  const response = await http.get(apiEndpoint);
  return response.data;
};

export const getMyShoppingBagByIdService = async (shoppingBagId) => {
  jwtInterceptor();
  const apiEndpoint = `${config.apiEndpointV1}/shopping_bag/${shoppingBagId}`;
  const response = await http.get(apiEndpoint);
  return response.data;
};

export const getMyShoppingBagProductsService = async (shoppingBagId) => {
  jwtInterceptor();
  const apiEndpoint = `${config.apiEndpointV1}/shopping_bag_product/${shoppingBagId}`;
  const response = await http.get(apiEndpoint);
  return response.data;
};

export const getMyTrashedShoppingBagService = async () => {
  jwtInterceptor();
  const apiEndpoint = `${config.apiEndpointV1}/shopping_bag/user_trashed_bags/${userId}`;
  const response = await http.get(apiEndpoint);
  return response.data;
};
