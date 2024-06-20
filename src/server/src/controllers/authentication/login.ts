import { LoginForm } from '../../../../shared/forms/auth/index.js';
import { RequestHandler } from 'express';
import UserModel from '../../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login: RequestHandler<{}, {}, LoginForm> = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) throw new Error('Incomplete Login Form');

    const user = await UserModel.findOne({ email }).lean();
    if (!user) throw new Error('User Not Found');

    const secret = process.env['JWT_SECRET'];
    if (!secret)
        throw new Error('Internal Server Error: JWT Secret is not defined');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) throw new Error('Invalid Credentials');

    const token = jwt.sign({ id: user._id }, secret);
    return res
        .status(200)
        .cookie('access_token', token, { httpOnly: true })
        .send({
            success: true,
            message: 'successfully logged in',
            user: { ...user, password: undefined },
        });
};

export default login;
