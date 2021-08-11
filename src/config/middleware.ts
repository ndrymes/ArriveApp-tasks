// eslint-disable-next-line import/no-unresolved
import * as express from 'express';

import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express.Router();

app.use(cors());
app.use(helmet());
//app.use(morganLogger('combined', { stream: appLogger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

export default app;
