import { RequestHandler } from 'express';
import UserModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const verifyUser: RequestHandler<
    { id: string },
    {},
    { id: string; user?: string }
> = async (req, _res, next) => {
    const id = req.body.id;
    const token = req.cookies['access_token'];
    const secret = process.env['JWT_SECRET'];
    const user = await UserModel.findById(id);

    if (!user) throw new Error('User Not Found');

    if (id !== req.params['id'] || !token)
        throw new Error('Unauthorized Request');

    if (!secret)
        throw new Error('Internal Server Error: JWT Secret is Undefined');

    jwt.verify(token, secret, (user: any) => {
        req.body.user = user;
        return next();
    });
};

export default verifyUser;
