import { RequestHandler } from 'express';
import createUser from '../../controllers/user/create.js';

const signup: RequestHandler = (req, res, next) => {
    return createUser(req, res, next);
};

export default signup;
