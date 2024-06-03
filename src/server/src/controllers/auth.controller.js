import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
export const signup = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        if (
            !username ||
            !password ||
            !email ||
            username === '' ||
            password === '' ||
            email === ''
        )
            return res.status(400).json({ msg: 'All Fields are Required' });

        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({ username, password: hashedPassword, email });
        await user.save();
        res.status(201).send({
            message: 'Successfully Created User',
            user: user,
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
export const login = (req, res) => {};
