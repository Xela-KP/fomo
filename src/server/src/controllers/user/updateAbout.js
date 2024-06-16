export default async (req, res, next) => {
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
