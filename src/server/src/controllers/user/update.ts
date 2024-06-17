import { RequestHandler } from 'express';
import UserModel from '../../models/user.model.js';

const updateUser: RequestHandler<
    {},
    {},
    {
        id: string;
        options: { about?: string; bio?: string; links?: string; pfp?: string };
    }
> = async (req, res) => {
    const { id, options } = req.body;
    // const { about, bio, links, pfp } = options;

    console.log(req.body);
    await UserModel.findByIdAndUpdate(id, { $set: options });
    return res.status(200).send({
        success: true,
        message: `successfully updated options: ${options}`,
    });
};

export default updateUser;
