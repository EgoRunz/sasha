import dotenv from 'dotenv';
dotenv.config();
import * as jwt from 'jsonwebtoken';
import { Response, NextFunction, RequestHandler, Request } from 'express';
import { isToken } from '../types/Token';

const SECRET_KEY = process.env.SECRET_KEY || '';

export const checkTokenMiddleWare: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token =
    req.headers['x-access-token'] || req.headers['authorization'] || '';
  if (typeof token !== 'string') {
    next();
    return;
  }
  if (token.startsWith('Bearer ')) {
    token = token?.slice(7, token.length);
  }
  if (!token) {
    next();
    return;
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      next(err);
    } else {
      if (isToken(decoded)) {
        req.token = decoded;
        next();
      } else {
        next(new Error('empty decoded token'));
      }
    }
  });
};
