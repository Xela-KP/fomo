import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const verifyUser: RequestHandler<
    { id: string },
    {},
    { id: string; user?: string }
> = (req, _res, next) => {
    const id = req.body.id;
    const token = req.cookies['access_token'];
    const secret = process.env['JWT_SECRET'];

    if (id !== req.params['id'] || !token)
        throw new Error('Unauthorized Request');

    if (!secret)
        throw new Error('Internal Server Error: JWT Secret is Undefined');

    jwt.verify(token, secret, (user: any) => {
        req.body.user = user;
        next();
    });
};

export default verifyUser;
