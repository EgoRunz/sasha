import { instance } from "../axios";
interface RegistrationPayload {
  email: string;
  password: string;
}

export const registration = (payload: RegistrationPayload) => {
  return instance.post("/auth/registration", payload);
};
             