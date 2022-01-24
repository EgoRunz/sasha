import { Repository, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Customer } from '../entity/Customer';
import { loginSchema } from '../yupSchema/loginSchema';
import { registrationSchema } from '../yupSchema/registrationSchema';
import bcrypt from 'bcrypt';
// import { checkJwt } from '../middleware/checkJwt';
import * as jwt from 'jsonwebtoken';
import { validate } from '../yupSchema/validate';

export class AuthService {
  private _userRepo: Repository<Customer>;
  private _SECRET_KEY: string;
  private _saltRounds: number;
  constructor() {
    this._userRepo = getRepository(Customer);
    this._saltRounds = 10;
    this._SECRET_KEY = process.env.SECRET_KEY || '';
  }
  salt(): string {
    return bcrypt.genSaltSync(this._saltRounds);
  }
  findOneOrFail(email: string): Promise<Customer> {
    return this._userRepo.findOneOrFail({ email });
  }
  hash(password: string): string {
    return bcrypt.hashSync(password, this.salt());
  }
  checkPasswordIsValid(password: string, unencryptedPassword: string): boolean {
    return bcrypt.compareSync(password, unencryptedPassword);
  }

  check(email: string): Promise<boolean> {
    return this._userRepo.findOne({ email }).then(Boolean);
  }

  save(email: string, password: string): Promise<Customer> {
    return this._userRepo.save({ email, password });
  }

  // входящие параметры только email, password schema yup
  async registration(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = await validate(registrationSchema, req.body);
      const candidate = await this.check(email);
      if (candidate) {
        res.status(401).json({ message: 'такой пользователь уже есть' });
        return;
      }
      const hashPass = this.hash(password);
      this.save(email, hashPass);
      res.status(201).json({ message: 'user created' });
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string): Promise<string> {
    const customer = await this.findOneOrFail(email);

    const checkPass = this.checkPasswordIsValid(password, customer.password);

    if (checkPass) {
      return jwt.sign(
        {
          email: customer.email
        },
        this._SECRET_KEY,
        { expiresIn: '1h' }
      );
    } else {
      throw new Error('invalid password');
    }
  }

  async current(req: Request, res: Response): Promise<void> {
    try {
      if (req.token) {
        const user = await this.findOneOrFail(req.token.email);
        res.status(200).json({
          user
        });
      } else {
        res.status(200).json({
          user: null
        });
      }
    } catch (error) {
      res.status(200).json({
        user: null
      });
    }
  }
}

export const authService = new AuthService();
