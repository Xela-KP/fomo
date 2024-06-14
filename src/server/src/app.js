import configureMiddleware from './config/app.js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = new express();
configureMiddleware(app);
export default app;
