import {
    GoogleLoginForm,
    SignupForm,
} from '../../../../shared/forms/auth/index.js';

import { RequestHandler } from 'express';
import UserModel from '../../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const googleLogin: RequestHandler<{}, {}, GoogleLoginForm> = async (
    req,
    res
) => {
    const { googleUsername, email, pfp } = req.body;
    const user = await UserModel.findOne({ email });
    const port = process.env['PORT']?.toString() as string;
    const secret = process.env['JWT_SECRET'] as string;

    if (!user) {
        const username = googleUsername.toLocaleLowerCase().split(' ').join('');
        const password = bcrypt.hashSync(
            `${
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8)
            }`,
            10
        );
        const body: SignupForm = { username, email, password, pfp };
        const response = await fetch(`http://localhost:${port}/api/signup`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok)
            throw new Error(
                'Internal Server Error: Failed to create account with google'
            );
    }

    const validUser = await UserModel.findOne({ email }).lean();
    if (!validUser) throw new Error('Internal Server Error: failed to log in');
    const token = jwt.sign({ id: validUser._id }, secret);
    return res
        .status(200)
        .cookie('access_token', token, { httpOnly: true })
        .send({
            success: true,
            message: 'successfully logged in via google',
            user: { ...validUser, password: undefined },
        });
};

export default googleLogin;
