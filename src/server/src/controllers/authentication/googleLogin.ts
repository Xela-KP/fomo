// import { NextFunction } from 'express';
// import User from '@shared/models/User.js';
// import createUser from '../user/create.js';

import { RequestHandler } from 'express';
import UserModel from '../../models/user.model.js';
import bcrypt from 'bcrypt';

const googleLogin: RequestHandler<
    {},
    {},
    {
        googleUsername: string;
        email: string;
        pfp: string;
    }
> = async (req) => {
    const { googleUsername, email, pfp } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        const username = googleUsername.toLocaleLowerCase().split(' ').join('');
        const password = bcrypt.hashSync(
            `${
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8)
            }`,
            10
        );
        const body = { username, email, password, pfp };
        return await fetch('/api/auth/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }
    const validUser = await UserModel.findOne({ email });
    return await fetch('/api/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validUser),
    });
};

export default googleLogin;

// export default async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { username, email, photoUrl } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             const generatedPassword =
//                 Math.random().toString(36).slice(-8) +
//                 Math.random().toString(36).slice(-8);
//             bcrypt.hashSync(generatedPassword, 10);
//             const userProperties = {
//                 username: username.toLowerCase().split(' ').join(''),
//                 email,
//                 password: generatedPassword,
//                 photoUrl,
//             };
//             await createUser(req, res, next, userProperties);
//         }
//         const validUser = await User.findOne({ email });
//         const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//         const { password, ...rest } = validUser._doc;
//         res.status(201)
//             .cookie('access_token', token, { httpOnly: true })
//             .send(rest);
//     } catch (error) {
//         return next(error);
//     }
// };
