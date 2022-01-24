import { AxiosResponse } from "axios";
import { instance } from "../axios";
interface getBoardsByStreamIdPayload {
  id: string;
}

// добавить описание типа для респонса

export const getBoardsByStreamId = (
  payload: getBoardsByStreamIdPayload
): Promise<AxiosResponse> => {
  return instance.get(`/streams/${payload.id}/boards`);
};
