import authRoutes from '../routes/auth.route.js';
import cookieParser from 'cookie-parser';
import { errorHandler } from '../middleware/error.middleware.js';
import express from 'express';
import userRoutes from '../routes/user.route.js';

export default (app) => {
    app.set('port', process.env.PORT || 3000);
    app.use(express.json());
    app.use(cookieParser());
    app.use('/api/user', userRoutes);
    app.use('/api/auth', authRoutes);
    app.use(errorHandler);
};
