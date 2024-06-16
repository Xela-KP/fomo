import User from '../../models/user.model.js';

export default async (
    req,
    res,
    next,
    { username, email, password, profilePicture = '' }
) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({
        username,
        password: hashedPassword,
        email,
        profilePicture,
    });
    try {
        await user.save();
        return res.status(201).send(req.body);
    } catch (error) {
        return next(error);
    }
};
