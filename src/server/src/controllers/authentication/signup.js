import createUser from '../user/create.js';

export default async (req, res, next) => {
    const { username, email, password } = req.body;
    if (
        !username ||
        !password ||
        !email ||
        username === '' ||
        password === '' ||
        email === ''
    )
        return next(createError(400, 'All fields are required.'));
    return createUser(req, res, next, { username, email, password });
};
