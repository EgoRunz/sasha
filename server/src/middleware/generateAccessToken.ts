import * as jwt from 'jsonwebtoken';
import { Payload, Signature } from '../types/Token';

export const generateAccessToken = (
  payload: Payload,
  key: string,
  signature?: Signature
): string => {
  const token: string = jwt.sign(payload, key, signature);
  return token;
};
