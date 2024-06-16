export default async (req, res, next) => {
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
