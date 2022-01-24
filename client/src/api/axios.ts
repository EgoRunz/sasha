import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../helpers/localStorageHelper/localStorageStreamUsers";
import { config as cfg } from "./config";

const storageName = "fellowTokens";

export const instance = axios.create();

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken(storageName);
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }
  config.url = `${cfg.api_url}${config.url ?? ""}`;
  return config;
});
