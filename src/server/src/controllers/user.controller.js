import User from '../models/user.model.js';
import { createError } from '../utils/error.util.js';

export const root = (req, res) => {
    return res.json({ message: 'users api' });
};
export const test = (req, res) => {
    return res.json({ message: 'API is working!' });
};
export const user = (req, res) => {};

export const putBio = async (req, res) => {
    try {
        const { id: userId } = req.params;
        const { bio: newBio } = req.body;
        await User.findByIdAndUpdate(userId, { bio: newBio });
        res.status(200).send({ message: 'bio updated successfully' });
    } catch (error) {
        createError(400, error.message);
    }
};

export const putAbout = (req, res) => {};

export const patchLinks = (req, res) => {};
