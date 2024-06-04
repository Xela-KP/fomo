import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { createError } from '../utils/error.util.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, password, email } = req.body;
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
    const { username, password } = req.body;
    if (!username || !password || username === '' || password === '')
        return next(createError(400, 'All fields are required.'));
    try {
        const invalidCredentialError = createError(404, 'Invalid Credential');
        const user = await User.findOne({ username });
        if (!user) return next(invalidCredentialError);
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) return next(invalidCredentialError);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200)
            .cookie('access token', token, { httpOnly: true })
            .json({ message: 'Login Successful' });
    } catch (error) {
        return next(error);
    }
};
