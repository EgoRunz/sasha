import { NextFunction, Request, Response } from 'express';

import { StreamsService, streamsService } from '../service/streamsService';
import { createBoardSchema } from '../yupSchema/createBoardSchema';
import { idSchema } from '../yupSchema/idSchema';
import { validate } from '../yupSchema/validate';

class StreamsController {
  constructor(private readonly streamsService: StreamsService) {}

  getStreams = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const streams = await this.streamsService.getList();
      res.status(200).json(streams);
    } catch (error) {
      next(error);
    }
  };

  getStreamByid = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = await validate(idSchema, req.params);
    try {
      const stream = await this.streamsService.getStreamById(id);
      res.status(200).json(stream);
    } catch (error) {
      next(error);
    }
  };

  createStreamBoard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // сделать StreamId вместо id
      // сделать StreamId вместо id
      const { id } = await validate(idSchema, req.params);

      const newBoard = await validate(createBoardSchema, req.body);

      const board = await this.streamsService.createBoardByStreamId(
        id,
        newBoard
      );
      res.status(200).json(board);
    } catch (error) {
      next(error);
    }
  };

  getStreamBoards = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = await validate(idSchema, req.params);
      const boards = await this.streamsService.getBoardsByStreamId(id);

      res.status(200).json(boards);
    } catch (error) {
      next(error);
    }
  };
}

export const streamsController = new StreamsController(streamsService);
