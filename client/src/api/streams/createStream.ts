import { AxiosResponse } from "axios";
import { instance } from "../axios";

interface CreateStreamRes {
  id: number;
}

export const createStream = (payload: {
  name: string;
}): Promise<AxiosResponse<CreateStreamRes>> => {
  return instance.post("/streams", payload);
};
