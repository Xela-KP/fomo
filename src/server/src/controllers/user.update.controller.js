import User from '../models/user.model.js';
import { createError } from '../utils/error.util.js';

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
