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

export const putBio = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id)
            return next(createError(401, 'Unauthorized'));
        const { id: userId } = req.user;
        const { bio: newBio } = req.body;
        await User.findByIdAndUpdate(userId, { bio: newBio });
        res.status(200).send({ message: 'bio updated successfully' });
    } catch (error) {
        next(error);
    }
};

export const putAbout = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id)
            return next(createError(401, 'Unauthorized'));
        const { id } = req.user;
        const { about: newAbout } = req.body;
        await User.findByIdAndUpdate(id, { about: newAbout });
        res.status(200).send({ message: 'about updated successfully' });
    } catch (error) {
        next(error);
    }
};

export const patchLinks = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id)
            return next(createError(401, 'Unauthorized'));
        const { id } = req.user;
        const { remove, link } = req.body;
        remove
            ? await User.findByIdAndUpdate(id, { $pull: { links: link } })
            : await User.findByIdAndUpdate(id, { $push: { links: link } });
        res.status(200).send({ message: 'links updated successfully' });
    } catch (error) {
        next(error);
    }
};

export const putProfilePicture = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id)
            return next(createError(401, 'Unauthorized'));
        const { id } = req.user;
        const { newImageUrl } = req.body;
        if (!newImageUrl) throw new Error('No image url provided');
        await User.findByIdAndUpdate(id, { profilePicture: newImageUrl });
        res.status(200).send({ message: 'pfp updated successfully' });
    } catch (error) {
        next(error);
    }
};
