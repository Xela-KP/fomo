export default async (req, res, next) => {
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
