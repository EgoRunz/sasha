import { NextFunction, Request, Response } from 'express';
import { authService, AuthService } from '../service/authService';
import { loginSchema } from '../yupSchema/loginSchema';
import { validate } from '../yupSchema/validate';

class AuthController {
  constructor(private readonly authService: AuthService) {}

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = await validate(loginSchema, req.body);
      const token = await this.authService.login(email, password);
      res.status(200).json({
        token
      });
    } catch (error) {
      if (error && error.errors && error.errors.length > 0) {
        res
          .status(400)
          .json({ message: 'Неправильные данные', errors: error.errors });
        return;
      }

      res.status(401).json({ message: error.message });
    }
  };
  current = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.authService.current(req, res);
      return response;
    } catch (e) {
      next(e);
    }
  };

  registration = async (req: Request, res: Response, next: NextFunction) => {
    try {
      this.authService.registration(req, res);
    } catch (e) {
      next(e);
    }
  };
}

export const authController = new AuthController(authService);
