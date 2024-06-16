export default async (req, res, next) => {
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
