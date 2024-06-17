import { RequestHandler } from 'express';
import User from '../../models/user.model.js';

const readUser: RequestHandler<{ username: string }> = async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username }).lean();
    if (!user) throw new Error('User Not Found');
    return res.status(201).send({ ...user, password: undefined });
};

export default readUser;
