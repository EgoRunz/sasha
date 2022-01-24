import { Router } from 'express';
import { userController } from '../controllers/userController';
export const router = Router();

router.get('/all', userController.getAll);

// router.get('/users/:id([0-9]+)', userController.getById);

// router.post('/users/', userController.add);

// router.delete('/users/:id([0-9]+)', userController.delete);
