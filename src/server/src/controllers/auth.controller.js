import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { createError } from '../utils/error.util.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (
        !username ||
        !password ||
        !email ||
        username === '' ||
        password === '' ||
        email === ''
    )
        return next(createError(400, 'All fields are required.'));
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({ username, password: hashedPassword, email });
    try {
        await user.save();
        return res.status(201).send(req.body);
    } catch (error) {
        return next(error);
    }
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '')
        return next(createError(400, 'All fields are required.'));
    try {
        const invalidCredentialError = createError(404, 'Invalid Credential');
        const user = await User.findOne({ email });
        if (!user) return next(invalidCredentialError);
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) return next(invalidCredentialError);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password: pwd, ...rest } = user._doc;
        res.status(200)
            .cookie('access_token', token, { httpOnly: true })
            .json(rest);
    } catch (error) {
        return next(error);
    }
};

export const googleLogin = async (req, res, next) => {
    try {
        const { username, email, photoUrl } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            const generatedPassword =
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8);
            bcrypt.hashSync(generatedPassword, 10);
            const userProperties = {
                username: username.toLowerCase().split(' ').join(''),
                email,
                password: generatedPassword,
                profilePicture: photoUrl,
            };
            await new User(userProperties).save();
        }
        const validUser = await User.findOne({ email });
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password, ...rest } = validUser._doc;
        res.status(201)
            .cookie('access_token', token, { httpOnly: true })
            .send(rest);
    } catch (error) {
        return next(error);
    }
};
