import { Router } from 'express';
import { authController } from '../controllers/authController';

export const router = Router();

router.post('/login', authController.login);

router.post('/registration', authController.registration);
router.get('/current', authController.current);
