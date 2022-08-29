import jwtDecode from "jwt-decode";

import { http } from "./httpService";
import config from "../config.json";

const tokenKey = "shopToken";

export function jwtInterceptor() {
  http.interceptors.request.use((request) => {
    // add auth header with jwt if account is logged in and request is to the api url
    request.headers.common.Authorization = `Bearer ${obtainUserToken()}`;
    return request;
  });
}

export const registerUser = (username, password) => {
  const apiEndpoint = config.apiEndpointV1 + "/user/register";
  return http.post(apiEndpoint, {
    username: username,
    password: password,
  });
};

export const loginUser = async (username, password) => {
  const apiEndpoint = config.apiEndpointV1 + "/login";
  const response = await http.post(apiEndpoint, {
    username,
    password,
  });
  storeToken(response.headers["authorization"].substring(6)); // Remove "Bearer "
};

export const lastUserRegistration = (user) => {
  const apiEndpoint = config.apiEndpointV1 + "/user/register";
  return http.patch(apiEndpoint, {
    ...user,
  });
};

export const logoutUser = () => {
  localStorage.removeItem(tokenKey);
};

export const obtainUser = () => {
  try {
    const jwtObject = jwtDecode(obtainToken());
    return jwtObject;
  } catch (error) {
    return null;
  }
};

export const obtainUserToken = () => {
  return obtainToken().trim();
};

const obtainToken = () => {
  return localStorage.getItem(tokenKey);
};

const storeToken = (token) => {
  localStorage.setItem(tokenKey, token);
};
