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

export const putAbout = async (req, res) => {
    try {
        const { id: userId } = req.params;
        const { about: newAbout } = req.body;
        await User.findByIdAndUpdate(userId, { about: newAbout });
        res.status(200).send({ message: 'about updated successfully' });
    } catch (error) {
        createError(400, error.message);
    }
};

export const patchLinks = async (req, res) => {
    try {
        const { id } = req.params;
        const { remove, link } = req.body;
        remove
            ? await User.findByIdAndUpdate(id, { $pull: { links: link } })
            : await User.findByIdAndUpdate(id, { $push: { links: link } });
        res.status(200).send({ message: 'links updated successfully' });
    } catch (error) {
        createError(400, error.message);
    }
};
