import { instance } from "../axios";
interface LoginPayload {
  email: string;
  password: string;
}

export const login = (payload: LoginPayload) => {
  return instance.post("/auth/login", payload);
};
