import { AxiosResponse } from "axios";
import { instance } from "../axios";

interface StreamsResponse {
  id: number;
}
export const streams = (): Promise<AxiosResponse<StreamsResponse[]>> => {
  return instance.get("/streams");
};
