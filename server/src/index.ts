import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
// import { router as authRouter } from './routes/authRouter';
import { createConnection } from 'typeorm';

const PORT = process.env.PORT;
const app: express.Application = express();
app.use(express.json());
app.use(cors());

(async function startApp() {
  try {
    await createConnection();
    const { init } = await import('./routes');
    init(app);
    app.listen(PORT, () => console.log(`server up on ${PORT}`));
  } catch (error) {
    console.log(error && error.message);
  }
})();
