/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/config/modules/student/student.route';
import { UserRoute } from './app/config/modules/user/user.route';
import globalErrorHandler from './app/config/middlwares/globalErrorhandler';
import notFound from './app/config/middlwares/notFound';
import router from './app/routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  Promise.reject();

  const a = 10;
  res.send(a);
};

app.get('/', test);

app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
