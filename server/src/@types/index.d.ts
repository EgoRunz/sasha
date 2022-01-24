import type { Token } from '../types/Token';

declare global {
  namespace Express {
    interface Request {
      token?: Token;
    }
  }
}
