import jwt from 'jsonwebtoken';
import { createError } from './error.util.js';

export const verifyUser = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return createError(401, 'Unauthorized');
    const verifyOptions = (err, user) => {
        if (err) return createError(401, 'Unauthorized');
        req.user = user;
        return next();
    };
    jwt.verify(token, process.env.JWT_SECRET, verifyOptions);
};
