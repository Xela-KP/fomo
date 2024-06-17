import { RequestHandler } from 'express';
import UserModel from '../../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login: RequestHandler<
    {},
    {},
    { email: string; password: string }
> = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const secret = process.env['JWT_SECRET'];
    if (!secret)
        throw new Error('Internal Server Error: JWT Secret is not defined');
    if (!user) throw new Error('User Not Found');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) throw new Error('Invalid Credentials');

    const token = jwt.sign({ id: user._id }, secret);
    return res
        .status(200)
        .cookie('access_token', token, { httpOnly: true })
        .send({ success: true, message: 'successfully logged in' });
};

export default login;
