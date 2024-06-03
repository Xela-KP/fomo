import User from '../models/user.model.js';

export const signup = (req, res) => {
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
        const user = new User({ username, password, email });
        user.save();
        res.status(201).send({
            message: 'Successfully Created User',
            user: user,
        });
    } catch (err) {
        console.error(err);
    }
};
export const login = (req, res) => {};
