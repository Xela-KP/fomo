import User from '../../models/user.model.js';
import createUser from '../user/create.js';

export default async (req, res, next) => {
    try {
        const { username, email, photoUrl } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            const generatedPassword =
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8);
            bcrypt.hashSync(generatedPassword, 10);
            const userProperties = {
                username: username.toLowerCase().split(' ').join(''),
                email,
                password: generatedPassword,
                photoUrl,
            };
            await createUser(req, res, next, userProperties);
        }
        const validUser = await User.findOne({ email });
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password, ...rest } = validUser._doc;
        res.status(201)
            .cookie('access_token', token, { httpOnly: true })
            .send(rest);
    } catch (error) {
        return next(error);
    }
};
