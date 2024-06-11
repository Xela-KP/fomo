import { createError } from '../utils/error.util.js';
import User from '../models/user.model.js';

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
