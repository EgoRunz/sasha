import { AxiosResponse } from "axios";
import { instance } from "../axios";

type getStreamByIdPayload = string;

export const getStreamById = (
  id: getStreamByIdPayload
): Promise<AxiosResponse> => {
  return instance.get(`/streams/${id}`);
};
