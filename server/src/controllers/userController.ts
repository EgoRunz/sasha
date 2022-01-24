// import { NextFunction, Request, Response } from 'express';
import { NextFunction, Request, Response } from 'express';
import { userService, UserService } from '../service/userService';

class UserController {
  constructor(private readonly authService: UserService) {}
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      return await userService.all(req, res);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export const userController = new UserController(userService);
