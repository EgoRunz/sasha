import { Request, Response, NextFunction } from 'express';
export const errorResponseMiddleWare = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(err, 'errorResponseMiddleWare');
  res.status(500).json({ message: err.message });
};
