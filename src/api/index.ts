import axios, { InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  headers: {
    "Content-Type": "application/json",
  },
});

const keyInterceptor = (config: InternalAxiosRequestConfig) => {
  return {
    ...config,
    params: {
      ...config.params,
      appid: "648df346cf000f8c40b6499e5eff284e",
    },
  };
};

api.interceptors.request.use(keyInterceptor);
