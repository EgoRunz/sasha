import { getRepository, Repository } from 'typeorm';
import { Board } from '../entity/Board';
import { Stream } from '../entity/Stream';

// type All = Array<Customer>;

export class StreamsService {
  private _streamRepo: Repository<Stream>;
  private _boardRepo: Repository<Board>;
  constructor() {
    this._streamRepo = getRepository(Stream);
    this._boardRepo = getRepository(Board);
  }
  async getList(): Promise<Stream[]> {
    return this._streamRepo.find();
  }

  // id => number
  async getStreamById(id: number): Promise<Stream | undefined> {
    return await this._streamRepo.findOne(id);
  }
  // исправить id => number
  async getBoardsByStreamId(id: number): Promise<Board[]> {
    return await this._boardRepo.find({
      where: { stream: id }
    });
  }

  async createBoardByStreamId(
    streamId: number,
    payload: { content?: string }
  ): Promise<Board> {
    const stream = await this._streamRepo.findOneOrFail({
      id: streamId
    });
    return this._boardRepo.save({
      ...payload,
      stream
    });
  }
}
export const streamsService = new StreamsService();
