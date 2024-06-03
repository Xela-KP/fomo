import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { createError } from '../utils/error.util.js';

export const signup = async (req, res, next) => {
    const { username, password, email } = req.body;
    if (
        !username ||
        !password ||
        !email ||
        username === '' ||
        password === '' ||
        email === ''
    ) {
        return next(createError(400, 'All fields are required.'));
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({ username, password: hashedPassword, email });
    try {
        await user.save();
        return res.status(201).send('Signup Successful');
    } catch (error) {
        return next(error);
    }
};
