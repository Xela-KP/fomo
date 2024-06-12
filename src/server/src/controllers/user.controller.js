import User from '../models/user.model.js';
import { createError } from '../utils/error.util.js';

export const deleteUser = async (req, res, next) => {
    console.log(req.user.id, req.params.id);
    if (req.user.id !== req.params.id)
        return next(createError(403, 'Unauthorized action'));
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
};

export const getUser = async (req, res, next) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) next(createError(404, 'User not found'));
        const userObject = { ...user._doc, password: undefined };
        res.status(201).send(userObject);
    } catch (error) {
        next(error);
    }
};
