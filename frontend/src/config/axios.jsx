import axios from "axios";
import {
  AUTHORIZATION,
  BEARER,
  DOMAIN,
  LOGIN,
  TOKEN,
} from "../constant/APIConstant";

const instance = axios.create({
  baseURL: DOMAIN,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      config.headers[AUTHORIZATION] = BEARER + token;
    }
    return config;
  },
  (error) => {
    console.log("JWT expired");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(TOKEN);
      window.location.href = LOGIN;
    }
    return Promise.reject(error);
  }
);

export default instance;
