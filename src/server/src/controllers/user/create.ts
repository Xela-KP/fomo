import { Request, RequestHandler, Response } from 'express';

import UserModel from '../../models/user.model.js';
import bcrypt from 'bcrypt';

const createUser: RequestHandler<
    {},
    {},
    { username: string; email: string; password: string; pfp?: string }
> = async (req: Request, res: Response) => {
    const { password } = req.body;
    const body = {
        ...req.body,
        password: bcrypt.hashSync(password, 10),
    };
    await new UserModel(body).save();
    return res.status(201).send({
        success: true,
        message: 'Successfully Created new User',
    });
};

export default createUser;
