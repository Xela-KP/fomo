import { RequestHandler } from 'express';
import createUser from '../../controllers/user/create.js';

const signup: RequestHandler<
    {},
    {},
    { username: string; email: string; password: string; pfp: string }
> = (req, res, next) => {
    return createUser(req, res, next);
};

export default signup;
