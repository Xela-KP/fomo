import express, { Express } from 'express';

import authRouter from '..//routes/auth.router.js';
import cookieParser from 'cookie-parser';
// import { errorHandler } from 'middleware/error.middleware';
import userRouter from '../routes/user.router.js';

export default (app: Express) => {
    app.set('port', process.env['PORT'] || 3000);
    app.use(express.json());
    app.use(cookieParser());
    app.use('/api', userRouter);
    app.use('/api', authRouter);
};
