import { Request, RequestHandler, Response } from 'express';

import UserModel from '../../models/user.model.js';
import bcrypt from 'bcrypt';

const createUser: RequestHandler = async (req: Request, res: Response) => {
    const { username, email, password, pfp } = req.body;
    await new UserModel({
        username,
        password: bcrypt.hashSync(password, 10),
        email,
        pfp,
    }).save();
    return res.status(201).send({
        success: true,
        message: 'Successfully Created new User',
    });
};

export default createUser;
