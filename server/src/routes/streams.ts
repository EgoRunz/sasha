import { Router } from 'express';
import { streamsController } from '../controllers/streamsController';

export const router = Router();

router.get('/', streamsController.getStreams);

router.get('/:id', streamsController.getStreamByid);

router.get('/:id/boards', streamsController.getStreamBoards);

router.post('/:id/boards', streamsController.createStreamBoard);
