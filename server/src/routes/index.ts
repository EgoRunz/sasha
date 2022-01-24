import express from 'express';
import { router as authRouter } from './auth';
// import { router as userRouter } from './user';
import { router as streamsRouter } from './streams';

import { checkTokenMiddleWare } from '../middleware/checkTokenMiddleWare';
import { errorResponseMiddleWare } from '../middleware/errorResponseMiddleWare';

export const init = (app: express.Application): void => {
  app.use(checkTokenMiddleWare);
  app.use('/auth', authRouter);

  app.use('/streams', streamsRouter);
  app.use(errorResponseMiddleWare);
};
