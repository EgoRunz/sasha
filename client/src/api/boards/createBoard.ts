import { AxiosResponse } from "axios";
import { instance } from "../axios";

interface Data {
  id: string;
}

export const createBoard = (data: Data): Promise<AxiosResponse> => {
  return instance.post("/boards", data);
};
