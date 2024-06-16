import User from '../../models/user.model.js';

export default async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '')
        return next(createError(400, 'All fields are required.'));
    try {
        const invalidCredentialError = createError(404, 'Invalid Credential');
        const user = await User.findOne({ email });
        if (!user) return next(invalidCredentialError);
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) return next(invalidCredentialError);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const userObject = { ...user._doc, password: undefined };
        res.status(200)
            .cookie('access_token', token, { httpOnly: true })
            .json(userObject);
    } catch (error) {
        return next(error);
    }
};
