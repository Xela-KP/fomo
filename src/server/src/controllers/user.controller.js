export const root = (req, res) => {
    return res.json({ message: 'users api' });
};
export const test = (req, res) => {
    return res.json({ message: 'API is working!' });
};
export const user = (req, res) => {};
