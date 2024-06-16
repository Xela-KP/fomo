import express, { Express } from 'express';

import configureMiddleware from './config/app.js';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
configureMiddleware(app);
export default app;
