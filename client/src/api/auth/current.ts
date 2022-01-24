import { instance } from "../axios";

export const current = () => {
  return instance.get("/auth/current");
};
