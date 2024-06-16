import User from '../../models/user.model.js';

export default async (req, res, next) => {
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
