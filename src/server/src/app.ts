import configureMiddleware from './config/app.config.js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
configureMiddleware(app);
export default app;
